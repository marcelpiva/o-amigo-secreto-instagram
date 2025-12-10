'use client';

import { PostFrame } from '../ui/PostFrame';

interface Post29POVDescobertaProps {
  preview?: boolean;
}

export function Post29POVDescoberta({ preview = true }: Post29POVDescobertaProps) {
  return (
    <PostFrame size="story" preview={preview} showLogo>
      {/* Dark dramatic gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]" />

      {/* Suspenseful vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.8) 100%)',
        }}
      />

      {/* Glowing orb (tension) */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl animate-pulse"
        style={{
          width: preview ? '200px' : '500px',
          height: preview ? '200px' : '500px',
          background: 'radial-gradient(circle, rgba(212,98,58,0.3) 0%, transparent 60%)',
        }}
      />

      {/* Floating question marks */}
      {['❓', '🤔', '❔', '🎭', '❓', '🤫'].map((emoji, i) => (
        <div
          key={i}
          className="absolute animate-pulse"
          style={{
            top: `${8 + (i * 14)}%`,
            left: `${10 + ((i * 15) % 80)}%`,
            fontSize: preview ? '28px' : '70px',
            opacity: 0.6,
            animationDelay: `${i * 0.3}s`,
            filter: 'drop-shadow(0 0 15px rgba(212,98,58,0.5))',
          }}
        >
          {emoji}
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">
        {/* POV label */}
        <div
          className="mb-6 px-8 py-3 bg-white/10 backdrop-blur border border-white/20"
          style={{ padding: preview ? '10px 24px' : '20px 48px' }}
        >
          <span
            className="text-white font-black tracking-widest"
            style={{ fontSize: preview ? '14px' : '36px' }}
          >
            POV
          </span>
        </div>

        {/* Main emoji with dramatic glow */}
        <div
          className="mb-6 animate-bounce"
          style={{
            fontSize: preview ? '80px' : '200px',
            filter: 'drop-shadow(0 0 50px rgba(212,98,58,0.8))',
            animationDuration: '2s',
          }}
        >
          😱
        </div>

        {/* Story text */}
        <div className="space-y-4">
          <h1
            className="font-black text-white leading-tight"
            style={{
              fontSize: preview ? '24px' : '60px',
              textShadow: '0 4px 30px rgba(0,0,0,0.5)',
            }}
          >
            VOCÊ ABRE
          </h1>
          <h1
            className="font-black text-white leading-tight"
            style={{
              fontSize: preview ? '24px' : '60px',
              textShadow: '0 4px 30px rgba(0,0,0,0.5)',
            }}
          >
            A NOTIFICAÇÃO
          </h1>
          <h1
            className="font-black leading-tight"
            style={{
              fontSize: preview ? '28px' : '70px',
              color: '#D4623A',
              textShadow: '0 0 40px rgba(212,98,58,0.6)',
            }}
          >
            E DESCOBRE QUE...
          </h1>
        </div>

        {/* Suspense dots */}
        <div
          className="mt-6 animate-pulse"
          style={{
            fontSize: preview ? '40px' : '100px',
            color: '#F5A945',
          }}
        >
          • • •
        </div>

        {/* Reveal box */}
        <div
          className="mt-8 px-8 py-6 bg-gradient-to-r from-[#D4623A] to-[#F5A945]"
          style={{
            padding: preview ? '20px 32px' : '40px 64px',
            boxShadow: '0 0 60px rgba(212,98,58,0.5)',
          }}
        >
          <p
            className="font-black text-white"
            style={{
              fontSize: preview ? '20px' : '50px',
              textShadow: '0 2px 10px rgba(0,0,0,0.3)',
            }}
          >
            TIROU O CHEFE! 😂
          </p>
        </div>

        {/* Reaction emojis */}
        <div
          className="mt-6 flex gap-4"
          style={{ fontSize: preview ? '36px' : '90px' }}
        >
          {['😅', '🤣', '💀'].map((emoji, i) => (
            <span
              key={i}
              className="animate-bounce"
              style={{
                animationDelay: `${i * 0.2}s`,
                filter: 'drop-shadow(0 0 15px rgba(255,255,255,0.5))',
              }}
            >
              {emoji}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div
          className="mt-8 px-8 py-4 bg-white text-[#D4623A] font-black animate-pulse"
          style={{
            fontSize: preview ? '14px' : '32px',
            padding: preview ? '14px 32px' : '28px 64px',
            boxShadow: '0 0 40px rgba(255,255,255,0.5)',
          }}
        >
          Qual foi a sua? Conta aí! 👇
        </div>
      </div>
    </PostFrame>
  );
}
