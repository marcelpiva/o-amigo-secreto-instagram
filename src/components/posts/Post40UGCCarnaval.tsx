'use client';

import { PostFrame, CarouselIndicator } from '../ui/PostFrame';
import Image from 'next/image';

interface Post40UGCCarnavalProps {
  slideIndex?: number;
  preview?: boolean;
}

const slides = [
  {
    type: 'call',
    title: 'MOSTRE SEU',
    highlight: 'GRUPO!',
    subtitle: 'Queremos ver sua folia 🎭',
    icon: '📸',
    color: '#F5A945',
    bgFrom: '#1a1505',
    bgVia: '#2a2510',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1080&h=1920&fit=crop',
  },
  {
    type: 'howto',
    title: 'COMO PARTICIPAR',
    steps: [
      'Tire uma foto do seu grupo',
      'Poste usando #OAmigoSecreto',
      'Apareça nos nossos Stories!',
    ],
    icon: '🎉',
    color: '#9B59B6',
    bgFrom: '#1a0a20',
    bgVia: '#2a1535',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1080&h=1920&fit=crop',
  },
];

export function Post40UGCCarnaval({ slideIndex = 0, preview = true }: Post40UGCCarnavalProps) {
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

      {/* Floating emojis */}
      {['📸', '🎭', '🎊', '✨', '🥳', '💃'].map((emoji, i) => (
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

        {slide.type === 'call' && (
          <>
            <h1
              className="font-bold text-white/80 leading-none"
              style={{ fontSize: preview ? '26px' : '65px' }}
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
              Saiba como →
            </div>
          </>
        )}

        {slide.type === 'howto' && (
          <>
            <h2
              className="font-black mb-6"
              style={{
                fontSize: preview ? '26px' : '65px',
                color: slide.color,
                textShadow: `0 0 40px ${slide.color}60`,
              }}
            >
              {slide.title}
            </h2>

            <div className="space-y-4">
              {slide.steps.map((step, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-4 py-3 bg-white/10 backdrop-blur border border-white/20"
                  style={{
                    fontSize: preview ? '13px' : '30px',
                    padding: preview ? '12px 20px' : '24px 40px',
                  }}
                >
                  <span
                    className="flex items-center justify-center font-black text-white rounded-full"
                    style={{
                      width: preview ? '28px' : '70px',
                      height: preview ? '28px' : '70px',
                      fontSize: preview ? '14px' : '32px',
                      background: `linear-gradient(135deg, ${slide.color} 0%, #D4623A 100%)`,
                    }}
                  >
                    {i + 1}
                  </span>
                  <span className="text-white font-medium text-left">{step}</span>
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
              #OAmigoSecreto
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
              Participe agora! 📸
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
