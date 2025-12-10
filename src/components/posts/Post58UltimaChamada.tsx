'use client';

import { PostFrame } from '../ui/PostFrame';
import Image from 'next/image';

interface Post58UltimaChamadaProps {
  preview?: boolean;
}

export function Post58UltimaChamada({ preview = true }: Post58UltimaChamadaProps) {
  const color = '#8B4513';

  return (
    <PostFrame size="square" preview={preview} showLogo>
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=1080&h=1080&fit=crop"
          alt=""
          fill
          className="object-cover"
          style={{ filter: 'brightness(0.2)' }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, #1a1005ee 0%, #2a2010cc 50%, #1a1005ee 100%)',
          }}
        />
      </div>

      {/* Animated rays */}
      {[...Array(16)].map((_, i) => (
        <div
          key={i}
          className="absolute top-1/2 left-1/2 origin-left animate-pulse"
          style={{
            width: preview ? '200px' : '500px',
            height: '3px',
            background: `linear-gradient(90deg, ${color}60 0%, transparent 100%)`,
            transform: `translate(-50%, -50%) rotate(${i * 22.5}deg)`,
            opacity: 0.4,
            animationDelay: `${i * 0.08}s`,
          }}
        />
      ))}

      {/* Glowing orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl animate-pulse"
        style={{
          width: preview ? '280px' : '700px',
          height: preview ? '280px' : '700px',
          background: `radial-gradient(circle, ${color}50 0%, transparent 60%)`,
        }}
      />

      {/* Easter emojis - more dramatic */}
      {['🐰', '🍫', '🥚', '🐣', '✨', '🎁', '⏰', '🔔'].map((emoji, i) => (
        <div
          key={i}
          className="absolute animate-bounce"
          style={{
            top: `${8 + (i * 10)}%`,
            left: `${6 + ((i * 12) % 85)}%`,
            fontSize: preview ? '28px' : '70px',
            opacity: 0.6,
            animationDelay: `${i * 0.15}s`,
            animationDuration: '2s',
            filter: `drop-shadow(0 0 20px ${color}90)`,
          }}
        >
          {emoji}
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">
        {/* Urgency badge */}
        <div
          className="mb-4 px-6 py-2 font-black text-white animate-pulse"
          style={{
            fontSize: preview ? '14px' : '32px',
            background: '#D4623A',
            boxShadow: '0 0 40px #D4623Aaa',
          }}
        >
          ⚠️ ÚLTIMA CHAMADA
        </div>

        <div
          className="mb-4 animate-bounce"
          style={{
            fontSize: preview ? '100px' : '260px',
            filter: `drop-shadow(0 0 70px ${color}90) drop-shadow(0 0 140px ${color}50)`,
            animationDuration: '1.5s',
          }}
        >
          🍫
        </div>

        <h1
          className="font-bold text-white/70 leading-none"
          style={{ fontSize: preview ? '20px' : '50px' }}
        >
          AMIGO
        </h1>
        <h1
          className="font-black leading-none mt-2"
          style={{
            fontSize: preview ? '48px' : '120px',
            background: `linear-gradient(135deg, ${color} 0%, #9B59B6 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: `drop-shadow(0 0 50px ${color}70)`,
          }}
        >
          CHOCOLATE
        </h1>

        <p
          className="text-white/80 mt-4 font-bold"
          style={{ fontSize: preview ? '14px' : '34px' }}
        >
          Ainda dá tempo de criar seu grupo! 🐰
        </p>

        {/* Stats row */}
        <div
          className="mt-4 flex gap-4"
          style={{ gap: preview ? '12px' : '30px' }}
        >
          {[
            { value: '100%', label: 'Grátis' },
            { value: '30s', label: 'p/ criar' },
            { value: '∞', label: 'Grupos' },
          ].map((stat, i) => (
            <div
              key={i}
              className="px-3 py-2 bg-white/10 backdrop-blur-lg border border-white/20 text-center"
              style={{ padding: preview ? '8px 12px' : '16px 24px' }}
            >
              <div
                className="font-black"
                style={{
                  fontSize: preview ? '16px' : '40px',
                  color: color,
                }}
              >
                {stat.value}
              </div>
              <div
                className="text-white/60 font-medium"
                style={{ fontSize: preview ? '8px' : '18px' }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-5 px-4 py-2 bg-white/10 backdrop-blur border border-white/20 font-bold text-white"
          style={{
            fontSize: preview ? '10px' : '24px',
            padding: preview ? '8px 16px' : '14px 32px',
          }}
        >
          https://oamigosecreto.app
        </div>

        <div
          className="mt-4 px-8 py-3 bg-white font-black animate-pulse"
          style={{
            fontSize: preview ? '14px' : '32px',
            padding: preview ? '14px 32px' : '28px 64px',
            color: color,
            boxShadow: '0 0 60px rgba(255,255,255,0.6)',
          }}
        >
          Crie agora! 🐰✨
        </div>

        {/* Unsplash credit */}
        <div
          className="absolute bottom-2 right-2 text-white/30"
          style={{ fontSize: preview ? '8px' : '18px' }}
        >
          📷 Unsplash
        </div>
      </div>
    </PostFrame>
  );
}
