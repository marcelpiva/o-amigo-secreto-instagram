'use client';

import { PostFrame, CarouselIndicator } from '../ui/PostFrame';
import Image from 'next/image';

interface Post24TutorialChatProps {
  slideIndex?: number;
  preview?: boolean;
}

const slides = [
  {
    type: 'intro',
    title: 'CHAT',
    highlight: 'ANÔNIMO',
    subtitle: 'Converse sem revelar quem você é!',
    icon: '💬',
    color: '#7AB4E0',
    bgFrom: '#0a1520',
    bgVia: '#152535',
    image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=1080&h=1920&fit=crop',
  },
  {
    type: 'step',
    stepNumber: 1,
    title: 'ABRA O GRUPO',
    description: 'Acesse o grupo do amigo secreto',
    icon: '👥',
    detail: 'Toque em "Ver meu amigo"',
    color: '#6AAF52',
    bgFrom: '#0a200a',
    bgVia: '#153515',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1080&h=1920&fit=crop',
  },
  {
    type: 'step',
    stepNumber: 2,
    title: 'TOQUE EM CHAT',
    description: 'Encontre o botão de mensagem',
    icon: '💭',
    detail: 'Ícone de chat no canto',
    color: '#F5A945',
    bgFrom: '#201a0a',
    bgVia: '#352a15',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1080&h=1920&fit=crop',
  },
  {
    type: 'cta',
    title: 'PRONTO!',
    highlight: 'MANDE DICAS',
    subtitle: 'Sem revelar quem você é 🤫',
    icon: '🎉',
    color: '#D4623A',
    bgFrom: '#200a0a',
    bgVia: '#351515',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1080&h=1920&fit=crop',
  },
];

export function Post24TutorialChat({ slideIndex = 0, preview = true }: Post24TutorialChatProps) {
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
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl animate-pulse"
        style={{
          width: preview ? '200px' : '500px',
          height: preview ? '200px' : '500px',
          background: `radial-gradient(circle, ${slide.color}40 0%, transparent 60%)`,
        }}
      />

      {/* Floating chat emojis */}
      {['💬', '🤫', '💭', '✨', '🎁', '😊'].map((emoji, i) => (
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

        {slide.type === 'intro' && (
          <>
            <div
              className="mb-4 animate-bounce"
              style={{
                fontSize: preview ? '90px' : '220px',
                filter: `drop-shadow(0 0 60px ${slide.color}90) drop-shadow(0 0 120px ${slide.color}50)`,
                animationDuration: '2s',
              }}
            >
              {slide.icon}
            </div>

            <h1
              className="font-bold text-white/70 leading-none"
              style={{ fontSize: preview ? '32px' : '80px' }}
            >
              {slide.title}
            </h1>
            <h1
              className="font-black leading-none mt-2"
              style={{
                fontSize: preview ? '48px' : '120px',
                background: `linear-gradient(135deg, ${slide.color} 0%, #F5A945 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: `drop-shadow(0 0 40px ${slide.color}60)`,
              }}
            >
              {slide.highlight}
            </h1>

            <p
              className="text-white/60 mt-6 font-medium max-w-xs"
              style={{ fontSize: preview ? '15px' : '36px' }}
            >
              {slide.subtitle}
            </p>

            <div
              className="mt-8 px-8 py-4 font-black text-white animate-pulse"
              style={{
                fontSize: preview ? '14px' : '32px',
                background: `linear-gradient(135deg, ${slide.color} 0%, #D4623A 100%)`,
                boxShadow: `0 0 40px ${slide.color}60`,
              }}
            >
              Veja como →
            </div>
          </>
        )}

        {slide.type === 'step' && (
          <>
            {/* Step circle */}
            <div
              className="mb-6 flex items-center justify-center rounded-full animate-pulse"
              style={{
                width: preview ? '90px' : '220px',
                height: preview ? '90px' : '220px',
                background: `linear-gradient(135deg, ${slide.color}30 0%, transparent 100%)`,
                border: `4px solid ${slide.color}`,
                boxShadow: `0 0 50px ${slide.color}50`,
              }}
            >
              <span
                className="font-black text-white"
                style={{ fontSize: preview ? '36px' : '90px' }}
              >
                {slide.stepNumber}
              </span>
            </div>

            <div
              className="mb-4"
              style={{
                fontSize: preview ? '60px' : '150px',
                filter: `drop-shadow(0 0 40px ${slide.color}60)`,
              }}
            >
              {slide.icon}
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
              className="text-white/70 mt-3 font-medium"
              style={{ fontSize: preview ? '15px' : '36px' }}
            >
              {slide.description}
            </p>

            <div
              className="mt-6 px-6 py-3 bg-white/10 backdrop-blur-lg border border-white/20"
              style={{ padding: preview ? '14px 28px' : '28px 56px' }}
            >
              <p
                className="font-medium"
                style={{
                  fontSize: preview ? '13px' : '30px',
                  color: slide.color,
                }}
              >
                👆 {slide.detail}
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
              className="font-black text-white"
              style={{
                fontSize: preview ? '40px' : '100px',
                textShadow: '0 4px 30px rgba(0,0,0,0.5)',
              }}
            >
              {slide.title}
            </h2>

            <h1
              className="font-black mt-2"
              style={{
                fontSize: preview ? '36px' : '90px',
                background: `linear-gradient(135deg, ${slide.color} 0%, #F5A945 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: `drop-shadow(0 0 40px ${slide.color}60)`,
              }}
            >
              {slide.highlight}
            </h1>

            <p
              className="text-white/60 mt-4 font-medium"
              style={{ fontSize: preview ? '15px' : '36px' }}
            >
              {slide.subtitle}
            </p>

            <div
              className="mt-6 px-4 py-2 bg-white/10 backdrop-blur border border-white/20 font-bold text-white"
              style={{
                fontSize: preview ? '11px' : '26px',
                padding: preview ? '10px 20px' : '18px 40px',
              }}
            >
              https://oamigosecreto.app
            </div>

            <div
              className="mt-4 px-8 py-4 bg-white font-black animate-pulse"
              style={{
                fontSize: preview ? '15px' : '36px',
                padding: preview ? '16px 36px' : '32px 72px',
                color: slide.color,
                boxShadow: '0 0 50px rgba(255,255,255,0.5)',
              }}
            >
              Baixe grátis! 📱
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
