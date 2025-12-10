'use client';

import { PostFrame } from '../ui/PostFrame';

interface Post21ParceriaProps {
  slideIndex?: number;
  preview?: boolean;
}

const slides = [
  {
    title: 'QUER SER',
    highlight: 'PARCEIRO?',
    subtitle: 'Crescer junto com a gente',
    color: '#7AB4E0',
    icon: '🤝',
    emojis: [
      { emoji: '✨', top: 8, left: 78 },
      { emoji: '🚀', top: 20, left: 86 },
    ],
  },
  {
    title: 'INFLUENCIADORES',
    highlight: '& CREATORS',
    subtitle: 'Cresça junto com a gente',
    color: '#D4623A',
    icon: '📱',
    benefits: ['Divulgação mútua', 'Acesso antecipado', 'Conteúdo colaborativo'],
    emojis: [
      { emoji: '🎬', top: 6, left: 80 },
      { emoji: '📲', top: 18, left: 88 },
    ],
  },
  {
    title: 'EMPRESAS',
    highlight: '& AGÊNCIAS',
    subtitle: 'Organize eventos com a gente',
    color: '#6AAF52',
    icon: '🏢',
    benefits: ['Co-marketing', 'Menção como parceiro', 'Networking'],
    emojis: [
      { emoji: '📊', top: 8, left: 82 },
      { emoji: '🎯', top: 20, left: 75 },
    ],
  },
  {
    title: 'VAMOS',
    highlight: 'CONVERSAR?',
    subtitle: 'Entre em contato',
    color: '#F5A945',
    icon: '💬',
    cta: true,
    emojis: [
      { emoji: '📩', top: 5, left: 78 },
      { emoji: '❤️', top: 18, left: 88 },
    ],
  },
];

export function Post21Parceria({ slideIndex = 0, preview = true }: Post21ParceriaProps) {
  const safeIndex = Math.min(slideIndex, slides.length - 1);
  const slide = slides[safeIndex];

  return (
    <PostFrame size="square" preview={preview} showLogo={slide.cta}>
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, #0a0a0a 0%, ${slide.color}15 50%, #0a0a0a 100%)`,
        }}
      />

      {/* Glowing orbs */}
      <div
        className="absolute animate-pulse"
        style={{
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: preview ? '200px' : '500px',
          height: preview ? '200px' : '500px',
          background: `radial-gradient(circle, ${slide.color}30 0%, transparent 70%)`,
          filter: 'blur(40px)',
        }}
      />

      {/* Animated emojis */}
      {slide.emojis.map((item, i) => (
        <div
          key={i}
          className="absolute animate-pulse"
          style={{
            top: `${item.top}%`,
            left: `${item.left}%`,
            fontSize: preview ? '26px' : '65px',
            filter: `drop-shadow(0 0 20px ${slide.color}90)`,
            animationDelay: `${i * 0.4}s`,
          }}
        >
          {item.emoji}
        </div>
      ))}

      {/* Top accent bar */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{
          height: preview ? '4px' : '8px',
          background: `linear-gradient(90deg, transparent, ${slide.color}, transparent)`,
          boxShadow: `0 0 25px ${slide.color}80`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        {/* Main Icon */}
        <div
          className="mb-4 animate-bounce"
          style={{
            fontSize: preview ? '60px' : '150px',
            filter: `drop-shadow(0 0 30px ${slide.color}80)`,
            animationDuration: '2s',
          }}
        >
          {slide.icon}
        </div>

        {/* Title */}
        <div
          className="font-bold text-white leading-none tracking-tight"
          style={{
            fontSize: preview ? '18px' : '48px',
            textShadow: `0 0 30px ${slide.color}50, 0 2px 15px rgba(0,0,0,0.8)`,
          }}
        >
          {slide.title}
        </div>

        {/* Highlight */}
        <div
          className="font-black leading-none mt-2 tracking-tight"
          style={{
            fontSize: preview ? '32px' : '85px',
            color: slide.color,
            textShadow: `0 0 60px ${slide.color}90, 0 0 30px ${slide.color}70, 0 4px 20px rgba(0,0,0,0.8)`,
          }}
        >
          {slide.highlight}
        </div>

        {/* Subtitle */}
        <p
          className="text-white/80 mt-3 font-medium"
          style={{
            fontSize: preview ? '11px' : '28px',
            textShadow: '0 2px 15px rgba(0,0,0,0.8)',
          }}
        >
          {slide.subtitle}
        </p>

        {/* Benefits list */}
        {slide.benefits && (
          <div className="mt-4 flex flex-col gap-1">
            {slide.benefits.map((benefit, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-white/90"
                style={{ fontSize: preview ? '10px' : '24px' }}
              >
                <span style={{ color: slide.color }}>✓</span>
                {benefit}
              </div>
            ))}
          </div>
        )}

        {/* CTA for final slide */}
        {slide.cta && (
          <div className="mt-6 flex flex-col gap-3">
            <div
              className="backdrop-blur-md border font-bold text-white"
              style={{
                fontSize: preview ? '10px' : '24px',
                padding: preview ? '8px 16px' : '14px 32px',
                background: 'rgba(255,255,255,0.1)',
                borderColor: `${slide.color}50`,
              }}
            >
              parcerias@oamigosecreto.app
            </div>
            <div
              className="font-bold animate-pulse"
              style={{
                fontSize: preview ? '12px' : '28px',
                padding: preview ? '10px 20px' : '16px 36px',
                background: `linear-gradient(135deg, ${slide.color} 0%, #D4623A 100%)`,
                color: '#FFFFFF',
                boxShadow: `0 0 40px ${slide.color}70`,
              }}
            >
              Seja Parceiro! 🤝
            </div>
          </div>
        )}
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((s, i) => (
          <div
            key={i}
            className="rounded-full transition-all"
            style={{
              width: i === safeIndex ? (preview ? '18px' : '36px') : (preview ? '8px' : '14px'),
              height: preview ? '8px' : '14px',
              backgroundColor: i === safeIndex ? s.color : 'rgba(255,255,255,0.3)',
              boxShadow: i === safeIndex ? `0 0 12px ${s.color}` : 'none',
            }}
          />
        ))}
      </div>
    </PostFrame>
  );
}
