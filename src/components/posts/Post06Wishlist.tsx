'use client';

import { PostFrame } from '../ui/PostFrame';

interface Post06WishlistProps {
  slideIndex?: number;
  preview?: boolean;
}

const slides = [
  {
    title: 'Nunca mais erre',
    highlight: 'o presente',
    icon: '🎯',
  },
  {
    title: 'Cada participante cria',
    highlight: 'sua lista',
    icon: '📝',
    items: ['Fone Bluetooth', 'Livro X', 'Kit Skincare'],
  },
  {
    title: 'Veja sugestões de',
    highlight: 'onde comprar',
    icon: '🛒',
  },
  {
    title: 'Preços de vários',
    highlight: 'marketplaces',
    icon: '💰',
    stores: ['Amazon', 'Mercado Livre', 'Magalu', 'Shopee'],
  },
];

export function Post06Wishlist({ slideIndex = 0, preview = true }: Post06WishlistProps) {
  const slide = slides[slideIndex];

  return (
    <PostFrame size="story" preview={preview} showLogo={slideIndex === slides.length - 1}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#363636] to-[#484848]" />

      {/* Accent bar */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#D4623A] to-[#F5A945]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">
        {/* Icon */}
        <div
          className="mb-8"
          style={{ fontSize: preview ? '40px' : '120px' }}
        >
          {slide.icon}
        </div>

        {/* Title */}
        <h1
          className="font-bold text-[#E5E5E5] leading-tight"
          style={{
            fontSize: preview ? '16px' : '48px',
            fontFamily: 'var(--font-oxanium), Oxanium'
          }}
        >
          {slide.title}
        </h1>

        <span
          className="font-bold text-[#D4623A] mt-2"
          style={{ fontSize: preview ? '20px' : '64px' }}
        >
          {slide.highlight}
        </span>

        {/* Wishlist items */}
        {slide.items && (
          <div className="mt-8 w-full max-w-xs">
            {slide.items.map((item, i) => (
              <div
                key={i}
                className="bg-[#484848] mb-2 px-4 py-2 flex items-center gap-3 text-left"
                style={{
                  fontSize: preview ? '8px' : '24px',
                  padding: preview ? '4px 8px' : '12px 20px'
                }}
              >
                <span className="text-[#6AAF52]">✓</span>
                <span className="text-[#E5E5E5]">{item}</span>
              </div>
            ))}
          </div>
        )}

        {/* Store logos */}
        {slide.stores && (
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {slide.stores.map((store, i) => (
              <div
                key={i}
                className="bg-white/10 px-3 py-1 text-white"
                style={{
                  fontSize: preview ? '6px' : '18px',
                  padding: preview ? '2px 6px' : '8px 16px'
                }}
              >
                {store}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Slide indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`rounded-full ${
              i === slideIndex ? 'bg-[#D4623A]' : 'bg-white/30'
            }`}
            style={{
              width: preview ? '6px' : '12px',
              height: preview ? '6px' : '12px',
            }}
          />
        ))}
      </div>
    </PostFrame>
  );
}
