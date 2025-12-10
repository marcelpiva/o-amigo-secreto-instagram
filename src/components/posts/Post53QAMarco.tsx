'use client';

import { PostFrame, CarouselIndicator } from '../ui/PostFrame';
import Image from 'next/image';

interface Post53QAMarcoProps {
  slideIndex?: number;
  preview?: boolean;
}

const slides = [
  {
    type: 'question',
    title: 'Q&A COM',
    highlight: 'A EQUIPE',
    subtitle: 'Pergunte qualquer coisa! 💬',
    icon: '🎤',
    color: '#9B59B6',
    bgFrom: '#1a0a20',
    bgVia: '#2a1535',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1080&h=1920&fit=crop',
  },
  {
    type: 'sticker',
    title: 'PERGUNTE',
    highlight: 'AGORA!',
    examples: ['Como surgiu a ideia?', 'Próximas features?', 'Como funciona o algoritmo?'],
    icon: '❓',
    color: '#7AB4E0',
    bgFrom: '#0a1520',
    bgVia: '#152535',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1080&h=1920&fit=crop',
  },
];

export function Post53QAMarco({ slideIndex = 0, preview = true }: Post53QAMarcoProps) {
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
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl animate-pulse"
        style={{
          width: preview ? '220px' : '550px',
          height: preview ? '220px' : '550px',
          background: `radial-gradient(circle, ${slide.color}40 0%, transparent 60%)`,
        }}
      />

      {/* Floating emojis */}
      {['❓', '💬', '🎤', '✨', '💡', '🤔'].map((emoji, i) => (
        <div
          key={i}
          className="absolute animate-bounce"
          style={{
            top: `${8 + (i * 14)}%`,
            left: `${8 + ((i * 17) % 80)}%`,
            fontSize: preview ? '26px' : '65px',
            opacity: 0.5,
            animationDelay: `${i * 0.2}s`,
            animationDuration: '2.5s',
            filter: `drop-shadow(0 0 15px ${slide.color}80)`,
          }}
        >
          {emoji}
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <div
          className="mb-6 animate-bounce"
          style={{
            fontSize: preview ? '90px' : '230px',
            filter: `drop-shadow(0 0 60px ${slide.color}90) drop-shadow(0 0 120px ${slide.color}50)`,
            animationDuration: '2s',
          }}
        >
          {slide.icon}
        </div>

        {slide.type === 'question' && (
          <>
            <h1
              className="font-bold text-white/80 leading-none"
              style={{ fontSize: preview ? '28px' : '70px' }}
            >
              {slide.title}
            </h1>
            <h1
              className="font-black leading-none mt-2"
              style={{
                fontSize: preview ? '44px' : '110px',
                background: `linear-gradient(135deg, ${slide.color} 0%, #D4623A 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: `drop-shadow(0 0 40px ${slide.color}60)`,
              }}
            >
              {slide.highlight}
            </h1>
            <p
              className="text-white/60 mt-6 font-medium"
              style={{ fontSize: preview ? '16px' : '38px' }}
            >
              {slide.subtitle}
            </p>

            {/* Instagram question sticker */}
            <div
              className="mt-8 w-full max-w-xs bg-white/10 backdrop-blur border-2 border-white/30 p-6"
              style={{ padding: preview ? '20px' : '40px' }}
            >
              <p
                className="text-white/50 font-medium"
                style={{ fontSize: preview ? '11px' : '24px' }}
              >
                Toque para escrever...
              </p>
            </div>
          </>
        )}

        {slide.type === 'sticker' && (
          <>
            <h1
              className="font-bold text-white/80 leading-none"
              style={{ fontSize: preview ? '28px' : '70px' }}
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
                filter: `drop-shadow(0 0 40px ${slide.color}60)`,
              }}
            >
              {slide.highlight}
            </h1>

            <div className="mt-6 space-y-3">
              {slide.examples.map((ex, i) => (
                <div
                  key={i}
                  className="px-4 py-2 bg-white/10 backdrop-blur border border-white/20 text-white/70"
                  style={{
                    fontSize: preview ? '11px' : '26px',
                    padding: preview ? '8px 16px' : '16px 32px',
                  }}
                >
                  "{ex}"
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
              className="mt-4 px-8 py-4 bg-white font-black animate-pulse"
              style={{
                fontSize: preview ? '13px' : '30px',
                padding: preview ? '12px 28px' : '24px 56px',
                color: slide.color,
                boxShadow: '0 0 50px rgba(255,255,255,0.5)',
              }}
            >
              Pergunte! 💬
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
