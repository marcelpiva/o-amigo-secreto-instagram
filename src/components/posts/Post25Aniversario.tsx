'use client';

import { PostFrame } from '../ui/PostFrame';

interface Post25AniversarioProps {
  slideIndex?: number;
  preview?: boolean;
}

// Fotos de aniversário - Unsplash royalty free
const slides = [
  {
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1080&h=1080&fit=crop',
    title: 'FESTA DE',
    highlight: 'ANIVERSÁRIO',
    subtitle: 'Amigo secreto na comemoração',
    color: '#E91E63',
    emojis: [
      { emoji: '🎂', top: 8, left: 78 },
      { emoji: '🎈', top: 18, left: 86 },
      { emoji: '✨', top: 28, left: 75 },
    ],
  },
  {
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=1080&h=1080&fit=crop',
    title: 'AMIGO',
    highlight: 'SURPRESA',
    subtitle: 'Presentes inesquecíveis',
    color: '#FF9800',
    emojis: [
      { emoji: '🎁', top: 6, left: 80 },
      { emoji: '🎊', top: 18, left: 88 },
      { emoji: '🥳', top: 26, left: 72 },
    ],
  },
  {
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=1080&h=1080&fit=crop',
    title: 'COMEMORE',
    highlight: 'COM ESTILO!',
    subtitle: 'Sorteio fácil e divertido',
    color: '#D4623A',
    cta: true,
    emojis: [
      { emoji: '🎉', top: 5, left: 78 },
      { emoji: '🍰', top: 16, left: 88 },
      { emoji: '💝', top: 25, left: 82 },
    ],
  },
];

export function Post25Aniversario({ slideIndex = 0, preview = true }: Post25AniversarioProps) {
  const safeIndex = Math.min(slideIndex, slides.length - 1);
  const slide = slides[safeIndex];

  return (
    <PostFrame size="square" preview={preview} showLogo={slide.cta}>
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${slide.image}')` }} />
      <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${slide.color}25 0%, transparent 50%)` }} />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 30%, rgba(0,0,0,0.3) 50%, transparent 70%)' }} />

      <div className="absolute animate-pulse" style={{ top: '10%', right: '10%', width: preview ? '150px' : '400px', height: preview ? '150px' : '400px', background: `radial-gradient(circle, ${slide.color}40 0%, transparent 70%)`, filter: 'blur(40px)' }} />

      {slide.emojis.map((item, i) => (
        <div key={i} className="absolute animate-pulse" style={{ top: `${item.top}%`, left: `${item.left}%`, fontSize: preview ? '24px' : '60px', filter: `drop-shadow(0 0 20px ${slide.color}80)`, animationDelay: `${i * 0.3}s` }}>
          {item.emoji}
        </div>
      ))}

      <div className="absolute top-0 left-0 right-0" style={{ height: preview ? '3px' : '6px', background: `linear-gradient(90deg, transparent, ${slide.color}, transparent)`, boxShadow: `0 0 20px ${slide.color}80` }} />

      <div className="relative z-10 flex flex-col items-start justify-end h-full" style={{ padding: preview ? '20px' : '56px' }}>
        <h1 className="font-bold text-white leading-none tracking-tight" style={{ fontSize: preview ? '20px' : '52px', textShadow: `0 0 30px ${slide.color}60, 0 2px 10px rgba(0,0,0,0.8)` }}>{slide.title}</h1>
        <div className="font-black leading-none mt-2 tracking-tight" style={{ fontSize: preview ? '32px' : '80px', color: slide.color, textShadow: `0 0 60px ${slide.color}90, 0 0 30px ${slide.color}70, 0 4px 15px rgba(0,0,0,0.8)` }}>{slide.highlight}</div>
        <p className="text-white/90 mt-3 font-medium" style={{ fontSize: preview ? '12px' : '30px', textShadow: '0 2px 15px rgba(0,0,0,0.8)' }}>{slide.subtitle}</p>

        {slide.cta && (
          <div className="mt-5 flex flex-col gap-2">
            <div className="backdrop-blur-md border font-bold text-white" style={{ fontSize: preview ? '11px' : '26px', padding: preview ? '8px 16px' : '14px 32px', background: 'rgba(255,255,255,0.15)', borderColor: `${slide.color}50` }}>https://oamigosecreto.app</div>
            <div className="font-bold animate-pulse" style={{ fontSize: preview ? '12px' : '28px', padding: preview ? '10px 20px' : '16px 36px', background: `linear-gradient(135deg, ${slide.color} 0%, #F5A945 100%)`, color: '#FFFFFF', boxShadow: `0 0 40px ${slide.color}70` }}>Parabéns! 🎂</div>
          </div>
        )}
      </div>

      <div className="absolute bottom-5 right-5 flex gap-2">
        {slides.map((s, i) => (<div key={i} className="rounded-full" style={{ width: preview ? '8px' : '16px', height: preview ? '8px' : '16px', backgroundColor: i === safeIndex ? s.color : 'rgba(255,255,255,0.4)', boxShadow: i === safeIndex ? `0 0 15px ${s.color}` : 'none' }} />))}
      </div>
      <div className="absolute bottom-2 left-3 text-white/50" style={{ fontSize: preview ? '7px' : '16px' }}>📷 Unsplash</div>
    </PostFrame>
  );
}
