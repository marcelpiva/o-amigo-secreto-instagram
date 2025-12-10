'use client';

import { PostFrame } from '../ui/PostFrame';

interface Post01TeaserProps {
  slideIndex?: number;
  preview?: boolean;
}

const slides = [
  {
    content: 'CANSADO de sorteios',
    highlight: 'INJUSTOS?',
    emoji: '😤',
    bgFrom: '#0a0a0a',
    bgVia: '#1a0a0a',
    accentColor: '#FF6B6B',
  },
  {
    content: 'ALGO',
    highlight: 'NOVO',
    subtext: 'está chegando...',
    emoji: '👀',
    bgFrom: '#0a0a1a',
    bgVia: '#0a1a2a',
    accentColor: '#7AB4E0',
  },
  {
    content: 'DEZEMBRO',
    highlight: '2025',
    subtext: '#OAmigoSecreto',
    emoji: '🎁',
    bgFrom: '#1a0a0a',
    bgVia: '#2a1010',
    accentColor: '#D4623A',
  },
];

export function Post01Teaser({ slideIndex = 0, preview = true }: Post01TeaserProps) {
  const slide = slides[slideIndex];

  return (
    <PostFrame size="story" preview={preview} showLogo={false}>
      {/* Deep mysterious gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, ${slide.bgFrom} 0%, ${slide.bgVia} 50%, #0a0a0a 100%)`,
        }}
      />

      {/* Animated glow pulse from center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl animate-pulse"
        style={{
          width: preview ? '250px' : '700px',
          height: preview ? '250px' : '700px',
          background: `radial-gradient(circle, ${slide.accentColor}30 0%, transparent 70%)`,
        }}
      />

      {/* Mysterious particles */}
      {['✨', '?', '✨', '!', '✨', '?'].map((char, i) => (
        <div
          key={i}
          className="absolute animate-pulse font-bold"
          style={{
            top: `${10 + (i * 15)}%`,
            left: `${5 + ((i * 20) % 85)}%`,
            fontSize: preview ? '18px' : '48px',
            color: `${slide.accentColor}60`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: '3s',
          }}
        >
          {char}
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">
        {/* Large emoji with glow */}
        <div
          className="mb-8 animate-bounce"
          style={{
            fontSize: preview ? '80px' : '200px',
            filter: `drop-shadow(0 0 40px ${slide.accentColor}80)`,
            animationDuration: '2s',
          }}
        >
          {slide.emoji}
        </div>

        {/* Main content */}
        <h1
          className="font-bold text-white/80 leading-tight tracking-tight"
          style={{
            fontSize: preview ? '24px' : '60px',
          }}
        >
          {slide.content}
        </h1>

        {/* Highlight with glow */}
        <div
          className="font-black leading-none mt-2 tracking-tight"
          style={{
            fontSize: preview ? '48px' : '120px',
            color: slide.accentColor,
            textShadow: `0 0 60px ${slide.accentColor}80`,
          }}
        >
          {slide.highlight}
        </div>

        {/* Subtext */}
        {slide.subtext && (
          <p
            className="text-white/50 mt-6 font-medium tracking-widest uppercase"
            style={{ fontSize: preview ? '12px' : '32px' }}
          >
            {slide.subtext}
          </p>
        )}

        {/* Mystery dots */}
        <div className="flex gap-2 mt-10">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="rounded-full animate-pulse"
              style={{
                width: preview ? '8px' : '20px',
                height: preview ? '8px' : '20px',
                backgroundColor: slide.accentColor,
                opacity: 0.5 + i * 0.2,
                animationDelay: `${i * 0.3}s`,
                boxShadow: `0 0 20px ${slide.accentColor}60`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Slide indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`transition-all ${
              i === slideIndex ? 'w-6' : 'w-2'
            } rounded-full`}
            style={{
              height: preview ? '4px' : '8px',
              width: i === slideIndex ? (preview ? '24px' : '48px') : (preview ? '8px' : '16px'),
              backgroundColor: i === slideIndex ? slide.accentColor : 'rgba(255,255,255,0.3)',
              boxShadow: i === slideIndex ? `0 0 10px ${slide.accentColor}` : 'none',
            }}
          />
        ))}
      </div>

      {/* Vignette effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.4) 100%)',
        }}
      />
    </PostFrame>
  );
}
