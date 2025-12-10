'use client';

import { PostFrame, CarouselIndicator } from '../ui/PostFrame';
import Image from 'next/image';

interface Post35TeamBuildingProps {
  slideIndex?: number;
  preview?: boolean;
}

const slides = [
  {
    type: 'intro',
    bgGradient: 'from-[#0a1020] via-[#1a2545] to-[#0a1530]',
    color: '#7AB4E0',
  },
  {
    type: 'problem',
    bgGradient: 'from-[#200a0a] via-[#351515] to-[#200a0a]',
    color: '#D4623A',
  },
  {
    type: 'solution',
    bgGradient: 'from-[#0a200a] via-[#153515] to-[#0a200a]',
    color: '#6AAF52',
    features: [
      { emoji: '👥', text: 'Grupos ilimitados' },
      { emoji: '🔐', text: 'Sorteio transparente' },
      { emoji: '💬', text: 'Chat anônimo' },
      { emoji: '🎁', text: 'Wishlist integrada' },
    ],
  },
  {
    type: 'benefits',
    bgGradient: 'from-[#201a0a] via-[#352a15] to-[#201a0a]',
    color: '#F5A945',
    results: [
      { emoji: '⏱️', text: '90% menos tempo' },
      { emoji: '😊', text: 'Equipe engajada' },
      { emoji: '🎯', text: 'Zero erros' },
      { emoji: '🎉', text: 'Diversão garantida' },
    ],
  },
  {
    type: 'cta',
    bgGradient: 'from-[#200a10] via-[#351525] to-[#200a10]',
    color: '#D4623A',
  },
];

export function Post35TeamBuilding({ slideIndex = 0, preview = true }: Post35TeamBuildingProps) {
  const slide = slides[slideIndex];

  return (
    <PostFrame size="square" preview={preview} showLogo={false}>
      {/* Dynamic gradient */}
      <div className={`absolute inset-0 bg-gradient-to-b ${slide.bgGradient}`} />

      {/* Animated rays */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 origin-bottom opacity-10"
            style={{
              width: preview ? '3px' : '8px',
              height: '150%',
              background: `linear-gradient(to top, transparent, ${slide.color})`,
              transform: `translate(-50%, -100%) rotate(${i * 30}deg)`,
            }}
          />
        ))}
      </div>

      {/* Central orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl animate-pulse"
        style={{
          width: preview ? '250px' : '650px',
          height: preview ? '250px' : '650px',
          background: `radial-gradient(circle, ${slide.color}40 0%, transparent 60%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">

        {/* SLIDE 1: INTRO */}
        {slide.type === 'intro' && (
          <>
            <div
              className="mb-6 animate-bounce"
              style={{
                fontSize: preview ? '90px' : '220px',
                filter: `drop-shadow(0 0 60px ${slide.color}90)`,
                animationDuration: '3s',
              }}
            >
              🏢
            </div>

            <div
              className="mb-4"
              style={{ filter: 'drop-shadow(0 0 40px rgba(255,255,255,0.6))' }}
            >
              <Image
                src="/logo.png"
                alt="O Amigo Secreto"
                width={preview ? 55 : 140}
                height={preview ? 55 : 140}
              />
            </div>

            <h1
              className="font-black text-white/80 leading-none"
              style={{ fontSize: preview ? '20px' : '52px' }}
            >
              PARA EMPRESAS
            </h1>
            <h1
              className="font-black leading-none mt-2"
              style={{
                fontSize: preview ? '38px' : '100px',
                color: slide.color,
                textShadow: `0 0 60px ${slide.color}80`,
              }}
            >
              TEAM BUILDING
            </h1>

            <div
              className="mt-6 px-8 py-3 bg-white/10 backdrop-blur border border-white/20"
              style={{ padding: preview ? '12px 28px' : '24px 56px' }}
            >
              <span
                className="text-white font-bold"
                style={{ fontSize: preview ? '14px' : '34px' }}
              >
                Conecte sua equipe! 🚀
              </span>
            </div>
          </>
        )}

        {/* SLIDE 2: PROBLEM */}
        {slide.type === 'problem' && (
          <>
            <div
              className="mb-6 animate-pulse"
              style={{
                fontSize: preview ? '100px' : '250px',
                filter: `drop-shadow(0 0 50px ${slide.color}80)`,
              }}
            >
              😤
            </div>

            <h1
              className="font-black leading-none"
              style={{
                fontSize: preview ? '32px' : '85px',
                color: slide.color,
                textShadow: `0 0 50px ${slide.color}60`,
              }}
            >
              O DESAFIO
            </h1>

            <div
              className="mt-6 px-6 py-5 bg-white/10 backdrop-blur border border-white/20"
              style={{ padding: preview ? '20px 28px' : '40px 56px' }}
            >
              <p
                className="text-white font-medium leading-relaxed"
                style={{ fontSize: preview ? '14px' : '34px' }}
              >
                Organizar sorteio na empresa<br />
                <span className="text-white/60">é caótico?</span>
              </p>
              <div
                className="mt-4"
                style={{ fontSize: preview ? '36px' : '90px' }}
              >
                📊 📧 🗒️
              </div>
            </div>
          </>
        )}

        {/* SLIDE 3: SOLUTION */}
        {slide.type === 'solution' && (
          <>
            <h1
              className="font-black leading-none mb-6"
              style={{
                fontSize: preview ? '32px' : '85px',
                color: slide.color,
                textShadow: `0 0 50px ${slide.color}60`,
              }}
            >
              ✨ A SOLUÇÃO
            </h1>

            <div
              className="space-y-3 w-full max-w-md"
              style={{ fontSize: preview ? '13px' : '32px' }}
            >
              {slide.features?.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-white/10 backdrop-blur px-5 py-4 border border-white/20"
                  style={{
                    boxShadow: `0 0 30px ${slide.color}20`,
                    padding: preview ? '12px 20px' : '24px 40px',
                  }}
                >
                  <span style={{ fontSize: preview ? '28px' : '70px' }}>{feature.emoji}</span>
                  <span className="text-white font-bold">{feature.text}</span>
                </div>
              ))}
            </div>
          </>
        )}

        {/* SLIDE 4: BENEFITS */}
        {slide.type === 'benefits' && (
          <>
            <h1
              className="font-black leading-none mb-6"
              style={{
                fontSize: preview ? '32px' : '85px',
                color: slide.color,
                textShadow: `0 0 50px ${slide.color}60`,
              }}
            >
              📈 RESULTADOS
            </h1>

            <div
              className="grid grid-cols-2 gap-4"
              style={{ fontSize: preview ? '12px' : '28px' }}
            >
              {slide.results?.map((result, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-2 bg-white/10 backdrop-blur p-5 border border-white/20"
                  style={{
                    boxShadow: `0 0 30px ${slide.color}20`,
                    padding: preview ? '16px' : '32px',
                  }}
                >
                  <span style={{ fontSize: preview ? '36px' : '90px' }}>{result.emoji}</span>
                  <span className="text-white font-bold text-center">{result.text}</span>
                </div>
              ))}
            </div>
          </>
        )}

        {/* SLIDE 5: CTA */}
        {slide.type === 'cta' && (
          <>
            <div
              className="mb-6 animate-bounce"
              style={{
                fontSize: preview ? '80px' : '200px',
                filter: `drop-shadow(0 0 60px ${slide.color}90)`,
                animationDuration: '3s',
              }}
            >
              🤝
            </div>

            <div
              className="mb-4"
              style={{ filter: 'drop-shadow(0 0 40px rgba(255,255,255,0.6))' }}
            >
              <Image
                src="/logo.png"
                alt="O Amigo Secreto"
                width={preview ? 55 : 140}
                height={preview ? 55 : 140}
              />
            </div>

            <h1
              className="font-black text-white leading-none"
              style={{ fontSize: preview ? '24px' : '62px' }}
            >
              PARA RH
            </h1>
            <h1
              className="font-black leading-none mt-2"
              style={{
                fontSize: preview ? '32px' : '85px',
                color: slide.color,
                textShadow: `0 0 50px ${slide.color}60`,
              }}
            >
              E GESTORES
            </h1>

            <div
              className="mt-6 px-8 py-3 bg-white/10 backdrop-blur border border-white/20"
              style={{ padding: preview ? '12px 28px' : '24px 56px' }}
            >
              <span
                className="text-white font-medium"
                style={{ fontSize: preview ? '12px' : '30px' }}
              >
                Organize a confraternização perfeita!
              </span>
            </div>

            <div
              className="mt-6 px-8 py-4 bg-white font-black animate-pulse"
              style={{
                fontSize: preview ? '14px' : '34px',
                padding: preview ? '14px 32px' : '28px 64px',
                color: slide.color,
                boxShadow: '0 0 60px rgba(255,255,255,0.6)',
              }}
            >
              Baixe grátis! 🏢
            </div>
          </>
        )}
      </div>

      <CarouselIndicator total={slides.length} current={slideIndex} preview={preview} />
    </PostFrame>
  );
}
