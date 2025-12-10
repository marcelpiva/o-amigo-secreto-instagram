'use client';

import { PostFrame } from '../ui/PostFrame';

interface Post01TeaserProps {
  slideIndex?: number;
  preview?: boolean;
}

const slides = [
  {
    content: 'Cansado de sorteios problemáticos?',
    emoji: '😤',
  },
  {
    content: 'Casal que tira casal.',
    subContent: 'Mesma pessoa do ano passado.',
    emoji: '💔',
  },
  {
    content: 'A solução chega em 3 dias...',
    emoji: '✨',
  },
];

export function Post01Teaser({ slideIndex = 0, preview = true }: Post01TeaserProps) {
  const slide = slides[slideIndex];
  const scale = preview ? 0.25 : 1;
  const fontSize = preview ? 'text-sm' : 'text-5xl';
  const subFontSize = preview ? 'text-xs' : 'text-3xl';
  const emojiSize = preview ? 'text-2xl' : 'text-8xl';

  return (
    <PostFrame size="story" preview={preview} showLogo={slideIndex === slides.length - 1}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#363636] via-[#484848] to-[#363636]" />

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#D4623A]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-[#F5A945]/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">
        <div className={`${emojiSize} mb-8`}>{slide.emoji}</div>

        <h1
          className={`${fontSize} font-bold text-[#E5E5E5] mb-4 leading-tight`}
          style={{ fontFamily: 'var(--font-oxanium), Oxanium' }}
        >
          {slide.content}
        </h1>

        {slide.subContent && (
          <p className={`${subFontSize} text-[#AFAFAF] mt-2`}>
            {slide.subContent}
          </p>
        )}

        {slideIndex === slides.length - 1 && (
          <div
            className="mt-12 px-6 py-3 bg-[#D4623A] text-white font-semibold"
            style={{
              fontSize: preview ? '8px' : '24px',
              padding: preview ? '4px 8px' : '16px 32px'
            }}
          >
            Saiba mais →
          </div>
        )}
      </div>

      {/* Slide indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`rounded-full ${
              i === slideIndex ? 'bg-[#D4623A]' : 'bg-white/30'
            }`}
            style={{
              width: preview ? '6px' : '12px',
              height: preview ? '6px' : '12px',
            }}
          />
        ))}
      </div>
    </PostFrame>
  );
}
