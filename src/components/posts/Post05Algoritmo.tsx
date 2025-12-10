'use client';

import { PostFrame, CarouselIndicator } from '../ui/PostFrame';

interface Post05AlgoritmoProps {
  slideIndex?: number;
  preview?: boolean;
}

const slides = [
  {
    title: 'ALGORITMO',
    highlight: 'INTELIGENTE',
    subtitle: 'Sorteios que fazem sentido',
    icon: '🧠',
    color: '#7AB4E0',
    bgFrom: '#0a1a2a',
    bgVia: '#1a2a4a',
  },
  {
    title: 'CASAIS',
    highlight: 'NÃO SE TIRAM',
    subtitle: 'Marque casais e familiares',
    icon: '💑',
    color: '#FF6B6B',
    bgFrom: '#2a0a1a',
    bgVia: '#3a1a2a',
  },
  {
    title: 'HISTÓRICO',
    highlight: 'RESPEITADO',
    subtitle: 'Não tira a mesma pessoa de antes',
    icon: '📋',
    color: '#6AAF52',
    bgFrom: '#0a2a1a',
    bgVia: '#1a3a2a',
  },
  {
    title: 'SORTEIO',
    highlight: 'PERFEITO',
    subtitle: 'Sem ciclos. Sem erros. Garantido.',
    icon: '✨',
    color: '#D4623A',
    bgFrom: '#2a1a0a',
    bgVia: '#3a2515',
    cta: true,
  },
];

export function Post05Algoritmo({ slideIndex = 0, preview = true }: Post05AlgoritmoProps) {
  const slide = slides[slideIndex];

  return (
    <PostFrame size="square" preview={preview} showLogo={slideIndex === slides.length - 1}>
      {/* Dynamic gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${slide.bgFrom} 0%, ${slide.bgVia} 50%, ${slide.bgFrom} 100%)`,
        }}
      />

      {/* Tech grid pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(${slide.color}40 1px, transparent 1px),
            linear-gradient(90deg, ${slide.color}40 1px, transparent 1px)
          `,
          backgroundSize: preview ? '30px 30px' : '80px 80px',
        }}
      />

      {/* Animated glow orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl animate-pulse"
        style={{
          width: preview ? '200px' : '500px',
          height: preview ? '200px' : '500px',
          background: `radial-gradient(circle, ${slide.color}30 0%, transparent 70%)`,
        }}
      />

      {/* Floating particles */}
      {['✨', '🔢', '⚡', '🎯', '✨'].map((emoji, i) => (
        <div
          key={i}
          className="absolute animate-pulse"
          style={{
            top: `${10 + (i * 18)}%`,
            left: `${8 + ((i * 20) % 80)}%`,
            fontSize: preview ? '18px' : '45px',
            opacity: 0.5,
            animationDelay: `${i * 0.3}s`,
          }}
        >
          {emoji}
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">
        {/* Slide number */}
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

        {/* Main emoji with glow */}
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
          style={{ fontSize: preview ? '16px' : '44px' }}
        >
          {slide.title}
        </h1>

        {/* Highlight */}
        <div
          className="font-black leading-none mt-2 tracking-tight"
          style={{
            fontSize: preview ? '28px' : '72px',
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
                fontSize: preview ? '11px' : '26px',
                padding: preview ? '8px 16px' : '14px 32px',
              }}
            >
              https://oamigosecreto.app
            </div>
            <p
              className="mt-3 text-white/50"
              style={{ fontSize: preview ? '10px' : '24px' }}
            >
              Cadastre na waitlist! 🚀
            </p>
          </>
        )}
      </div>

      <CarouselIndicator total={slides.length} current={slideIndex} preview={preview} />
    </PostFrame>
  );
}
