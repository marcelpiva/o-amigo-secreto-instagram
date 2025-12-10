'use client';

import { PostFrame, CarouselIndicator } from '../ui/PostFrame';

interface Post16AnoTodoProps {
  slideIndex?: number;
  preview?: boolean;
}

const occasions = [
  {
    title: 'Não é só no Natal!',
    subtitle: 'O Amigo Secreto funciona',
    highlight: 'o ano todo',
    emoji: '📅',
    color: '#D4623A',
  },
  {
    title: 'Amigo Secreto',
    subtitle: 'Dezembro',
    highlight: 'O clássico das festas de fim de ano',
    emoji: '🎄',
    color: '#D4623A',
  },
  {
    title: 'Amigo Chocolate',
    subtitle: 'Março/Abril',
    highlight: 'Troca de chocolates na Páscoa',
    emoji: '🐰',
    color: '#8B4513',
  },
  {
    title: 'Amigo Caipira',
    subtitle: 'Junho',
    highlight: 'Presentes temáticos de festa junina',
    emoji: '🎃',
    color: '#F5A945',
  },
  {
    title: 'Amigo Criança',
    subtitle: 'Outubro',
    highlight: 'Presenteie uma criança especial',
    emoji: '🧸',
    color: '#7AB4E0',
  },
];

export function Post16AnoTodo({ slideIndex = 0, preview = true }: Post16AnoTodoProps) {
  const occasion = occasions[slideIndex];

  return (
    <PostFrame size="square" preview={preview} showLogo={slideIndex === occasions.length - 1}>
      {/* Background with accent color */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, #363636 0%, ${occasion.color}20 50%, #363636 100%)`
        }}
      />

      {/* Decorative circle */}
      <div
        className="absolute top-1/4 right-1/4 rounded-full opacity-10"
        style={{
          width: preview ? '100px' : '300px',
          height: preview ? '100px' : '300px',
          backgroundColor: occasion.color,
          filter: 'blur(40px)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">
        {/* Emoji */}
        <div
          className="mb-6"
          style={{ fontSize: preview ? '40px' : '120px' }}
        >
          {occasion.emoji}
        </div>

        {/* Title */}
        <h1
          className="font-bold leading-tight"
          style={{
            fontSize: preview ? '18px' : '54px',
            fontFamily: 'var(--font-oxanium), Oxanium',
            color: occasion.color,
          }}
        >
          {occasion.title}
        </h1>

        {/* Subtitle (month) */}
        <p
          className="text-[#AFAFAF] mt-2"
          style={{ fontSize: preview ? '10px' : '28px' }}
        >
          {occasion.subtitle}
        </p>

        {/* Description */}
        <p
          className="text-[#E5E5E5] mt-4 font-medium"
          style={{ fontSize: preview ? '10px' : '28px' }}
        >
          {occasion.highlight}
        </p>

        {slideIndex === occasions.length - 1 && (
          <div
            className="mt-8 px-6 py-3 text-white font-semibold"
            style={{
              fontSize: preview ? '8px' : '24px',
              padding: preview ? '4px 12px' : '12px 32px',
              backgroundColor: occasion.color,
            }}
          >
            Baixe o app →
          </div>
        )}
      </div>

      <CarouselIndicator total={occasions.length} current={slideIndex} preview={preview} />
    </PostFrame>
  );
}
