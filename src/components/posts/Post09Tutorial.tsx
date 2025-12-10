'use client';

import { PostFrame } from '../ui/PostFrame';

interface Post09TutorialProps {
  slideIndex?: number;
  preview?: boolean;
}

const steps = [
  { step: 0, title: 'Amigo Secreto em', highlight: '60 segundos', icon: '⏱️' },
  { step: 1, title: 'Baixe o app', icon: '📱', description: 'iOS ou Android' },
  { step: 2, title: 'Crie um grupo', icon: '➕', description: 'Defina nome e valor' },
  { step: 3, title: 'Convide', icon: '🔗', description: 'Link ou QR Code' },
  { step: 4, title: 'Defina restrições', icon: '⚙️', description: 'Casais, famílias...' },
  { step: 5, title: 'Clique em sortear', icon: '🎲', description: 'O algoritmo faz tudo' },
  { step: 6, title: 'Pronto!', highlight: 'Cada um vê apenas seu sorteado', icon: '✅' },
];

export function Post09Tutorial({ slideIndex = 0, preview = true }: Post09TutorialProps) {
  const step = steps[slideIndex];
  const isIntro = slideIndex === 0;
  const isFinal = slideIndex === steps.length - 1;

  return (
    <PostFrame size="story" preview={preview} showLogo={isFinal}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#363636] via-[#484848] to-[#363636]" />

      {/* Step number indicator */}
      {!isIntro && !isFinal && (
        <div
          className="absolute top-6 left-6 bg-[#D4623A] text-white font-bold flex items-center justify-center"
          style={{
            width: preview ? '24px' : '72px',
            height: preview ? '24px' : '72px',
            fontSize: preview ? '12px' : '32px'
          }}
        >
          {step.step}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">
        {/* Icon */}
        <div
          className="mb-8"
          style={{ fontSize: preview ? '48px' : '140px' }}
        >
          {step.icon}
        </div>

        {/* Title */}
        <h1
          className="font-bold text-[#E5E5E5] leading-tight"
          style={{
            fontSize: preview ? '18px' : '54px',
            fontFamily: 'var(--font-oxanium), Oxanium'
          }}
        >
          {step.title}
        </h1>

        {step.highlight && (
          <span
            className="font-bold text-[#D4623A] mt-2"
            style={{ fontSize: preview ? '20px' : '60px' }}
          >
            {step.highlight}
          </span>
        )}

        {step.description && (
          <p
            className="text-[#AFAFAF] mt-4"
            style={{ fontSize: preview ? '10px' : '28px' }}
          >
            {step.description}
          </p>
        )}

        {isFinal && (
          <div
            className="mt-8 px-6 py-3 bg-[#6AAF52] text-white font-semibold"
            style={{
              fontSize: preview ? '10px' : '28px',
              padding: preview ? '4px 16px' : '16px 48px'
            }}
          >
            Salve e compartilhe!
          </div>
        )}
      </div>

      {/* Progress bar */}
      <div
        className="absolute bottom-8 left-8 right-8 h-1 bg-[#484848]"
        style={{ height: preview ? '3px' : '8px' }}
      >
        <div
          className="h-full bg-[#D4623A] transition-all duration-300"
          style={{ width: `${((slideIndex + 1) / steps.length) * 100}%` }}
        />
      </div>
    </PostFrame>
  );
}
