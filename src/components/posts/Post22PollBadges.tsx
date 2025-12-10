'use client';

import { PostFrame, CarouselIndicator } from '../ui/PostFrame';
import Image from 'next/image';

interface Post22PollBadgesProps {
  slideIndex?: number;
  preview?: boolean;
}

const slides = [
  {
    type: 'question',
    title: 'QUAL BADGE',
    highlight: 'VOCÊ JÁ TEM?',
    subtitle: 'Toque para votar!',
    icon: '🏆',
    color: '#F5A945',
    bgFrom: '#1a1505',
    bgVia: '#2a2510',
    image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=1080&h=1920&fit=crop',
  },
  {
    type: 'poll',
    options: [
      { icon: '👑', name: 'ORGANIZADOR', votes: '45%' },
      { icon: '🌟', name: 'POPULAR', votes: '25%' },
      { icon: '💬', name: 'COMUNICATIVO', votes: '20%' },
      { icon: '🎯', name: 'EXPERT', votes: '10%' },
    ],
    cta: 'Conquiste mais badges!',
    color: '#F5A945',
    bgFrom: '#1a1505',
    bgVia: '#2a2510',
    image: 'https://images.unsplash.com/photo-1533228876829-65c94e7b5025?w=1080&h=1920&fit=crop',
  },
];

export function Post22PollBadges({ slideIndex = 0, preview = true }: Post22PollBadgesProps) {
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
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl animate-pulse"
        style={{
          width: preview ? '200px' : '500px',
          height: preview ? '200px' : '500px',
          background: `radial-gradient(circle, ${slide.color}40 0%, transparent 60%)`,
        }}
      />

      {/* Trophy particles */}
      {['🏅', '⭐', '✨', '🎖️', '💫', '🏆'].map((emoji, i) => (
        <div
          key={i}
          className="absolute animate-bounce"
          style={{
            top: `${10 + (i * 14)}%`,
            left: `${8 + ((i * 17) % 80)}%`,
            fontSize: preview ? '24px' : '60px',
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
        {slide.type === 'question' && (
          <>
            <div
              className="mb-6 animate-bounce"
              style={{
                fontSize: preview ? '90px' : '220px',
                filter: `drop-shadow(0 0 60px ${slide.color}90) drop-shadow(0 0 120px ${slide.color}50)`,
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
              {slide.subtitle} 👆
            </p>

            {/* Instagram poll simulation */}
            <div className="mt-8 w-full max-w-xs space-y-3">
              {['👑 Organizador', '🌟 Popular', '💬 Comunicativo', '🎯 Expert'].map((opt, i) => (
                <div
                  key={i}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 text-white font-medium text-left"
                  style={{
                    fontSize: preview ? '13px' : '30px',
                    padding: preview ? '12px 18px' : '24px 36px',
                  }}
                >
                  {opt}
                </div>
              ))}
            </div>
          </>
        )}

        {slide.type === 'poll' && (
          <>
            <h2
              className="font-black text-white mb-6"
              style={{
                fontSize: preview ? '28px' : '70px',
                textShadow: '0 4px 30px rgba(0,0,0,0.5)',
              }}
            >
              RESULTADO 📊
            </h2>

            <div className="w-full max-w-sm space-y-4">
              {slide.options.map((opt, i) => (
                <div key={i} className="relative overflow-hidden">
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(90deg, ${slide.color}50 0%, transparent ${opt.votes})`,
                    }}
                  />
                  <div
                    className="relative flex items-center justify-between px-4 py-3 border border-white/20"
                    style={{ padding: preview ? '14px 18px' : '28px 36px' }}
                  >
                    <span
                      className="text-white font-bold"
                      style={{ fontSize: preview ? '15px' : '36px' }}
                    >
                      {opt.icon} {opt.name}
                    </span>
                    <span
                      className="font-black"
                      style={{
                        fontSize: preview ? '18px' : '44px',
                        color: slide.color,
                      }}
                    >
                      {opt.votes}
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
                fontSize: preview ? '14px' : '32px',
                padding: preview ? '14px 32px' : '28px 64px',
                color: slide.color,
                boxShadow: '0 0 50px rgba(255,255,255,0.5)',
              }}
            >
              {slide.cta} 🏆
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
