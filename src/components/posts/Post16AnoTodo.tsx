'use client';

import { PostFrame, CarouselIndicator } from '../ui/PostFrame';

interface Post16AnoTodoProps {
  slideIndex?: number;
  preview?: boolean;
}

const occasions = [
  {
    title: 'NÃO É SÓ',
    highlight: 'NO NATAL!',
    subtitle: 'O app funciona o ano todo',
    emoji: '📅',
    color: '#7AB4E0',
    bgFrom: '#0a1a2a',
    bgVia: '#1a2a4a',
  },
  {
    title: 'AMIGO',
    highlight: 'SECRETO',
    subtitle: 'Dezembro • Natal e Ano Novo',
    emoji: '🎄',
    color: '#D4623A',
    bgFrom: '#2a1a0a',
    bgVia: '#3a2515',
  },
  {
    title: 'AMIGO',
    highlight: 'CHOCOLATE',
    subtitle: 'Março/Abril • Páscoa',
    emoji: '🐰',
    color: '#8B4513',
    bgFrom: '#2a1a0a',
    bgVia: '#3a2010',
  },
  {
    title: 'AMIGO',
    highlight: 'CAIPIRA',
    subtitle: 'Junho • Festa Junina',
    emoji: '🎃',
    color: '#F5A945',
    bgFrom: '#2a2a0a',
    bgVia: '#3a3515',
  },
  {
    title: 'AMIGO',
    highlight: 'CRIANÇA',
    subtitle: 'Outubro • Dia das Crianças',
    emoji: '🧸',
    color: '#7AB4E0',
    bgFrom: '#0a2a3a',
    bgVia: '#153550',
    cta: true,
  },
];

export function Post16AnoTodo({ slideIndex = 0, preview = true }: Post16AnoTodoProps) {
  const slide = occasions[slideIndex];

  return (
    <PostFrame size="square" preview={preview} showLogo={slideIndex === occasions.length - 1}>
      {/* Dynamic gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${slide.bgFrom} 0%, ${slide.bgVia} 50%, ${slide.bgFrom} 100%)`,
        }}
      />

      {/* Glowing accent orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl animate-pulse"
        style={{
          width: preview ? '200px' : '500px',
          height: preview ? '200px' : '500px',
          background: `radial-gradient(circle, ${slide.color}30 0%, transparent 70%)`,
        }}
      />

      {/* Floating seasonal emojis */}
      {slideIndex === 1 && ['🎄', '❄️', '⭐', '🎁', '✨'].map((emoji, i) => (
        <div
          key={i}
          className="absolute animate-pulse"
          style={{
            top: `${10 + (i * 18)}%`,
            left: `${8 + ((i * 20) % 80)}%`,
            fontSize: preview ? '18px' : '45px',
            opacity: 0.4,
            animationDelay: `${i * 0.3}s`,
          }}
        >
          {emoji}
        </div>
      ))}
      {slideIndex === 2 && ['🐰', '🍫', '🥚', '🌸', '✨'].map((emoji, i) => (
        <div
          key={i}
          className="absolute animate-pulse"
          style={{
            top: `${10 + (i * 18)}%`,
            left: `${8 + ((i * 20) % 80)}%`,
            fontSize: preview ? '18px' : '45px',
            opacity: 0.4,
            animationDelay: `${i * 0.3}s`,
          }}
        >
          {emoji}
        </div>
      ))}
      {slideIndex === 3 && ['🎃', '🌽', '🔥', '🎵', '💃'].map((emoji, i) => (
        <div
          key={i}
          className="absolute animate-pulse"
          style={{
            top: `${10 + (i * 18)}%`,
            left: `${8 + ((i * 20) % 80)}%`,
            fontSize: preview ? '18px' : '45px',
            opacity: 0.4,
            animationDelay: `${i * 0.3}s`,
          }}
        >
          {emoji}
        </div>
      ))}
      {slideIndex === 4 && ['🧸', '🎈', '🎠', '🍭', '🎪'].map((emoji, i) => (
        <div
          key={i}
          className="absolute animate-pulse"
          style={{
            top: `${10 + (i * 18)}%`,
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
        {/* Slide indicator badge */}
        {slideIndex > 0 && (
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
            {slideIndex}
          </div>
        )}

        {/* Main emoji with glow */}
        <div
          className="mb-6 animate-bounce"
          style={{
            fontSize: preview ? '80px' : '200px',
            filter: `drop-shadow(0 0 40px ${slide.color}80)`,
            animationDuration: '2s',
          }}
        >
          {slide.emoji}
        </div>

        {/* Title */}
        <h1
          className="font-bold text-white/80 leading-none tracking-tight"
          style={{ fontSize: preview ? '20px' : '52px' }}
        >
          {slide.title}
        </h1>

        {/* Highlight with color */}
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
          className="text-white/60 mt-4 font-medium"
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
              className="mt-4 px-6 py-3 font-bold animate-pulse"
              style={{
                fontSize: preview ? '10px' : '24px',
                padding: preview ? '8px 16px' : '14px 32px',
                background: `linear-gradient(135deg, ${slide.color} 0%, #6AAF52 100%)`,
                color: '#FFFFFF',
                boxShadow: `0 0 20px ${slide.color}40`,
              }}
            >
              Use o ano todo! 🎉
            </div>
          </>
        )}
      </div>

      <CarouselIndicator total={occasions.length} current={slideIndex} preview={preview} />
    </PostFrame>
  );
}
