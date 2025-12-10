'use client';

import { PostFrame, CarouselIndicator } from '../ui/PostFrame';
import Image from 'next/image';

interface Post43TeaserPascoaProps {
  slideIndex?: number;
  preview?: boolean;
}

const slides = [
  {
    type: 'teaser',
    title: 'PÁSCOA',
    highlight: 'VEM AÍ...',
    subtitle: 'E a gente já está preparando! 🐰',
    icon: '🐣',
    color: '#8B4513',
    bgFrom: '#1a1005',
    bgVia: '#2a2010',
    image: 'https://images.unsplash.com/photo-1457301353672-324d6d14f471?w=1080&h=1920&fit=crop',
  },
  {
    type: 'reveal',
    title: 'AMIGO',
    highlight: 'CHOCOLATE!',
    subtitle: 'Em breve no app 🍫',
    icon: '🍫',
    color: '#9B59B6',
    bgFrom: '#1a0a20',
    bgVia: '#2a1535',
    image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=1080&h=1920&fit=crop',
  },
];

export function Post43TeaserPascoa({ slideIndex = 0, preview = true }: Post43TeaserPascoaProps) {
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

      {/* Easter emojis */}
      {['🐰', '🥚', '🐣', '🍫', '✨', '🌸'].map((emoji, i) => (
        <div
          key={i}
          className="absolute animate-bounce"
          style={{
            top: `${8 + (i * 14)}%`,
            left: `${10 + ((i * 17) % 75)}%`,
            fontSize: preview ? '28px' : '70px',
            opacity: 0.6,
            animationDelay: `${i * 0.2}s`,
            animationDuration: '2.5s',
            filter: `drop-shadow(0 0 15px ${slide.color}80)`,
          }}
        >
          {emoji}
        </div>
      ))}

      {/* Glowing orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl animate-pulse"
        style={{
          width: preview ? '200px' : '500px',
          height: preview ? '200px' : '500px',
          background: `radial-gradient(circle, ${slide.color}40 0%, transparent 60%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">
        <div
          className="mb-6 animate-bounce"
          style={{
            fontSize: preview ? '100px' : '260px',
            filter: `drop-shadow(0 0 60px ${slide.color}90) drop-shadow(0 0 120px ${slide.color}50)`,
            animationDuration: '2s',
          }}
        >
          {slide.icon}
        </div>

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
            fontSize: preview ? '48px' : '120px',
            background: `linear-gradient(135deg, ${slide.color} 0%, #9B59B6 100%)`,
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
              Fique ligado! 🐰
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
