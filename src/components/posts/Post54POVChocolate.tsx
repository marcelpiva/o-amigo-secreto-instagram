'use client';

import { PostFrame } from '../ui/PostFrame';

interface Post54POVChocolateProps {
  preview?: boolean;
}

export function Post54POVChocolate({ preview = true }: Post54POVChocolateProps) {
  return (
    <PostFrame size="story" preview={preview} showLogo>
      {/* Chocolate warm gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0a05] via-[#3d2010] to-[#1a0a05]" />

      {/* Golden glow effect */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 rounded-full blur-3xl animate-pulse"
        style={{
          width: preview ? '250px' : '600px',
          height: preview ? '250px' : '600px',
          background: 'radial-gradient(circle, rgba(245,169,69,0.4) 0%, transparent 60%)',
        }}
      />

      {/* Easter particles */}
      {['🐰', '🍫', '🥚', '🐣', '✨', '🎀', '🐰', '🍫'].map((emoji, i) => (
        <div
          key={i}
          className="absolute animate-bounce"
          style={{
            top: `${5 + (i * 11)}%`,
            left: `${8 + ((i * 12) % 85)}%`,
            fontSize: preview ? '26px' : '65px',
            opacity: 0.8,
            animationDelay: `${i * 0.15}s`,
            animationDuration: '2s',
            filter: 'drop-shadow(0 0 15px rgba(245,169,69,0.6))',
          }}
        >
          {emoji}
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">
        {/* POV label */}
        <div
          className="mb-6 px-8 py-3 bg-[#8B4513]/50 backdrop-blur border border-[#F5A945]/30"
          style={{ padding: preview ? '10px 24px' : '20px 48px' }}
        >
          <span
            className="text-[#F5A945] font-black tracking-widest"
            style={{ fontSize: preview ? '14px' : '36px' }}
          >
            POV
          </span>
        </div>

        {/* Main emoji */}
        <div
          className="mb-4 animate-bounce"
          style={{
            fontSize: preview ? '80px' : '200px',
            filter: 'drop-shadow(0 0 50px rgba(245,169,69,0.8))',
            animationDuration: '2s',
          }}
        >
          🍫
        </div>

        {/* Story text */}
        <div className="space-y-3">
          <h1
            className="font-black text-white leading-tight"
            style={{
              fontSize: preview ? '22px' : '55px',
              textShadow: '0 4px 30px rgba(0,0,0,0.5)',
            }}
          >
            VOCÊ ABRE O
          </h1>
          <h1
            className="font-black leading-tight"
            style={{
              fontSize: preview ? '26px' : '65px',
              color: '#F5A945',
              textShadow: '0 0 40px rgba(245,169,69,0.6)',
            }}
          >
            AMIGO CHOCOLATE
          </h1>
          <h1
            className="font-black text-white leading-tight"
            style={{
              fontSize: preview ? '22px' : '55px',
              textShadow: '0 4px 30px rgba(0,0,0,0.5)',
            }}
          >
            E DESCOBRE QUE...
          </h1>
        </div>

        {/* Suspense */}
        <div
          className="my-6 animate-pulse"
          style={{
            fontSize: preview ? '36px' : '90px',
            color: '#F5A945',
          }}
        >
          🐰 • • • 🐰
        </div>

        {/* Reveal box */}
        <div
          className="px-8 py-6 bg-gradient-to-r from-[#8B4513] to-[#F5A945]"
          style={{
            padding: preview ? '20px 32px' : '40px 64px',
            boxShadow: '0 0 60px rgba(245,169,69,0.5)',
          }}
        >
          <p
            className="font-black text-white"
            style={{
              fontSize: preview ? '18px' : '46px',
              textShadow: '0 2px 10px rgba(0,0,0,0.3)',
            }}
          >
            GANHOU UM<br />
            OVO TRUFADO! 🥚
          </p>
        </div>

        {/* Reaction */}
        <div
          className="mt-6 flex gap-4"
          style={{ fontSize: preview ? '40px' : '100px' }}
        >
          {['🤤', '😍', '🎉'].map((emoji, i) => (
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

        {/* Easter message */}
        <div
          className="mt-6 px-6 py-3 bg-white/10 backdrop-blur border border-white/20"
          style={{ padding: preview ? '12px 24px' : '24px 48px' }}
        >
          <p
            className="text-white/90 font-medium"
            style={{ fontSize: preview ? '12px' : '28px' }}
          >
            Feliz Páscoa para todos! 🐣
          </p>
        </div>

        {/* CTA */}
        <div
          className="mt-6 px-8 py-4 bg-white text-[#8B4513] font-black animate-pulse"
          style={{
            fontSize: preview ? '14px' : '32px',
            padding: preview ? '14px 32px' : '28px 64px',
            boxShadow: '0 0 40px rgba(255,255,255,0.5)',
          }}
        >
          Organize o seu! 🍫
        </div>
      </div>
    </PostFrame>
  );
}
