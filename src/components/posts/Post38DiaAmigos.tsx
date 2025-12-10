'use client';

import { PostFrame } from '../ui/PostFrame';
import Image from 'next/image';

interface Post38DiaAmigosProps {
  preview?: boolean;
}

export function Post38DiaAmigos({ preview = true }: Post38DiaAmigosProps) {
  const color = '#D4623A';

  return (
    <PostFrame size="square" preview={preview} showLogo>
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1080&h=1080&fit=crop"
          alt=""
          fill
          className="object-cover"
          style={{ filter: 'brightness(0.25)' }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, #200a0aee 0%, #351515cc 50%, #200a0aee 100%)',
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
            height: '2px',
            background: `linear-gradient(90deg, ${color}50 0%, transparent 100%)`,
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
          background: `radial-gradient(circle, ${color}40 0%, transparent 60%)`,
        }}
      />

      {/* Hearts floating */}
      {['💕', '❤️', '🧡', '💛', '🤍', '💜'].map((emoji, i) => (
        <div
          key={i}
          className="absolute animate-bounce"
          style={{
            top: `${10 + (i * 14)}%`,
            left: `${8 + ((i * 17) % 80)}%`,
            fontSize: preview ? '26px' : '65px',
            opacity: 0.6,
            animationDelay: `${i * 0.2}s`,
            animationDuration: '2.5s',
            filter: `drop-shadow(0 0 15px ${color}80)`,
          }}
        >
          {emoji}
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">
        {/* Date badge */}
        <div
          className="mb-4 px-6 py-2 font-black text-white"
          style={{
            fontSize: preview ? '12px' : '28px',
            background: `linear-gradient(135deg, ${color} 0%, #F5A945 100%)`,
            boxShadow: `0 0 30px ${color}50`,
          }}
        >
          14 DE FEVEREIRO
        </div>

        <div
          className="mb-4 animate-bounce"
          style={{
            fontSize: preview ? '90px' : '220px',
            filter: `drop-shadow(0 0 60px ${color}80) drop-shadow(0 0 120px ${color}40)`,
            animationDuration: '2s',
          }}
        >
          🫂
        </div>

        <h1
          className="font-bold text-white/70 leading-none"
          style={{ fontSize: preview ? '20px' : '50px' }}
        >
          FELIZ DIA DOS
        </h1>
        <h1
          className="font-black leading-none mt-2"
          style={{
            fontSize: preview ? '48px' : '120px',
            background: `linear-gradient(135deg, ${color} 0%, #F5A945 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: `drop-shadow(0 0 40px ${color}60)`,
          }}
        >
          AMIGOS
        </h1>

        <p
          className="text-white/70 mt-4 font-medium max-w-xs"
          style={{ fontSize: preview ? '13px' : '30px' }}
        >
          Celebre quem faz a diferença na sua vida!
        </p>

        {/* Message box */}
        <div
          className="mt-6 px-6 py-4 bg-white/10 backdrop-blur border border-white/20"
          style={{ padding: preview ? '16px 24px' : '32px 48px' }}
        >
          <p
            className="text-white italic"
            style={{ fontSize: preview ? '12px' : '28px' }}
          >
            "Amigos são a família que a gente escolhe" 💕
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
          Marque seus amigos! ❤️
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
