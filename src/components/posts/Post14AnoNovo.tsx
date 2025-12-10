'use client';

import { PostFrame } from '../ui/PostFrame';

interface Post14AnoNovoProps {
  preview?: boolean;
}

export function Post14AnoNovo({ preview = true }: Post14AnoNovoProps) {
  return (
    <PostFrame size="square" preview={preview} showLogo>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#363636] via-[#484848] to-[#363636]" />

      {/* Firework decorations */}
      <div className="absolute inset-0 overflow-hidden">
        {['🎆', '🎇', '✨', '🥂'].map((emoji, i) => (
          <div
            key={i}
            className="absolute opacity-20"
            style={{
              top: `${15 + (i * 20)}%`,
              left: `${10 + (i * 25)}%`,
              fontSize: preview ? '24px' : '72px',
            }}
          >
            {emoji}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">
        {/* Year badge */}
        <div
          className="mb-4 px-4 py-2 border-2 border-[#F5A945] text-[#F5A945] font-bold"
          style={{
            fontSize: preview ? '10px' : '28px',
            padding: preview ? '4px 8px' : '10px 24px'
          }}
        >
          2026
        </div>

        {/* Title */}
        <h1
          className="font-bold text-[#E5E5E5] leading-tight mb-2"
          style={{
            fontSize: preview ? '14px' : '42px',
            fontFamily: 'var(--font-oxanium), Oxanium'
          }}
        >
          Natal passou, mas a
        </h1>

        <span
          className="font-bold text-[#D4623A]"
          style={{ fontSize: preview ? '16px' : '48px' }}
        >
          brincadeira continua!
        </span>

        {/* Occasions */}
        <div
          className="mt-6 space-y-2"
          style={{ fontSize: preview ? '8px' : '22px' }}
        >
          {[
            { icon: '🥂', text: 'Réveillon com os amigos' },
            { icon: '🏢', text: 'Confraternização em janeiro' },
            { icon: '📅', text: 'O app funciona o ano todo!' },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-center gap-2 text-[#E5E5E5]">
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="mt-8 px-6 py-3 bg-[#D4623A] text-white font-semibold"
          style={{
            fontSize: preview ? '8px' : '24px',
            padding: preview ? '4px 12px' : '12px 32px'
          }}
        >
          Crie seu grupo →
        </div>
      </div>
    </PostFrame>
  );
}
