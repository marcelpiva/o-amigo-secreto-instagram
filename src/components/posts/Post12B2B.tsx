'use client';

import { PostFrame, CarouselIndicator } from '../ui/PostFrame';

interface Post12B2BProps {
  slideIndex?: number;
  preview?: boolean;
}

const slides = [
  {
    title: 'ATENÇÃO',
    highlight: 'RH!',
    subtitle: 'Amigo secreto da empresa sem dor de cabeça',
    icon: '👔',
    color: '#7AB4E0',
    bgFrom: '#0a1a2a',
  },
  {
    title: 'GRUPOS',
    highlight: 'ILIMITADOS',
    subtitle: '10, 50, 100+ participantes',
    icon: '👥',
    color: '#6AAF52',
    bgFrom: '#0a2a1a',
  },
  {
    title: 'RESTRIÇÕES',
    highlight: 'POR SETOR',
    subtitle: 'RH não tira RH, Vendas não tira Vendas',
    icon: '🏢',
    color: '#F5A945',
    bgFrom: '#2a1a0a',
  },
  {
    title: '100%',
    highlight: 'GRÁTIS',
    subtitle: 'Sem limite de participantes!',
    icon: '🎉',
    color: '#D4623A',
    bgFrom: '#2a0a0a',
    cta: true,
  },
];

export function Post12B2B({ slideIndex = 0, preview = true }: Post12B2BProps) {
  const slide = slides[slideIndex];

  return (
    <PostFrame size="square" preview={preview} showLogo={slideIndex === slides.length - 1}>
      {/* Corporate gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${slide.bgFrom} 0%, #1a1a2a 50%, ${slide.bgFrom} 100%)`,
        }}
      />

      {/* Corporate diagonal pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            ${slide.color} 0,
            ${slide.color} 1px,
            transparent 0,
            transparent 50%
          )`,
          backgroundSize: preview ? '20px 20px' : '50px 50px',
        }}
      />

      {/* Glowing accent */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 rounded-full blur-3xl animate-pulse"
        style={{
          width: preview ? '200px' : '500px',
          height: preview ? '200px' : '500px',
          background: `radial-gradient(circle, ${slide.color}30 0%, transparent 70%)`,
        }}
      />

      {/* Floating icons */}
      {['💼', '📊', '🏆', '⭐', '📈'].map((emoji, i) => (
        <div
          key={i}
          className="absolute animate-pulse"
          style={{
            top: `${10 + (i * 18)}%`,
            left: `${5 + ((i * 20) % 85)}%`,
            fontSize: preview ? '16px' : '40px',
            opacity: 0.3,
            animationDelay: `${i * 0.3}s`,
          }}
        >
          {emoji}
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">
        {/* Slide number badge */}
        <div
          className="absolute top-6 left-6 flex items-center justify-center font-black"
          style={{
            width: preview ? '40px' : '100px',
            height: preview ? '40px' : '100px',
            fontSize: preview ? '18px' : '45px',
            backgroundColor: slide.color,
            color: '#FFFFFF',
            boxShadow: `0 0 30px ${slide.color}60`,
          }}
        >
          {slideIndex + 1}
        </div>

        {/* Main emoji */}
        <div
          className="mb-6 animate-bounce"
          style={{
            fontSize: preview ? '70px' : '180px',
            filter: `drop-shadow(0 0 30px ${slide.color}80)`,
            animationDuration: '2s',
          }}
        >
          {slide.icon}
        </div>

        {/* Title */}
        <h1
          className="font-bold text-white/80 leading-none tracking-tight"
          style={{ fontSize: preview ? '20px' : '52px' }}
        >
          {slide.title}
        </h1>

        {/* Highlight */}
        <div
          className="font-black leading-none mt-2 tracking-tight"
          style={{
            fontSize: preview ? '36px' : '90px',
            color: slide.color,
            textShadow: `0 0 40px ${slide.color}60`,
          }}
        >
          {slide.highlight}
        </div>

        {/* Subtitle */}
        <p
          className="text-white/60 mt-4 font-medium max-w-xs"
          style={{ fontSize: preview ? '12px' : '28px' }}
        >
          {slide.subtitle}
        </p>

        {/* CTA for final slide */}
        {slide.cta && (
          <>
            <div
              className="mt-8 px-4 py-2 bg-white/10 backdrop-blur border border-white/20 font-bold text-white"
              style={{
                fontSize: preview ? '12px' : '28px',
                padding: preview ? '10px 20px' : '18px 40px',
              }}
            >
              https://oamigosecreto.app
            </div>
            <div
              className="mt-4 px-6 py-3 font-bold"
              style={{
                fontSize: preview ? '10px' : '24px',
                padding: preview ? '8px 16px' : '14px 32px',
                background: `linear-gradient(135deg, ${slide.color} 0%, #F5A945 100%)`,
                color: '#FFFFFF',
                boxShadow: `0 0 20px ${slide.color}40`,
              }}
            >
              Marque seu RH! 👇
            </div>
          </>
        )}
      </div>

      <CarouselIndicator total={slides.length} current={slideIndex} preview={preview} />
    </PostFrame>
  );
}
