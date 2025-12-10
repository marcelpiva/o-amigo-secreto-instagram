'use client';

import { PostFrame, CarouselIndicator } from '../ui/PostFrame';
import Image from 'next/image';

interface Post21BadgesProps {
  slideIndex?: number;
  preview?: boolean;
}

const slides = [
  {
    type: 'intro',
    title: 'SISTEMA DE',
    highlight: 'BADGES',
    subtitle: 'Conquiste medalhas!',
    icon: '🏆',
    color: '#F5A945',
    bgFrom: '#2a1a0a',
    bgVia: '#3a2515',
  },
  {
    type: 'badge',
    name: 'ORGANIZADOR',
    description: 'Criou seu primeiro grupo',
    icon: '👑',
    color: '#D4623A',
    bgFrom: '#2a0a0a',
    bgVia: '#3a1515',
    requirement: 'Crie 1 grupo',
  },
  {
    type: 'badge',
    name: 'POPULAR',
    description: 'Grupo com +20 pessoas',
    icon: '🌟',
    color: '#F5A945',
    bgFrom: '#2a1a0a',
    bgVia: '#3a2515',
    requirement: 'Convide 20+ amigos',
  },
  {
    type: 'badge',
    name: 'COMUNICATIVO',
    description: 'Enviou 50+ mensagens',
    icon: '💬',
    color: '#7AB4E0',
    bgFrom: '#0a1a2a',
    bgVia: '#152a3a',
    requirement: 'Use o chat anônimo',
  },
  {
    type: 'badge',
    name: 'EXPERT',
    description: 'Organizou 5+ sorteios',
    icon: '🎯',
    color: '#6AAF52',
    bgFrom: '#0a2a0a',
    bgVia: '#153a15',
    requirement: 'Organize mais sorteios',
    cta: true,
  },
];

export function Post21Badges({ slideIndex = 0, preview = true }: Post21BadgesProps) {
  const slide = slides[slideIndex];

  return (
    <PostFrame size="square" preview={preview} showLogo={slideIndex === slides.length - 1}>
      {/* Dynamic gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${slide.bgFrom} 0%, ${slide.bgVia} 50%, ${slide.bgFrom} 100%)`,
        }}
      />

      {/* Hexagon pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(${slide.color}30 1px, transparent 1px),
            linear-gradient(60deg, ${slide.color}30 1px, transparent 1px),
            linear-gradient(120deg, ${slide.color}30 1px, transparent 1px)
          `,
          backgroundSize: preview ? '40px 40px' : '100px 100px',
        }}
      />

      {/* Glowing orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl animate-pulse"
        style={{
          width: preview ? '250px' : '600px',
          height: preview ? '250px' : '600px',
          background: `radial-gradient(circle, ${slide.color}40 0%, transparent 60%)`,
        }}
      />

      {/* Trophy particles */}
      {['🏅', '⭐', '✨', '🎖️', '💫', '🏆'].map((emoji, i) => (
        <div
          key={i}
          className="absolute animate-pulse"
          style={{
            top: `${10 + (i * 14)}%`,
            left: `${5 + ((i * 17) % 85)}%`,
            fontSize: preview ? '20px' : '50px',
            opacity: 0.6,
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
          className="absolute top-6 left-6 flex items-center justify-center font-black"
          style={{
            width: preview ? '40px' : '100px',
            height: preview ? '40px' : '100px',
            fontSize: preview ? '18px' : '45px',
            backgroundColor: slide.color,
            color: '#FFFFFF',
            boxShadow: `0 0 30px ${slide.color}60`,
          }}
        >
          {slideIndex + 1}
        </div>

        {slide.type === 'intro' ? (
          <>
            <div
              className="mb-4 animate-bounce"
              style={{
                fontSize: preview ? '80px' : '200px',
                filter: `drop-shadow(0 0 50px ${slide.color}80)`,
                animationDuration: '2s',
              }}
            >
              {slide.icon}
            </div>

            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="O Amigo Secreto"
                width={preview ? 50 : 130}
                height={preview ? 50 : 130}
                style={{ filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.5))' }}
              />
            </div>

            <h1
              className="font-bold text-white/80 leading-none"
              style={{ fontSize: preview ? '20px' : '52px' }}
            >
              {slide.title}
            </h1>
            <h1
              className="font-black leading-none mt-2"
              style={{
                fontSize: preview ? '36px' : '90px',
                color: slide.color,
                textShadow: `0 0 50px ${slide.color}60`,
              }}
            >
              {slide.highlight}
            </h1>

            <p
              className="text-white/70 mt-4 font-medium"
              style={{ fontSize: preview ? '14px' : '32px' }}
            >
              {slide.subtitle} 🎮
            </p>

            <div
              className="mt-6 px-6 py-3 animate-pulse font-bold text-white"
              style={{
                fontSize: preview ? '12px' : '28px',
                background: `linear-gradient(135deg, ${slide.color} 0%, #D4623A 100%)`,
                boxShadow: `0 0 30px ${slide.color}50`,
              }}
            >
              Veja as conquistas →
            </div>
          </>
        ) : (
          <>
            {/* Badge display */}
            <div
              className="mb-2 p-6 rounded-full animate-bounce"
              style={{
                background: `linear-gradient(135deg, ${slide.color}30 0%, ${slide.color}10 100%)`,
                border: `4px solid ${slide.color}`,
                boxShadow: `0 0 60px ${slide.color}50, inset 0 0 40px ${slide.color}20`,
                animationDuration: '2.5s',
              }}
            >
              <span style={{ fontSize: preview ? '60px' : '150px' }}>
                {slide.icon}
              </span>
            </div>

            <h2
              className="font-black mt-4"
              style={{
                fontSize: preview ? '28px' : '70px',
                color: slide.color,
                textShadow: `0 0 40px ${slide.color}60`,
              }}
            >
              {slide.name}
            </h2>

            <p
              className="text-white font-medium mt-2"
              style={{ fontSize: preview ? '14px' : '32px' }}
            >
              {slide.description}
            </p>

            <div
              className="mt-4 px-4 py-2 bg-white/10 backdrop-blur border border-white/20"
              style={{ padding: preview ? '10px 20px' : '20px 40px' }}
            >
              <p
                className="text-white/80"
                style={{ fontSize: preview ? '11px' : '26px' }}
              >
                📌 {slide.requirement}
              </p>
            </div>

            {slide.cta && (
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
                  className="mt-4 px-8 py-3 bg-white font-black animate-pulse"
                  style={{
                    fontSize: preview ? '13px' : '30px',
                    padding: preview ? '12px 28px' : '24px 56px',
                    color: slide.color,
                    boxShadow: `0 0 50px rgba(255,255,255,0.5)`,
                  }}
                >
                  Conquiste todas! 🏆
                </div>
              </>
            )}
          </>
        )}
      </div>

      <CarouselIndicator total={slides.length} current={slideIndex} preview={preview} />
    </PostFrame>
  );
}
