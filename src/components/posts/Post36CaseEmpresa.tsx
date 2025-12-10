'use client';

import { PostFrame, CarouselIndicator } from '../ui/PostFrame';
import Image from 'next/image';

interface Post36CaseEmpresaProps {
  slideIndex?: number;
  preview?: boolean;
}

const slides = [
  {
    type: 'intro',
    title: 'CASE DE',
    highlight: 'SUCESSO',
    subtitle: 'Empresa que usou o app 🏢',
    icon: '💼',
    color: '#7AB4E0',
    bgFrom: '#0a1520',
    bgVia: '#152535',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1080&h=1920&fit=crop',
  },
  {
    type: 'problem',
    title: 'O DESAFIO',
    description: 'Time de 50 pessoas',
    detail: 'Organizar amigo secreto sem conflitos',
    icon: '🤯',
    color: '#D4623A',
    bgFrom: '#200a0a',
    bgVia: '#351515',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1080&h=1920&fit=crop',
  },
  {
    type: 'solution',
    title: 'A SOLUÇÃO',
    highlight: 'O AMIGO SECRETO',
    results: [
      { icon: '✅', text: 'Sorteio em 2 minutos' },
      { icon: '✅', text: 'Zero reclamações' },
      { icon: '✅', text: 'RH aliviado' },
    ],
    color: '#6AAF52',
    bgFrom: '#0a200a',
    bgVia: '#153515',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1080&h=1920&fit=crop',
  },
];

export function Post36CaseEmpresa({ slideIndex = 0, preview = true }: Post36CaseEmpresaProps) {
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
          width: preview ? '180px' : '450px',
          height: preview ? '180px' : '450px',
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
        B2B
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
                fontSize: preview ? '44px' : '110px',
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
                background: `linear-gradient(135deg, ${slide.color} 0%, #D4623A 100%)`,
                boxShadow: `0 0 30px ${slide.color}50`,
              }}
            >
              Veja o caso →
            </div>
          </>
        )}

        {slide.type === 'problem' && (
          <>
            <h2
              className="font-black"
              style={{
                fontSize: preview ? '32px' : '80px',
                color: slide.color,
                textShadow: `0 0 40px ${slide.color}60`,
              }}
            >
              {slide.title}
            </h2>
            <p
              className="text-white font-bold mt-4"
              style={{ fontSize: preview ? '22px' : '55px' }}
            >
              {slide.description}
            </p>
            <div
              className="mt-6 px-6 py-4 bg-white/10 backdrop-blur border border-white/20"
              style={{ padding: preview ? '16px 24px' : '32px 48px' }}
            >
              <p
                className="text-white/80 font-medium"
                style={{ fontSize: preview ? '14px' : '32px' }}
              >
                😰 {slide.detail}
              </p>
            </div>
          </>
        )}

        {slide.type === 'solution' && (
          <>
            <h2
              className="font-bold text-white/70"
              style={{ fontSize: preview ? '20px' : '50px' }}
            >
              {slide.title}
            </h2>
            <h1
              className="font-black mt-2"
              style={{
                fontSize: preview ? '32px' : '80px',
                background: `linear-gradient(135deg, ${slide.color} 0%, #F5A945 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: `drop-shadow(0 0 30px ${slide.color}60)`,
              }}
            >
              {slide.highlight}
            </h1>

            <div className="mt-6 space-y-3">
              {slide.results.map((r, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur border border-white/20"
                  style={{
                    fontSize: preview ? '13px' : '30px',
                    padding: preview ? '10px 20px' : '20px 40px',
                  }}
                >
                  <span style={{ fontSize: preview ? '18px' : '44px' }}>{r.icon}</span>
                  <span className="text-white font-medium">{r.text}</span>
                </div>
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
              Use na sua empresa! 💼
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
