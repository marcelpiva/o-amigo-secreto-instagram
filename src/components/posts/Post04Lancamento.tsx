'use client';

import { PostFrame } from '../ui/PostFrame';
import Image from 'next/image';

interface Post04LancamentoProps {
  preview?: boolean;
}

export function Post04Lancamento({ preview = true }: Post04LancamentoProps) {
  return (
    <PostFrame size="square" preview={preview} showLogo={false}>
      {/* Explosive gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#D4623A] via-[#FF6B35] to-[#F5A945]" />

      {/* Animated rays from center */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 origin-bottom opacity-20"
            style={{
              width: preview ? '4px' : '10px',
              height: '150%',
              background: 'linear-gradient(to top, transparent, white)',
              transform: `translate(-50%, -100%) rotate(${i * 30}deg)`,
            }}
          />
        ))}
      </div>

      {/* Floating sparkles */}
      {['✨', '🎁', '⭐', '🎄', '✨', '🎁'].map((emoji, i) => (
        <div
          key={i}
          className="absolute animate-pulse"
          style={{
            top: `${15 + (i * 12)}%`,
            left: `${10 + (i * 15)}%`,
            fontSize: preview ? '20px' : '50px',
            opacity: 0.6,
            animationDelay: `${i * 0.3}s`,
            animationDuration: '2s',
          }}
        >
          {emoji}
        </div>
      ))}

      {/* Glowing orbs */}
      <div
        className="absolute top-10 right-10 rounded-full blur-2xl animate-pulse"
        style={{
          width: preview ? '80px' : '200px',
          height: preview ? '80px' : '200px',
          backgroundColor: 'rgba(255,255,255,0.3)',
        }}
      />
      <div
        className="absolute bottom-20 left-10 rounded-full blur-2xl animate-pulse"
        style={{
          width: preview ? '60px' : '150px',
          height: preview ? '60px' : '150px',
          backgroundColor: 'rgba(255,255,255,0.2)',
          animationDelay: '1s',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">
        {/* Pulsing badge */}
        <div
          className="mb-6 px-6 py-2 bg-white text-[#D4623A] font-black uppercase tracking-widest animate-pulse"
          style={{
            fontSize: preview ? '10px' : '24px',
            padding: preview ? '6px 16px' : '12px 32px',
            boxShadow: '0 0 30px rgba(255,255,255,0.5)',
          }}
        >
          🚀 EM BREVE 🚀
        </div>

        {/* Logo with glow */}
        <div
          className="mb-6 animate-bounce"
          style={{
            filter: 'drop-shadow(0 0 30px rgba(255,255,255,0.8))',
            animationDuration: '3s',
          }}
        >
          <Image
            src="/logo.png"
            alt="O Amigo Secreto"
            width={preview ? 80 : 220}
            height={preview ? 80 : 220}
          />
        </div>

        {/* Main title with shadow */}
        <h1
          className="font-black text-white leading-none tracking-tight"
          style={{
            fontSize: preview ? '36px' : '100px',
            textShadow: '0 4px 20px rgba(0,0,0,0.3)',
          }}
        >
          O AMIGO
        </h1>
        <h1
          className="font-black text-white leading-none tracking-tight"
          style={{
            fontSize: preview ? '36px' : '100px',
            textShadow: '0 4px 20px rgba(0,0,0,0.3)',
          }}
        >
          SECRETO
        </h1>

        <p
          className="text-white/90 mt-4 font-medium"
          style={{ fontSize: preview ? '12px' : '32px' }}
        >
          Seu amigo secreto, sem complicação
        </p>

        {/* Platform badges */}
        <div className="flex gap-3 mt-6">
          <div
            className="bg-black/30 backdrop-blur text-white px-4 py-2 flex items-center gap-2 font-semibold"
            style={{
              fontSize: preview ? '8px' : '20px',
              padding: preview ? '6px 12px' : '14px 28px',
            }}
          >
            <span>📱</span>
            <span>iOS</span>
          </div>
          <div
            className="bg-black/30 backdrop-blur text-white px-4 py-2 flex items-center gap-2 font-semibold"
            style={{
              fontSize: preview ? '8px' : '20px',
              padding: preview ? '6px 12px' : '14px 28px',
            }}
          >
            <span>🤖</span>
            <span>Android</span>
          </div>
        </div>

        {/* FREE badge with glow */}
        <div
          className="mt-8 px-8 py-3 bg-white text-[#D4623A] font-black"
          style={{
            fontSize: preview ? '14px' : '36px',
            padding: preview ? '8px 20px' : '16px 48px',
            boxShadow: '0 0 40px rgba(255,255,255,0.6)',
          }}
        >
          100% GRÁTIS
        </div>

        {/* URL */}
        <div
          className="mt-6 px-6 py-2 bg-black/40 backdrop-blur font-bold text-white"
          style={{
            fontSize: preview ? '12px' : '32px',
            padding: preview ? '8px 20px' : '16px 40px',
          }}
        >
          https://oamigosecreto.app
        </div>

        {/* CTA */}
        <p
          className="mt-3 text-white/80 font-medium"
          style={{ fontSize: preview ? '10px' : '24px' }}
        >
          Cadastre-se na waitlist! 👇
        </p>
      </div>

      {/* Bottom wave decoration */}
      <div
        className="absolute bottom-0 left-0 right-0 opacity-20"
        style={{
          height: preview ? '40px' : '100px',
          background: 'linear-gradient(to top, white, transparent)',
        }}
      />
    </PostFrame>
  );
}
