'use client';

import { PostFrame } from '../ui/PostFrame';
import Image from 'next/image';

interface Post27DicaWishlistProps {
  preview?: boolean;
}

export function Post27DicaWishlist({ preview = true }: Post27DicaWishlistProps) {
  const color = '#F5A945';

  return (
    <PostFrame size="square" preview={preview} showLogo>
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=1080&h=1080&fit=crop"
          alt=""
          fill
          className="object-cover"
          style={{ filter: 'brightness(0.25)' }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, #1a1505ee 0%, #2a2510cc 50%, #1a1505ee 100%)',
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
      {['📝', '🎁', '💡', '✨', '🛍️'].map((emoji, i) => (
        <div
          key={i}
          className="absolute animate-pulse"
          style={{
            top: `${15 + (i * 15)}%`,
            left: `${10 + ((i * 18) % 75)}%`,
            fontSize: preview ? '22px' : '55px',
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
        {/* Dica badge */}
        <div
          className="mb-4 px-6 py-2 font-black text-white"
          style={{
            fontSize: preview ? '12px' : '28px',
            background: `linear-gradient(135deg, ${color} 0%, #D4623A 100%)`,
            boxShadow: `0 0 30px ${color}50`,
          }}
        >
          💡 DICA DO DIA
        </div>

        <div
          className="mb-4 animate-bounce"
          style={{
            fontSize: preview ? '80px' : '200px',
            filter: `drop-shadow(0 0 50px ${color}80) drop-shadow(0 0 100px ${color}40)`,
            animationDuration: '2s',
          }}
        >
          📝
        </div>

        <h1
          className="font-bold text-white/70 leading-none"
          style={{ fontSize: preview ? '18px' : '45px' }}
        >
          USE A
        </h1>
        <h1
          className="font-black leading-none mt-2"
          style={{
            fontSize: preview ? '44px' : '110px',
            background: `linear-gradient(135deg, ${color} 0%, #D4623A 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: `drop-shadow(0 0 30px ${color}60)`,
          }}
        >
          WISHLIST
        </h1>

        <p
          className="text-white/70 mt-4 font-medium max-w-xs"
          style={{ fontSize: preview ? '14px' : '32px' }}
        >
          Adicione seus presentes favoritos e nunca mais ganhe algo que não gosta!
        </p>

        {/* Feature highlight */}
        <div
          className="mt-6 px-6 py-4 bg-white/10 backdrop-blur border border-white/20"
          style={{ padding: preview ? '16px 24px' : '32px 48px' }}
        >
          <div className="flex items-center gap-3 justify-center">
            <span style={{ fontSize: preview ? '20px' : '50px' }}>🛍️</span>
            <span
              className="text-white font-medium"
              style={{ fontSize: preview ? '12px' : '28px' }}
            >
              Links de lojas • Preços • Fotos
            </span>
          </div>
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
          Crie sua lista! 🎁
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
