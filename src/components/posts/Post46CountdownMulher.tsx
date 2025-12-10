'use client';

import { PostFrame, CarouselIndicator } from '../ui/PostFrame';
import Image from 'next/image';

interface Post46CountdownMulherProps {
  slideIndex?: number;
  preview?: boolean;
}

const slides = [
  {
    type: 'countdown',
    title: 'FALTAM',
    highlight: '3 DIAS',
    subtitle: 'Dia Internacional da Mulher 🌸',
    icon: '⏰',
    color: '#9B59B6',
    bgFrom: '#1a0a20',
    bgVia: '#2a1535',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1080&h=1920&fit=crop',
  },
  {
    type: 'message',
    title: 'CELEBRE',
    highlight: 'AS MULHERES',
    subtitle: 'Que fazem a diferença na sua vida',
    icon: '💜',
    color: '#D4623A',
    bgFrom: '#200a0a',
    bgVia: '#351515',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1080&h=1920&fit=crop',
  },
];

export function Post46CountdownMulher({ slideIndex = 0, preview = true }: Post46CountdownMulherProps) {
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
          style={{ filter: 'brightness(0.25)' }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, ${slide.bgFrom}ee 0%, ${slide.bgVia}cc 50%, ${slide.bgFrom}ee 100%)`,
          }}
        />
      </div>

      {/* Animated rays */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute top-1/2 left-1/2 origin-left animate-pulse"
          style={{
            width: preview ? '200px' : '500px',
            height: '2px',
            background: `linear-gradient(90deg, ${slide.color}50 0%, transparent 100%)`,
            transform: `translate(-50%, -50%) rotate(${i * 30}deg)`,
            opacity: 0.3,
            animationDelay: `${i * 0.1}s`,
          }}
        />
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

      {/* Floating emojis */}
      {['💜', '🌸', '✨', '👑', '💪', '🌷'].map((emoji, i) => (
        <div
          key={i}
          className="absolute animate-bounce"
          style={{
            top: `${8 + (i * 14)}%`,
            left: `${8 + ((i * 17) % 80)}%`,
            fontSize: preview ? '26px' : '65px',
            opacity: 0.6,
            animationDelay: `${i * 0.2}s`,
            animationDuration: '2.5s',
            filter: `drop-shadow(0 0 15px ${slide.color}80)`,
          }}
        >
          {emoji}
        </div>
      ))}

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

        <h1
          className="font-bold text-white/80 leading-none"
          style={{ fontSize: preview ? '28px' : '70px' }}
        >
          {slide.title}
        </h1>
        <h1
          className="font-black leading-none mt-2"
          style={{
            fontSize: preview ? '52px' : '130px',
            background: `linear-gradient(135deg, ${slide.color} 0%, #D4623A 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: `drop-shadow(0 0 40px ${slide.color}60)`,
          }}
        >
          {slide.highlight}
        </h1>

        <p
          className="text-white/70 mt-6 font-medium"
          style={{ fontSize: preview ? '16px' : '38px' }}
        >
          {slide.subtitle}
        </p>

        {slideIndex === 1 && (
          <>
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
              className="mt-4 px-8 py-4 bg-white font-black animate-pulse"
              style={{
                fontSize: preview ? '14px' : '34px',
                padding: preview ? '14px 32px' : '28px 64px',
                color: slide.color,
                boxShadow: '0 0 50px rgba(255,255,255,0.5)',
              }}
            >
              Marque ela! 💜
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
