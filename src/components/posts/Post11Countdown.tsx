'use client';

import { PostFrame } from '../ui/PostFrame';

interface Post11CountdownProps {
  preview?: boolean;
  daysLeft?: number;
}

export function Post11Countdown({ preview = true, daysLeft = 4 }: Post11CountdownProps) {
  return (
    <PostFrame size="square" preview={preview} showLogo>
      {/* Background with Christmas colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#363636] via-[#D4623A]/20 to-[#6AAF52]/20" />

      {/* Snowflake decorations */}
      <div className="absolute inset-0 overflow-hidden">
        {['❄️', '✨', '⭐'].map((emoji, i) => (
          <div
            key={i}
            className="absolute opacity-20"
            style={{
              top: `${20 + i * 25}%`,
              left: `${10 + i * 30}%`,
              fontSize: preview ? '20px' : '60px',
            }}
          >
            {emoji}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">
        {/* Days counter */}
        <div
          className="bg-[#D4623A] text-white font-bold flex items-center justify-center mb-4"
          style={{
            width: preview ? '60px' : '180px',
            height: preview ? '60px' : '180px',
            fontSize: preview ? '32px' : '96px',
          }}
        >
          {daysLeft}
        </div>

        <p
          className="text-[#AFAFAF] mb-4"
          style={{ fontSize: preview ? '10px' : '28px' }}
        >
          DIAS PARA O NATAL
        </p>

        {/* Title */}
        <h1
          className="font-bold text-[#E5E5E5] leading-tight mb-2"
          style={{
            fontSize: preview ? '16px' : '48px',
            fontFamily: 'var(--font-oxanium), Oxanium'
          }}
        >
          Ainda não fez o sorteio?
        </h1>

        <p
          className="text-[#6AAF52] font-semibold"
          style={{ fontSize: preview ? '14px' : '40px' }}
        >
          Ainda dá tempo!
        </p>

        {/* Steps */}
        <div
          className="mt-6 text-left"
          style={{ fontSize: preview ? '7px' : '20px' }}
        >
          {['Baixa o app', 'Cria o grupo', 'Manda o link', 'Sorteia'].map((step, i) => (
            <div key={i} className="flex items-center gap-2 mb-1 text-[#E5E5E5]">
              <span className="text-[#D4623A]">{i + 1}.</span>
              <span>{step}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="mt-6 px-6 py-3 bg-[#D4623A] text-white font-semibold"
          style={{
            fontSize: preview ? '8px' : '24px',
            padding: preview ? '4px 12px' : '12px 32px'
          }}
        >
          Baixe agora →
        </div>
      </div>
    </PostFrame>
  );
}
