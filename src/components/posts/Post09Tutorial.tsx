'use client';

import { PostFrame } from '../ui/PostFrame';

interface Post09TutorialProps {
  slideIndex?: number;
  preview?: boolean;
}

const steps = [
  {
    step: 0,
    title: 'AMIGO SECRETO',
    highlight: 'EM 60s',
    icon: '⏱️',
    description: 'Tutorial rápido!',
    color: '#7AB4E0',
  },
  {
    step: 1,
    title: 'ACESSE',
    highlight: 'O SITE',
    icon: '🌐',
    description: 'https://oamigosecreto.app',
    color: '#D4623A',
  },
  {
    step: 2,
    title: 'CRIE',
    highlight: 'UM GRUPO',
    icon: '👥',
    description: 'Dê um nome especial',
    color: '#6AAF52',
  },
  {
    step: 3,
    title: 'CONVIDE',
    highlight: 'POR LINK',
    icon: '🔗',
    description: 'Ou QR Code!',
    color: '#F5A945',
  },
  {
    step: 4,
    title: 'DEFINA',
    highlight: 'RESTRIÇÕES',
    icon: '⚙️',
    description: 'Casais, famílias...',
    color: '#7AB4E0',
  },
  {
    step: 5,
    title: 'CLIQUE EM',
    highlight: 'SORTEAR!',
    icon: '🎲',
    description: 'A mágica acontece ✨',
    color: '#D4623A',
  },
  {
    step: 6,
    title: 'PRONTO!',
    highlight: 'SÓ ISSO!',
    icon: '🎉',
    description: 'Cada um vê apenas seu sorteado',
    color: '#6AAF52',
    cta: true,
  },
];

export function Post09Tutorial({ slideIndex = 0, preview = true }: Post09TutorialProps) {
  const safeIndex = Math.min(slideIndex, steps.length - 1);
  const step = steps[safeIndex];
  const progress = (safeIndex / (steps.length - 1)) * 100;

  return (
    <PostFrame size="story" preview={preview} showLogo={slideIndex === steps.length - 1}>
      {/* Dynamic gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, #0a0a0a 0%, ${step.color}20 50%, #0a0a0a 100%)`,
        }}
      />

      {/* Glowing orb */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 rounded-full blur-3xl animate-pulse"
        style={{
          width: preview ? '200px' : '600px',
          height: preview ? '200px' : '600px',
          background: `radial-gradient(circle, ${step.color}30 0%, transparent 70%)`,
        }}
      />

      {/* Step number indicator */}
      {step.step > 0 && (
        <div
          className="absolute top-8 left-8 flex items-center justify-center font-black"
          style={{
            width: preview ? '50px' : '120px',
            height: preview ? '50px' : '120px',
            fontSize: preview ? '24px' : '60px',
            backgroundColor: step.color,
            color: '#FFFFFF',
            boxShadow: `0 0 30px ${step.color}80`,
          }}
        >
          {step.step}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">
        {/* Main emoji/icon */}
        <div
          className="mb-8 animate-bounce"
          style={{
            fontSize: preview ? '80px' : '200px',
            filter: `drop-shadow(0 0 40px ${step.color}80)`,
            animationDuration: '2s',
          }}
        >
          {step.icon}
        </div>

        {/* Title */}
        <h1
          className="font-bold text-white/80 leading-none tracking-tight"
          style={{ fontSize: preview ? '24px' : '60px' }}
        >
          {step.title}
        </h1>

        {/* Highlight */}
        <div
          className="font-black leading-none mt-2 tracking-tight"
          style={{
            fontSize: preview ? '48px' : '120px',
            color: step.color,
            textShadow: `0 0 40px ${step.color}60`,
          }}
        >
          {step.highlight}
        </div>

        {/* Description */}
        <p
          className="text-white/60 mt-6 font-medium"
          style={{ fontSize: preview ? '14px' : '32px' }}
        >
          {step.description}
        </p>

        {/* CTA for final slide */}
        {step.cta && (
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
                background: `linear-gradient(135deg, ${step.color} 0%, #F5A945 100%)`,
                color: '#FFFFFF',
                boxShadow: `0 0 30px ${step.color}50`,
              }}
            >
              Comece Agora! 🚀
            </div>
          </>
        )}
      </div>

      {/* Progress bar */}
      <div
        className="absolute bottom-20 left-8 right-8 bg-white/10"
        style={{ height: preview ? '4px' : '8px' }}
      >
        <div
          className="h-full transition-all"
          style={{
            width: `${progress}%`,
            background: `linear-gradient(90deg, #D4623A 0%, ${step.color} 100%)`,
            boxShadow: `0 0 10px ${step.color}80`,
          }}
        />
      </div>

      {/* Slide indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {steps.map((s, i) => (
          <div
            key={i}
            className="rounded-full transition-all"
            style={{
              width: i === slideIndex ? (preview ? '16px' : '32px') : (preview ? '6px' : '12px'),
              height: preview ? '4px' : '8px',
              backgroundColor: i === slideIndex ? s.color : 'rgba(255,255,255,0.3)',
              boxShadow: i === slideIndex ? `0 0 8px ${s.color}80` : 'none',
            }}
          />
        ))}
      </div>
    </PostFrame>
  );
}
