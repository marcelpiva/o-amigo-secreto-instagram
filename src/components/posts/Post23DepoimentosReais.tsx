'use client';

import { PostFrame, CarouselIndicator } from '../ui/PostFrame';

interface Post23DepoimentosReaisProps {
  slideIndex?: number;
  preview?: boolean;
}

const slides = [
  {
    type: 'intro',
    title: 'O QUE DIZEM',
    highlight: 'NOSSOS USUÁRIOS',
    icon: '⭐⭐⭐⭐⭐',
    color: '#F5A945',
    bgFrom: '#2a1a0a',
    bgVia: '#3a2515',
  },
  {
    type: 'testimonial',
    quote: '"O melhor app de amigo secreto! Fiz o sorteio da família inteira em 2 minutos!"',
    author: 'Maria S.',
    role: 'Organizadora de 3 grupos',
    emoji: '👩',
    stars: 5,
    color: '#D4623A',
    bgFrom: '#2a0a0a',
    bgVia: '#3a1515',
  },
  {
    type: 'testimonial',
    quote: '"Finalmente acabou a bagunça de tirar papelzinho! E ainda tem chat anônimo!"',
    author: 'João P.',
    role: 'Grupo de amigos 20+ pessoas',
    emoji: '👨',
    stars: 5,
    color: '#7AB4E0',
    bgFrom: '#0a1a2a',
    bgVia: '#152a3a',
  },
  {
    type: 'testimonial',
    quote: '"Usei na empresa e foi SUCESSO! Todo mundo amou a lista de desejos."',
    author: 'Ana C.',
    role: 'RH - 50 funcionários',
    emoji: '👩‍💼',
    stars: 5,
    color: '#6AAF52',
    bgFrom: '#0a2a0a',
    bgVia: '#153a15',
  },
  {
    type: 'cta',
    title: 'FAÇA PARTE',
    highlight: 'DESSA HISTÓRIA',
    subtitle: 'Junte-se a milhares de usuários felizes!',
    color: '#D4623A',
    bgFrom: '#2a0a0a',
    bgVia: '#3a1515',
    cta: true,
  },
];

export function Post23DepoimentosReais({ slideIndex = 0, preview = true }: Post23DepoimentosReaisProps) {
  const slide = slides[slideIndex];

  return (
    <PostFrame size="square" preview={preview} showLogo={slideIndex === slides.length - 1}>
      {/* Dynamic gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${slide.bgFrom} 0%, ${slide.bgVia} 50%, ${slide.bgFrom} 100%)`,
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-8"
        style={{
          backgroundImage: `
            linear-gradient(${slide.color}20 1px, transparent 1px),
            linear-gradient(90deg, ${slide.color}20 1px, transparent 1px)
          `,
          backgroundSize: preview ? '30px 30px' : '80px 80px',
        }}
      />

      {/* Glowing orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl animate-pulse"
        style={{
          width: preview ? '250px' : '600px',
          height: preview ? '250px' : '600px',
          background: `radial-gradient(circle, ${slide.color}30 0%, transparent 60%)`,
        }}
      />

      {/* Quote decorations */}
      <div
        className="absolute top-10 left-10 font-black opacity-10"
        style={{
          fontSize: preview ? '100px' : '250px',
          color: slide.color,
        }}
      >
        "
      </div>
      <div
        className="absolute bottom-10 right-10 font-black opacity-10 rotate-180"
        style={{
          fontSize: preview ? '100px' : '250px',
          color: slide.color,
        }}
      >
        "
      </div>

      {/* Floating stars */}
      {['⭐', '✨', '💫', '⭐', '✨'].map((emoji, i) => (
        <div
          key={i}
          className="absolute animate-pulse"
          style={{
            top: `${10 + (i * 18)}%`,
            left: `${5 + ((i * 20) % 85)}%`,
            fontSize: preview ? '18px' : '45px',
            opacity: 0.5,
            animationDelay: `${i * 0.3}s`,
            filter: `drop-shadow(0 0 10px ${slide.color}80)`,
          }}
        >
          {emoji}
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">
        {/* Slide number */}
        <div
          className="absolute top-6 left-6 flex items-center justify-center font-black"
          style={{
            width: preview ? '40px' : '100px',
            height: preview ? '40px' : '100px',
            fontSize: preview ? '18px' : '45px',
            backgroundColor: slide.color,
            color: '#FFFFFF',
            boxShadow: `0 0 30px ${slide.color}60`,
          }}
        >
          {slideIndex + 1}
        </div>

        {slide.type === 'intro' && (
          <>
            <div
              className="mb-6 animate-pulse"
              style={{
                fontSize: preview ? '36px' : '90px',
                filter: `drop-shadow(0 0 30px ${slide.color}80)`,
              }}
            >
              {slide.icon}
            </div>

            <h1
              className="font-bold text-white/80 leading-none"
              style={{ fontSize: preview ? '18px' : '48px' }}
            >
              {slide.title}
            </h1>
            <h1
              className="font-black leading-none mt-2"
              style={{
                fontSize: preview ? '28px' : '72px',
                color: slide.color,
                textShadow: `0 0 50px ${slide.color}60`,
              }}
            >
              {slide.highlight}
            </h1>

            <div
              className="mt-8 flex gap-2"
              style={{ fontSize: preview ? '24px' : '60px' }}
            >
              <span>❤️</span>
              <span>💚</span>
              <span>💙</span>
            </div>

            <div
              className="mt-6 px-6 py-3 animate-pulse font-bold text-white"
              style={{
                fontSize: preview ? '12px' : '28px',
                background: `linear-gradient(135deg, ${slide.color} 0%, #D4623A 100%)`,
                boxShadow: `0 0 30px ${slide.color}50`,
              }}
            >
              Veja os depoimentos →
            </div>
          </>
        )}

        {slide.type === 'testimonial' && (
          <>
            {/* Avatar */}
            <div
              className="mb-4 animate-bounce"
              style={{
                fontSize: preview ? '60px' : '150px',
                filter: `drop-shadow(0 0 30px ${slide.color}60)`,
                animationDuration: '3s',
              }}
            >
              {slide.emoji}
            </div>

            {/* Stars */}
            <div
              className="mb-4"
              style={{ fontSize: preview ? '20px' : '50px' }}
            >
              {'⭐'.repeat(slide.stars || 5)}
            </div>

            {/* Quote */}
            <div
              className="px-6 py-4 bg-white/10 backdrop-blur border border-white/20"
              style={{ padding: preview ? '16px 24px' : '32px 48px' }}
            >
              <p
                className="text-white font-medium italic leading-relaxed"
                style={{ fontSize: preview ? '13px' : '30px' }}
              >
                {slide.quote}
              </p>
            </div>

            {/* Author */}
            <div className="mt-4">
              <p
                className="font-bold"
                style={{
                  fontSize: preview ? '14px' : '32px',
                  color: slide.color,
                }}
              >
                — {slide.author}
              </p>
              <p
                className="text-white/60"
                style={{ fontSize: preview ? '11px' : '26px' }}
              >
                {slide.role}
              </p>
            </div>
          </>
        )}

        {slide.type === 'cta' && (
          <>
            <div
              className="mb-4 animate-bounce"
              style={{
                fontSize: preview ? '60px' : '150px',
                filter: `drop-shadow(0 0 40px ${slide.color}80)`,
                animationDuration: '2s',
              }}
            >
              🤝
            </div>

            <h1
              className="font-bold text-white leading-none"
              style={{ fontSize: preview ? '24px' : '60px' }}
            >
              {slide.title}
            </h1>
            <h1
              className="font-black leading-none mt-2"
              style={{
                fontSize: preview ? '28px' : '72px',
                color: slide.color,
                textShadow: `0 0 50px ${slide.color}60`,
              }}
            >
              {slide.highlight}
            </h1>

            <p
              className="text-white/70 mt-4"
              style={{ fontSize: preview ? '12px' : '28px' }}
            >
              {slide.subtitle}
            </p>

            <div
              className="mt-6 px-4 py-2 bg-white/10 backdrop-blur border border-white/20 font-bold text-white"
              style={{
                fontSize: preview ? '11px' : '26px',
                padding: preview ? '8px 16px' : '14px 32px',
              }}
            >
              https://oamigosecreto.app
            </div>

            <div
              className="mt-4 px-8 py-3 bg-white font-black animate-pulse"
              style={{
                fontSize: preview ? '14px' : '32px',
                padding: preview ? '12px 28px' : '24px 56px',
                color: slide.color,
                boxShadow: `0 0 50px rgba(255,255,255,0.5)`,
              }}
            >
              Baixe grátis! 🎁
            </div>
          </>
        )}
      </div>

      <CarouselIndicator total={slides.length} current={slideIndex} preview={preview} />
    </PostFrame>
  );
}
