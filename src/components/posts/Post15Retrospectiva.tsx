'use client';

import { PostFrame, CarouselIndicator } from '../ui/PostFrame';
import Image from 'next/image';

interface Post15RetrospectivaProps {
  slideIndex?: number;
  preview?: boolean;
  stats?: {
    downloads: string;
    groups: string;
    draws: string;
  };
}

const defaultStats = {
  downloads: '2.000+',
  groups: '500+',
  draws: '480+',
};

export function Post15Retrospectiva({
  slideIndex = 0,
  preview = true,
  stats = defaultStats
}: Post15RetrospectivaProps) {
  const slides = [
    { type: 'thanks' },
    { type: 'stats', stats },
    { type: 'future' },
  ];

  const slide = slides[slideIndex];

  return (
    <PostFrame size="square" preview={preview} showLogo={false}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#363636] via-[#D4623A]/10 to-[#363636]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">
        {slide.type === 'thanks' && (
          <>
            <Image
              src="/logo.png"
              alt="O Amigo Secreto"
              width={preview ? 50 : 150}
              height={preview ? 50 : 150}
              className="mb-6"
            />
            <h1
              className="font-bold leading-tight gradient-text"
              style={{
                fontSize: preview ? '28px' : '84px',
                fontFamily: 'var(--font-oxanium), Oxanium'
              }}
            >
              OBRIGADO!
            </h1>
            <p
              className="text-[#AFAFAF] mt-4"
              style={{ fontSize: preview ? '10px' : '28px' }}
            >
              Por fazer parte dessa história
            </p>
          </>
        )}

        {slide.type === 'stats' && (
          <>
            <h2
              className="font-bold text-[#E5E5E5] mb-8"
              style={{
                fontSize: preview ? '14px' : '42px',
                fontFamily: 'var(--font-oxanium), Oxanium'
              }}
            >
              Em menos de 2 semanas:
            </h2>
            <div className="space-y-4">
              {[
                { label: 'Downloads', value: stats.downloads, color: '#D4623A' },
                { label: 'Grupos criados', value: stats.groups, color: '#6AAF52' },
                { label: 'Sorteios realizados', value: stats.draws, color: '#7AB4E0' },
              ].map((stat, i) => (
                <div key={i} className="flex items-center justify-between gap-4">
                  <span
                    className="text-[#AFAFAF]"
                    style={{ fontSize: preview ? '10px' : '28px' }}
                  >
                    {stat.label}
                  </span>
                  <span
                    className="font-bold"
                    style={{
                      fontSize: preview ? '16px' : '48px',
                      color: stat.color
                    }}
                  >
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </>
        )}

        {slide.type === 'future' && (
          <>
            <div
              className="mb-6"
              style={{ fontSize: preview ? '40px' : '120px' }}
            >
              🚀
            </div>
            <h1
              className="font-bold text-[#E5E5E5] leading-tight"
              style={{
                fontSize: preview ? '14px' : '42px',
                fontFamily: 'var(--font-oxanium), Oxanium'
              }}
            >
              Em 2026, ainda mais
            </h1>
            <span
              className="font-bold text-[#D4623A] mt-2"
              style={{ fontSize: preview ? '18px' : '54px' }}
            >
              novidades!
            </span>
            <div
              className="mt-6 px-4 py-2 border-2 border-[#6AAF52] text-[#6AAF52] font-semibold"
              style={{
                fontSize: preview ? '8px' : '24px',
                padding: preview ? '4px 8px' : '10px 24px'
              }}
            >
              Fique ligado!
            </div>
          </>
        )}
      </div>

      <CarouselIndicator total={slides.length} current={slideIndex} preview={preview} />
    </PostFrame>
  );
}
