'use client';

import { PostFrame } from '../ui/PostFrame';
import Image from 'next/image';

interface Post17AnoNovoProps {
  preview?: boolean;
}

export function Post17AnoNovo({ preview = true }: Post17AnoNovoProps) {
  return (
    <PostFrame size="story" preview={preview} showLogo={false}>
      {/* Epic midnight sky gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000510] via-[#0a1a3a] to-[#1a0a2a]" />

      {/* Animated aurora effect */}
      <div
        className="absolute top-0 left-0 right-0 h-1/3 opacity-40"
        style={{
          background: 'linear-gradient(180deg, rgba(122,180,224,0.3) 0%, rgba(155,89,182,0.2) 50%, transparent 100%)',
        }}
      />

      {/* Stars field - fixed positions to avoid hydration mismatch */}
      {[
        { top: 5, left: 10 }, { top: 8, left: 25 }, { top: 3, left: 40 }, { top: 12, left: 55 },
        { top: 6, left: 70 }, { top: 15, left: 85 }, { top: 18, left: 15 }, { top: 22, left: 35 },
        { top: 10, left: 50 }, { top: 25, left: 65 }, { top: 28, left: 80 }, { top: 14, left: 92 },
        { top: 32, left: 8 }, { top: 35, left: 22 }, { top: 30, left: 45 }, { top: 38, left: 60 },
        { top: 20, left: 75 }, { top: 42, left: 88 }, { top: 45, left: 12 }, { top: 40, left: 30 },
        { top: 48, left: 48 }, { top: 36, left: 68 }, { top: 44, left: 82 }, { top: 2, left: 5 },
      ].map((pos, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white animate-pulse"
          style={{
            top: `${pos.top}%`,
            left: `${pos.left}%`,
            width: preview ? '2px' : '4px',
            height: preview ? '2px' : '4px',
            opacity: 0.4 + (i % 5) * 0.12,
            animationDelay: `${(i % 8) * 0.5}s`,
            animationDuration: `${2 + (i % 3)}s`,
          }}
        />
      ))}

      {/* Giant glowing orbs */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 rounded-full blur-3xl animate-pulse"
        style={{
          width: preview ? '300px' : '800px',
          height: preview ? '300px' : '800px',
          background: 'radial-gradient(circle, rgba(245,169,69,0.4) 0%, transparent 60%)',
        }}
      />
      <div
        className="absolute top-1/2 right-0 rounded-full blur-3xl animate-pulse"
        style={{
          width: preview ? '200px' : '500px',
          height: preview ? '200px' : '500px',
          background: 'radial-gradient(circle, rgba(155,89,182,0.3) 0%, transparent 70%)',
          animationDelay: '1.5s',
        }}
      />

      {/* Fireworks explosion */}
      {['🎆', '✨', '🎇', '💫', '⭐', '🎆', '✨', '🎇'].map((emoji, i) => (
        <div
          key={i}
          className="absolute animate-bounce"
          style={{
            top: `${5 + (i * 10)}%`,
            left: `${5 + ((i * 13) % 90)}%`,
            fontSize: preview ? '28px' : '70px',
            opacity: 0.9,
            animationDelay: `${i * 0.15}s`,
            animationDuration: '1.5s',
            filter: 'drop-shadow(0 0 15px rgba(245,169,69,0.8))',
          }}
        >
          {emoji}
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">
        {/* Year badge with explosion glow */}
        <div
          className="mb-6 px-10 py-4 font-black animate-pulse"
          style={{
            fontSize: preview ? '48px' : '120px',
            background: 'linear-gradient(135deg, #F5A945 0%, #D4623A 50%, #9B59B6 100%)',
            color: '#FFFFFF',
            boxShadow: '0 0 80px rgba(245,169,69,0.6), 0 0 120px rgba(212,98,58,0.4)',
            textShadow: '0 4px 20px rgba(0,0,0,0.5)',
          }}
        >
          2026
        </div>

        {/* Logo with epic glow */}
        <div
          className="mb-6 animate-bounce"
          style={{
            filter: 'drop-shadow(0 0 50px rgba(255,255,255,0.9))',
            animationDuration: '3s',
          }}
        >
          <Image
            src="/logo.png"
            alt="O Amigo Secreto"
            width={preview ? 80 : 200}
            height={preview ? 80 : 200}
          />
        </div>

        {/* Main text with gradient */}
        <h1
          className="font-black text-white leading-none"
          style={{
            fontSize: preview ? '36px' : '90px',
            textShadow: '0 4px 30px rgba(0,0,0,0.5), 0 0 60px rgba(122,180,224,0.3)',
          }}
        >
          FELIZ
        </h1>
        <h1
          className="font-black leading-none"
          style={{
            fontSize: preview ? '36px' : '90px',
            background: 'linear-gradient(135deg, #F5A945 0%, #D4623A 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 4px 20px rgba(245,169,69,0.5))',
          }}
        >
          ANO NOVO!
        </h1>

        {/* Champagne celebration */}
        <div
          className="my-6 animate-bounce"
          style={{
            fontSize: preview ? '60px' : '150px',
            filter: 'drop-shadow(0 0 30px rgba(245,169,69,0.8))',
            animationDuration: '2s',
          }}
        >
          🥂
        </div>

        {/* Emotional message */}
        <div
          className="px-6 py-4 bg-white/10 backdrop-blur border border-white/20"
          style={{ padding: preview ? '16px 24px' : '32px 48px' }}
        >
          <p
            className="text-white font-medium leading-relaxed"
            style={{ fontSize: preview ? '14px' : '32px' }}
          >
            Que 2026 seja repleto de<br />
            <span className="text-[#F5A945] font-bold">momentos especiais</span><br />
            com quem você ama! 💚
          </p>
        </div>

        {/* CTA */}
        <div
          className="mt-6 px-8 py-3 font-bold animate-pulse"
          style={{
            fontSize: preview ? '12px' : '28px',
            padding: preview ? '12px 28px' : '20px 56px',
            background: 'linear-gradient(135deg, #6AAF52 0%, #7AB4E0 100%)',
            color: '#FFFFFF',
            boxShadow: '0 0 40px rgba(106,175,82,0.5)',
          }}
        >
          Organize seu primeiro sorteio! 🎁
        </div>
      </div>

      {/* Bottom celebration gradient */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: preview ? '100px' : '250px',
          background: 'linear-gradient(to top, rgba(245,169,69,0.3), transparent)',
        }}
      />
    </PostFrame>
  );
}
