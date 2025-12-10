'use client';

import { PostFrame, CarouselIndicator } from '../ui/PostFrame';

interface Post02ProblemasProps {
  slideIndex?: number;
  preview?: boolean;
}

const slides = [
  {
    number: null,
    title: '5 problemas que arruinam seu',
    highlight: 'Amigo Secreto',
    icon: '🎁',
  },
  {
    number: 1,
    title: 'Casal tira casal',
    subtitle: 'de novo',
    icon: '💔',
  },
  {
    number: 2,
    title: 'Você tira a mesma pessoa',
    subtitle: 'do ano passado',
    icon: '🔄',
  },
  {
    number: 3,
    title: 'Ninguém sabe o que',
    subtitle: 'a pessoa quer',
    icon: '❓',
  },
  {
    number: 4,
    title: 'Alguém sempre descobre',
    subtitle: 'antes da hora',
    cta: 'E se existisse uma solução?',
    icon: '🤫',
  },
];

export function Post02Problemas({ slideIndex = 0, preview = true }: Post02ProblemasProps) {
  const slide = slides[slideIndex];

  return (
    <PostFrame size="square" preview={preview} showLogo={slideIndex === slides.length - 1}>
      {/* Background */}
      <div className="absolute inset-0 bg-[#363636]" />

      {/* Decorative corner accents */}
      <div className="absolute top-0 left-0 w-24 h-24 bg-[#D4623A]" style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }} />
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#D4623A]" style={{ clipPath: 'polygon(100% 100%, 100% 0, 0 100%)' }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">
        {slide.number !== null && (
          <div
            className="mb-4 flex items-center justify-center w-16 h-16 bg-[#D4623A] text-white font-bold"
            style={{ fontSize: preview ? '16px' : '48px' }}
          >
            {slide.number}
          </div>
        )}

        <div
          className="mb-6"
          style={{ fontSize: preview ? '24px' : '72px' }}
        >
          {slide.icon}
        </div>

        <h1
          className="font-bold text-[#E5E5E5] leading-tight"
          style={{
            fontSize: preview ? '14px' : '42px',
            fontFamily: 'var(--font-oxanium), Oxanium'
          }}
        >
          {slide.title}
        </h1>

        {slide.highlight && (
          <span
            className="font-bold text-[#D4623A] mt-2"
            style={{ fontSize: preview ? '16px' : '52px' }}
          >
            {slide.highlight}
          </span>
        )}

        {slide.subtitle && (
          <p
            className="text-[#AFAFAF] mt-2"
            style={{ fontSize: preview ? '12px' : '36px' }}
          >
            {slide.subtitle}
          </p>
        )}

        {slide.cta && (
          <div
            className="mt-8 px-4 py-2 border-2 border-[#D4623A] text-[#D4623A] font-semibold"
            style={{
              fontSize: preview ? '8px' : '24px',
              padding: preview ? '4px 8px' : '12px 24px'
            }}
          >
            {slide.cta}
          </div>
        )}
      </div>

      <CarouselIndicator total={slides.length} current={slideIndex} preview={preview} />
    </PostFrame>
  );
}
