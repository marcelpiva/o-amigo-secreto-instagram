'use client';

import { PostFrame, CarouselIndicator } from '../ui/PostFrame';

interface Post02ProblemasProps {
  slideIndex?: number;
  preview?: boolean;
}

const slides = [
  {
    number: null,
    title: '5 problemas que',
    highlight: 'ARRUINAM',
    subtitle: 'seu Amigo Secreto',
    icon: '💀',
    bgGradient: 'from-[#1a0a0a] via-[#2d1010] to-[#1a0a0a]',
    accentColor: '#FF4444',
  },
  {
    number: 1,
    title: 'CASAL',
    highlight: 'tira CASAL',
    subtitle: '...de novo 😤',
    icon: '💔',
    bgGradient: 'from-[#2d1a1a] via-[#401515] to-[#2d1a1a]',
    accentColor: '#FF6B6B',
  },
  {
    number: 2,
    title: 'Você tira a',
    highlight: 'MESMA PESSOA',
    subtitle: 'do ano passado 🙄',
    icon: '🔄',
    bgGradient: 'from-[#1a1a2d] via-[#252540] to-[#1a1a2d]',
    accentColor: '#7B68EE',
  },
  {
    number: 3,
    title: 'Ninguém sabe',
    highlight: 'O QUE DAR',
    subtitle: 'de presente 🤷',
    icon: '❓',
    bgGradient: 'from-[#1a2d1a] via-[#254025] to-[#1a2d1a]',
    accentColor: '#6AAF52',
  },
  {
    number: 4,
    title: 'Alguém SEMPRE',
    highlight: 'DESCOBRE',
    subtitle: 'antes da hora 🤫',
    icon: '👀',
    bgGradient: 'from-[#2d1a0a] via-[#402515] to-[#2d1a0a]',
    accentColor: '#F5A945',
    cta: 'E se existisse uma SOLUÇÃO?',
  },
];

export function Post02Problemas({ slideIndex = 0, preview = true }: Post02ProblemasProps) {
  const slide = slides[slideIndex];
  const scale = preview ? 1 : 4;

  return (
    <PostFrame size="square" preview={preview} showLogo={slideIndex === slides.length - 1}>
      {/* Dramatic gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${slide.bgGradient}`} />

      {/* Animated glow orbs */}
      <div
        className="absolute top-1/4 left-1/4 rounded-full blur-3xl animate-pulse"
        style={{
          width: preview ? '150px' : '400px',
          height: preview ? '150px' : '400px',
          backgroundColor: `${slide.accentColor}20`,
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 rounded-full blur-3xl animate-pulse"
        style={{
          width: preview ? '100px' : '300px',
          height: preview ? '100px' : '300px',
          backgroundColor: `${slide.accentColor}15`,
          animationDelay: '1s',
        }}
      />

      {/* Diagonal accent stripe */}
      <div
        className="absolute -top-20 -right-20 w-40 h-[200%] rotate-12 opacity-10"
        style={{ backgroundColor: slide.accentColor }}
      />

      {/* Number badge with glow */}
      {slide.number !== null && (
        <div
          className="absolute top-6 left-6 flex items-center justify-center font-black"
          style={{
            width: preview ? '50px' : '120px',
            height: preview ? '50px' : '120px',
            fontSize: preview ? '24px' : '60px',
            backgroundColor: slide.accentColor,
            color: '#FFFFFF',
            boxShadow: `0 0 ${preview ? '20px' : '60px'} ${slide.accentColor}80`,
          }}
        >
          {slide.number}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">
        {/* Large animated emoji */}
        <div
          className="mb-6 animate-bounce"
          style={{
            fontSize: preview ? '60px' : '160px',
            filter: `drop-shadow(0 0 ${preview ? '10px' : '30px'} ${slide.accentColor}80)`,
            animationDuration: '2s',
          }}
        >
          {slide.icon}
        </div>

        {/* Title */}
        <h1
          className="font-bold text-white/90 leading-none tracking-tight"
          style={{
            fontSize: preview ? '18px' : '52px',
          }}
        >
          {slide.title}
        </h1>

        {/* Highlight with dramatic styling */}
        <div
          className="font-black leading-none mt-2 tracking-tight"
          style={{
            fontSize: preview ? '32px' : '80px',
            color: slide.accentColor,
            textShadow: `0 0 ${preview ? '20px' : '60px'} ${slide.accentColor}60`,
          }}
        >
          {slide.highlight}
        </div>

        {/* Subtitle */}
        {slide.subtitle && (
          <p
            className="text-white/60 mt-3 font-medium"
            style={{ fontSize: preview ? '14px' : '36px' }}
          >
            {slide.subtitle}
          </p>
        )}

        {/* CTA with pulsing effect */}
        {slide.cta && (
          <div
            className="mt-10 px-6 py-3 font-bold animate-pulse"
            style={{
              fontSize: preview ? '12px' : '28px',
              padding: preview ? '8px 16px' : '20px 40px',
              background: `linear-gradient(135deg, ${slide.accentColor} 0%, #D4623A 100%)`,
              color: '#FFFFFF',
              boxShadow: `0 0 ${preview ? '20px' : '40px'} ${slide.accentColor}60`,
            }}
          >
            {slide.cta}
          </div>
        )}
      </div>

      {/* Decorative corner elements */}
      <div
        className="absolute top-0 left-0 opacity-30"
        style={{
          width: preview ? '60px' : '150px',
          height: preview ? '60px' : '150px',
          background: `linear-gradient(135deg, ${slide.accentColor} 0%, transparent 60%)`,
        }}
      />
      <div
        className="absolute bottom-0 right-0 opacity-30"
        style={{
          width: preview ? '60px' : '150px',
          height: preview ? '60px' : '150px',
          background: `linear-gradient(-45deg, ${slide.accentColor} 0%, transparent 60%)`,
        }}
      />

      <CarouselIndicator total={slides.length} current={slideIndex} preview={preview} />
    </PostFrame>
  );
}
