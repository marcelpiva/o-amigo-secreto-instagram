'use client';

import { PostFrame } from '../ui/PostFrame';

interface Post19FotosEmpresaProps {
  slideIndex?: number;
  preview?: boolean;
}

// Fotos de ambiente corporativo/empresa - Unsplash royalty free
const slides = [
  {
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1080&h=1080&fit=crop',
    title: 'AMIGO SECRETO',
    highlight: 'NA EMPRESA',
    subtitle: 'Fortalecer laços da equipe',
    color: '#7AB4E0',
    emojis: [
      { emoji: '🏢', top: 8, left: 78 },
      { emoji: '👔', top: 18, left: 86 },
      { emoji: '✨', top: 28, left: 75 },
    ],
  },
  {
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1080&h=1080&fit=crop',
    title: 'GRUPOS',
    highlight: 'ILIMITADOS',
    subtitle: 'Sem limite de participantes',
    color: '#6AAF52',
    emojis: [
      { emoji: '👥', top: 6, left: 80 },
      { emoji: '🎯', top: 18, left: 88 },
      { emoji: '💼', top: 26, left: 72 },
    ],
  },
  {
    image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=1080&h=1080&fit=crop',
    title: 'CELEBRE',
    highlight: 'COM O TIME!',
    subtitle: 'Final de ano inesquecível',
    color: '#D4623A',
    cta: true,
    emojis: [
      { emoji: '🎉', top: 5, left: 78 },
      { emoji: '🎊', top: 16, left: 88 },
      { emoji: '🎁', top: 25, left: 82 },
    ],
  },
];

export function Post19FotosEmpresa({ slideIndex = 0, preview = true }: Post19FotosEmpresaProps) {
  const safeIndex = Math.min(slideIndex, slides.length - 1);
  const slide = slides[safeIndex];

  return (
    <PostFrame size="square" preview={preview} showLogo={slide.cta}>
      {/* Background image */}
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
          background: `linear-gradient(135deg, ${slide.color}25 0%, transparent 50%)`,
        }}
      />

      {/* Dramatic gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to top,
            rgba(0,0,0,0.95) 0%,
            rgba(0,0,0,0.7) 30%,
            rgba(0,0,0,0.3) 50%,
            transparent 70%
          )`,
        }}
      />

      {/* Glowing orb */}
      <div
        className="absolute animate-pulse"
        style={{
          top: '10%',
          right: '10%',
          width: preview ? '150px' : '400px',
          height: preview ? '150px' : '400px',
          background: `radial-gradient(circle, ${slide.color}40 0%, transparent 70%)`,
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
            fontSize: preview ? '24px' : '60px',
            filter: `drop-shadow(0 0 20px ${slide.color}80)`,
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
          height: preview ? '3px' : '6px',
          background: `linear-gradient(90deg, transparent, ${slide.color}, transparent)`,
          boxShadow: `0 0 20px ${slide.color}80`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-end h-full" style={{ padding: preview ? '20px' : '56px' }}>
        <h1
          className="font-bold text-white leading-none tracking-tight"
          style={{
            fontSize: preview ? '20px' : '52px',
            textShadow: `0 0 30px ${slide.color}60, 0 2px 10px rgba(0,0,0,0.8)`,
          }}
        >
          {slide.title}
        </h1>

        <div
          className="font-black leading-none mt-2 tracking-tight"
          style={{
            fontSize: preview ? '34px' : '86px',
            color: slide.color,
            textShadow: `0 0 60px ${slide.color}90, 0 0 30px ${slide.color}70, 0 4px 15px rgba(0,0,0,0.8)`,
          }}
        >
          {slide.highlight}
        </div>

        <p
          className="text-white/90 mt-3 font-medium"
          style={{
            fontSize: preview ? '12px' : '30px',
            textShadow: '0 2px 15px rgba(0,0,0,0.8)',
          }}
        >
          {slide.subtitle}
        </p>

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
              Experimente Grátis! 🚀
            </div>
          </div>
        )}
      </div>

      {/* Slide indicator */}
      <div className="absolute bottom-5 right-5 flex gap-2">
        {slides.map((s, i) => (
          <div
            key={i}
            className="rounded-full"
            style={{
              width: preview ? '8px' : '16px',
              height: preview ? '8px' : '16px',
              backgroundColor: i === safeIndex ? s.color : 'rgba(255,255,255,0.4)',
              boxShadow: i === safeIndex ? `0 0 15px ${s.color}` : 'none',
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
