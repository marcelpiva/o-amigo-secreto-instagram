'use client';

import { PostFrame } from '../ui/PostFrame';

interface Post07ChatProps {
  preview?: boolean;
}

const messages = [
  { from: 'secret', text: 'Oi! Sou seu amigo secreto 🎁' },
  { from: 'user', text: 'Oii! Alguma dica do que você quer?' },
  { from: 'secret', text: 'Algo tecnológico seria perfeito! 📱' },
  { from: 'user', text: 'Anotado! 😉' },
];

export function Post07Chat({ preview = true }: Post07ChatProps) {
  return (
    <PostFrame size="square" preview={preview} showLogo>
      {/* Dark gradient with blue accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1a] via-[#1a1a2d] to-[#0a1a2a]" />

      {/* Animated glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 rounded-full blur-3xl animate-pulse"
        style={{
          width: preview ? '200px' : '500px',
          height: preview ? '200px' : '500px',
          background: 'radial-gradient(circle, rgba(122,180,224,0.3) 0%, transparent 70%)',
        }}
      />

      {/* Floating mystery particles */}
      {['?', '🎁', '?', '💬', '?'].map((char, i) => (
        <div
          key={i}
          className="absolute animate-pulse font-bold"
          style={{
            top: `${8 + (i * 18)}%`,
            left: `${5 + ((i * 22) % 85)}%`,
            fontSize: preview ? '16px' : '40px',
            color: 'rgba(122,180,224,0.4)',
            animationDelay: `${i * 0.4}s`,
          }}
        >
          {char}
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div
          className="flex items-center justify-center py-4 bg-black/30 backdrop-blur"
          style={{ padding: preview ? '12px' : '28px' }}
        >
          <h1
            className="font-black text-white"
            style={{ fontSize: preview ? '18px' : '48px' }}
          >
            💬 CHAT <span className="text-[#7AB4E0]">ANÔNIMO</span>
          </h1>
        </div>

        {/* Chat mockup */}
        <div className="flex-1 flex flex-col justify-center px-4" style={{ padding: preview ? '16px' : '40px' }}>
          {/* Chat header */}
          <div
            className="flex items-center gap-3 p-3 bg-white/5 backdrop-blur border-b border-white/10 mb-4"
            style={{ padding: preview ? '10px' : '24px' }}
          >
            {/* Mystery avatar */}
            <div
              className="flex items-center justify-center bg-gradient-to-br from-[#7AB4E0] to-[#5a94c0] font-black text-white"
              style={{
                width: preview ? '36px' : '90px',
                height: preview ? '36px' : '90px',
                fontSize: preview ? '18px' : '45px',
              }}
            >
              ?
            </div>
            <div>
              <p
                className="font-bold text-white"
                style={{ fontSize: preview ? '12px' : '28px' }}
              >
                Seu Amigo Secreto
              </p>
              <p
                className="text-[#6AAF52] flex items-center gap-1"
                style={{ fontSize: preview ? '9px' : '22px' }}
              >
                <span className="inline-block w-2 h-2 bg-[#6AAF52] rounded-full animate-pulse" />
                Online agora
              </p>
            </div>
          </div>

          {/* Messages */}
          <div className="space-y-3" style={{ gap: preview ? '8px' : '20px' }}>
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[75%] px-4 py-2 ${
                    msg.from === 'user'
                      ? 'bg-[#D4623A] text-white'
                      : 'bg-white/10 backdrop-blur text-white border border-white/20'
                  }`}
                  style={{
                    fontSize: preview ? '11px' : '26px',
                    padding: preview ? '8px 14px' : '18px 32px',
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Typing indicator */}
          <div className="mt-4 flex items-center gap-2">
            <div
              className="bg-white/10 backdrop-blur px-4 py-2 flex items-center gap-1"
              style={{ padding: preview ? '8px 12px' : '16px 24px' }}
            >
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="rounded-full bg-white/60 animate-bounce"
                  style={{
                    width: preview ? '6px' : '14px',
                    height: preview ? '6px' : '14px',
                    animationDelay: `${i * 0.2}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Feature highlights */}
        <div
          className="flex justify-center gap-4 py-4 bg-black/30 backdrop-blur"
          style={{ padding: preview ? '12px' : '28px' }}
        >
          {[
            { icon: '🔒', label: 'Anônimo' },
            { icon: '⚡', label: 'Tempo real' },
            { icon: '🔔', label: 'Notificações' },
          ].map((feature) => (
            <div
              key={feature.label}
              className="text-center"
              style={{ fontSize: preview ? '9px' : '22px' }}
            >
              <span className="block" style={{ fontSize: preview ? '16px' : '40px' }}>
                {feature.icon}
              </span>
              <span className="text-white/70">{feature.label}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="py-3 bg-gradient-to-r from-[#7AB4E0] to-[#5a94c0] text-center"
          style={{ padding: preview ? '10px' : '24px' }}
        >
          <p
            className="font-bold text-white"
            style={{ fontSize: preview ? '11px' : '28px' }}
          >
            Converse sem revelar sua identidade! 🤫
          </p>
        </div>
      </div>
    </PostFrame>
  );
}
