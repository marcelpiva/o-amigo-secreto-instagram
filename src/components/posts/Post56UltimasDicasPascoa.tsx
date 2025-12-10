'use client';

import { PostFrame, CarouselIndicator } from '../ui/PostFrame';
import Image from 'next/image';

interface Post56UltimasDicasPascoaProps {
  slideIndex?: number;
  preview?: boolean;
}

const slides = [
  {
    type: 'intro',
    title: 'ÚLTIMAS DICAS',
    highlight: 'ANTES DA PÁSCOA!',
    subtitle: 'Não perca nada! 🐰',
    icon: '⏰',
    color: '#8B4513',
    bgFrom: '#1a1005',
    bgVia: '#2a2010',
    image: 'https://images.unsplash.com/photo-1457301353672-324d6d14f471?w=1080&h=1920&fit=crop',
  },
  {
    type: 'tip1',
    number: 1,
    title: 'CONFIRME O GRUPO',
    description: 'Verifique se todos já entraram e confirmaram participação',
    icon: '✅',
    color: '#6AAF52',
    bgFrom: '#0a200a',
    bgVia: '#153515',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1080&h=1920&fit=crop',
  },
  {
    type: 'tip2',
    number: 2,
    title: 'FAÇA O SORTEIO',
    description: 'Não deixe pra última hora! Dê tempo para as compras',
    icon: '🎲',
    color: '#9B59B6',
    bgFrom: '#1a0a20',
    bgVia: '#2a1535',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=1080&h=1920&fit=crop',
  },
];

export function Post56UltimasDicasPascoa({ slideIndex = 0, preview = true }: Post56UltimasDicasPascoaProps) {
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
      {['🐰', '🥚', '🍫', '⏰', '✨', '🎁'].map((emoji, i) => (
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
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
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
              className="font-bold text-white/80 leading-none"
              style={{ fontSize: preview ? '28px' : '70px' }}
            >
              {slide.title}
            </h1>
            <h1
              className="font-black leading-none mt-2"
              style={{
                fontSize: preview ? '36px' : '90px',
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
              className="mt-8 px-8 py-4 font-black text-white animate-pulse"
              style={{
                fontSize: preview ? '14px' : '32px',
                background: `linear-gradient(135deg, ${slide.color} 0%, #9B59B6 100%)`,
                boxShadow: `0 0 40px ${slide.color}60`,
              }}
            >
              Arraste para ver →
            </div>
          </>
        )}

        {(slide.type === 'tip1' || slide.type === 'tip2') && (
          <>
            {/* Tip number badge */}
            <div
              className="absolute top-6 left-6 flex items-center justify-center font-black text-white rounded-full"
              style={{
                width: preview ? '50px' : '120px',
                height: preview ? '50px' : '120px',
                fontSize: preview ? '24px' : '60px',
                background: `linear-gradient(135deg, ${slide.color} 0%, #D4623A 100%)`,
                boxShadow: `0 0 40px ${slide.color}70`,
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

            <div
              className="mt-6 px-6 py-4 bg-white/10 backdrop-blur-lg border border-white/20"
              style={{ padding: preview ? '20px' : '40px' }}
            >
              <p
                className="text-white/80 font-medium"
                style={{ fontSize: preview ? '14px' : '32px' }}
              >
                {slide.description}
              </p>
            </div>

            {slideIndex === slides.length - 1 && (
              <>
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
                  Organize agora! 🐰
                </div>
              </>
            )}
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
