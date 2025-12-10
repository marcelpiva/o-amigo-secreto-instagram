'use client';

import { PostFrame } from '../ui/PostFrame';

interface Post08GruposProps {
  slideIndex?: number;
  preview?: boolean;
}

const groups = [
  { name: 'Família da Mamãe', icon: '👨‍👩‍👧‍👦', members: 12, color: '#D4623A' },
  { name: 'Galera do Trabalho', icon: '💼', members: 25, color: '#6AAF52' },
  { name: 'Amigos da Facul', icon: '🎓', members: 8, color: '#7AB4E0' },
];

export function Post08Grupos({ slideIndex = 0, preview = true }: Post08GruposProps) {
  const currentGroup = groups[slideIndex] || groups[0];

  return (
    <PostFrame size="story" preview={preview} showLogo={slideIndex === groups.length - 1}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#363636] to-[#484848]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        {/* Group card */}
        <div
          className="bg-[#484848] w-full max-w-xs p-6 mb-6"
          style={{
            padding: preview ? '12px' : '32px',
            borderLeft: `4px solid ${currentGroup.color}`
          }}
        >
          <div
            className="mb-4"
            style={{ fontSize: preview ? '32px' : '80px' }}
          >
            {currentGroup.icon}
          </div>

          <h2
            className="font-bold text-[#E5E5E5] mb-2"
            style={{
              fontSize: preview ? '14px' : '36px',
              fontFamily: 'var(--font-oxanium), Oxanium'
            }}
          >
            {currentGroup.name}
          </h2>

          <p
            className="text-[#AFAFAF]"
            style={{ fontSize: preview ? '8px' : '20px' }}
          >
            {currentGroup.members} participantes
          </p>
        </div>

        {slideIndex === groups.length - 1 && (
          <>
            <div
              className="text-[#D4623A] font-bold mb-2"
              style={{ fontSize: preview ? '16px' : '48px' }}
            >
              GRUPOS ILIMITADOS
            </div>
            <div
              className="px-4 py-2 bg-[#6AAF52] text-white font-semibold"
              style={{
                fontSize: preview ? '10px' : '28px',
                padding: preview ? '4px 12px' : '12px 32px'
              }}
            >
              GRÁTIS
            </div>
          </>
        )}
      </div>

      {/* Slide indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {groups.map((_, i) => (
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
