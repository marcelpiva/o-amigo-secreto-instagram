'use client';

import { PostFrame, CarouselIndicator } from '../ui/PostFrame';
import Image from 'next/image';

interface Post37GuiaRHProps {
  slideIndex?: number;
  preview?: boolean;
}

const slides = [
  {
    type: 'intro',
    title: 'GUIA PARA',
    highlight: 'RH',
    subtitle: 'Confraternização perfeita! 🏢',
    icon: '📋',
    color: '#7AB4E0',
    bgFrom: '#0a1520',
    bgVia: '#152535',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1080&h=1920&fit=crop',
  },
  {
    type: 'tip',
    number: 1,
    title: 'CRIE O GRUPO',
    description: 'Adicione todos os colaboradores',
    icon: '👥',
    color: '#6AAF52',
    bgFrom: '#0a200a',
    bgVia: '#153515',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1080&h=1920&fit=crop',
  },
  {
    type: 'cta',
    title: 'ZERO',
    highlight: 'TRABALHO!',
    subtitle: 'O app faz tudo por você',
    features: ['Sorteio automático', 'Notificações', '100% grátis'],
    icon: '🎉',
    color: '#F5A945',
    bgFrom: '#201a0a',
    bgVia: '#352a15',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1080&h=1920&fit=crop',
  },
];

export function Post37GuiaRH({ slideIndex = 0, preview = true }: Post37GuiaRHProps) {
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

      {/* B2B badge */}
      <div
        className="absolute top-6 right-6 px-3 py-1 font-bold text-white"
        style={{
          fontSize: preview ? '10px' : '24px',
          background: 'linear-gradient(135deg, #7AB4E0 0%, #6AAF52 100%)',
          boxShadow: '0 0 20px rgba(122,180,224,0.5)',
        }}
      >
        PARA RH
      </div>

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

        {slide.type === 'intro' && (
          <>
            <h1
              className="font-bold text-white/70 leading-none"
              style={{ fontSize: preview ? '24px' : '60px' }}
            >
              {slide.title}
            </h1>
            <h1
              className="font-black leading-none mt-2"
              style={{
                fontSize: preview ? '60px' : '150px',
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
              style={{ fontSize: preview ? '14px' : '32px' }}
            >
              {slide.subtitle}
            </p>
            <div
              className="mt-8 px-6 py-3 animate-pulse font-bold text-white"
              style={{
                fontSize: preview ? '12px' : '28px',
                background: `linear-gradient(135deg, ${slide.color} 0%, #D4623A 100%)`,
                boxShadow: `0 0 30px ${slide.color}50`,
              }}
            >
              Veja as dicas →
            </div>
          </>
        )}

        {slide.type === 'tip' && (
          <>
            <div
              className="mb-4 flex items-center justify-center rounded-full"
              style={{
                width: preview ? '60px' : '150px',
                height: preview ? '60px' : '150px',
                background: `linear-gradient(135deg, ${slide.color}30 0%, transparent 100%)`,
                border: `3px solid ${slide.color}`,
                boxShadow: `0 0 40px ${slide.color}50`,
              }}
            >
              <span
                className="font-black text-white"
                style={{ fontSize: preview ? '28px' : '70px' }}
              >
                {slide.number}
              </span>
            </div>

            <h2
              className="font-black text-white mt-4"
              style={{
                fontSize: preview ? '28px' : '70px',
                textShadow: '0 4px 30px rgba(0,0,0,0.5)',
              }}
            >
              {slide.title}
            </h2>
            <p
              className="text-white/70 mt-3 font-medium"
              style={{ fontSize: preview ? '14px' : '32px' }}
            >
              {slide.description}
            </p>
          </>
        )}

        {slide.type === 'cta' && (
          <>
            <h1
              className="font-black text-white leading-none"
              style={{
                fontSize: preview ? '44px' : '110px',
                textShadow: '0 4px 30px rgba(0,0,0,0.5)',
              }}
            >
              {slide.title}
            </h1>
            <h1
              className="font-black leading-none mt-2"
              style={{
                fontSize: preview ? '40px' : '100px',
                background: `linear-gradient(135deg, ${slide.color} 0%, #D4623A 100%)`,
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
              Experimente grátis! 💼
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
