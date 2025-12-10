'use client';

import { PostFrame } from '../ui/PostFrame';

interface Post08GruposProps {
  slideIndex?: number;
  preview?: boolean;
}

const groups = [
  { name: 'Família', icon: '👨‍👩‍👧‍👦', members: 12, color: '#D4623A' },
  { name: 'Trabalho', icon: '💼', members: 25, color: '#7AB4E0' },
  { name: 'Amigos', icon: '🎉', members: 8, color: '#6AAF52' },
];

const slides = [
  {
    title: 'CRIE',
    highlight: 'GRUPOS',
    subtitle: 'Família, trabalho, amigos...',
    icon: '👥',
    showGroups: true,
  },
  {
    title: 'CONVIDE',
    highlight: 'FÁCIL',
    subtitle: 'Por link ou WhatsApp',
    icon: '📲',
    showGroups: false,
  },
  {
    title: 'GRUPOS',
    highlight: 'ILIMITADOS',
    subtitle: '100% GRÁTIS',
    icon: '∞',
    showGroups: false,
    cta: true,
  },
];

export function Post08Grupos({ slideIndex = 0, preview = true }: Post08GruposProps) {
  const slide = slides[slideIndex];

  return (
    <PostFrame size="story" preview={preview} showLogo={slideIndex === slides.length - 1}>
      {/* Dark gradient with green accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a0a] via-[#1a2a1a] to-[#0a1a1a]" />

      {/* Glowing orb */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 rounded-full blur-3xl animate-pulse"
        style={{
          width: preview ? '200px' : '600px',
          height: preview ? '200px' : '600px',
          background: 'radial-gradient(circle, rgba(106,175,82,0.3) 0%, transparent 70%)',
        }}
      />

      {/* Floating emojis */}
      {['👥', '✨', '🎉', '💬', '🔗'].map((emoji, i) => (
        <div
          key={i}
          className="absolute animate-pulse"
          style={{
            top: `${5 + (i * 18)}%`,
            left: `${8 + ((i * 20) % 80)}%`,
            fontSize: preview ? '18px' : '45px',
            opacity: 0.4,
            animationDelay: `${i * 0.3}s`,
          }}
        >
          {emoji}
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">
        {/* Main emoji/icon */}
        <div
          className="mb-8 animate-bounce"
          style={{
            fontSize: preview ? '80px' : '200px',
            filter: 'drop-shadow(0 0 40px rgba(106,175,82,0.8))',
            animationDuration: '2s',
          }}
        >
          {slide.icon}
        </div>

        {/* Title */}
        <h1
          className="font-bold text-white/80 leading-none tracking-tight"
          style={{ fontSize: preview ? '24px' : '60px' }}
        >
          {slide.title}
        </h1>

        {/* Highlight */}
        <div
          className="font-black leading-none mt-2 tracking-tight"
          style={{
            fontSize: preview ? '48px' : '120px',
            color: '#6AAF52',
            textShadow: '0 0 40px rgba(106,175,82,0.6)',
          }}
        >
          {slide.highlight}
        </div>

        {/* Subtitle */}
        <p
          className="text-white/60 mt-4 font-medium"
          style={{ fontSize: preview ? '14px' : '32px' }}
        >
          {slide.subtitle}
        </p>

        {/* Groups list */}
        {slide.showGroups && (
          <div className="mt-8 space-y-3 w-full max-w-xs">
            {groups.map((group, i) => (
              <div
                key={i}
                className="flex items-center bg-white/10 backdrop-blur border-l-4"
                style={{
                  borderColor: group.color,
                  padding: preview ? '10px 16px' : '20px 32px',
                }}
              >
                <span style={{ fontSize: preview ? '24px' : '50px' }}>{group.icon}</span>
                <div className="ml-4 text-left flex-1">
                  <p
                    className="font-bold text-white"
                    style={{ fontSize: preview ? '12px' : '28px' }}
                  >
                    {group.name}
                  </p>
                  <p
                    className="text-white/50"
                    style={{ fontSize: preview ? '10px' : '22px' }}
                  >
                    {group.members} participantes
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Invite methods for slide 2 */}
        {slideIndex === 1 && (
          <div className="mt-8 flex gap-4">
            {[
              { icon: '🔗', label: 'Link' },
              { icon: '📱', label: 'WhatsApp' },
              { icon: '📧', label: 'Email' },
            ].map((method, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur border border-white/20 px-4 py-3 text-center"
                style={{ padding: preview ? '12px 20px' : '24px 40px' }}
              >
                <span style={{ fontSize: preview ? '28px' : '60px' }}>{method.icon}</span>
                <p
                  className="text-white/70 mt-2"
                  style={{ fontSize: preview ? '10px' : '24px' }}
                >
                  {method.label}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* CTA for final slide */}
        {slide.cta && (
          <>
            <div
              className="mt-10 px-6 py-3 bg-white/10 backdrop-blur border border-white/20 font-bold text-white"
              style={{
                fontSize: preview ? '14px' : '34px',
                padding: preview ? '12px 24px' : '20px 48px',
              }}
            >
              https://oamigosecreto.app
            </div>
            <div
              className="mt-4 px-8 py-3 font-bold animate-pulse"
              style={{
                fontSize: preview ? '12px' : '28px',
                padding: preview ? '10px 24px' : '18px 48px',
                background: 'linear-gradient(135deg, #6AAF52 0%, #7AB4E0 100%)',
                color: '#FFFFFF',
                boxShadow: '0 0 30px rgba(106,175,82,0.5)',
              }}
            >
              Crie seu grupo! 🚀
            </div>
          </>
        )}
      </div>

      {/* Slide indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <div
            key={i}
            className="rounded-full transition-all"
            style={{
              width: i === slideIndex ? (preview ? '24px' : '48px') : (preview ? '8px' : '16px'),
              height: preview ? '4px' : '8px',
              backgroundColor: i === slideIndex ? '#6AAF52' : 'rgba(255,255,255,0.3)',
              boxShadow: i === slideIndex ? '0 0 10px rgba(106,175,82,0.8)' : 'none',
            }}
          />
        ))}
      </div>
    </PostFrame>
  );
}
