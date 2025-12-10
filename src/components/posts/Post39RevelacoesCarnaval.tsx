'use client';

import { PostFrame, CarouselIndicator } from '../ui/PostFrame';
import Image from 'next/image';

interface Post39RevelacoesCarnavalProps {
  slideIndex?: number;
  preview?: boolean;
}

const slides = [
  {
    type: 'intro',
    title: 'REVELAÇÕES',
    highlight: 'DE CARNAVAL',
    subtitle: 'Os melhores momentos! 🎭',
    icon: '🎊',
    color: '#F5A945',
    bgFrom: '#1a1505',
    bgVia: '#2a2510',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1080&h=1920&fit=crop',
  },
  {
    type: 'ugc',
    title: 'VOCÊS ARRASARAM!',
    description: 'Compilação dos melhores',
    cta: 'Marque #OAmigoSecreto',
    icon: '🎉',
    color: '#9B59B6',
    bgFrom: '#1a0a20',
    bgVia: '#2a1535',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1080&h=1920&fit=crop',
  },
];

export function Post39RevelacoesCarnaval({ slideIndex = 0, preview = true }: Post39RevelacoesCarnavalProps) {
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
          style={{ filter: 'brightness(0.3)' }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, ${slide.bgFrom}ee 0%, ${slide.bgVia}cc 50%, ${slide.bgFrom}ee 100%)`,
          }}
        />
      </div>

      {/* Confetti emojis */}
      {['🎊', '🎭', '🎉', '✨', '🥳', '🎪', '💃', '🕺'].map((emoji, i) => (
        <div
          key={i}
          className="absolute animate-bounce"
          style={{
            top: `${5 + (i * 11)}%`,
            left: `${5 + ((i * 13) % 85)}%`,
            fontSize: preview ? '28px' : '70px',
            opacity: 0.6,
            animationDelay: `${i * 0.15}s`,
            animationDuration: '2.5s',
            filter: `drop-shadow(0 0 20px ${slide.color}90)`,
          }}
        >
          {emoji}
        </div>
      ))}

      {/* Glowing orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl animate-pulse"
        style={{
          width: preview ? '220px' : '550px',
          height: preview ? '220px' : '550px',
          background: `radial-gradient(circle, ${slide.color}40 0%, transparent 60%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">
        <div
          className="mb-6 animate-bounce"
          style={{
            fontSize: preview ? '100px' : '260px',
            filter: `drop-shadow(0 0 70px ${slide.color}90) drop-shadow(0 0 140px ${slide.color}50)`,
            animationDuration: '2s',
          }}
        >
          {slide.icon}
        </div>

        {slide.type === 'intro' && (
          <>
            <h1
              className="font-black text-white leading-none"
              style={{
                fontSize: preview ? '36px' : '90px',
                textShadow: '0 4px 30px rgba(0,0,0,0.5)',
              }}
            >
              {slide.title}
            </h1>
            <h1
              className="font-black leading-none mt-2"
              style={{
                fontSize: preview ? '40px' : '100px',
                background: `linear-gradient(135deg, ${slide.color} 0%, #9B59B6 100%)`,
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
            <div
              className="mt-8 px-8 py-4 animate-pulse font-bold text-white"
              style={{
                fontSize: preview ? '13px' : '30px',
                background: `linear-gradient(135deg, ${slide.color} 0%, #9B59B6 100%)`,
                boxShadow: `0 0 40px ${slide.color}60`,
              }}
            >
              Assista agora →
            </div>
          </>
        )}

        {slide.type === 'ugc' && (
          <>
            <h2
              className="font-black text-white"
              style={{
                fontSize: preview ? '32px' : '80px',
                textShadow: '0 4px 30px rgba(0,0,0,0.5)',
              }}
            >
              {slide.title}
            </h2>
            <p
              className="text-white/70 mt-4 font-medium"
              style={{ fontSize: preview ? '16px' : '38px' }}
            >
              {slide.description}
            </p>

            <div
              className="mt-8 px-6 py-4 bg-white/10 backdrop-blur border border-white/20"
              style={{ padding: preview ? '16px 24px' : '32px 48px' }}
            >
              <p
                className="font-bold"
                style={{
                  fontSize: preview ? '14px' : '32px',
                  color: slide.color,
                }}
              >
                📸 {slide.cta}
              </p>
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
              Participe! 🎭
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
