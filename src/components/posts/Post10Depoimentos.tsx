'use client';

import { PostFrame, CarouselIndicator } from '../ui/PostFrame';

interface Post10DepoimentosProps {
  slideIndex?: number;
  preview?: boolean;
}

const testimonials = [
  {
    quote: '"Finalmente minha sogra não tirou meu sogro!"',
    author: 'Ana',
    age: 34,
    stars: 5,
  },
  {
    quote: '"Usei pro amigo secreto da empresa com 50 pessoas. Funcionou perfeito!"',
    author: 'Carlos',
    role: 'RH',
    stars: 5,
  },
  {
    quote: '"A wishlist salvou minha vida. Dei o presente certo!"',
    author: 'Mariana',
    age: 28,
    stars: 5,
  },
];

export function Post10Depoimentos({ slideIndex = 0, preview = true }: Post10DepoimentosProps) {
  const testimonial = testimonials[slideIndex];

  return (
    <PostFrame size="square" preview={preview} showLogo={slideIndex === testimonials.length - 1}>
      {/* Background */}
      <div className="absolute inset-0 bg-[#363636]" />

      {/* Quote decoration */}
      <div
        className="absolute top-4 left-4 text-[#D4623A] opacity-20 font-serif"
        style={{ fontSize: preview ? '60px' : '200px' }}
      >
        "
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">
        {/* Stars */}
        <div className="mb-4 flex gap-1">
          {Array.from({ length: testimonial.stars }).map((_, i) => (
            <span
              key={i}
              className="text-[#F5A945]"
              style={{ fontSize: preview ? '12px' : '32px' }}
            >
              ★
            </span>
          ))}
        </div>

        {/* Quote */}
        <blockquote
          className="font-medium text-[#E5E5E5] leading-relaxed italic"
          style={{
            fontSize: preview ? '12px' : '36px',
            fontFamily: 'var(--font-oxanium), Oxanium'
          }}
        >
          {testimonial.quote}
        </blockquote>

        {/* Author */}
        <div className="mt-6">
          <p
            className="text-[#D4623A] font-semibold"
            style={{ fontSize: preview ? '10px' : '28px' }}
          >
            - {testimonial.author}
            {testimonial.age && `, ${testimonial.age}`}
            {testimonial.role && ` (${testimonial.role})`}
          </p>
        </div>

        {/* Badge */}
        {slideIndex === testimonials.length - 1 && (
          <div
            className="mt-8 px-4 py-2 border-2 border-[#6AAF52] text-[#6AAF52] font-semibold"
            style={{
              fontSize: preview ? '8px' : '22px',
              padding: preview ? '4px 8px' : '10px 24px'
            }}
          >
            +1000 avaliações 5★
          </div>
        )}
      </div>

      <CarouselIndicator total={testimonials.length} current={slideIndex} preview={preview} />
    </PostFrame>
  );
}
