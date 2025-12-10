'use client';

import { PostFrame } from '../ui/PostFrame';
import Image from 'next/image';

interface Post42VoltaRotinaProps {
  preview?: boolean;
}

export function Post42VoltaRotina({ preview = true }: Post42VoltaRotinaProps) {
  const color = '#7AB4E0';

  return (
    <PostFrame size="square" preview={preview} showLogo>
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1080&h=1080&fit=crop"
          alt=""
          fill
          className="object-cover"
          style={{ filter: 'brightness(0.25)' }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, #0a1520ee 0%, #152535cc 50%, #0a1520ee 100%)',
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
            background: `linear-gradient(90deg, ${color}50 0%, transparent 100%)`,
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
          width: preview ? '220px' : '550px',
          height: preview ? '220px' : '550px',
          background: `radial-gradient(circle, ${color}30 0%, transparent 60%)`,
        }}
      />

      {/* Floating emojis */}
      {['☕', '💼', '📅', '✨', '🎯'].map((emoji, i) => (
        <div
          key={i}
          className="absolute animate-pulse"
          style={{
            top: `${15 + (i * 15)}%`,
            left: `${10 + ((i * 18) % 75)}%`,
            fontSize: preview ? '24px' : '60px',
            opacity: 0.5,
            animationDelay: `${i * 0.3}s`,
            filter: `drop-shadow(0 0 15px ${color}80)`,
          }}
        >
          {emoji}
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">
        <div
          className="mb-4 animate-bounce"
          style={{
            fontSize: preview ? '80px' : '200px',
            filter: `drop-shadow(0 0 50px ${color}80) drop-shadow(0 0 100px ${color}40)`,
            animationDuration: '2s',
          }}
        >
          ☕
        </div>

        <h1
          className="font-bold text-white/70 leading-none"
          style={{ fontSize: preview ? '20px' : '50px' }}
        >
          ACABOU O
        </h1>
        <h1
          className="font-black text-white leading-none mt-2"
          style={{
            fontSize: preview ? '40px' : '100px',
            textShadow: '0 4px 30px rgba(0,0,0,0.5)',
          }}
        >
          CARNAVAL
        </h1>
        <h1
          className="font-black leading-none mt-2"
          style={{
            fontSize: preview ? '36px' : '90px',
            background: `linear-gradient(135deg, ${color} 0%, #F5A945 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: `drop-shadow(0 0 30px ${color}60)`,
          }}
        >
          E AGORA?
        </h1>

        <p
          className="text-white/70 mt-4 font-medium max-w-xs"
          style={{ fontSize: preview ? '13px' : '30px' }}
        >
          Hora de voltar à rotina... mas sem perder a alegria!
        </p>

        {/* Next events */}
        <div
          className="mt-6 px-6 py-4 bg-white/10 backdrop-blur border border-white/20"
          style={{ padding: preview ? '16px 24px' : '32px 48px' }}
        >
          <p
            className="text-white font-medium"
            style={{ fontSize: preview ? '12px' : '28px' }}
          >
            🐰 Próximo: <span style={{ color: color, fontWeight: 'bold' }}>Amigo Chocolate</span>
          </p>
        </div>

        <div
          className="mt-4 px-4 py-2 bg-white/10 backdrop-blur border border-white/20 font-bold text-white"
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
            fontSize: preview ? '12px' : '28px',
            padding: preview ? '12px 28px' : '24px 56px',
            color: color,
            boxShadow: '0 0 50px rgba(255,255,255,0.5)',
          }}
        >
          Prepare-se! 🎯
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
