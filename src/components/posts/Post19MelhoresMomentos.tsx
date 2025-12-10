'use client';

import { PostFrame, CarouselIndicator } from '../ui/PostFrame';
import Image from 'next/image';

interface Post19MelhoresMomentosProps {
  slideIndex?: number;
  preview?: boolean;
}

const slides = [
  {
    type: 'intro',
    title: 'MELHORES',
    highlight: 'MOMENTOS',
    year: '2025',
    subtitle: 'Uma retrospectiva especial',
    icon: '✨',
    color: '#7AB4E0',
    bgFrom: '#0a1520',
    bgVia: '#152535',
    image: 'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=1080&h=1920&fit=crop',
  },
  {
    type: 'moment',
    title: 'DEZEMBRO',
    highlight: 'LANÇAMENTO',
    description: 'O app que revolucionou o amigo secreto',
    stats: '+5.000 sorteios no 1º mês',
    icon: '🚀',
    color: '#D4623A',
    bgFrom: '#200a0a',
    bgVia: '#351515',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1080&h=1920&fit=crop',
  },
  {
    type: 'moment',
    title: 'MILHARES DE',
    highlight: 'SORRISOS',
    description: 'Famílias e amigos conectados',
    stats: '+2.000 grupos criados',
    icon: '😊',
    color: '#6AAF52',
    bgFrom: '#0a200a',
    bgVia: '#153515',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1080&h=1920&fit=crop',
  },
  {
    type: 'cta',
    title: '2026 SERÁ',
    highlight: 'AINDA MELHOR!',
    subtitle: 'Novas features, mais celebrações',
    features: ['Amigo Folia', 'Amigo Chocolate', 'Amigo Caipira'],
    icon: '🎯',
    color: '#F5A945',
    bgFrom: '#201a0a',
    bgVia: '#352a15',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=1080&h=1920&fit=crop',
  },
];

export function Post19MelhoresMomentos({ slideIndex = 0, preview = true }: Post19MelhoresMomentosProps) {
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
          style={{ filter: 'brightness(0.25) saturate(1.2)' }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, ${slide.bgFrom}ee 0%, ${slide.bgVia}aa 50%, ${slide.bgFrom}ee 100%)`,
          }}
        />
      </div>

      {/* Animated rays */}
      {[...Array(16)].map((_, i) => (
        <div
          key={i}
          className="absolute top-1/2 left-1/2 origin-left animate-pulse"
          style={{
            width: preview ? '250px' : '600px',
            height: '2px',
            background: `linear-gradient(90deg, ${slide.color}60 0%, transparent 100%)`,
            transform: `translate(-50%, -50%) rotate(${i * 22.5}deg)`,
            opacity: 0.4,
            animationDelay: `${i * 0.1}s`,
          }}
        />
      ))}

      {/* Glowing orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl animate-pulse"
        style={{
          width: preview ? '250px' : '600px',
          height: preview ? '250px' : '600px',
          background: `radial-gradient(circle, ${slide.color}50 0%, transparent 60%)`,
        }}
      />

      {/* Sparkle emojis */}
      {['⭐', '🌟', '✨', '💫', '🎊', '🎆', '🎇', '🥳'].map((emoji, i) => (
        <div
          key={i}
          className="absolute animate-bounce"
          style={{
            top: `${5 + (i * 11)}%`,
            left: `${5 + ((i * 13) % 85)}%`,
            fontSize: preview ? '28px' : '70px',
            opacity: 0.6,
            animationDelay: `${i * 0.15}s`,
            animationDuration: '2.5s',
            filter: `drop-shadow(0 0 20px ${slide.color}90)`,
          }}
        >
          {emoji}
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">
        {/* Slide number badge */}
        <div
          className="absolute top-6 left-6 flex items-center justify-center font-black"
          style={{
            width: preview ? '40px' : '100px',
            height: preview ? '40px' : '100px',
            fontSize: preview ? '18px' : '45px',
            backgroundColor: slide.color,
            color: '#FFFFFF',
            boxShadow: `0 0 40px ${slide.color}70`,
          }}
        >
          {slideIndex + 1}
        </div>

        {slide.type === 'intro' && (
          <>
            <div
              className="mb-6 animate-bounce"
              style={{
                fontSize: preview ? '100px' : '250px',
                filter: `drop-shadow(0 0 60px ${slide.color}90) drop-shadow(0 0 120px ${slide.color}50)`,
                animationDuration: '2s',
              }}
            >
              {slide.icon}
            </div>

            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="O Amigo Secreto"
                width={preview ? 60 : 150}
                height={preview ? 60 : 150}
                style={{ filter: 'drop-shadow(0 0 30px rgba(255,255,255,0.6))' }}
              />
            </div>

            <h1
              className="font-bold text-white/80 leading-none tracking-wider"
              style={{ fontSize: preview ? '26px' : '65px' }}
            >
              {slide.title}
            </h1>
            <h1
              className="font-black leading-none mt-2"
              style={{
                fontSize: preview ? '48px' : '120px',
                background: `linear-gradient(135deg, ${slide.color} 0%, #F5A945 50%, #D4623A 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: `drop-shadow(0 0 40px ${slide.color}70)`,
              }}
            >
              {slide.highlight}
            </h1>
            <h1
              className="font-black text-white mt-4"
              style={{
                fontSize: preview ? '60px' : '150px',
                textShadow: `0 0 60px ${slide.color}80, 0 4px 30px rgba(0,0,0,0.5)`,
              }}
            >
              {slide.year}
            </h1>

            <p
              className="text-white/70 mt-6 font-medium"
              style={{ fontSize: preview ? '14px' : '32px' }}
            >
              {slide.subtitle} ✨
            </p>

            <div
              className="mt-8 px-8 py-4 animate-pulse font-bold text-white"
              style={{
                fontSize: preview ? '13px' : '30px',
                background: `linear-gradient(135deg, ${slide.color} 0%, #D4623A 100%)`,
                boxShadow: `0 0 40px ${slide.color}60`,
              }}
            >
              Confira os destaques →
            </div>
          </>
        )}

        {slide.type === 'moment' && (
          <>
            <div
              className="mb-6 animate-bounce"
              style={{
                fontSize: preview ? '100px' : '260px',
                filter: `drop-shadow(0 0 70px ${slide.color}90) drop-shadow(0 0 140px ${slide.color}50)`,
                animationDuration: '2.5s',
              }}
            >
              {slide.icon}
            </div>

            <h2
              className="font-bold text-white/80 tracking-wider"
              style={{ fontSize: preview ? '22px' : '55px' }}
            >
              {slide.title}
            </h2>

            <h1
              className="font-black mt-2"
              style={{
                fontSize: preview ? '44px' : '110px',
                background: `linear-gradient(135deg, ${slide.color} 0%, #F5A945 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: `drop-shadow(0 0 40px ${slide.color}70)`,
              }}
            >
              {slide.highlight}
            </h1>

            <p
              className="text-white/70 mt-4 font-medium max-w-xs"
              style={{ fontSize: preview ? '14px' : '32px' }}
            >
              {slide.description}
            </p>

            <div
              className="mt-6 px-8 py-4 bg-white/10 backdrop-blur-lg border border-white/30"
              style={{ padding: preview ? '16px 32px' : '32px 64px' }}
            >
              <p
                className="font-black"
                style={{
                  fontSize: preview ? '18px' : '44px',
                  color: slide.color,
                  textShadow: `0 0 30px ${slide.color}60`,
                }}
              >
                📊 {slide.stats}
              </p>
            </div>
          </>
        )}

        {slide.type === 'cta' && (
          <>
            <div
              className="mb-6 animate-bounce"
              style={{
                fontSize: preview ? '100px' : '260px',
                filter: `drop-shadow(0 0 70px ${slide.color}90) drop-shadow(0 0 140px ${slide.color}50)`,
                animationDuration: '2s',
              }}
            >
              {slide.icon}
            </div>

            <h2
              className="font-bold text-white/80"
              style={{ fontSize: preview ? '24px' : '60px' }}
            >
              {slide.title}
            </h2>

            <h1
              className="font-black mt-2"
              style={{
                fontSize: preview ? '44px' : '110px',
                background: `linear-gradient(135deg, ${slide.color} 0%, #D4623A 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: `drop-shadow(0 0 40px ${slide.color}70)`,
              }}
            >
              {slide.highlight}
            </h1>

            <p
              className="text-white/60 mt-4 font-medium"
              style={{ fontSize: preview ? '13px' : '30px' }}
            >
              {slide.subtitle}
            </p>

            {/* Feature tags */}
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {slide.features.map((f, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-white/10 backdrop-blur border border-white/20 text-white font-medium"
                  style={{
                    fontSize: preview ? '10px' : '22px',
                    padding: preview ? '6px 12px' : '12px 24px',
                  }}
                >
                  🎊 {f}
                </span>
              ))}
            </div>

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
              className="mt-4 px-10 py-4 bg-white font-black animate-pulse"
              style={{
                fontSize: preview ? '14px' : '34px',
                padding: preview ? '14px 36px' : '28px 72px',
                color: slide.color,
                boxShadow: '0 0 60px rgba(255,255,255,0.6)',
              }}
            >
              Vem com a gente! 🚀
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
