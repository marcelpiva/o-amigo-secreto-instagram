'use client';

import { PostFrame, CarouselIndicator } from '../ui/PostFrame';
import Image from 'next/image';

interface Post55CountdownPascoaProps {
  slideIndex?: number;
  preview?: boolean;
}

const slides = [
  {
    type: 'countdown',
    days: '7',
    title: 'DIAS PARA',
    highlight: 'PÁSCOA!',
    icon: '🐰',
    color: '#8B4513',
    bgFrom: '#1a1005',
    bgVia: '#2a2010',
    image: 'https://images.unsplash.com/photo-1457301353672-324d6d14f471?w=1080&h=1080&fit=crop',
  },
  {
    type: 'reminder',
    title: 'JÁ CRIOU',
    highlight: 'SEU GRUPO?',
    description: 'Não deixe para última hora!',
    icon: '⏰',
    color: '#9B59B6',
    bgFrom: '#1a0a20',
    bgVia: '#2a1535',
    image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=1080&h=1080&fit=crop',
  },
  {
    type: 'feature',
    title: 'AMIGO CHOCOLATE',
    features: ['Sorteio inteligente', 'Wishlist de chocolates', 'Chat anônimo'],
    icon: '🍫',
    color: '#6AAF52',
    bgFrom: '#0a200a',
    bgVia: '#153515',
    image: 'https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=1080&h=1080&fit=crop',
  },
  {
    type: 'cta',
    title: 'CRIE AGORA',
    highlight: 'É GRÁTIS!',
    subtitle: 'E comemore a Páscoa do jeito certo',
    icon: '🎉',
    color: '#D4623A',
    bgFrom: '#200a0a',
    bgVia: '#351515',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=1080&h=1080&fit=crop',
  },
];

export function Post55CountdownPascoa({ slideIndex = 0, preview = true }: Post55CountdownPascoaProps) {
  const slide = slides[slideIndex];

  return (
    <PostFrame size="square" preview={preview} showLogo={slideIndex === slides.length - 1}>
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
            width: preview ? '180px' : '450px',
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

      {/* Easter emojis */}
      {['🐰', '🥚', '🍫', '🐣', '✨'].map((emoji, i) => (
        <div
          key={i}
          className="absolute animate-bounce"
          style={{
            top: `${12 + (i * 16)}%`,
            left: `${8 + ((i * 19) % 80)}%`,
            fontSize: preview ? '22px' : '55px',
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
          className="absolute top-4 left-4 flex items-center justify-center font-black"
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
          className="mb-4 animate-bounce"
          style={{
            fontSize: preview ? '70px' : '180px',
            filter: `drop-shadow(0 0 50px ${slide.color}80) drop-shadow(0 0 100px ${slide.color}40)`,
            animationDuration: '2s',
          }}
        >
          {slide.icon}
        </div>

        {slide.type === 'countdown' && (
          <>
            <h1
              className="font-black leading-none"
              style={{
                fontSize: preview ? '80px' : '200px',
                color: slide.color,
                textShadow: `0 0 60px ${slide.color}80`,
              }}
            >
              {slide.days}
            </h1>
            <h2
              className="font-bold text-white/80"
              style={{ fontSize: preview ? '20px' : '50px' }}
            >
              {slide.title}
            </h2>
            <h2
              className="font-black mt-2"
              style={{
                fontSize: preview ? '32px' : '80px',
                background: `linear-gradient(135deg, ${slide.color} 0%, #9B59B6 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: `drop-shadow(0 0 30px ${slide.color}60)`,
              }}
            >
              {slide.highlight}
            </h2>
          </>
        )}

        {slide.type === 'reminder' && (
          <>
            <h1
              className="font-bold text-white/80 leading-none"
              style={{ fontSize: preview ? '22px' : '55px' }}
            >
              {slide.title}
            </h1>
            <h1
              className="font-black leading-none mt-2"
              style={{
                fontSize: preview ? '36px' : '90px',
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
              style={{ fontSize: preview ? '12px' : '28px' }}
            >
              {slide.description}
            </p>
          </>
        )}

        {slide.type === 'feature' && (
          <>
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
            <div className="space-y-2">
              {slide.features.map((f, i) => (
                <div
                  key={i}
                  className="px-4 py-2 bg-white/10 backdrop-blur border border-white/20 text-white font-medium"
                  style={{
                    fontSize: preview ? '11px' : '26px',
                    padding: preview ? '8px 16px' : '16px 32px',
                  }}
                >
                  ✅ {f}
                </div>
              ))}
            </div>
          </>
        )}

        {slide.type === 'cta' && (
          <>
            <h1
              className="font-black text-white leading-none"
              style={{
                fontSize: preview ? '28px' : '70px',
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
              style={{ fontSize: preview ? '11px' : '26px' }}
            >
              {slide.subtitle}
            </p>
            <div
              className="mt-4 px-4 py-2 bg-white/10 backdrop-blur border border-white/20 font-bold text-white"
              style={{
                fontSize: preview ? '9px' : '22px',
                padding: preview ? '6px 14px' : '12px 28px',
              }}
            >
              https://oamigosecreto.app
            </div>
            <div
              className="mt-3 px-6 py-2 bg-white font-black animate-pulse"
              style={{
                fontSize: preview ? '11px' : '26px',
                padding: preview ? '10px 24px' : '20px 48px',
                color: slide.color,
                boxShadow: '0 0 50px rgba(255,255,255,0.5)',
              }}
            >
              Baixe agora! 🐰
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
