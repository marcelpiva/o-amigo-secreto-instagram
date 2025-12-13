'use client';

import { PostFrame } from '../ui/PostFrame';

interface PostH1AjudeNosProps {
  slideIndex?: number;
  preview?: boolean;
}

export function PostH1AjudeNos({ slideIndex = 0, preview = true }: PostH1AjudeNosProps) {
  return (
    <PostFrame size="square" preview={preview} showLogo={true}>
      {/* Background - Warm gradient simulating photo overlay */}
      <div className="absolute inset-0">
        {/* Base warm gradient that works with any photo */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, #1a1512 0%, #2d2420 30%, #3d2f28 60%, #1a1512 100%)',
          }}
        />

        {/* Simulated community photo effect - hands together pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 50% 40%, rgba(212,98,58,0.4) 0%, transparent 50%),
              radial-gradient(ellipse 60% 40% at 30% 60%, rgba(245,169,69,0.3) 0%, transparent 40%),
              radial-gradient(ellipse 60% 40% at 70% 50%, rgba(122,180,224,0.2) 0%, transparent 40%)
            `,
          }}
        />

        {/* Organic shapes suggesting people/community */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1080 1080" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="warmGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4623A" />
              <stop offset="100%" stopColor="#F5A945" />
            </linearGradient>
          </defs>
          {/* Abstract human silhouettes */}
          <ellipse cx="300" cy="350" rx="120" ry="150" fill="url(#warmGrad)" opacity="0.4" />
          <ellipse cx="500" cy="320" rx="100" ry="130" fill="url(#warmGrad)" opacity="0.5" />
          <ellipse cx="700" cy="360" rx="110" ry="140" fill="url(#warmGrad)" opacity="0.4" />
          <ellipse cx="400" cy="380" rx="90" ry="120" fill="url(#warmGrad)" opacity="0.3" />
          <ellipse cx="600" cy="350" rx="95" ry="125" fill="url(#warmGrad)" opacity="0.35" />
          {/* Hands together suggestion */}
          <ellipse cx="540" cy="520" rx="200" ry="80" fill="#F5A945" opacity="0.2" />
        </svg>

        {/* Subtle grain texture */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Dark overlay for text readability */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 30%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0.85) 100%)',
        }}
      />

      {/* Warm accent glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 rounded-full blur-3xl"
        style={{
          width: preview ? '200px' : '600px',
          height: preview ? '100px' : '300px',
          background: 'radial-gradient(ellipse, rgba(245,169,69,0.25) 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full px-8 pt-10 pb-8">

        {/* Top tag */}
        <div
          className="self-start px-4 py-2 rounded-full font-semibold tracking-wide uppercase"
          style={{
            fontSize: preview ? '9px' : '22px',
            padding: preview ? '4px 12px' : '10px 28px',
            background: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(10px)',
            color: '#F5A945',
            border: '1px solid rgba(245,169,69,0.3)',
          }}
        >
          Da nossa comunidade
        </div>

        {/* Main emotional content */}
        <div className="flex-1 flex flex-col justify-center items-center text-center px-4">

          {/* Opening question - handwritten style feel */}
          <p
            className="text-white/80 mb-4 italic"
            style={{
              fontSize: preview ? '14px' : '36px',
              fontWeight: 300,
            }}
          >
            Podemos ser sinceros com você?
          </p>

          {/* Main headline */}
          <h1
            className="font-bold text-white leading-tight mb-4"
            style={{
              fontSize: preview ? '24px' : '64px',
              textShadow: '0 4px 30px rgba(0,0,0,0.5)',
            }}
          >
            Somos uma equipe
            <span
              className="block"
              style={{
                color: '#F5A945',
                textShadow: '0 0 40px rgba(245,169,69,0.4)',
              }}
            >
              pequena
            </span>
            com um sonho
            <span
              className="block"
              style={{
                color: '#D4623A',
                textShadow: '0 0 40px rgba(212,98,58,0.4)',
              }}
            >
              grande.
            </span>
          </h1>

          {/* Supporting text */}
          <p
            className="text-white/70 max-w-lg leading-relaxed"
            style={{
              fontSize: preview ? '11px' : '28px',
              lineHeight: 1.5,
            }}
          >
            Criamos um app 100% gratuito, sem anúncios,
            porque acreditamos que celebrar em família
            não deveria custar nada.
          </p>
        </div>

        {/* Bottom CTA section */}
        <div className="mt-auto">
          {/* Divider */}
          <div
            className="w-20 h-0.5 mx-auto mb-4 rounded-full"
            style={{
              width: preview ? '60px' : '150px',
              height: preview ? '2px' : '4px',
              background: 'linear-gradient(90deg, transparent, #F5A945, transparent)',
            }}
          />

          {/* CTA text */}
          <p
            className="text-center text-white/90 font-semibold mb-3"
            style={{
              fontSize: preview ? '13px' : '32px',
            }}
          >
            Nos ajude a crescer:
          </p>

          {/* Follow button styled */}
          <div
            className="mx-auto flex items-center justify-center gap-2 font-bold rounded-full"
            style={{
              fontSize: preview ? '14px' : '36px',
              padding: preview ? '10px 24px' : '24px 56px',
              background: 'linear-gradient(135deg, #D4623A 0%, #F5A945 100%)',
              color: '#FFFFFF',
              boxShadow: preview
                ? '0 4px 20px rgba(212,98,58,0.5)'
                : '0 8px 40px rgba(212,98,58,0.5)',
            }}
          >
            <span style={{ fontSize: preview ? '16px' : '40px' }}>👉</span>
            SIGA nossa página
          </div>

          {/* Subtext */}
          <p
            className="text-center text-white/50 mt-3"
            style={{
              fontSize: preview ? '9px' : '22px',
            }}
          >
            Cada seguidor nos ajuda a continuar
          </p>
        </div>
      </div>

      {/* Decorative corner hearts/community symbols */}
      <div
        className="absolute top-4 right-4 opacity-40"
        style={{
          fontSize: preview ? '24px' : '60px',
        }}
      >
        💚
      </div>

      <div
        className="absolute bottom-20 left-4 opacity-20"
        style={{
          fontSize: preview ? '20px' : '50px',
        }}
      >
        🤝
      </div>
    </PostFrame>
  );
}
