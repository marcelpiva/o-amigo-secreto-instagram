'use client';

import { PostFrame, CarouselIndicator } from '../ui/PostFrame';

interface Post12B2BProps {
  slideIndex?: number;
  preview?: boolean;
}

const slides = [
  {
    title: 'ATENÇÃO RH:',
    subtitle: 'Amigo Secreto da empresa',
    highlight: 'nunca foi tão fácil',
    icon: '🏢',
  },
  {
    title: '10, 50, 100+',
    subtitle: 'participantes',
    highlight: 'O algoritmo dá conta.',
    icon: '👥',
  },
  {
    title: 'Restrições por departamento.',
    subtitle: 'Ninguém tira o próprio',
    highlight: 'chefe.',
    icon: '⚙️',
  },
  {
    title: 'Grátis.',
    subtitle: 'Sem limite de grupos.',
    highlight: 'Sem limite de participantes.',
    icon: '✅',
    cta: true,
  },
];

export function Post12B2B({ slideIndex = 0, preview = true }: Post12B2BProps) {
  const slide = slides[slideIndex];

  return (
    <PostFrame size="square" preview={preview} showLogo={slideIndex === slides.length - 1}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#363636] to-[#2a2a2a]" />

      {/* Corporate pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #D4623A 0, #D4623A 1px, transparent 0, transparent 50%)`,
          backgroundSize: preview ? '20px 20px' : '40px 40px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">
        {/* Icon */}
        <div
          className="mb-6"
          style={{ fontSize: preview ? '36px' : '100px' }}
        >
          {slide.icon}
        </div>

        {/* Title */}
        <h1
          className="font-bold text-[#D4623A] leading-tight"
          style={{
            fontSize: preview ? '16px' : '48px',
            fontFamily: 'var(--font-oxanium), Oxanium'
          }}
        >
          {slide.title}
        </h1>

        <p
          className="text-[#E5E5E5] mt-2"
          style={{ fontSize: preview ? '12px' : '36px' }}
        >
          {slide.subtitle}
        </p>

        <p
          className="text-[#7AB4E0] font-semibold mt-1"
          style={{ fontSize: preview ? '14px' : '40px' }}
        >
          {slide.highlight}
        </p>

        {slide.cta && (
          <div
            className="mt-8 px-6 py-3 bg-[#D4623A] text-white font-semibold"
            style={{
              fontSize: preview ? '8px' : '24px',
              padding: preview ? '4px 12px' : '14px 36px'
            }}
          >
            Marque seu RH!
          </div>
        )}
      </div>

      <CarouselIndicator total={slides.length} current={slideIndex} preview={preview} />
    </PostFrame>
  );
}
