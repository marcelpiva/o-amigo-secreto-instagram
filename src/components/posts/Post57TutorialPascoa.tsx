'use client';

import { PostFrame, CarouselIndicator } from '../ui/PostFrame';
import Image from 'next/image';

interface Post57TutorialPascoaProps {
  slideIndex?: number;
  preview?: boolean;
}

const slides = [
  {
    type: 'intro',
    title: 'CRIE UM GRUPO',
    highlight: 'DE PÁSCOA',
    subtitle: 'Tutorial super rápido!',
    icon: '🐰',
    color: '#9B59B6',
    bgFrom: '#1a0a20',
    bgVia: '#3a1a40',
    image: 'https://images.unsplash.com/photo-1457301353672-324d6d14f471?w=1080&h=1920&fit=crop',
  },
  {
    type: 'steps',
    title: 'EM MENOS DE',
    highlight: '1 MINUTO!',
    steps: [
      { num: 1, text: 'Baixe o app', emoji: '📱', time: '10s' },
      { num: 2, text: 'Crie "Amigo Chocolate"', emoji: '🍫', time: '15s' },
      { num: 3, text: 'Convide a família', emoji: '👨‍👩‍👧‍👦', time: '20s' },
      { num: 4, text: 'Faça o sorteio!', emoji: '🎲', time: '5s' },
    ],
    icon: '⏱️',
    color: '#8B4513',
    bgFrom: '#1a1005',
    bgVia: '#2a2010',
    image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=1080&h=1920&fit=crop',
  },
  {
    type: 'cta',
    title: 'PRONTO!',
    highlight: '60 SEGUNDOS',
    subtitle: 'É só isso! Celebre a Páscoa!',
    icon: '🎉',
    color: '#6AAF52',
    bgFrom: '#0a200a',
    bgVia: '#153515',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=1080&h=1920&fit=crop',
  },
];

export function Post57TutorialPascoa({ slideIndex = 0, preview = true }: Post57TutorialPascoaProps) {
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
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl animate-pulse"
        style={{
          width: preview ? '220px' : '550px',
          height: preview ? '220px' : '550px',
          background: `radial-gradient(circle, ${slide.color}40 0%, transparent 60%)`,
        }}
      />

      {/* Easter emojis */}
      {['🐰', '🍫', '🥚', '🐣', '✨', '🎀'].map((emoji, i) => (
        <div
          key={i}
          className="absolute animate-bounce"
          style={{
            top: `${5 + (i * 14)}%`,
            left: `${8 + ((i * 15) % 80)}%`,
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
        <div
          className="mb-6 animate-bounce"
          style={{
            fontSize: preview ? '80px' : '200px',
            filter: `drop-shadow(0 0 60px ${slide.color}90) drop-shadow(0 0 120px ${slide.color}50)`,
            animationDuration: '2s',
          }}
        >
          {slide.icon}
        </div>

        {slide.type === 'intro' && (
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
                fontSize: preview ? '40px' : '100px',
                background: `linear-gradient(135deg, ${slide.color} 0%, #8B4513 100%)`,
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
              className="mt-8 px-8 py-4 font-black text-white animate-pulse"
              style={{
                fontSize: preview ? '14px' : '32px',
                background: `linear-gradient(135deg, ${slide.color} 0%, #8B4513 100%)`,
                boxShadow: `0 0 40px ${slide.color}60`,
              }}
            >
              Arraste para ver →
            </div>
          </>
        )}

        {slide.type === 'steps' && (
          <>
            <h1
              className="font-bold text-white/80 leading-none"
              style={{ fontSize: preview ? '24px' : '60px' }}
            >
              {slide.title}
            </h1>
            <h1
              className="font-black leading-none mt-2 mb-6"
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

            <div className="w-full space-y-3">
              {slide.steps.map((step) => (
                <div
                  key={step.num}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-lg border border-white/20"
                  style={{ padding: preview ? '10px 16px' : '20px 32px' }}
                >
                  <span
                    className="flex items-center justify-center font-black shrink-0"
                    style={{
                      width: preview ? '28px' : '56px',
                      height: preview ? '28px' : '56px',
                      backgroundColor: slide.color,
                      color: '#FFFFFF',
                      fontSize: preview ? '12px' : '24px',
                    }}
                  >
                    {step.num}
                  </span>
                  <span
                    className="text-white font-medium flex-1 text-left"
                    style={{ fontSize: preview ? '11px' : '26px' }}
                  >
                    {step.text}
                  </span>
                  <span style={{ fontSize: preview ? '20px' : '48px' }}>{step.emoji}</span>
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
                fontSize: preview ? '48px' : '120px',
                textShadow: '0 4px 30px rgba(0,0,0,0.5)',
              }}
            >
              {slide.title}
            </h1>
            <h1
              className="font-black leading-none mt-2"
              style={{
                fontSize: preview ? '32px' : '80px',
                background: `linear-gradient(135deg, ${slide.color} 0%, #9B59B6 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: `drop-shadow(0 0 40px ${slide.color}60)`,
              }}
            >
              {slide.highlight}
            </h1>
            <p
              className="text-white/70 mt-4 font-medium"
              style={{ fontSize: preview ? '14px' : '32px' }}
            >
              {slide.subtitle}
            </p>

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
              Comece agora! 🐰
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
