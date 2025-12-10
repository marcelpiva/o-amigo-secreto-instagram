'use client';

import { PostFrame, CarouselIndicator } from '../ui/PostFrame';
import Image from 'next/image';

interface Post33IdeiasCarnavalProps {
  slideIndex?: number;
  preview?: boolean;
}

const slides = [
  {
    type: 'intro',
    title: '5 IDEIAS DE',
    highlight: 'PRESENTE',
    subtitle: 'Para o Amigo Folia! 🎭',
    icon: '🎁',
    color: '#F5A945',
    bgFrom: '#1a1505',
    bgVia: '#2a2510',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=1080&h=1080&fit=crop',
  },
  {
    type: 'idea',
    number: 1,
    title: 'FANTASIA',
    description: 'Criativa e divertida',
    price: 'R$30-80',
    icon: '🎭',
    color: '#9B59B6',
    bgFrom: '#1a0a20',
    bgVia: '#2a1535',
    image: 'https://images.unsplash.com/photo-1520808663317-647b476a81b9?w=1080&h=1080&fit=crop',
  },
  {
    type: 'idea',
    number: 2,
    title: 'KIT SOBREVIVÊNCIA',
    description: 'Protetor, água, glitter',
    price: 'R$25-50',
    icon: '💧',
    color: '#7AB4E0',
    bgFrom: '#0a1520',
    bgVia: '#152535',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1080&h=1080&fit=crop',
  },
  {
    type: 'idea',
    number: 3,
    title: 'POCHETE ESTILOSA',
    description: 'Prática e fashion',
    price: 'R$40-100',
    icon: '👜',
    color: '#D4623A',
    bgFrom: '#200a0a',
    bgVia: '#351515',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1080&h=1080&fit=crop',
  },
  {
    type: 'cta',
    title: 'MONTE SUA',
    highlight: 'WISHLIST!',
    subtitle: 'E acerte no presente',
    icon: '🎉',
    color: '#F5A945',
    bgFrom: '#1a1505',
    bgVia: '#2a2510',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1080&h=1080&fit=crop',
  },
];

export function Post33IdeiasCarnaval({ slideIndex = 0, preview = true }: Post33IdeiasCarnavalProps) {
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

      {/* Glowing orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl animate-pulse"
        style={{
          width: preview ? '200px' : '500px',
          height: preview ? '200px' : '500px',
          background: `radial-gradient(circle, ${slide.color}30 0%, transparent 60%)`,
        }}
      />

      {/* Confetti emojis */}
      {['🎊', '🎭', '✨', '🎉', '🎁'].map((emoji, i) => (
        <div
          key={i}
          className="absolute animate-pulse"
          style={{
            top: `${12 + (i * 16)}%`,
            left: `${8 + ((i * 19) % 80)}%`,
            fontSize: preview ? '20px' : '50px',
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
              style={{ fontSize: preview ? '20px' : '50px' }}
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
              className="mt-6 px-6 py-3 animate-pulse font-bold text-white"
              style={{
                fontSize: preview ? '12px' : '28px',
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
            {/* Number badge */}
            <div
              className="absolute top-4 right-4 flex items-center justify-center font-black text-white rounded-full"
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
              className="mt-2 font-medium"
              style={{
                fontSize: preview ? '14px' : '32px',
                color: slide.color,
              }}
            >
              {slide.description}
            </p>
            <div
              className="mt-6 px-6 py-3 bg-white/10 backdrop-blur border border-white/20"
              style={{ padding: preview ? '12px 24px' : '24px 48px' }}
            >
              <p
                className="font-bold"
                style={{
                  fontSize: preview ? '16px' : '38px',
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
              style={{ fontSize: preview ? '20px' : '50px' }}
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
                filter: `drop-shadow(0 0 30px ${slide.color}60)`,
              }}
            >
              {slide.highlight}
            </h1>
            <p
              className="text-white/60 mt-4 font-medium"
              style={{ fontSize: preview ? '12px' : '28px' }}
            >
              {slide.subtitle}
            </p>
            <div
              className="mt-4 px-4 py-2 bg-white/10 backdrop-blur border border-white/20 font-bold text-white"
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
              Baixe o app! 🎁
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
