'use client';

import { PostFrame, CarouselIndicator } from '../ui/PostFrame';
import Image from 'next/image';

interface Post28EnqueteFeatureProps {
  slideIndex?: number;
  preview?: boolean;
}

const slides = [
  {
    type: 'question',
    title: 'QUAL FEATURE',
    highlight: 'VOCÊ MAIS USA?',
    subtitle: 'Vote agora! 👇',
    icon: '📊',
    color: '#7AB4E0',
    bgFrom: '#0a1520',
    bgVia: '#152535',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1080&h=1920&fit=crop',
  },
  {
    type: 'poll',
    options: [
      { icon: '🎲', name: 'Sorteio inteligente', desc: 'Algoritmo perfeito' },
      { icon: '🗳️', name: 'Sorteio Democratico', desc: 'Todo mundo vota!', isNew: true },
      { icon: '💬', name: 'Chat anonimo', desc: 'Converse em segredo' },
      { icon: '📝', name: 'Wishlist', desc: 'Lista de desejos' },
    ],
    cta: 'Deslize para mais!',
    color: '#7AB4E0',
    bgFrom: '#0a1520',
    bgVia: '#152535',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1080&h=1920&fit=crop',
  },
  {
    type: 'poll',
    options: [
      { icon: '🎵', name: 'Temas Divertidos', desc: 'Musica, filme, meme', isNew: true },
      { icon: '📸', name: 'Mural de Fotos', desc: 'Feed do grupo', isNew: true },
      { icon: '❓', name: 'Quiz do Grupo', desc: 'Perguntas divertidas', isNew: true },
      { icon: '🏆', name: 'Ranking de Presentes', desc: 'Vote no melhor!', isNew: true },
    ],
    cta: 'Experimente todas!',
    color: '#6AAF52',
    bgFrom: '#0a1520',
    bgVia: '#152535',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1080&h=1920&fit=crop',
  },
];

export function Post28EnqueteFeature({ slideIndex = 0, preview = true }: Post28EnqueteFeatureProps) {
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

      {/* Floating emojis */}
      {['📊', '✨', '🎯', '💡', '🎁'].map((emoji, i) => (
        <div
          key={i}
          className="absolute animate-pulse"
          style={{
            top: `${10 + (i * 16)}%`,
            left: `${8 + ((i * 19) % 80)}%`,
            fontSize: preview ? '22px' : '55px',
            opacity: 0.5,
            animationDelay: `${i * 0.3}s`,
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
              style={{ fontSize: preview ? '24px' : '60px' }}
            >
              {slide.title}
            </h1>
            <h1
              className="font-black leading-none mt-2"
              style={{
                fontSize: preview ? '32px' : '80px',
                background: `linear-gradient(135deg, ${slide.color} 0%, #F5A945 100%)`,
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

            {/* Instagram poll stickers simulation */}
            <div className="mt-6 w-full max-w-xs space-y-3">
              {['🎲 Sorteio', '💬 Chat', '📝 Wishlist', '🏆 Badges'].map((opt, i) => (
                <div
                  key={i}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur border border-white/20 text-white font-medium text-left"
                  style={{
                    fontSize: preview ? '12px' : '28px',
                    padding: preview ? '10px 16px' : '20px 32px',
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
              className="font-black text-white mb-4"
              style={{
                fontSize: preview ? '22px' : '55px',
                textShadow: '0 4px 30px rgba(0,0,0,0.5)',
              }}
            >
              TODAS SÃO INCRÍVEIS! 🎉
            </h2>

            <div className="w-full max-w-sm space-y-3">
              {slide.options.map((opt, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-4 py-3 bg-white/10 backdrop-blur border border-white/20 relative"
                  style={{ padding: preview ? '12px 16px' : '24px 32px' }}
                >
                  {opt.isNew && (
                    <div
                      className="absolute -top-1 -right-1 px-2 py-0.5 font-bold text-white"
                      style={{
                        fontSize: preview ? '8px' : '18px',
                        background: '#6AAF52',
                        padding: preview ? '2px 6px' : '4px 12px',
                      }}
                    >
                      NOVO
                    </div>
                  )}
                  <span style={{ fontSize: preview ? '24px' : '60px' }}>{opt.icon}</span>
                  <div className="text-left">
                    <p
                      className="text-white font-bold"
                      style={{ fontSize: preview ? '13px' : '30px' }}
                    >
                      {opt.name}
                    </p>
                    <p
                      className="text-white/60"
                      style={{ fontSize: preview ? '10px' : '22px' }}
                    >
                      {opt.desc}
                    </p>
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
              {slide.cta} 📱
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
