'use client';

import { PostFrame } from '../ui/PostFrame';
import Image from 'next/image';

interface Post32AmigoFoliaProps {
  preview?: boolean;
}

export function Post32AmigoFolia({ preview = true }: Post32AmigoFoliaProps) {
  return (
    <PostFrame size="square" preview={preview} showLogo={false}>
      {/* Vibrant carnival gradient - from purple to gold */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0a2a] via-[#3a1a4a] to-[#2a1a1a]" />

      {/* Animated rays from center */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(16)].map((_, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 origin-bottom opacity-15"
            style={{
              width: preview ? '3px' : '8px',
              height: '150%',
              background: 'linear-gradient(to top, transparent, rgba(245,169,69,0.8))',
              transform: `translate(-50%, -100%) rotate(${i * 22.5}deg)`,
            }}
          />
        ))}
      </div>

      {/* Central glowing orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl animate-pulse"
        style={{
          width: preview ? '250px' : '700px',
          height: preview ? '250px' : '700px',
          background: 'radial-gradient(circle, rgba(155,89,182,0.4) 0%, transparent 60%)',
        }}
      />

      {/* Secondary glow - gold */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 rounded-full blur-3xl animate-pulse"
        style={{
          width: preview ? '150px' : '400px',
          height: preview ? '150px' : '400px',
          background: 'radial-gradient(circle, rgba(245,169,69,0.3) 0%, transparent 70%)',
          animationDelay: '1s',
        }}
      />

      {/* Floating celebration emojis - subtle, positioned */}
      {['🎭', '✨', '🎉', '✨', '🎭', '✨'].map((emoji, i) => (
        <div
          key={i}
          className="absolute animate-bounce"
          style={{
            top: `${8 + (i * 14)}%`,
            left: `${10 + ((i * 16) % 75)}%`,
            fontSize: preview ? '20px' : '50px',
            opacity: 0.6,
            animationDelay: `${i * 0.3}s`,
            animationDuration: '2.5s',
            filter: 'drop-shadow(0 0 20px rgba(155,89,182,0.6))',
          }}
        >
          {emoji}
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">
        {/* Main carnival mask with epic glow */}
        <div
          className="mb-6 animate-bounce"
          style={{
            fontSize: preview ? '100px' : '250px',
            filter: 'drop-shadow(0 0 60px rgba(245,169,69,0.8)) drop-shadow(0 0 120px rgba(155,89,182,0.5))',
            animationDuration: '3s',
          }}
        >
          🎭
        </div>

        {/* Logo with glow */}
        <div
          className="mb-4"
          style={{
            filter: 'drop-shadow(0 0 40px rgba(255,255,255,0.7))',
          }}
        >
          <Image
            src="/logo.png"
            alt="O Amigo Secreto"
            width={preview ? 60 : 160}
            height={preview ? 60 : 160}
          />
        </div>

        {/* Main title - IMPACTFUL */}
        <h1
          className="font-black text-white leading-none"
          style={{
            fontSize: preview ? '48px' : '130px',
            textShadow: '0 4px 30px rgba(0,0,0,0.5), 0 0 80px rgba(155,89,182,0.4)',
          }}
        >
          AMIGO
        </h1>
        <h1
          className="font-black leading-none"
          style={{
            fontSize: preview ? '48px' : '130px',
            background: 'linear-gradient(135deg, #F5A945 0%, #D4623A 50%, #9B59B6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 4px 30px rgba(245,169,69,0.5))',
          }}
        >
          FOLIA
        </h1>

        {/* Subtitle with badge style */}
        <div
          className="mt-6 px-8 py-3 bg-gradient-to-r from-[#9B59B6]/40 to-[#F5A945]/40 backdrop-blur border border-white/20"
          style={{ padding: preview ? '12px 28px' : '24px 56px' }}
        >
          <span
            className="text-white font-bold"
            style={{ fontSize: preview ? '14px' : '36px' }}
          >
            Carnaval Edition 2026 🎉
          </span>
        </div>

        {/* CTA with glow */}
        <div
          className="mt-8 px-8 py-4 bg-white font-black animate-pulse"
          style={{
            fontSize: preview ? '14px' : '34px',
            padding: preview ? '14px 32px' : '28px 64px',
            color: '#9B59B6',
            boxShadow: '0 0 60px rgba(255,255,255,0.6), 0 0 100px rgba(155,89,182,0.3)',
          }}
        >
          Monte seu bloco! 💃
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: preview ? '80px' : '200px',
          background: 'linear-gradient(to top, rgba(155,89,182,0.3), transparent)',
        }}
      />
    </PostFrame>
  );
}
