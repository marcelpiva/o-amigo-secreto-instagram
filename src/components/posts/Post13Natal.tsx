'use client';

import { PostFrame } from '../ui/PostFrame';
import Image from 'next/image';

interface Post13NatalProps {
  slideIndex?: number;
  preview?: boolean;
}

const slides = [
  {
    title: 'Feliz Natal!',
    subtitle: 'Que seu Amigo Secreto seja perfeito',
    emoji: '🎄',
  },
  {
    title: 'Com ou sem o app...',
    subtitle: 'Mas com o app é melhor 😉',
    emoji: '🎁',
  },
];

export function Post13Natal({ slideIndex = 0, preview = true }: Post13NatalProps) {
  const slide = slides[slideIndex];

  return (
    <PostFrame size="story" preview={preview} showLogo={false}>
      {/* Christmas gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a2e1a] via-[#363636] to-[#2a1515]" />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {['❄️', '✨', '⭐', '🎄', '🎁'].map((emoji, i) => (
          <div
            key={i}
            className="absolute opacity-30"
            style={{
              top: `${10 + (i * 17)}%`,
              left: `${5 + (i * 20)}%`,
              fontSize: preview ? '16px' : '48px',
              transform: `rotate(${i * 15}deg)`,
            }}
          >
            {emoji}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">
        {/* Main emoji */}
        <div
          className="mb-8"
          style={{ fontSize: preview ? '48px' : '140px' }}
        >
          {slide.emoji}
        </div>

        {/* Title */}
        <h1
          className="font-bold leading-tight"
          style={{
            fontSize: preview ? '24px' : '72px',
            fontFamily: 'var(--font-oxanium), Oxanium',
            background: 'linear-gradient(135deg, #D4623A 0%, #F5A945 50%, #6AAF52 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {slide.title}
        </h1>

        <p
          className="text-[#E5E5E5] mt-4"
          style={{ fontSize: preview ? '12px' : '36px' }}
        >
          {slide.subtitle}
        </p>

        {/* Logo */}
        <div className="mt-12">
          <Image
            src="/logo.png"
            alt="O Amigo Secreto"
            width={preview ? 40 : 120}
            height={preview ? 40 : 120}
            className="opacity-80"
          />
        </div>
      </div>

      {/* Slide indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`rounded-full ${
              i === slideIndex ? 'bg-[#D4623A]' : 'bg-white/30'
            }`}
            style={{
              width: preview ? '6px' : '12px',
              height: preview ? '6px' : '12px',
            }}
          />
        ))}
      </div>
    </PostFrame>
  );
}
