'use client';

import { PostData, PostMonth } from '@/lib/posts-data';

interface CalendarViewProps {
  posts: PostData[];
  selectedMonth: PostMonth | 'all';
  onPostClick: (post: PostData) => void;
}

const monthNames: Record<PostMonth, { name: string; year: number; days: number }> = {
  dezembro: { name: 'Dezembro', year: 2025, days: 31 },
  janeiro: { name: 'Janeiro', year: 2026, days: 31 },
  fevereiro: { name: 'Fevereiro', year: 2026, days: 28 },
  marco: { name: 'Marco', year: 2026, days: 31 },
};

const typeColors: Record<string, string> = {
  story: 'bg-purple-500',
  carousel: 'bg-blue-500',
  reels: 'bg-pink-500',
  static: 'bg-green-500',
};

const typeEmojis: Record<string, string> = {
  story: '',
  carousel: '',
  reels: '',
  static: '',
};

function getPostsForDay(posts: PostData[], day: number, month: PostMonth): PostData[] {
  return posts.filter((post) => {
    if (post.month !== month) return false;
    const [postDay] = post.date.split('/').map(Number);
    return postDay === day;
  });
}

function CalendarMonth({
  month,
  posts,
  onPostClick,
}: {
  month: PostMonth;
  posts: PostData[];
  onPostClick: (post: PostData) => void;
}) {
  const monthInfo = monthNames[month];
  const days = Array.from({ length: monthInfo.days }, (_, i) => i + 1);

  // Get the first day of the month (0 = Sunday, 1 = Monday, etc.)
  const firstDayDate = new Date(monthInfo.year, ['dezembro', 'janeiro', 'fevereiro', 'marco'].indexOf(month) === 0 ? 11 : ['dezembro', 'janeiro', 'fevereiro', 'marco'].indexOf(month) + 0, 1);
  const firstDayOfWeek = firstDayDate.getDay();

  // Pad the beginning with empty cells
  const paddedDays = [...Array(firstDayOfWeek).fill(null), ...days];

  // Split into weeks
  const weeks: (number | null)[][] = [];
  for (let i = 0; i < paddedDays.length; i += 7) {
    weeks.push(paddedDays.slice(i, i + 7));
  }

  // Ensure the last week has 7 days
  if (weeks.length > 0) {
    const lastWeek = weeks[weeks.length - 1];
    while (lastWeek.length < 7) {
      lastWeek.push(null);
    }
  }

  const monthPosts = posts.filter(p => p.month === month);
  const totalBoost = monthPosts.reduce((sum, p) => sum + (p.boost || 0), 0);

  return (
    <div className="bg-[#2a2a2a] rounded-lg overflow-hidden">
      {/* Month Header */}
      <div className="bg-[#363636] px-4 py-3 flex justify-between items-center">
        <h3 className="text-lg font-bold text-white">
          {monthInfo.name} {monthInfo.year}
        </h3>
        <div className="flex gap-4 text-sm">
          <span className="text-gray-400">
            <span className="text-white font-bold">{monthPosts.length}</span> posts
          </span>
          <span className="text-gray-400">
            Budget: <span className="text-[#6AAF52] font-bold">R${totalBoost}</span>
          </span>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="p-4">
        {/* Day Headers */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'].map((day) => (
            <div key={day} className="text-center text-xs text-gray-500 py-1">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 gap-1">
          {weeks.flat().map((day, index) => {
            if (day === null) {
              return <div key={`empty-${index}`} className="h-24 bg-[#1a1a1a] rounded" />;
            }

            const dayPosts = getPostsForDay(posts, day, month);
            const hasBoost = dayPosts.some(p => p.boost);

            return (
              <div
                key={`${month}-${day}`}
                className={`h-24 bg-[#363636] rounded p-1 hover:bg-[#404040] transition-colors ${
                  dayPosts.length > 0 ? 'cursor-pointer' : ''
                }`}
              >
                <div className="flex justify-between items-start mb-1">
                  <span className="text-xs text-gray-400">{day}</span>
                  {hasBoost && (
                    <span className="text-xs text-[#6AAF52]">$</span>
                  )}
                </div>

                <div className="flex flex-col gap-0.5">
                  {dayPosts.slice(0, 3).map((post) => (
                    <button
                      key={post.id}
                      onClick={() => onPostClick(post)}
                      className={`w-full text-left px-1 py-0.5 rounded text-[10px] text-white truncate ${typeColors[post.type]} hover:opacity-80 transition-opacity`}
                      title={`${post.title} (${post.type})`}
                    >
                      {typeEmojis[post.type]} {post.title}
                    </button>
                  ))}
                  {dayPosts.length > 3 && (
                    <span className="text-[10px] text-gray-400 text-center">
                      +{dayPosts.length - 3} mais
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Legend */}
      <div className="px-4 pb-4 flex gap-4 flex-wrap">
        {Object.entries(typeColors).map(([type, color]) => (
          <div key={type} className="flex items-center gap-1">
            <div className={`w-3 h-3 rounded ${color}`} />
            <span className="text-xs text-gray-400 capitalize">{type}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CalendarView({
  posts,
  selectedMonth,
  onPostClick,
}: CalendarViewProps) {
  const monthsToShow: PostMonth[] = selectedMonth === 'all'
    ? ['dezembro', 'janeiro', 'fevereiro', 'marco']
    : [selectedMonth];

  return (
    <div className="space-y-6">
      {monthsToShow.map((month) => (
        <CalendarMonth
          key={month}
          month={month}
          posts={posts}
          onPostClick={onPostClick}
        />
      ))}
    </div>
  );
}
