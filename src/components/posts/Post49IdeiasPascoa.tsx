'use client';

import { PostFrame, CarouselIndicator } from '../ui/PostFrame';
import Image from 'next/image';

interface Post49IdeiasPascoaProps {
  slideIndex?: number;
  preview?: boolean;
}

const slides = [
  {
    type: 'intro',
    title: 'IDEIAS DE',
    highlight: 'PRESENTE',
    subtitle: 'Para a Páscoa! 🐰',
    icon: '🎁',
    color: '#8B4513',
    bgFrom: '#1a1005',
    bgVia: '#2a2010',
    image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=1080&h=1920&fit=crop',
  },
  {
    type: 'idea',
    number: 1,
    title: 'OVO DE PÁSCOA',
    description: 'Clássico que nunca falha',
    price: 'R$15-80',
    icon: '🥚',
    color: '#9B59B6',
    bgFrom: '#1a0a20',
    bgVia: '#2a1535',
    image: 'https://images.unsplash.com/photo-1457301353672-324d6d14f471?w=1080&h=1920&fit=crop',
  },
  {
    type: 'idea',
    number: 2,
    title: 'CESTA DE CHOCOLATES',
    description: 'Para quem ama variedade',
    price: 'R$30-100',
    icon: '🍫',
    color: '#8B4513',
    bgFrom: '#1a1005',
    bgVia: '#2a2010',
    image: 'https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=1080&h=1920&fit=crop',
  },
  {
    type: 'cta',
    title: 'MONTE SUA',
    highlight: 'WISHLIST!',
    subtitle: 'E acerte no presente',
    icon: '📝',
    color: '#6AAF52',
    bgFrom: '#0a200a',
    bgVia: '#153515',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=1080&h=1920&fit=crop',
  },
];

export function Post49IdeiasPascoa({ slideIndex = 0, preview = true }: Post49IdeiasPascoaProps) {
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

      {/* Glowing orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl animate-pulse"
        style={{
          width: preview ? '200px' : '500px',
          height: preview ? '200px' : '500px',
          background: `radial-gradient(circle, ${slide.color}40 0%, transparent 60%)`,
        }}
      />

      {/* Easter emojis */}
      {['🐰', '🥚', '🍫', '🐣', '✨', '🌸'].map((emoji, i) => (
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
            fontSize: preview ? '90px' : '230px',
            filter: `drop-shadow(0 0 60px ${slide.color}90) drop-shadow(0 0 120px ${slide.color}50)`,
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
                fontSize: preview ? '48px' : '120px',
                background: `linear-gradient(135deg, ${slide.color} 0%, #9B59B6 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: `drop-shadow(0 0 30px ${slide.color}60)`,
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
              className="mt-8 px-6 py-3 animate-pulse font-bold text-white"
              style={{
                fontSize: preview ? '13px' : '30px',
                background: `linear-gradient(135deg, ${slide.color} 0%, #9B59B6 100%)`,
                boxShadow: `0 0 30px ${slide.color}50`,
              }}
            >
              Confira as ideias →
            </div>
          </>
        )}

        {slide.type === 'idea' && (
          <>
            <div
              className="absolute top-6 right-6 flex items-center justify-center font-black text-white rounded-full"
              style={{
                width: preview ? '40px' : '100px',
                height: preview ? '40px' : '100px',
                fontSize: preview ? '20px' : '50px',
                background: `linear-gradient(135deg, ${slide.color} 0%, #D4623A 100%)`,
                boxShadow: `0 0 30px ${slide.color}60`,
              }}
            >
              #{slide.number}
            </div>

            <h2
              className="font-black text-white"
              style={{
                fontSize: preview ? '28px' : '70px',
                textShadow: '0 4px 30px rgba(0,0,0,0.5)',
              }}
            >
              {slide.title}
            </h2>
            <p
              className="mt-3 font-medium"
              style={{
                fontSize: preview ? '14px' : '32px',
                color: slide.color,
              }}
            >
              {slide.description}
            </p>
            <div
              className="mt-6 px-8 py-4 bg-white/10 backdrop-blur border border-white/20"
              style={{ padding: preview ? '14px 28px' : '28px 56px' }}
            >
              <p
                className="font-black"
                style={{
                  fontSize: preview ? '18px' : '44px',
                  color: slide.color,
                }}
              >
                💰 {slide.price}
              </p>
            </div>
          </>
        )}

        {slide.type === 'cta' && (
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
                background: `linear-gradient(135deg, ${slide.color} 0%, #9B59B6 100%)`,
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
              Baixe o app! 🐰
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
