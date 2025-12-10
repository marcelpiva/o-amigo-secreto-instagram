'use client';

import { PostFrame, CarouselIndicator } from '../ui/PostFrame';

interface Post18NumerosDezembrosProps {
  slideIndex?: number;
  preview?: boolean;
}

const slides = [
  {
    title: 'DEZEMBRO',
    highlight: 'EM NÚMEROS',
    subtitle: 'O que vocês fizeram!',
    icon: '📊',
    color: '#7AB4E0',
    bgFrom: '#0a1a2a',
    bgVia: '#1a2a4a',
    showStats: false,
  },
  {
    number: '+5.000',
    label: 'SORTEIOS REALIZADOS',
    icon: '🎁',
    color: '#D4623A',
    bgFrom: '#2a0a0a',
    bgVia: '#3a1515',
    detail: 'Zero erros. Zero problemas.',
  },
  {
    number: '+2.000',
    label: 'GRUPOS CRIADOS',
    icon: '👥',
    color: '#6AAF52',
    bgFrom: '#0a2a0a',
    bgVia: '#153a15',
    detail: 'Famílias, amigos e empresas!',
  },
  {
    number: '+10.000',
    label: 'MENSAGENS ANÔNIMAS',
    icon: '💬',
    color: '#7AB4E0',
    bgFrom: '#0a1a2a',
    bgVia: '#152a3a',
    detail: 'O chat mais divertido!',
  },
  {
    number: '4.9/5',
    label: 'NOTA MÉDIA',
    icon: '⭐',
    color: '#F5A945',
    bgFrom: '#2a1a0a',
    bgVia: '#3a2515',
    detail: '+1000 avaliações 5 estrelas',
    cta: true,
  },
];

export function Post18NumerosDezembro({ slideIndex = 0, preview = true }: Post18NumerosDezembrosProps) {
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

      {/* Giant glowing orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl animate-pulse"
        style={{
          width: preview ? '250px' : '600px',
          height: preview ? '250px' : '600px',
          background: `radial-gradient(circle, ${slide.color}40 0%, transparent 60%)`,
        }}
      />

      {/* Floating particles */}
      {['✨', '📈', '🚀', '💪', '✨', '📊'].map((emoji, i) => (
        <div
          key={i}
          className="absolute animate-pulse"
          style={{
            top: `${10 + (i * 14)}%`,
            left: `${5 + ((i * 17) % 85)}%`,
            fontSize: preview ? '18px' : '45px',
            opacity: 0.5,
            animationDelay: `${i * 0.3}s`,
            filter: `drop-shadow(0 0 10px ${slide.color}80)`,
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

        {slideIndex === 0 ? (
          <>
            {/* Intro slide */}
            <div
              className="mb-6 animate-bounce"
              style={{
                fontSize: preview ? '70px' : '180px',
                filter: `drop-shadow(0 0 40px ${slide.color}80)`,
                animationDuration: '2s',
              }}
            >
              {slide.icon}
            </div>

            <h1
              className="font-bold text-white/80 leading-none tracking-tight"
              style={{ fontSize: preview ? '20px' : '52px' }}
            >
              {slide.title}
            </h1>

            <div
              className="font-black leading-none mt-2 tracking-tight"
              style={{
                fontSize: preview ? '32px' : '80px',
                color: slide.color,
                textShadow: `0 0 50px ${slide.color}60`,
              }}
            >
              {slide.highlight}
            </div>

            <p
              className="text-white/60 mt-4 font-medium"
              style={{ fontSize: preview ? '14px' : '32px' }}
            >
              {slide.subtitle}
            </p>

            <div
              className="mt-8 px-6 py-3 animate-pulse font-bold text-white"
              style={{
                fontSize: preview ? '12px' : '28px',
                background: `linear-gradient(135deg, ${slide.color} 0%, ${slide.color}80 100%)`,
                boxShadow: `0 0 30px ${slide.color}50`,
              }}
            >
              Deslize para ver →
            </div>
          </>
        ) : (
          <>
            {/* Stats slides */}
            <div
              className="mb-4 animate-bounce"
              style={{
                fontSize: preview ? '60px' : '150px',
                filter: `drop-shadow(0 0 40px ${slide.color}80)`,
                animationDuration: '2s',
              }}
            >
              {slide.icon}
            </div>

            <div
              className="font-black leading-none animate-pulse"
              style={{
                fontSize: preview ? '56px' : '140px',
                color: slide.color,
                textShadow: `0 0 60px ${slide.color}80`,
              }}
            >
              {slide.number}
            </div>

            <h2
              className="font-bold text-white mt-2 uppercase tracking-wide"
              style={{ fontSize: preview ? '14px' : '36px' }}
            >
              {slide.label}
            </h2>

            <p
              className="text-white/60 mt-2"
              style={{ fontSize: preview ? '12px' : '28px' }}
            >
              {slide.detail}
            </p>

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
                <div
                  className="mt-4 px-8 py-3 font-bold animate-pulse"
                  style={{
                    fontSize: preview ? '12px' : '28px',
                    padding: preview ? '10px 24px' : '18px 48px',
                    background: `linear-gradient(135deg, ${slide.color} 0%, #D4623A 100%)`,
                    color: '#FFFFFF',
                    boxShadow: `0 0 40px ${slide.color}50`,
                  }}
                >
                  OBRIGADO! Vocês são demais! 💚
                </div>
              </>
            )}
          </>
        )}
      </div>

      <CarouselIndicator total={slides.length} current={slideIndex} preview={preview} />
    </PostFrame>
  );
}
