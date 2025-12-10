'use client';

import { PostFrame } from '../ui/PostFrame';

interface Post07ChatProps {
  preview?: boolean;
}

export function Post07Chat({ preview = true }: Post07ChatProps) {
  const messages = [
    { from: 'secret', text: 'Você prefere doce ou salgado? 🍫🧀' },
    { from: 'user', text: 'Doce! Amo chocolate' },
    { from: 'secret', text: 'Anotado... 😏' },
  ];

  return (
    <PostFrame size="square" preview={preview} showLogo>
      {/* Background */}
      <div className="absolute inset-0 bg-[#363636]" />

      {/* Chat mockup header */}
      <div
        className="absolute top-0 left-0 right-0 bg-[#484848] flex items-center gap-3 px-4 border-b border-[#666666]"
        style={{
          height: preview ? '30px' : '100px',
          padding: preview ? '8px' : '24px'
        }}
      >
        <div
          className="bg-[#D4623A] rounded-full flex items-center justify-center text-white font-bold"
          style={{
            width: preview ? '20px' : '60px',
            height: preview ? '20px' : '60px',
            fontSize: preview ? '8px' : '24px'
          }}
        >
          ?
        </div>
        <span
          className="text-[#E5E5E5] font-semibold"
          style={{ fontSize: preview ? '8px' : '24px' }}
        >
          Seu Amigo Secreto
        </span>
        <span
          className="ml-auto text-[#6AAF52]"
          style={{ fontSize: preview ? '6px' : '16px' }}
        >
          ● Online
        </span>
      </div>

      {/* Content area */}
      <div
        className="relative z-10 flex flex-col justify-center h-full px-4"
        style={{ paddingTop: preview ? '40px' : '120px' }}
      >
        {/* Title */}
        <h1
          className="text-center font-bold text-[#E5E5E5] mb-4"
          style={{
            fontSize: preview ? '14px' : '42px',
            fontFamily: 'var(--font-oxanium), Oxanium'
          }}
        >
          Converse <span className="text-[#D4623A]">sem revelar</span>
        </h1>
        <p
          className="text-center text-[#AFAFAF] mb-6"
          style={{ fontSize: preview ? '8px' : '24px' }}
        >
          quem você é
        </p>

        {/* Chat messages */}
        <div className="space-y-2">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[70%] px-3 py-2 ${
                  msg.from === 'user'
                    ? 'bg-[#D4623A] text-white'
                    : 'bg-[#484848] text-[#E5E5E5]'
                }`}
                style={{
                  fontSize: preview ? '7px' : '22px',
                  padding: preview ? '4px 8px' : '12px 20px'
                }}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Feature highlights */}
        <div
          className="mt-8 flex justify-center gap-4"
          style={{ fontSize: preview ? '6px' : '18px' }}
        >
          <div className="flex items-center gap-1 text-[#6AAF52]">
            <span>🔒</span>
            <span>Anônimo</span>
          </div>
          <div className="flex items-center gap-1 text-[#7AB4E0]">
            <span>⚡</span>
            <span>Tempo real</span>
          </div>
          <div className="flex items-center gap-1 text-[#F5A945]">
            <span>🔔</span>
            <span>Notificações</span>
          </div>
        </div>
      </div>
    </PostFrame>
  );
}
