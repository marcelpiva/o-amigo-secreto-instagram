'use client';

import { PostFrame, CarouselIndicator } from '../ui/PostFrame';
import Image from 'next/image';

interface Post34PollCarnavalProps {
  slideIndex?: number;
  preview?: boolean;
}

const slides = [
  {
    type: 'question',
    title: 'VAI PULAR',
    highlight: 'CARNAVAL?',
    subtitle: 'Vote agora! 🎭',
    icon: '🎉',
    color: '#F5A945',
    bgFrom: '#1a1505',
    bgVia: '#2a2510',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1080&h=1920&fit=crop',
  },
  {
    type: 'results',
    title: 'BORA ORGANIZAR!',
    options: [
      { label: 'SIM! 🎊', percent: '72%' },
      { label: 'Talvez 🤔', percent: '18%' },
      { label: 'Não 😴', percent: '10%' },
    ],
    cta: 'Crie seu Amigo Folia!',
    color: '#9B59B6',
    bgFrom: '#1a0a20',
    bgVia: '#2a1535',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1080&h=1920&fit=crop',
  },
];

export function Post34PollCarnaval({ slideIndex = 0, preview = true }: Post34PollCarnavalProps) {
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
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl animate-pulse"
        style={{
          width: preview ? '200px' : '500px',
          height: preview ? '200px' : '500px',
          background: `radial-gradient(circle, ${slide.color}30 0%, transparent 60%)`,
        }}
      />

      {/* Confetti emojis */}
      {['🎊', '🎭', '🎉', '✨', '🥳'].map((emoji, i) => (
        <div
          key={i}
          className="absolute animate-bounce"
          style={{
            top: `${10 + (i * 16)}%`,
            left: `${8 + ((i * 19) % 80)}%`,
            fontSize: preview ? '24px' : '60px',
            opacity: 0.5,
            animationDelay: `${i * 0.2}s`,
            animationDuration: '2s',
            filter: `drop-shadow(0 0 15px ${slide.color}80)`,
          }}
        >
          {emoji}
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        {slide.type === 'question' && (
          <>
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

            <h1
              className="font-bold text-white/80 leading-none"
              style={{ fontSize: preview ? '28px' : '70px' }}
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
              className="text-white/60 mt-6 font-medium"
              style={{ fontSize: preview ? '16px' : '38px' }}
            >
              {slide.subtitle}
            </p>

            {/* Poll options */}
            <div className="mt-8 w-full max-w-xs space-y-3">
              {['SIM! 🎊', 'Talvez 🤔', 'Não 😴'].map((opt, i) => (
                <div
                  key={i}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur border border-white/20 text-white font-medium"
                  style={{
                    fontSize: preview ? '13px' : '30px',
                    padding: preview ? '12px 20px' : '24px 40px',
                  }}
                >
                  {opt}
                </div>
              ))}
            </div>
          </>
        )}

        {slide.type === 'results' && (
          <>
            <h2
              className="font-black text-white mb-6"
              style={{
                fontSize: preview ? '28px' : '70px',
                textShadow: '0 4px 30px rgba(0,0,0,0.5)',
              }}
            >
              {slide.title} 🎉
            </h2>

            <div className="w-full max-w-sm space-y-4">
              {slide.options.map((opt, i) => (
                <div key={i} className="relative overflow-hidden">
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(90deg, ${slide.color}50 0%, transparent ${opt.percent})`,
                    }}
                  />
                  <div
                    className="relative flex items-center justify-between px-4 py-3 border border-white/20"
                    style={{ padding: preview ? '12px 16px' : '24px 32px' }}
                  >
                    <span
                      className="text-white font-bold"
                      style={{ fontSize: preview ? '14px' : '32px' }}
                    >
                      {opt.label}
                    </span>
                    <span
                      className="font-black"
                      style={{
                        fontSize: preview ? '18px' : '44px',
                        color: slide.color,
                      }}
                    >
                      {opt.percent}
                    </span>
                  </div>
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
              {slide.cta} 🎭
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
