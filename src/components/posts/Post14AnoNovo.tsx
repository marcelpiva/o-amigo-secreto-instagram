'use client';

import { PostFrame } from '../ui/PostFrame';

interface Post14AnoNovoProps {
  preview?: boolean;
}

export function Post14AnoNovo({ preview = true }: Post14AnoNovoProps) {
  return (
    <PostFrame size="square" preview={preview} showLogo>
      {/* Dark gradient with gold accents */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1a] via-[#1a1a2a] to-[#0a1a2a]" />

      {/* Gold glowing orb */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 rounded-full blur-3xl animate-pulse"
        style={{
          width: preview ? '200px' : '500px',
          height: preview ? '200px' : '500px',
          background: 'radial-gradient(circle, rgba(245,169,69,0.3) 0%, transparent 70%)',
        }}
      />

      {/* Firework particles - positioned manually for better layout */}
      {[
        { emoji: '🎆', top: 8, left: 12 },
        { emoji: '✨', top: 15, left: 75 },
        { emoji: '🎇', top: 8, left: 82 },
        { emoji: '⭐', top: 35, left: 8 },
        { emoji: '✨', top: 55, left: 85 },
        { emoji: '🎉', top: 75, left: 15 },
        { emoji: '💫', top: 80, left: 78 },
      ].map((item, i) => (
        <div
          key={i}
          className="absolute animate-pulse"
          style={{
            top: `${item.top}%`,
            left: `${item.left}%`,
            fontSize: preview ? '20px' : '50px',
            opacity: 0.5,
            animationDelay: `${i * 0.2}s`,
            animationDuration: '2s',
          }}
        >
          {item.emoji}
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">
        {/* 2026 badge with glow */}
        <div
          className="mb-6 px-8 py-4 font-black border-4"
          style={{
            fontSize: preview ? '48px' : '120px',
            padding: preview ? '12px 32px' : '24px 64px',
            borderColor: '#F5A945',
            color: '#F5A945',
            boxShadow: '0 0 40px rgba(245,169,69,0.5), inset 0 0 30px rgba(245,169,69,0.1)',
            textShadow: '0 0 30px rgba(245,169,69,0.8)',
          }}
        >
          2026
        </div>

        {/* Main emoji */}
        <div
          className="mb-4 animate-bounce"
          style={{
            fontSize: preview ? '50px' : '120px',
            filter: 'drop-shadow(0 0 20px rgba(245,169,69,0.6))',
            animationDuration: '2s',
          }}
        >
          🎊
        </div>

        {/* Title */}
        <h1
          className="font-black text-white leading-none tracking-tight"
          style={{
            fontSize: preview ? '24px' : '64px',
          }}
        >
          A BRINCADEIRA
        </h1>
        <div
          className="font-black leading-none mt-2 tracking-tight"
          style={{
            fontSize: preview ? '28px' : '72px',
            background: 'linear-gradient(135deg, #F5A945 0%, #D4623A 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          CONTINUA!
        </div>

        {/* Occasions list */}
        <div
          className="mt-6 space-y-2"
          style={{ fontSize: preview ? '11px' : '26px' }}
        >
          {[
            { icon: '🥂', text: 'Réveillon com amigos' },
            { icon: '🏢', text: 'Confraternização de janeiro' },
            { icon: '📅', text: 'O app funciona o ano todo!' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-white/70">
              <span style={{ fontSize: preview ? '16px' : '36px' }}>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        {/* URL */}
        <div
          className="mt-6 px-4 py-2 bg-white/10 backdrop-blur border border-white/20 font-bold text-white"
          style={{
            fontSize: preview ? '11px' : '26px',
            padding: preview ? '8px 16px' : '14px 32px',
          }}
        >
          https://oamigosecreto.app
        </div>

        {/* CTA */}
        <div
          className="mt-4 px-6 py-2 font-bold animate-pulse"
          style={{
            fontSize: preview ? '11px' : '26px',
            padding: preview ? '8px 20px' : '14px 40px',
            background: 'linear-gradient(135deg, #F5A945 0%, #D4623A 100%)',
            color: '#FFFFFF',
            boxShadow: '0 0 25px rgba(245,169,69,0.4)',
          }}
        >
          Crie seu grupo →
        </div>
      </div>
    </PostFrame>
  );
}
