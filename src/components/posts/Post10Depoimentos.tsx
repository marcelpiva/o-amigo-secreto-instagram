'use client';

import { PostFrame, CarouselIndicator } from '../ui/PostFrame';

interface Post10DepoimentosProps {
  slideIndex?: number;
  preview?: boolean;
}

const testimonials = [
  {
    quote: 'Finalmente um app que funciona! Sorteio justo e sem erro.',
    author: 'Marina S.',
    age: 28,
    role: 'Organizadora de amigo secreto da família',
    stars: 5,
    emoji: '⭐',
  },
  {
    quote: 'A wishlist salvou meu Natal! Todo mundo amou os presentes.',
    author: 'Lucas P.',
    age: 34,
    role: 'Usuário desde 2024',
    stars: 5,
    emoji: '🎁',
  },
  {
    quote: 'O chat anônimo é MUITO divertido! Melhor feature do app.',
    author: 'Carla M.',
    age: 25,
    role: 'Amante de amigo secreto',
    stars: 5,
    emoji: '💬',
  },
];

export function Post10Depoimentos({ slideIndex = 0, preview = true }: Post10DepoimentosProps) {
  const testimonial = testimonials[slideIndex];

  return (
    <PostFrame size="square" preview={preview} showLogo>
      {/* Dark gradient with warm accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a0a] via-[#2a1515] to-[#1a1a0a]" />

      {/* Glowing orb */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 rounded-full blur-3xl animate-pulse"
        style={{
          width: preview ? '200px' : '500px',
          height: preview ? '200px' : '500px',
          background: 'radial-gradient(circle, rgba(245,169,69,0.3) 0%, transparent 70%)',
        }}
      />

      {/* Star decorations */}
      {['⭐', '✨', '⭐', '✨', '⭐'].map((emoji, i) => (
        <div
          key={i}
          className="absolute animate-pulse"
          style={{
            top: `${10 + (i * 18)}%`,
            left: `${5 + ((i * 22) % 85)}%`,
            fontSize: preview ? '16px' : '40px',
            opacity: 0.3,
            animationDelay: `${i * 0.3}s`,
          }}
        >
          {emoji}
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">
        {/* Large quote character */}
        <div
          className="font-black text-[#F5A945]/30 leading-none"
          style={{ fontSize: preview ? '100px' : '250px' }}
        >
          "
        </div>

        {/* Emoji */}
        <div
          className="-mt-8 mb-4"
          style={{
            fontSize: preview ? '40px' : '100px',
            filter: 'drop-shadow(0 0 20px rgba(245,169,69,0.6))',
          }}
        >
          {testimonial.emoji}
        </div>

        {/* Quote */}
        <p
          className="text-white font-medium italic max-w-md leading-relaxed"
          style={{ fontSize: preview ? '14px' : '36px' }}
        >
          "{testimonial.quote}"
        </p>

        {/* Stars */}
        <div className="flex gap-1 mt-4">
          {Array.from({ length: testimonial.stars }).map((_, i) => (
            <span
              key={i}
              style={{
                fontSize: preview ? '18px' : '44px',
                filter: 'drop-shadow(0 0 5px rgba(245,169,69,0.8))',
              }}
            >
              ⭐
            </span>
          ))}
        </div>

        {/* Author */}
        <div className="mt-6">
          <p
            className="font-bold text-[#F5A945]"
            style={{ fontSize: preview ? '14px' : '32px' }}
          >
            {testimonial.author}, {testimonial.age}
          </p>
          <p
            className="text-white/50"
            style={{ fontSize: preview ? '10px' : '24px' }}
          >
            {testimonial.role}
          </p>
        </div>

        {/* Rating badge */}
        <div
          className="mt-6 px-4 py-2 bg-white/10 backdrop-blur border border-white/20"
          style={{ padding: preview ? '8px 16px' : '16px 32px' }}
        >
          <p
            className="text-[#F5A945] font-bold"
            style={{ fontSize: preview ? '10px' : '24px' }}
          >
            +1000 avaliações 5★
          </p>
        </div>
      </div>

      <CarouselIndicator total={testimonials.length} current={slideIndex} preview={preview} />
    </PostFrame>
  );
}
