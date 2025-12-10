'use client';

import { PostFrame } from '../ui/PostFrame';
import Image from 'next/image';

interface Post13NatalProps {
  slideIndex?: number;
  preview?: boolean;
}

const slides = [
  {
    title: 'FELIZ',
    highlight: 'NATAL!',
    subtitle: 'Que seu Amigo Secreto seja perfeito ✨',
    emoji: '🎄',
  },
  {
    title: 'Em 2025...',
    highlight: 'VEM AÍ!',
    subtitle: 'O app que vai revolucionar seu amigo secreto 🚀',
    emoji: '🎁',
  },
];

export function Post13Natal({ slideIndex = 0, preview = true }: Post13NatalProps) {
  const slide = slides[slideIndex];

  return (
    <PostFrame size="story" preview={preview} showLogo={false}>
      {/* Rich Christmas gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a0a] via-[#1a2d1a] to-[#2d1010]" />

      {/* Animated aurora effect */}
      <div
        className="absolute top-0 left-0 right-0 h-1/2 opacity-30"
        style={{
          background: 'linear-gradient(180deg, rgba(106,175,82,0.4) 0%, rgba(212,98,58,0.2) 50%, transparent 100%)',
        }}
      />

      {/* Snow/Sparkle particles */}
      {['❄️', '✨', '⭐', '🎄', '🎁', '❄️', '✨', '⭐', '🔔', '🎅'].map((emoji, i) => (
        <div
          key={i}
          className="absolute animate-pulse"
          style={{
            top: `${5 + (i * 9)}%`,
            left: `${5 + ((i * 17) % 90)}%`,
            fontSize: preview ? '20px' : '50px',
            opacity: 0.5,
            animationDelay: `${i * 0.3}s`,
            animationDuration: '4s',
            transform: `rotate(${i * 15}deg)`,
          }}
        >
          {emoji}
        </div>
      ))}

      {/* Glowing orbs */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 rounded-full blur-3xl animate-pulse"
        style={{
          width: preview ? '200px' : '600px',
          height: preview ? '200px' : '600px',
          background: 'radial-gradient(circle, rgba(212,98,58,0.3) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-1/3 left-1/4 rounded-full blur-3xl animate-pulse"
        style={{
          width: preview ? '150px' : '400px',
          height: preview ? '150px' : '400px',
          background: 'radial-gradient(circle, rgba(106,175,82,0.3) 0%, transparent 70%)',
          animationDelay: '1.5s',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">
        {/* Main emoji with glow */}
        <div
          className="mb-8 animate-bounce"
          style={{
            fontSize: preview ? '80px' : '200px',
            filter: 'drop-shadow(0 0 40px rgba(212,98,58,0.8))',
            animationDuration: '3s',
          }}
        >
          {slide.emoji}
        </div>

        {/* Title */}
        <h1
          className="font-bold text-white/90 leading-none tracking-tight"
          style={{
            fontSize: preview ? '32px' : '80px',
          }}
        >
          {slide.title}
        </h1>

        {/* Highlight with Christmas gradient */}
        <div
          className="font-black leading-none mt-2 tracking-tight"
          style={{
            fontSize: preview ? '48px' : '120px',
            background: 'linear-gradient(135deg, #D4623A 0%, #F5A945 50%, #6AAF52 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 4px 20px rgba(212,98,58,0.5))',
          }}
        >
          {slide.highlight}
        </div>

        {/* Subtitle */}
        <p
          className="text-white/70 mt-6 font-medium max-w-xs"
          style={{ fontSize: preview ? '14px' : '36px' }}
        >
          {slide.subtitle}
        </p>

        {/* Logo */}
        <div
          className="mt-12"
          style={{ filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.3))' }}
        >
          <Image
            src="/logo.png"
            alt="O Amigo Secreto"
            width={preview ? 60 : 150}
            height={preview ? 60 : 150}
          />
        </div>

        {/* Brand name */}
        <p
          className="mt-4 font-bold text-white/60"
          style={{ fontSize: preview ? '12px' : '28px' }}
        >
          O Amigo Secreto
        </p>
      </div>

      {/* Bottom decoration */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: preview ? '60px' : '150px',
          background: 'linear-gradient(to top, rgba(45,16,16,0.8) 0%, transparent 100%)',
        }}
      />

      {/* Slide indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`rounded-full ${
              i === slideIndex ? 'bg-[#D4623A]' : 'bg-white/30'
            }`}
            style={{
              width: preview ? '8px' : '16px',
              height: preview ? '8px' : '16px',
              boxShadow: i === slideIndex ? '0 0 10px rgba(212,98,58,0.8)' : 'none',
            }}
          />
        ))}
      </div>
    </PostFrame>
  );
}
