'use client';

import { PostFrame, CarouselIndicator } from '../ui/PostFrame';

interface Post05AlgoritmoProps {
  slideIndex?: number;
  preview?: boolean;
}

const slides = [
  {
    title: 'Nosso sorteio é',
    highlight: 'INTELIGENTE',
    icon: '🧠',
    description: null,
  },
  {
    title: 'Define restrições:',
    highlight: null,
    icon: '🚫',
    description: 'Maria não pode tirar João\n(são casados)',
    visual: 'restriction',
  },
  {
    title: 'O algoritmo calcula',
    highlight: 'TODAS',
    icon: '⚡',
    description: 'as possibilidades',
    visual: 'calculation',
  },
  {
    title: 'Resultado:',
    highlight: 'Sorteio perfeito',
    icon: '✅',
    description: 'que respeita TODAS as regras',
  },
];

export function Post05Algoritmo({ slideIndex = 0, preview = true }: Post05AlgoritmoProps) {
  const slide = slides[slideIndex];

  return (
    <PostFrame size="square" preview={preview} showLogo={slideIndex === slides.length - 1}>
      {/* Background */}
      <div className="absolute inset-0 bg-[#363636]" />

      {/* Tech grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(to right, #D4623A 1px, transparent 1px),
            linear-gradient(to bottom, #D4623A 1px, transparent 1px)
          `,
          backgroundSize: preview ? '20px 20px' : '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">
        {/* Icon */}
        <div
          className="mb-6"
          style={{ fontSize: preview ? '32px' : '96px' }}
        >
          {slide.icon}
        </div>

        {/* Title */}
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
            style={{ fontSize: preview ? '18px' : '56px' }}
          >
            {slide.highlight}
          </span>
        )}

        {slide.description && (
          <p
            className="text-[#AFAFAF] mt-4 whitespace-pre-line"
            style={{ fontSize: preview ? '10px' : '28px' }}
          >
            {slide.description}
          </p>
        )}

        {/* Visual representation for specific slides */}
        {slide.visual === 'restriction' && (
          <div
            className="mt-6 flex items-center gap-2"
            style={{ fontSize: preview ? '10px' : '24px' }}
          >
            <div className="w-8 h-8 bg-[#7AB4E0] rounded-full flex items-center justify-center text-white">M</div>
            <span className="text-[#D4623A]">✕</span>
            <div className="w-8 h-8 bg-[#6AAF52] rounded-full flex items-center justify-center text-white">J</div>
          </div>
        )}

        {slide.visual === 'calculation' && (
          <div
            className="mt-6 grid grid-cols-3 gap-2"
            style={{ fontSize: preview ? '8px' : '20px' }}
          >
            {['A→B', 'B→C', 'C→A', 'D→E', 'E→F', 'F→D'].map((pair, i) => (
              <div key={i} className="bg-[#484848] px-2 py-1 text-[#D4623A]">
                {pair}
              </div>
            ))}
          </div>
        )}

        {slideIndex === slides.length - 1 && (
          <div
            className="mt-8 px-6 py-3 bg-[#D4623A] text-white font-semibold"
            style={{
              fontSize: preview ? '8px' : '24px',
              padding: preview ? '4px 12px' : '16px 40px'
            }}
          >
            Experimente grátis →
          </div>
        )}
      </div>

      <CarouselIndicator total={slides.length} current={slideIndex} preview={preview} />
    </PostFrame>
  );
}
