'use client';

import { PostFrame, CarouselIndicator } from '../ui/PostFrame';
import Image from 'next/image';

interface Post48AmigoChocolateProps {
  slideIndex?: number;
  preview?: boolean;
}

const slides = [
  {
    type: 'intro',
    title: 'AMIGO',
    highlight: 'CHOCOLATE',
    subtitle: 'Páscoa 2026',
    icon: '🐰🍫',
    color: '#8B4513',
    bgFrom: '#3d2010',
    bgVia: '#5d3020',
  },
  {
    type: 'what',
    title: 'O QUE É?',
    icon: '🤔',
    color: '#9B59B6',
    bgFrom: '#2a1040',
    bgVia: '#4a2060',
    content: 'Amigo secreto temático de Páscoa!\nTroque chocolates com quem você ama 🍫',
  },
  {
    type: 'how',
    title: 'COMO FUNCIONA?',
    icon: '✅',
    color: '#6AAF52',
    bgFrom: '#0a2a0a',
    bgVia: '#153a15',
    steps: ['Crie um grupo de Páscoa', 'Convide família e amigos', 'Faça o sorteio', 'Troque CHOCOLATES!'],
  },
  {
    type: 'ideas',
    title: 'IDEIAS DE PRESENTE',
    icon: '🎁',
    color: '#F5A945',
    bgFrom: '#2a1a0a',
    bgVia: '#3a2515',
    ideas: [
      { emoji: '🥚', text: 'Ovo de Páscoa' },
      { emoji: '🍫', text: 'Bombons finos' },
      { emoji: '🎨', text: 'Chocolate artesanal' },
      { emoji: '🧺', text: 'Cesta de Páscoa' },
    ],
  },
  {
    type: 'cta',
    title: 'CRIE SEU GRUPO',
    highlight: 'AGORA!',
    icon: '🐰🍫🎁',
    color: '#D4623A',
    bgFrom: '#2a0a0a',
    bgVia: '#3a1515',
    cta: true,
  },
];

export function Post48AmigoChocolate({ slideIndex = 0, preview = true }: Post48AmigoChocolateProps) {
  const slide = slides[slideIndex];

  return (
    <PostFrame size="square" preview={preview} showLogo={slideIndex === slides.length - 1}>
      {/* Dynamic gradient */}
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

      {/* Easter decorations */}
      {['🐰', '🍫', '🥚', '🐣', '🎀', '✨'].map((emoji, i) => (
        <div
          key={i}
          className="absolute animate-bounce"
          style={{
            top: `${8 + (i * 14)}%`,
            left: `${5 + ((i * 17) % 85)}%`,
            fontSize: preview ? '22px' : '55px',
            opacity: 0.7,
            animationDelay: `${i * 0.2}s`,
            animationDuration: '2s',
            filter: `drop-shadow(0 0 15px ${slide.color}80)`,
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

        {slide.type === 'intro' && (
          <>
            <div
              className="mb-4 animate-bounce"
              style={{
                fontSize: preview ? '70px' : '180px',
                filter: `drop-shadow(0 0 40px ${slide.color}80)`,
                animationDuration: '2s',
              }}
            >
              {slide.icon}
            </div>

            <div className="mb-2">
              <Image
                src="/logo.png"
                alt="O Amigo Secreto"
                width={preview ? 50 : 130}
                height={preview ? 50 : 130}
                style={{ filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.5))' }}
              />
            </div>

            <h1
              className="font-black text-white leading-none"
              style={{
                fontSize: preview ? '32px' : '80px',
                textShadow: '0 4px 20px rgba(0,0,0,0.4)',
              }}
            >
              {slide.title}
            </h1>
            <h1
              className="font-black leading-none"
              style={{
                fontSize: preview ? '32px' : '80px',
                color: '#F5A945',
                textShadow: `0 0 50px rgba(245,169,69,0.6)`,
              }}
            >
              {slide.highlight}
            </h1>

            <p
              className="text-white/80 mt-2 font-bold"
              style={{ fontSize: preview ? '14px' : '32px' }}
            >
              {slide.subtitle} 🐣
            </p>

            <div
              className="mt-6 px-6 py-3 animate-pulse font-bold text-white"
              style={{
                fontSize: preview ? '12px' : '28px',
                background: `linear-gradient(135deg, ${slide.color} 0%, #F5A945 100%)`,
                boxShadow: `0 0 30px ${slide.color}50`,
              }}
            >
              Deslize para ver →
            </div>
          </>
        )}

        {slide.type === 'what' && (
          <>
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

            <h2
              className="font-black mb-4"
              style={{
                fontSize: preview ? '24px' : '60px',
                color: slide.color,
                textShadow: `0 0 40px ${slide.color}60`,
              }}
            >
              {slide.title}
            </h2>

            <div
              className="px-6 py-4 bg-white/10 backdrop-blur border border-white/20"
              style={{ padding: preview ? '16px 24px' : '32px 48px' }}
            >
              <p
                className="text-white font-medium whitespace-pre-line"
                style={{ fontSize: preview ? '13px' : '30px' }}
              >
                {slide.content}
              </p>
            </div>

            <div
              className="mt-4"
              style={{ fontSize: preview ? '50px' : '120px' }}
            >
              🥚✨
            </div>
          </>
        )}

        {slide.type === 'how' && (
          <>
            <h2
              className="font-black mb-6"
              style={{
                fontSize: preview ? '20px' : '48px',
                color: slide.color,
                textShadow: `0 0 40px ${slide.color}60`,
              }}
            >
              {slide.icon} {slide.title}
            </h2>

            <div
              className="space-y-3"
              style={{ fontSize: preview ? '12px' : '28px' }}
            >
              {slide.steps?.map((step, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur px-4 py-3 border border-white/20"
                  style={{ boxShadow: `0 0 20px ${slide.color}20` }}
                >
                  <span
                    className="flex items-center justify-center font-black"
                    style={{
                      width: preview ? '28px' : '60px',
                      height: preview ? '28px' : '60px',
                      backgroundColor: slide.color,
                      color: '#FFFFFF',
                      fontSize: preview ? '12px' : '28px',
                    }}
                  >
                    {i + 1}
                  </span>
                  <span className="text-white font-bold">{step}</span>
                </div>
              ))}
            </div>
          </>
        )}

        {slide.type === 'ideas' && (
          <>
            <h2
              className="font-black mb-6"
              style={{
                fontSize: preview ? '18px' : '44px',
                color: slide.color,
                textShadow: `0 0 40px ${slide.color}60`,
              }}
            >
              {slide.icon} {slide.title}
            </h2>

            <div
              className="space-y-2"
              style={{ fontSize: preview ? '12px' : '28px' }}
            >
              {slide.ideas?.map((idea, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-white"
                >
                  <span style={{ fontSize: preview ? '24px' : '56px' }}>{idea.emoji}</span>
                  <span className="font-medium">{idea.text}</span>
                </div>
              ))}
            </div>

            <div
              className="mt-4 px-4 py-2 bg-[#6AAF52]/30 border border-[#6AAF52]/50"
              style={{ padding: preview ? '10px 16px' : '20px 32px' }}
            >
              <p
                className="text-[#6AAF52] font-bold"
                style={{ fontSize: preview ? '11px' : '24px' }}
              >
                💡 Dica de valor: R$30-50 é o ideal
              </p>
            </div>
          </>
        )}

        {slide.type === 'cta' && (
          <>
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

            <h2
              className="font-black text-white"
              style={{
                fontSize: preview ? '24px' : '56px',
              }}
            >
              {slide.title}
            </h2>
            <h2
              className="font-black"
              style={{
                fontSize: preview ? '28px' : '68px',
                color: slide.color,
                textShadow: `0 0 40px ${slide.color}60`,
              }}
            >
              {slide.highlight}
            </h2>

            <p
              className="text-white/70 mt-2"
              style={{ fontSize: preview ? '12px' : '28px' }}
            >
              Páscoa chegando! 🐣
            </p>

            <div
              className="mt-6 px-4 py-2 bg-white/10 backdrop-blur border border-white/20 font-bold text-white"
              style={{
                fontSize: preview ? '11px' : '26px',
                padding: preview ? '8px 16px' : '14px 32px',
              }}
            >
              https://oamigosecreto.app
            </div>

            <div
              className="mt-4 px-8 py-3 bg-white font-black animate-pulse"
              style={{
                fontSize: preview ? '14px' : '32px',
                padding: preview ? '12px 28px' : '24px 56px',
                color: '#8B4513',
                boxShadow: '0 0 50px rgba(255,255,255,0.6)',
              }}
            >
              Baixe agora! 🍫
            </div>
          </>
        )}
      </div>

      <CarouselIndicator total={slides.length} current={slideIndex} preview={preview} />
    </PostFrame>
  );
}
