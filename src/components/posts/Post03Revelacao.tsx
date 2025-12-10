'use client';

import { PostFrame, CarouselIndicator } from '../ui/PostFrame';
import Image from 'next/image';

interface Post03RevelacaoProps {
  slideIndex?: number;
  preview?: boolean;
}

const slides = [
  {
    dark: true,
    title: 'Lembra do problema?',
    highlight: '😤',
    bgGradient: 'from-[#0a0a0a] via-[#1a0a0a] to-[#0a0a0a]',
  },
  {
    dark: true,
    title: 'A SOLUÇÃO',
    highlight: 'CHEGOU',
    bgGradient: 'from-[#0a0a1a] via-[#1a1a3a] to-[#0a0a1a]',
  },
  {
    dark: false,
    showLogo: true,
    title: 'O AMIGO',
    highlight: 'SECRETO',
    subtitle: 'Em breve no iOS e Android',
    bgGradient: 'from-[#D4623A] via-[#FF6B35] to-[#F5A945]',
  },
];

export function Post03Revelacao({ slideIndex = 0, preview = true }: Post03RevelacaoProps) {
  const slide = slides[slideIndex];

  return (
    <PostFrame size="story" preview={preview} showLogo={false}>
      {/* Dynamic gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-b ${slide.bgGradient}`} />

      {/* Animated reveal rays for final slide */}
      {!slide.dark && (
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(16)].map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 origin-bottom opacity-20"
              style={{
                width: preview ? '3px' : '8px',
                height: '150%',
                background: 'linear-gradient(to top, transparent, white)',
                transform: `translate(-50%, -100%) rotate(${i * 22.5}deg)`,
              }}
            />
          ))}
        </div>
      )}

      {/* Glowing orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl animate-pulse"
        style={{
          width: preview ? '200px' : '600px',
          height: preview ? '200px' : '600px',
          background: slide.dark
            ? 'radial-gradient(circle, rgba(122,180,224,0.2) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)',
        }}
      />

      {/* Floating emojis for celebration */}
      {!slide.dark && ['🎉', '✨', '🎁', '⭐', '🎄', '🎊'].map((emoji, i) => (
        <div
          key={i}
          className="absolute animate-bounce"
          style={{
            top: `${10 + (i * 12)}%`,
            left: `${8 + ((i * 18) % 80)}%`,
            fontSize: preview ? '24px' : '60px',
            opacity: 0.8,
            animationDelay: `${i * 0.2}s`,
            animationDuration: '2s',
          }}
        >
          {emoji}
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">
        {/* Logo reveal on final slide */}
        {slide.showLogo && (
          <div
            className="mb-8 animate-bounce"
            style={{
              filter: 'drop-shadow(0 0 40px rgba(255,255,255,0.8))',
              animationDuration: '3s',
            }}
          >
            <Image
              src="/logo.png"
              alt="O Amigo Secreto"
              width={preview ? 100 : 280}
              height={preview ? 100 : 280}
            />
          </div>
        )}

        {/* Emoji highlight for dark slides */}
        {slide.dark && slide.highlight.length <= 4 && (
          <div
            className="mb-6 animate-pulse"
            style={{
              fontSize: preview ? '80px' : '200px',
              filter: 'drop-shadow(0 0 30px rgba(122,180,224,0.6))',
            }}
          >
            {slide.highlight}
          </div>
        )}

        {/* Title */}
        <h1
          className={`font-bold leading-none tracking-tight ${
            slide.dark ? 'text-white/80' : 'text-white'
          }`}
          style={{
            fontSize: preview ? '28px' : '72px',
            textShadow: slide.dark ? 'none' : '0 4px 30px rgba(0,0,0,0.3)',
          }}
        >
          {slide.title}
        </h1>

        {/* Text highlight (for non-emoji highlights) */}
        {slide.highlight.length > 4 && (
          <div
            className="font-black leading-none mt-4 tracking-tight"
            style={{
              fontSize: preview ? '48px' : '120px',
              color: slide.dark ? '#7AB4E0' : '#FFFFFF',
              textShadow: slide.dark
                ? '0 0 60px rgba(122,180,224,0.6)'
                : '0 4px 30px rgba(0,0,0,0.3)',
            }}
          >
            {slide.highlight}
          </div>
        )}

        {/* Subtitle */}
        {slide.subtitle && (
          <div
            className="mt-8 px-6 py-3 bg-black/30 backdrop-blur text-white font-semibold"
            style={{
              fontSize: preview ? '12px' : '28px',
              padding: preview ? '10px 20px' : '20px 40px',
            }}
          >
            {slide.subtitle}
          </div>
        )}

        {/* CTA for final slide */}
        {!slide.dark && (
          <>
            <div
              className="mt-6 px-6 py-2 bg-black/30 backdrop-blur font-bold text-white"
              style={{
                fontSize: preview ? '14px' : '36px',
                padding: preview ? '10px 24px' : '20px 48px',
              }}
            >
              https://oamigosecreto.app
            </div>
            <div
              className="mt-4 px-8 py-3 bg-white text-[#D4623A] font-black animate-pulse"
              style={{
                fontSize: preview ? '12px' : '28px',
                padding: preview ? '10px 24px' : '18px 48px',
                boxShadow: '0 0 40px rgba(255,255,255,0.6)',
              }}
            >
              CADASTRE NA WAITLIST 🚀
            </div>
          </>
        )}
      </div>

      {/* Slide indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((s, i) => (
          <div
            key={i}
            className="rounded-full transition-all"
            style={{
              width: i === slideIndex ? (preview ? '24px' : '48px') : (preview ? '8px' : '16px'),
              height: preview ? '4px' : '8px',
              backgroundColor: i === slideIndex
                ? (s.dark ? '#7AB4E0' : '#FFFFFF')
                : 'rgba(255,255,255,0.3)',
              boxShadow: i === slideIndex ? '0 0 10px rgba(255,255,255,0.5)' : 'none',
            }}
          />
        ))}
      </div>
    </PostFrame>
  );
}
