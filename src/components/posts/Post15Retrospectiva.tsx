'use client';

import { PostFrame, CarouselIndicator } from '../ui/PostFrame';
import Image from 'next/image';

interface Post15RetrospectivaProps {
  slideIndex?: number;
  preview?: boolean;
  stats?: {
    downloads: string;
    groups: string;
    draws: string;
  };
}

export function Post15Retrospectiva({
  slideIndex = 0,
  preview = true,
  stats = { downloads: '2.000+', groups: '500+', draws: '480+' },
}: Post15RetrospectivaProps) {
  const slides = [
    { type: 'thanks' },
    { type: 'stats' },
    { type: 'future' },
  ];

  const slide = slides[slideIndex];

  return (
    <PostFrame size="square" preview={preview} showLogo={slideIndex === 0}>
      {/* Dark gradient with warm accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a0a] via-[#2a1515] to-[#1a0a1a]" />

      {/* Glowing orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl animate-pulse"
        style={{
          width: preview ? '200px' : '500px',
          height: preview ? '200px' : '500px',
          background: 'radial-gradient(circle, rgba(212,98,58,0.3) 0%, transparent 70%)',
        }}
      />

      {/* Floating emojis - positioned in corners to avoid text */}
      {[
        { emoji: '✨', top: 6, left: 8 },
        { emoji: '🎉', top: 6, left: 85 },
        { emoji: '💝', top: 85, left: 10 },
        { emoji: '⭐', top: 85, left: 82 },
      ].map((item, i) => (
        <div
          key={i}
          className="absolute animate-pulse"
          style={{
            top: `${item.top}%`,
            left: `${item.left}%`,
            fontSize: preview ? '18px' : '45px',
            opacity: 0.4,
            animationDelay: `${i * 0.3}s`,
          }}
        >
          {item.emoji}
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">
        {slide.type === 'thanks' && (
          <>
            <div
              className="mb-8"
              style={{ filter: 'drop-shadow(0 0 30px rgba(255,255,255,0.3))' }}
            >
              <Image
                src="/logo.png"
                alt="O Amigo Secreto"
                width={preview ? 80 : 200}
                height={preview ? 80 : 200}
              />
            </div>

            <div
              className="font-black leading-none tracking-tight"
              style={{
                fontSize: preview ? '48px' : '120px',
                background: 'linear-gradient(135deg, #D4623A 0%, #F5A945 50%, #6AAF52 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 4px 20px rgba(212,98,58,0.4))',
              }}
            >
              OBRIGADO!
            </div>

            <p
              className="text-white/60 mt-6 font-medium"
              style={{ fontSize: preview ? '14px' : '32px' }}
            >
              Vocês fizeram 2025 incrível 💝
            </p>
          </>
        )}

        {slide.type === 'stats' && (
          <>
            <div
              className="mb-6 animate-bounce"
              style={{
                fontSize: preview ? '60px' : '150px',
                filter: 'drop-shadow(0 0 30px rgba(212,98,58,0.6))',
              }}
            >
              📊
            </div>

            <h2
              className="font-bold text-white/80 mb-8"
              style={{ fontSize: preview ? '18px' : '44px' }}
            >
              NOSSOS NÚMEROS
            </h2>

            <div className="space-y-4">
              {[
                { label: 'Downloads', value: stats.downloads, color: '#D4623A' },
                { label: 'Grupos criados', value: stats.groups, color: '#6AAF52' },
                { label: 'Sorteios realizados', value: stats.draws, color: '#7AB4E0' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between bg-white/10 backdrop-blur border border-white/20 px-6 py-3"
                  style={{ padding: preview ? '10px 20px' : '20px 40px' }}
                >
                  <span
                    className="text-white/70 font-medium"
                    style={{ fontSize: preview ? '12px' : '28px' }}
                  >
                    {stat.label}
                  </span>
                  <span
                    className="font-black"
                    style={{
                      fontSize: preview ? '18px' : '44px',
                      color: stat.color,
                      textShadow: `0 0 20px ${stat.color}60`,
                    }}
                  >
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </>
        )}

        {slide.type === 'future' && (
          <>
            <div
              className="mb-6 animate-bounce"
              style={{
                fontSize: preview ? '80px' : '200px',
                filter: 'drop-shadow(0 0 40px rgba(106,175,82,0.6))',
              }}
            >
              🚀
            </div>

            <h2
              className="font-bold text-white/80"
              style={{ fontSize: preview ? '20px' : '52px' }}
            >
              EM 2026
            </h2>
            <div
              className="font-black leading-none mt-2 tracking-tight"
              style={{
                fontSize: preview ? '28px' : '72px',
                color: '#6AAF52',
                textShadow: '0 0 40px rgba(106,175,82,0.6)',
              }}
            >
              AINDA MAIS!
            </div>

            <p
              className="text-white/60 mt-4 font-medium"
              style={{ fontSize: preview ? '12px' : '28px' }}
            >
              Novas funcionalidades vindo aí...
            </p>

            {/* URL */}
            <div
              className="mt-8 px-4 py-2 bg-white/10 backdrop-blur border border-white/20 font-bold text-white"
              style={{
                fontSize: preview ? '11px' : '26px',
                padding: preview ? '8px 16px' : '14px 32px',
              }}
            >
              https://oamigosecreto.app
            </div>

            <div
              className="mt-4 px-6 py-2 font-bold"
              style={{
                fontSize: preview ? '10px' : '24px',
                padding: preview ? '8px 16px' : '14px 32px',
                background: 'linear-gradient(135deg, #6AAF52 0%, #7AB4E0 100%)',
                color: '#FFFFFF',
                boxShadow: '0 0 20px rgba(106,175,82,0.4)',
              }}
            >
              Siga para novidades! 👀
            </div>
          </>
        )}
      </div>

      <CarouselIndicator total={slides.length} current={slideIndex} preview={preview} />
    </PostFrame>
  );
}
