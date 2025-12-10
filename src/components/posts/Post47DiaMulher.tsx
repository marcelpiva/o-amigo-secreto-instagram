'use client';

import { PostFrame } from '../ui/PostFrame';
import Image from 'next/image';

interface Post47DiaMulherProps {
  preview?: boolean;
}

export function Post47DiaMulher({ preview = true }: Post47DiaMulherProps) {
  return (
    <PostFrame size="square" preview={preview} showLogo>
      {/* Stunning purple/pink gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#9B59B6] via-[#C0392B] to-[#E91E63]" />

      {/* Radial light rays */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(16)].map((_, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 origin-bottom opacity-15"
            style={{
              width: preview ? '3px' : '8px',
              height: '150%',
              background: 'linear-gradient(to top, transparent, white)',
              transform: `translate(-50%, -100%) rotate(${i * 22.5}deg)`,
            }}
          />
        ))}
      </div>

      {/* Multiple glowing orbs */}
      <div
        className="absolute top-1/4 left-1/4 rounded-full blur-3xl animate-pulse"
        style={{
          width: preview ? '200px' : '500px',
          height: preview ? '200px' : '500px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 60%)',
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 rounded-full blur-3xl animate-pulse"
        style={{
          width: preview ? '180px' : '450px',
          height: preview ? '180px' : '450px',
          background: 'radial-gradient(circle, rgba(233,30,99,0.4) 0%, transparent 60%)',
          animationDelay: '1s',
        }}
      />

      {/* Flower decorations with glow */}
      {['🌸', '💐', '🌺', '🌷', '💜', '🌸', '✨', '💫'].map((emoji, i) => (
        <div
          key={i}
          className="absolute animate-pulse"
          style={{
            top: `${5 + (i * 11)}%`,
            left: `${5 + ((i * 13) % 85)}%`,
            fontSize: preview ? '24px' : '60px',
            opacity: 0.8,
            animationDelay: `${i * 0.2}s`,
            filter: 'drop-shadow(0 0 15px rgba(255,255,255,0.6))',
          }}
        >
          {emoji}
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">
        {/* Date badge with glow */}
        <div
          className="mb-4 px-6 py-2 bg-white/25 backdrop-blur animate-pulse"
          style={{
            padding: preview ? '8px 20px' : '16px 40px',
            boxShadow: '0 0 30px rgba(255,255,255,0.4)',
          }}
        >
          <span
            className="text-white font-black"
            style={{ fontSize: preview ? '12px' : '28px' }}
          >
            8 DE MARÇO
          </span>
        </div>

        {/* Heart with mega glow */}
        <div
          className="mb-4 animate-bounce"
          style={{
            fontSize: preview ? '70px' : '180px',
            filter: 'drop-shadow(0 0 50px rgba(255,255,255,0.8))',
            animationDuration: '2s',
          }}
        >
          💜
        </div>

        {/* Main message with gradient effect */}
        <h1
          className="font-black text-white leading-tight"
          style={{
            fontSize: preview ? '24px' : '60px',
            textShadow: '0 4px 30px rgba(0,0,0,0.3), 0 0 60px rgba(255,255,255,0.2)',
          }}
        >
          FELIZ DIA
        </h1>
        <h1
          className="font-black text-white leading-tight"
          style={{
            fontSize: preview ? '20px' : '50px',
            textShadow: '0 4px 30px rgba(0,0,0,0.3)',
          }}
        >
          INTERNACIONAL
        </h1>
        <h1
          className="font-black leading-tight"
          style={{
            fontSize: preview ? '26px' : '66px',
            background: 'linear-gradient(135deg, #FFFFFF 0%, #FFD1DC 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 4px 20px rgba(255,255,255,0.5))',
          }}
        >
          DA MULHER
        </h1>

        {/* Emotional dedication */}
        <div
          className="mt-6 px-6 py-4 bg-white/15 backdrop-blur border border-white/30"
          style={{ padding: preview ? '12px 20px' : '24px 40px' }}
        >
          <p
            className="text-white/95 font-medium leading-relaxed"
            style={{ fontSize: preview ? '11px' : '26px' }}
          >
            Para todas que <span className="font-bold">organizam</span>...<br />
            Para todas que <span className="font-bold">participam</span>...<br />
            Para todas que <span className="font-bold">inspiram</span>...
          </p>
        </div>

        {/* Power message with glow */}
        <div
          className="mt-4 px-6 py-3 bg-white text-[#9B59B6] font-black animate-pulse"
          style={{
            fontSize: preview ? '12px' : '28px',
            padding: preview ? '10px 24px' : '20px 48px',
            boxShadow: '0 0 50px rgba(255,255,255,0.7)',
          }}
        >
          VOCÊS FAZEM A DIFERENÇA! 💪
        </div>

        {/* Logo */}
        <div className="mt-4">
          <Image
            src="/logo.png"
            alt="O Amigo Secreto"
            width={preview ? 40 : 100}
            height={preview ? 40 : 100}
            style={{ filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.5))' }}
          />
        </div>
      </div>
    </PostFrame>
  );
}
