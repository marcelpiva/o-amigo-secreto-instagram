'use client';

import { PostFrame, CarouselIndicator } from '../ui/PostFrame';
import Image from 'next/image';

interface Post44TutorialRestricoesProps {
  slideIndex?: number;
  preview?: boolean;
}

const slides = [
  {
    type: 'intro',
    title: 'ALGORITMO DE',
    highlight: 'RESTRIÇÕES',
    subtitle: 'O segredo do sorteio perfeito! 🎯',
    icon: '🔒',
    color: '#D4623A',
    bgFrom: '#200a0a',
    bgVia: '#351515',
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1080&h=1920&fit=crop',
  },
  {
    type: 'feature',
    title: 'COMO FUNCIONA',
    examples: [
      { icon: '💑', text: 'Casais não se tiram' },
      { icon: '👨‍👩‍👧', text: 'Família fica separada' },
      { icon: '🔄', text: 'Ano passado? Nunca repete!' },
    ],
    color: '#6AAF52',
    bgFrom: '#0a200a',
    bgVia: '#153515',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1080&h=1920&fit=crop',
  },
  {
    type: 'cta',
    title: 'SORTEIO',
    highlight: 'INTELIGENTE!',
    subtitle: 'Só o nosso app tem',
    features: ['100% automático', 'Zero conflitos', 'Grátis'],
    icon: '✨',
    color: '#7AB4E0',
    bgFrom: '#0a1520',
    bgVia: '#152535',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1080&h=1920&fit=crop',
  },
];

export function Post44TutorialRestricoes({ slideIndex = 0, preview = true }: Post44TutorialRestricoesProps) {
  const slide = slides[slideIndex];

  return (
    <PostFrame size="story" preview={preview} showLogo={slideIndex === slides.length - 1}>
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src={slide.image}
          alt=""
          fill
          className="object-cover"
          style={{ filter: 'brightness(0.2)' }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, ${slide.bgFrom}ee 0%, ${slide.bgVia}cc 50%, ${slide.bgFrom}ee 100%)`,
          }}
        />
      </div>

      {/* Glowing orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl animate-pulse"
        style={{
          width: preview ? '200px' : '500px',
          height: preview ? '200px' : '500px',
          background: `radial-gradient(circle, ${slide.color}40 0%, transparent 60%)`,
        }}
      />

      {/* Floating emojis */}
      {['🔒', '🎯', '✨', '💡', '🎲'].map((emoji, i) => (
        <div
          key={i}
          className="absolute animate-pulse"
          style={{
            top: `${10 + (i * 16)}%`,
            left: `${8 + ((i * 19) % 80)}%`,
            fontSize: preview ? '24px' : '60px',
            opacity: 0.5,
            animationDelay: `${i * 0.3}s`,
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
            width: preview ? '36px' : '90px',
            height: preview ? '36px' : '90px',
            fontSize: preview ? '16px' : '40px',
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
              className="mb-6 animate-bounce"
              style={{
                fontSize: preview ? '80px' : '200px',
                filter: `drop-shadow(0 0 50px ${slide.color}80)`,
                animationDuration: '2s',
              }}
            >
              {slide.icon}
            </div>

            <h1
              className="font-bold text-white/70 leading-none"
              style={{ fontSize: preview ? '22px' : '55px' }}
            >
              {slide.title}
            </h1>
            <h1
              className="font-black leading-none mt-2"
              style={{
                fontSize: preview ? '40px' : '100px',
                background: `linear-gradient(135deg, ${slide.color} 0%, #F5A945 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: `drop-shadow(0 0 30px ${slide.color}60)`,
              }}
            >
              {slide.highlight}
            </h1>
            <p
              className="text-white/60 mt-6 font-medium"
              style={{ fontSize: preview ? '14px' : '32px' }}
            >
              {slide.subtitle}
            </p>
            <div
              className="mt-8 px-6 py-3 animate-pulse font-bold text-white"
              style={{
                fontSize: preview ? '12px' : '28px',
                background: `linear-gradient(135deg, ${slide.color} 0%, #F5A945 100%)`,
                boxShadow: `0 0 30px ${slide.color}50`,
              }}
            >
              Veja como funciona →
            </div>
          </>
        )}

        {slide.type === 'feature' && (
          <>
            <h2
              className="font-black mb-6"
              style={{
                fontSize: preview ? '28px' : '70px',
                color: slide.color,
                textShadow: `0 0 40px ${slide.color}60`,
              }}
            >
              {slide.title}
            </h2>

            <div className="space-y-4">
              {slide.examples.map((ex, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 px-6 py-4 bg-white/10 backdrop-blur border border-white/20"
                  style={{
                    fontSize: preview ? '14px' : '32px',
                    padding: preview ? '14px 24px' : '28px 48px',
                  }}
                >
                  <span style={{ fontSize: preview ? '28px' : '70px' }}>{ex.icon}</span>
                  <span className="text-white font-medium text-left">{ex.text}</span>
                </div>
              ))}
            </div>
          </>
        )}

        {slide.type === 'cta' && (
          <>
            <div
              className="mb-6 animate-bounce"
              style={{
                fontSize: preview ? '80px' : '200px',
                filter: `drop-shadow(0 0 50px ${slide.color}80)`,
                animationDuration: '2s',
              }}
            >
              {slide.icon}
            </div>

            <h1
              className="font-black text-white leading-none"
              style={{
                fontSize: preview ? '32px' : '80px',
                textShadow: '0 4px 30px rgba(0,0,0,0.5)',
              }}
            >
              {slide.title}
            </h1>
            <h1
              className="font-black leading-none mt-2"
              style={{
                fontSize: preview ? '36px' : '90px',
                background: `linear-gradient(135deg, ${slide.color} 0%, #F5A945 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: `drop-shadow(0 0 30px ${slide.color}60)`,
              }}
            >
              {slide.highlight}
            </h1>
            <p
              className="text-white/60 mt-4 font-medium"
              style={{ fontSize: preview ? '13px' : '30px' }}
            >
              {slide.subtitle}
            </p>

            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {slide.features.map((f, i) => (
                <span
                  key={i}
                  className="px-3 py-2 bg-white/10 backdrop-blur border border-white/20 text-white font-medium"
                  style={{
                    fontSize: preview ? '10px' : '22px',
                    padding: preview ? '6px 12px' : '12px 24px',
                  }}
                >
                  ✅ {f}
                </span>
              ))}
            </div>

            <div
              className="mt-6 px-4 py-2 bg-white/10 backdrop-blur border border-white/20 font-bold text-white"
              style={{
                fontSize: preview ? '10px' : '24px',
                padding: preview ? '8px 16px' : '14px 32px',
              }}
            >
              https://oamigosecreto.app
            </div>

            <div
              className="mt-4 px-8 py-3 bg-white font-black animate-pulse"
              style={{
                fontSize: preview ? '12px' : '28px',
                padding: preview ? '12px 28px' : '24px 56px',
                color: slide.color,
                boxShadow: '0 0 50px rgba(255,255,255,0.5)',
              }}
            >
              Experimente grátis! 🎯
            </div>
          </>
        )}

        {/* Unsplash credit */}
        <div
          className="absolute bottom-2 right-2 text-white/30"
          style={{ fontSize: preview ? '8px' : '18px' }}
        >
          📷 Unsplash
        </div>
      </div>

      <CarouselIndicator total={slides.length} current={slideIndex} preview={preview} />
    </PostFrame>
  );
}
