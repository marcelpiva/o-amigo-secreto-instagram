'use client';

import { PostFrame } from '../ui/PostFrame';

interface Post11CountdownProps {
  preview?: boolean;
}

export function Post11Countdown({ preview = true }: Post11CountdownProps) {
  return (
    <PostFrame size="square" preview={preview} showLogo>
      {/* Dramatic dark red gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0505] via-[#2d0a0a] to-[#0a1a0a]" />

      {/* Animated glowing orbs */}
      <div
        className="absolute top-1/4 left-1/4 rounded-full blur-3xl animate-pulse"
        style={{
          width: preview ? '200px' : '500px',
          height: preview ? '200px' : '500px',
          background: 'radial-gradient(circle, rgba(212,98,58,0.4) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 rounded-full blur-3xl animate-pulse"
        style={{
          width: preview ? '150px' : '400px',
          height: preview ? '150px' : '400px',
          background: 'radial-gradient(circle, rgba(106,175,82,0.3) 0%, transparent 70%)',
          animationDelay: '1s',
        }}
      />

      {/* Snowflakes / Particles */}
      {['❄️', '✨', '🎄', '⭐', '🎁', '❄️', '✨', '🎄'].map((emoji, i) => (
        <div
          key={i}
          className="absolute animate-pulse"
          style={{
            top: `${5 + (i * 11)}%`,
            left: `${8 + (i * 11)}%`,
            fontSize: preview ? '16px' : '40px',
            opacity: 0.4,
            animationDelay: `${i * 0.2}s`,
            animationDuration: '3s',
          }}
        >
          {emoji}
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">
        {/* Urgency emoji */}
        <div
          className="mb-4 animate-bounce"
          style={{
            fontSize: preview ? '50px' : '120px',
            filter: 'drop-shadow(0 0 20px rgba(212,98,58,0.8))',
          }}
        >
          ⏰
        </div>

        {/* Main message */}
        <h1
          className="font-black text-white leading-none"
          style={{
            fontSize: preview ? '20px' : '56px',
          }}
        >
          O NATAL
        </h1>
        <h1
          className="font-black leading-none mt-1"
          style={{
            fontSize: preview ? '28px' : '72px',
            color: '#D4623A',
            textShadow: '0 0 40px rgba(212,98,58,0.6)',
          }}
        >
          TÁ CHEGANDO!
        </h1>

        {/* Subtext */}
        <p
          className="text-white/70 mt-4 font-medium"
          style={{ fontSize: preview ? '12px' : '28px' }}
        >
          Ainda não organizou o sorteio?
        </p>

        {/* Highlight box */}
        <div
          className="mt-6 px-6 py-4 bg-white/10 backdrop-blur border border-white/20"
          style={{ padding: preview ? '12px 20px' : '24px 40px' }}
        >
          <p
            className="font-bold text-[#6AAF52]"
            style={{ fontSize: preview ? '16px' : '40px' }}
          >
            AINDA DÁ TEMPO! 🎉
          </p>
        </div>

        {/* Steps */}
        <div
          className="mt-6 text-left space-y-2"
          style={{ fontSize: preview ? '10px' : '24px' }}
        >
          {[
            { num: 1, text: 'Cadastre na waitlist', icon: '📝' },
            { num: 2, text: 'Aguarde o lançamento', icon: '⏳' },
            { num: 3, text: 'Crie seu grupo', icon: '👥' },
            { num: 4, text: 'Convide e sorteie!', icon: '🎲' },
          ].map((step) => (
            <div key={step.num} className="flex items-center gap-3 text-white/80">
              <span
                className="flex items-center justify-center font-bold"
                style={{
                  width: preview ? '20px' : '40px',
                  height: preview ? '20px' : '40px',
                  backgroundColor: '#D4623A',
                  fontSize: preview ? '10px' : '20px',
                }}
              >
                {step.num}
              </span>
              <span>{step.text}</span>
              <span>{step.icon}</span>
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
          className="mt-4 px-8 py-3 font-bold animate-pulse"
          style={{
            fontSize: preview ? '12px' : '28px',
            padding: preview ? '10px 24px' : '18px 48px',
            background: 'linear-gradient(135deg, #D4623A 0%, #F5A945 100%)',
            color: '#FFFFFF',
            boxShadow: '0 0 30px rgba(212,98,58,0.5)',
          }}
        >
          Entrar na Waitlist →
        </div>
      </div>
    </PostFrame>
  );
}
