'use client';

import { PostFrame } from '../ui/PostFrame';

interface PostPanoramaProps {
  slideIndex?: number; // 0, 1, 2 - 3 fotos diferentes
  preview?: boolean;
}

// 3 fotos diferentes que formam uma narrativa visual
const slides = [
  {
    // Pessoas preparando presentes
    image: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?w=1080&h=1080&fit=crop',
    title: 'PREPARAR',
    highlight: 'OS PRESENTES',
    subtitle: 'Com carinho especial',
    color: '#D4623A',
    emojis: [
      { emoji: '🎁', top: 8, left: 78 },
      { emoji: '✨', top: 20, left: 85 },
    ],
  },
  {
    // Grupo de amigos/família
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1080&h=1080&fit=crop',
    title: 'REUNIR',
    highlight: 'QUEM IMPORTA',
    subtitle: 'Família e amigos',
    color: '#6AAF52',
    emojis: [
      { emoji: '👥', top: 10, left: 80 },
      { emoji: '❤️', top: 22, left: 88 },
    ],
  },
  {
    // Momento de troca/celebração
    image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=1080&h=1080&fit=crop',
    title: 'CELEBRAR',
    highlight: 'JUNTOS!',
    subtitle: 'O momento mágico',
    color: '#F5A945',
    cta: true,
    emojis: [
      { emoji: '🎉', top: 8, left: 80 },
      { emoji: '🎄', top: 20, left: 88 },
    ],
  },
];

export function PostPanorama({ slideIndex = 0, preview = true }: PostPanoramaProps) {
  const safeIndex = Math.min(slideIndex, slides.length - 1);
  const slide = slides[safeIndex];

  return (
    <PostFrame size="square" preview={preview} showLogo={slide.cta}>
      {/* Background image - different photo per slide */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${slide.image}')`,
        }}
      />

      {/* Color overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${slide.color}30 0%, transparent 50%)`,
        }}
      />

      {/* Dramatic gradient for text */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to top,
            rgba(0,0,0,0.95) 0%,
            rgba(0,0,0,0.7) 30%,
            rgba(0,0,0,0.3) 55%,
            transparent 75%
          )`,
        }}
      />

      {/* Glowing orb */}
      <div
        className="absolute animate-pulse"
        style={{
          top: '10%',
          right: '15%',
          width: preview ? '120px' : '350px',
          height: preview ? '120px' : '350px',
          background: `radial-gradient(circle, ${slide.color}40 0%, transparent 70%)`,
          filter: 'blur(30px)',
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
            fontSize: preview ? '28px' : '70px',
            filter: `drop-shadow(0 0 20px ${slide.color}90)`,
            animationDelay: `${i * 0.3}s`,
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
      <div className="relative z-10 flex flex-col items-start justify-end h-full" style={{ padding: preview ? '20px' : '56px' }}>
        {/* Title */}
        <div
          className="font-bold text-white leading-none tracking-tight"
          style={{
            fontSize: preview ? '20px' : '52px',
            textShadow: `0 0 30px ${slide.color}50, 0 2px 15px rgba(0,0,0,0.8)`,
          }}
        >
          {slide.title}
        </div>

        {/* Highlight */}
        <div
          className="font-black leading-none mt-2 tracking-tight"
          style={{
            fontSize: preview ? '34px' : '88px',
            color: slide.color,
            textShadow: `0 0 60px ${slide.color}90, 0 0 30px ${slide.color}70, 0 4px 20px rgba(0,0,0,0.8)`,
          }}
        >
          {slide.highlight}
        </div>

        {/* Subtitle */}
        <p
          className="text-white/90 mt-2 font-medium"
          style={{
            fontSize: preview ? '12px' : '30px',
            textShadow: '0 2px 15px rgba(0,0,0,0.8)',
          }}
        >
          {slide.subtitle}
        </p>

        {/* CTA for final slide */}
        {slide.cta && (
          <div className="mt-5 flex flex-col gap-2">
            <div
              className="backdrop-blur-md border font-bold text-white"
              style={{
                fontSize: preview ? '11px' : '26px',
                padding: preview ? '8px 16px' : '14px 32px',
                background: 'rgba(255,255,255,0.15)',
                borderColor: `${slide.color}50`,
              }}
            >
              https://oamigosecreto.app
            </div>
            <div
              className="font-bold animate-pulse"
              style={{
                fontSize: preview ? '12px' : '28px',
                padding: preview ? '10px 20px' : '16px 36px',
                background: `linear-gradient(135deg, ${slide.color} 0%, #F5A945 100%)`,
                color: '#FFFFFF',
                boxShadow: `0 0 40px ${slide.color}70`,
              }}
            >
              Organize o seu! 🎁
            </div>
          </div>
        )}
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-5 right-5 flex gap-2">
        {slides.map((s, i) => (
          <div
            key={i}
            className="rounded-full transition-all"
            style={{
              width: preview ? '8px' : '16px',
              height: preview ? '8px' : '16px',
              backgroundColor: i === safeIndex ? s.color : 'rgba(255,255,255,0.4)',
              boxShadow: i === safeIndex ? `0 0 12px ${s.color}` : 'none',
            }}
          />
        ))}
      </div>

      {/* Photo credit */}
      <div
        className="absolute bottom-2 left-3 text-white/50"
        style={{ fontSize: preview ? '7px' : '16px' }}
      >
        📷 Unsplash
      </div>
    </PostFrame>
  );
}
