'use client';

import { PostFrame } from '../ui/PostFrame';

interface Post06WishlistProps {
  slideIndex?: number;
  preview?: boolean;
}

const slides = [
  {
    title: 'WISHLIST',
    highlight: 'DE PRESENTES',
    subtitle: 'Nunca mais erre o presente!',
    icon: '🎁',
    items: [],
  },
  {
    title: 'CRIE SUA',
    highlight: 'LISTA',
    subtitle: 'Com links diretos para compra',
    icon: '📝',
    items: [
      { name: 'Fone Bluetooth', price: 'R$ 199', emoji: '🎧' },
      { name: 'Livro de ficção', price: 'R$ 59', emoji: '📚' },
      { name: 'Kit skincare', price: 'R$ 149', emoji: '✨' },
    ],
  },
  {
    title: 'COMPARE',
    highlight: 'PREÇOS',
    subtitle: 'Nas maiores lojas do Brasil',
    icon: '🏪',
    stores: ['Amazon', 'Mercado Livre', 'Shopee', 'Magazine Luiza'],
  },
  {
    title: 'PRESENTE',
    highlight: 'CERTO',
    subtitle: 'Seu amigo secreto vai amar!',
    icon: '❤️',
    cta: true,
  },
];

export function Post06Wishlist({ slideIndex = 0, preview = true }: Post06WishlistProps) {
  const slide = slides[slideIndex];

  return (
    <PostFrame size="story" preview={preview} showLogo={slideIndex === slides.length - 1}>
      {/* Rich gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0a2a] via-[#2a1a4a] to-[#1a0a2a]" />

      {/* Accent bar at top */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{
          height: preview ? '4px' : '10px',
          background: 'linear-gradient(90deg, #D4623A 0%, #F5A945 50%, #6AAF52 100%)',
        }}
      />

      {/* Glowing orb */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 rounded-full blur-3xl animate-pulse"
        style={{
          width: preview ? '200px' : '600px',
          height: preview ? '200px' : '600px',
          background: 'radial-gradient(circle, rgba(212,98,58,0.3) 0%, transparent 70%)',
        }}
      />

      {/* Floating emojis */}
      {['🎁', '💝', '✨', '🛍️', '💫'].map((emoji, i) => (
        <div
          key={i}
          className="absolute animate-pulse"
          style={{
            top: `${5 + (i * 18)}%`,
            left: `${8 + ((i * 20) % 80)}%`,
            fontSize: preview ? '20px' : '50px',
            opacity: 0.4,
            animationDelay: `${i * 0.4}s`,
          }}
        >
          {emoji}
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">
        {/* Main emoji */}
        <div
          className="mb-8 animate-bounce"
          style={{
            fontSize: preview ? '80px' : '200px',
            filter: 'drop-shadow(0 0 40px rgba(212,98,58,0.8))',
            animationDuration: '2s',
          }}
        >
          {slide.icon}
        </div>

        {/* Title */}
        <h1
          className="font-bold text-white/80 leading-none tracking-tight"
          style={{ fontSize: preview ? '24px' : '60px' }}
        >
          {slide.title}
        </h1>

        {/* Highlight */}
        <div
          className="font-black leading-none mt-2 tracking-tight"
          style={{
            fontSize: preview ? '40px' : '100px',
            background: 'linear-gradient(135deg, #D4623A 0%, #F5A945 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 4px 20px rgba(212,98,58,0.4))',
          }}
        >
          {slide.highlight}
        </div>

        {/* Subtitle */}
        <p
          className="text-white/60 mt-4 font-medium"
          style={{ fontSize: preview ? '14px' : '32px' }}
        >
          {slide.subtitle}
        </p>

        {/* Items list */}
        {slide.items && slide.items.length > 0 && (
          <div className="mt-8 space-y-3 w-full max-w-xs">
            {slide.items.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between bg-white/10 backdrop-blur border border-white/20 px-4 py-3"
                style={{ padding: preview ? '10px 16px' : '20px 32px' }}
              >
                <div className="flex items-center gap-3">
                  <span style={{ fontSize: preview ? '20px' : '40px' }}>{item.emoji}</span>
                  <span
                    className="text-white font-medium"
                    style={{ fontSize: preview ? '12px' : '28px' }}
                  >
                    {item.name}
                  </span>
                </div>
                <span
                  className="text-[#6AAF52] font-bold"
                  style={{ fontSize: preview ? '11px' : '26px' }}
                >
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Stores */}
        {slide.stores && (
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {slide.stores.map((store, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur border border-white/20 px-4 py-2 text-white font-medium"
                style={{
                  fontSize: preview ? '11px' : '26px',
                  padding: preview ? '8px 16px' : '16px 32px',
                }}
              >
                {store}
              </div>
            ))}
          </div>
        )}

        {/* CTA for final slide */}
        {slide.cta && (
          <>
            <div
              className="mt-10 px-6 py-3 bg-white/10 backdrop-blur border border-white/20 font-bold text-white"
              style={{
                fontSize: preview ? '14px' : '34px',
                padding: preview ? '12px 24px' : '20px 48px',
              }}
            >
              https://oamigosecreto.app
            </div>
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
              Cadastre na Waitlist! 🚀
            </div>
          </>
        )}
      </div>

      {/* Slide indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <div
            key={i}
            className="rounded-full transition-all"
            style={{
              width: i === slideIndex ? (preview ? '24px' : '48px') : (preview ? '8px' : '16px'),
              height: preview ? '4px' : '8px',
              backgroundColor: i === slideIndex ? '#D4623A' : 'rgba(255,255,255,0.3)',
              boxShadow: i === slideIndex ? '0 0 10px rgba(212,98,58,0.8)' : 'none',
            }}
          />
        ))}
      </div>
    </PostFrame>
  );
}
