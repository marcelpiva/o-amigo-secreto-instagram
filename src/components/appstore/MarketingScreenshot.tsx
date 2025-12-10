'use client';

interface MarketingScreenshotProps {
  preview?: boolean;
  variant: 1 | 2 | 3 | 4 | 5;
}

const screenshots = [
  {
    headline: 'Descubra quem',
    highlight: 'você tirou!',
    color: '#D4623A',
    emoji: '🎁',
    mockupText: ['Você tirou:', 'Maria Silva', '🎁', 'Ver lista de desejos →'],
  },
  {
    headline: 'Lista de desejos',
    highlight: 'sem erro!',
    color: '#6AAF52',
    emoji: '💝',
    mockupText: ['Minha Lista', '📱 iPhone 15', '👟 Tênis Nike', '📚 Livro: O Alquimista', '+ Adicionar item'],
  },
  {
    headline: 'Sorteio que',
    highlight: 'respeita regras!',
    color: '#7AB4E0',
    emoji: '🎲',
    mockupText: ['Restrições', 'João ≠ Maria', 'Pedro ≠ Ana', '🎲 SORTEAR'],
  },
  {
    headline: 'Chat secreto',
    highlight: 'e divertido!',
    color: '#F5A945',
    emoji: '💬',
    mockupText: ['Chat Anônimo', '🎅 Oi! Alguma dica?', 'Eu: Gosto de livros!', '🎅 Anotado! 📝'],
  },
  {
    headline: 'Compare preços',
    highlight: 'e economize!',
    color: '#D4623A',
    emoji: '🛒',
    mockupText: ['Vitrine', '🎧 Fone Bluetooth', 'Amazon: R$ 199', 'ML: R$ 179 ✓', 'Magalu: R$ 189'],
  },
];

export function MarketingScreenshot({ preview = true, variant }: MarketingScreenshotProps) {
  // iPhone 6.7" - 1290x2796
  const width = preview ? 215 : 1290;
  const height = preview ? 466 : 2796;
  const scale = preview ? 0.167 : 1;

  const data = screenshots[variant - 1];

  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        position: 'relative',
        overflow: 'hidden',
        fontFamily: 'Oxanium, sans-serif',
        background: '#1a1a1a',
      }}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, ${data.color}30 0%, #1a1a1a 40%, #1a1a1a 100%)`,
        }}
      />

      {/* Glowing orb */}
      <div
        className="absolute"
        style={{
          top: '5%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: preview ? '150px' : '900px',
          height: preview ? '150px' : '900px',
          background: `radial-gradient(circle, ${data.color}40 0%, transparent 70%)`,
          filter: 'blur(60px)',
        }}
      />

      {/* Top content */}
      <div
        className="absolute w-full text-center"
        style={{
          top: preview ? '40px' : '240px',
          padding: preview ? '0 20px' : '0 120px',
        }}
      >
        {/* Emoji */}
        <div
          style={{
            fontSize: preview ? '40px' : '240px',
            marginBottom: preview ? '10px' : '60px',
            filter: `drop-shadow(0 0 30px ${data.color}80)`,
          }}
        >
          {data.emoji}
        </div>

        {/* Headline */}
        <div
          className="font-bold text-white"
          style={{
            fontSize: preview ? '24px' : '144px',
            lineHeight: 1.1,
            textShadow: '0 4px 20px rgba(0,0,0,0.5)',
          }}
        >
          {data.headline}
        </div>
        <div
          className="font-black"
          style={{
            fontSize: preview ? '28px' : '168px',
            lineHeight: 1.1,
            color: data.color,
            textShadow: `0 0 60px ${data.color}80`,
          }}
        >
          {data.highlight}
        </div>
      </div>

      {/* Phone mockup */}
      <div
        className="absolute left-1/2 -translate-x-1/2"
        style={{
          bottom: preview ? '30px' : '180px',
          width: preview ? '160px' : '960px',
          height: preview ? '280px' : '1680px',
        }}
      >
        {/* Phone frame */}
        <div
          className="w-full h-full relative"
          style={{
            background: '#2a2a2a',
            borderRadius: preview ? '20px' : '120px',
            border: `${preview ? 3 : 18}px solid #3a3a3a`,
            padding: preview ? '15px' : '90px',
            boxShadow: `0 ${preview ? 10 : 60}px ${preview ? 40 : 240}px rgba(0,0,0,0.5)`,
          }}
        >
          {/* Screen content */}
          <div
            className="w-full h-full"
            style={{
              background: '#363636',
              borderRadius: preview ? '8px' : '48px',
              padding: preview ? '15px' : '90px',
              display: 'flex',
              flexDirection: 'column',
              gap: preview ? '8px' : '48px',
            }}
          >
            {data.mockupText.map((text, i) => (
              <div
                key={i}
                style={{
                  padding: preview ? '8px 12px' : '48px 72px',
                  background: i === 0 ? `${data.color}30` : 'rgba(255,255,255,0.05)',
                  borderRadius: preview ? '4px' : '24px',
                  fontSize: preview ? (i === 0 ? '10px' : '9px') : (i === 0 ? '60px' : '54px'),
                  fontWeight: i === 0 ? 700 : 400,
                  color: i === 0 ? data.color : 'rgba(255,255,255,0.9)',
                  textAlign: i === 0 ? 'center' : 'left',
                }}
              >
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar with logo */}
      <div
        className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-2"
        style={{
          height: preview ? '25px' : '150px',
          background: 'rgba(0,0,0,0.5)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <img
          src="/logo.png"
          alt=""
          style={{
            height: preview ? '16px' : '96px',
            width: 'auto',
          }}
        />
        <span
          className="text-white/80 font-medium"
          style={{ fontSize: preview ? '8px' : '48px' }}
        >
          oamigosecreto.app
        </span>
      </div>
    </div>
  );
}
