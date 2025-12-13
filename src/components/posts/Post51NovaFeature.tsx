'use client';

import { useState } from 'react';
import { PostFrame } from '../ui/PostFrame';

interface Post51NovaFeatureProps {
  preview?: boolean;
}

const slides = [
  {
    type: 'cover',
    emoji: '🚀',
    title: '5 NOVAS',
    subtitle: 'FEATURES!',
    desc: 'O app mais completo ficou ainda melhor',
    color: '#7AB4E0',
  },
  {
    type: 'feature',
    emoji: '🗳️',
    title: 'SORTEIO DEMOCRATICO',
    desc: 'Todo mundo decide junto! O grupo vota para aprovar ou reprovar o sorteio.',
    bullets: ['Votacao em tempo real', 'Ate 3 rodadas', 'Aprovado por maioria'],
    color: '#6AAF52',
  },
  {
    type: 'feature',
    emoji: '🎵',
    title: 'TEMAS DIVERTIDOS',
    desc: 'Musica, filme ou meme favorito! Cada participante sugere e o dono escolhe.',
    bullets: ['Tema musical', 'Filmes marcantes', 'Memes do grupo'],
    color: '#9B59B6',
  },
  {
    type: 'feature',
    emoji: '📸',
    title: 'MURAL DE FOTOS',
    desc: 'Um feed exclusivo do grupo! Compartilhe momentos com likes e comentarios.',
    bullets: ['Feed estilo Instagram', 'Likes e comentarios', 'Memorias eternizadas'],
    color: '#D4623A',
  },
  {
    type: 'feature',
    emoji: '❓',
    title: 'QUIZ DO GRUPO',
    desc: 'Quem conhece melhor os amigos? Perguntas divertidas com ranking.',
    bullets: ['Perguntas personalizadas', 'Ranking tempo real', 'Competicao saudavel'],
    color: '#F5A945',
  },
  {
    type: 'feature',
    emoji: '🏆',
    title: 'RANKING DE PRESENTES',
    desc: 'Apos a revelacao, todos votam nos melhores presentes!',
    bullets: ['Mais criativo', 'Mais engracado', 'Acertou em cheio', 'Mais inesperado'],
    color: '#6AAF52',
  },
];

export function Post51NovaFeature({ preview = true }: Post51NovaFeatureProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slide = slides[currentSlide];

  const handleNext = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const handlePrev = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <PostFrame size="square" preview={preview} showLogo>
      {/* Background */}
      <div
        className="absolute inset-0 transition-colors duration-500"
        style={{
          background: `linear-gradient(135deg, ${slide.color}20 0%, #0a1520 50%, ${slide.color}10 100%)`,
        }}
      />

      {/* Animated rays */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute top-1/2 left-1/2 origin-left"
          style={{
            width: preview ? '150px' : '400px',
            height: '2px',
            background: `linear-gradient(90deg, ${slide.color}40 0%, transparent 100%)`,
            transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
            opacity: 0.3,
          }}
        />
      ))}

      {/* Glowing orb */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          width: preview ? '200px' : '500px',
          height: preview ? '200px' : '500px',
          background: `radial-gradient(circle, ${slide.color}30 0%, transparent 60%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        {slide.type === 'cover' ? (
          <>
            {/* Cover slide */}
            <div
              className="mb-4 px-4 py-1 font-black text-white"
              style={{
                fontSize: preview ? '10px' : '24px',
                background: `linear-gradient(135deg, ${slide.color} 0%, #F5A945 100%)`,
              }}
            >
              NOVIDADES 2025
            </div>

            <div
              style={{
                fontSize: preview ? '80px' : '200px',
                filter: `drop-shadow(0 0 50px ${slide.color}80)`,
              }}
            >
              {slide.emoji}
            </div>

            <h1
              className="font-black text-white/70 leading-none mt-2"
              style={{ fontSize: preview ? '36px' : '90px' }}
            >
              {slide.title}
            </h1>
            <h1
              className="font-black leading-none"
              style={{
                fontSize: preview ? '48px' : '120px',
                background: `linear-gradient(135deg, ${slide.color} 0%, #F5A945 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {slide.subtitle}
            </h1>

            <p
              className="text-white/60 mt-4 font-medium"
              style={{ fontSize: preview ? '12px' : '28px' }}
            >
              {slide.desc}
            </p>

            <div
              className="mt-6 px-6 py-2 bg-white/10 backdrop-blur border border-white/20 text-white font-bold"
              style={{ fontSize: preview ? '10px' : '24px' }}
            >
              Deslize para conhecer →
            </div>
          </>
        ) : (
          <>
            {/* Feature slides */}
            <div
              className="mb-2 px-3 py-1 font-bold text-white"
              style={{
                fontSize: preview ? '9px' : '22px',
                background: slide.color,
              }}
            >
              NOVO
            </div>

            <div
              style={{
                fontSize: preview ? '60px' : '150px',
                filter: `drop-shadow(0 0 40px ${slide.color}70)`,
              }}
            >
              {slide.emoji}
            </div>

            <h2
              className="font-black leading-none mt-2"
              style={{
                fontSize: preview ? '24px' : '60px',
                color: slide.color,
                textShadow: `0 0 30px ${slide.color}50`,
              }}
            >
              {slide.title}
            </h2>

            <p
              className="text-white/80 mt-3 font-medium max-w-sm"
              style={{ fontSize: preview ? '11px' : '26px' }}
            >
              {slide.desc}
            </p>

            <div className="mt-4 space-y-1">
              {slide.bullets?.map((bullet, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 justify-center"
                  style={{ fontSize: preview ? '10px' : '24px' }}
                >
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: slide.color, width: preview ? '6px' : '14px', height: preview ? '6px' : '14px' }}
                  />
                  <span className="text-white/70">{bullet}</span>
                </div>
              ))}
            </div>

            {currentSlide === slides.length - 1 && (
              <div
                className="mt-6 px-6 py-3 bg-white font-black"
                style={{
                  fontSize: preview ? '11px' : '26px',
                  color: slide.color,
                }}
              >
                Baixe agora! Link na bio 👆
              </div>
            )}
          </>
        )}
      </div>

      {/* Navigation arrows (visible in preview for UX) */}
      <button
        onClick={handlePrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-colors z-20"
        style={{ width: preview ? '24px' : '50px', height: preview ? '24px' : '50px', fontSize: preview ? '12px' : '24px' }}
      >
        ←
      </button>
      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-colors z-20"
        style={{ width: preview ? '24px' : '50px', height: preview ? '24px' : '50px', fontSize: preview ? '12px' : '24px' }}
      >
        →
      </button>

      {/* Slide indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className="rounded-full transition-all"
            style={{
              width: i === currentSlide ? (preview ? '16px' : '40px') : (preview ? '6px' : '14px'),
              height: preview ? '6px' : '14px',
              background: i === currentSlide ? slides[i].color : 'rgba(255,255,255,0.3)',
            }}
          />
        ))}
      </div>
    </PostFrame>
  );
}
