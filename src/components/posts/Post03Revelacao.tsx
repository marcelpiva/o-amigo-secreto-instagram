'use client';

import { PostFrame } from '../ui/PostFrame';
import Image from 'next/image';

interface Post03RevelacaoProps {
  slideIndex?: number;
  preview?: boolean;
}

const slides = [
  {
    content: 'O problema...',
    showLogo: false,
    dark: true,
  },
  {
    content: 'A solução...',
    showLogo: false,
    dark: false,
  },
  {
    content: 'O Amigo Secreto',
    subContent: 'Seu amigo secreto, sem complicação',
    showLogo: true,
    dark: false,
  },
];

export function Post03Revelacao({ slideIndex = 0, preview = true }: Post03RevelacaoProps) {
  const slide = slides[slideIndex];
  const logoSize = preview ? 60 : 200;

  return (
    <PostFrame size="story" preview={preview} showLogo={false}>
      {/* Background */}
      <div
        className={`absolute inset-0 transition-colors duration-500 ${
          slide.dark
            ? 'bg-[#1a1a1a]'
            : 'bg-gradient-to-br from-[#363636] via-[#484848] to-[#D4623A]/20'
        }`}
      />

      {/* Animated glow */}
      {!slide.dark && (
        <>
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#D4623A]/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#F5A945]/20 rounded-full blur-3xl animate-pulse" />
        </>
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">
        {slide.showLogo && (
          <div className="mb-8">
            <Image
              src="/logo.png"
              alt="O Amigo Secreto"
              width={logoSize}
              height={logoSize}
              className="animate-pulse-glow"
            />
          </div>
        )}

        <h1
          className={`font-bold leading-tight ${
            slide.dark ? 'text-[#666666]' : 'text-[#E5E5E5]'
          }`}
          style={{
            fontSize: preview ? (slide.showLogo ? '18px' : '16px') : (slide.showLogo ? '64px' : '48px'),
            fontFamily: 'var(--font-oxanium), Oxanium'
          }}
        >
          {slide.showLogo ? (
            <span className="gradient-text">{slide.content}</span>
          ) : (
            slide.content
          )}
        </h1>

        {slide.subContent && (
          <p
            className="text-[#AFAFAF] mt-4"
            style={{ fontSize: preview ? '10px' : '32px' }}
          >
            {slide.subContent}
          </p>
        )}

        {slide.showLogo && (
          <div
            className="mt-12 px-6 py-3 bg-[#D4623A] text-white font-semibold animate-pulse-glow"
            style={{
              fontSize: preview ? '8px' : '24px',
              padding: preview ? '4px 12px' : '16px 40px'
            }}
          >
            Disponível em breve
          </div>
        )}
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
