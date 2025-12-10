'use client';

interface AppStoreHeaderProps {
  preview?: boolean;
}

export function AppStoreHeader({ preview = true }: AppStoreHeaderProps) {
  // 1800x1200 - App Clip Header Image
  const width = preview ? 450 : 1800;
  const height = preview ? 300 : 1200;

  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        position: 'relative',
        overflow: 'hidden',
        fontFamily: 'Oxanium, sans-serif',
      }}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #363636 0%, #1a1a1a 50%, #363636 100%)',
        }}
      />

      {/* Diagonal accent stripe */}
      <div
        className="absolute"
        style={{
          top: '-20%',
          right: '-10%',
          width: '60%',
          height: '140%',
          background: 'linear-gradient(135deg, #D4623A20 0%, #D4623A10 50%, transparent 100%)',
          transform: 'rotate(-15deg)',
        }}
      />

      {/* Glowing orbs */}
      <div
        className="absolute animate-pulse"
        style={{
          top: '20%',
          left: '15%',
          width: preview ? '150px' : '400px',
          height: preview ? '150px' : '400px',
          background: 'radial-gradient(circle, #D4623A30 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        className="absolute animate-pulse"
        style={{
          bottom: '10%',
          right: '20%',
          width: preview ? '120px' : '350px',
          height: preview ? '120px' : '350px',
          background: 'radial-gradient(circle, #6AAF5230 0%, transparent 70%)',
          filter: 'blur(40px)',
          animationDelay: '1s',
        }}
      />

      {/* Festive emojis - top row */}
      {['🎁', '✨', '🎄', '🎅', '⭐'].map((emoji, i) => (
        <div
          key={`top-${i}`}
          className="absolute"
          style={{
            top: preview ? '8%' : '6%',
            left: `${12 + i * 18}%`,
            fontSize: preview ? '24px' : '64px',
            opacity: 0.6,
            filter: 'drop-shadow(0 0 10px rgba(212, 98, 58, 0.5))',
          }}
        >
          {emoji}
        </div>
      ))}

      {/* Festive emojis - bottom row */}
      {['🎊', '🎁', '✨', '🎄', '🎉'].map((emoji, i) => (
        <div
          key={`bottom-${i}`}
          className="absolute"
          style={{
            bottom: preview ? '8%' : '6%',
            left: `${15 + i * 17}%`,
            fontSize: preview ? '24px' : '64px',
            opacity: 0.6,
            filter: 'drop-shadow(0 0 10px rgba(106, 175, 82, 0.5))',
          }}
        >
          {emoji}
        </div>
      ))}

      {/* Main content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <div
            style={{
              width: preview ? '100px' : '280px',
              height: preview ? '100px' : '280px',
              position: 'relative',
            }}
          >
            <img
              src="/logo.png"
              alt="O Amigo Secreto"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                filter: 'drop-shadow(0 0 30px rgba(212, 98, 58, 0.5))',
              }}
            />
          </div>

          {/* Text */}
          <div className="text-left">
            <div
              className="font-black text-white leading-none"
              style={{
                fontSize: preview ? '36px' : '120px',
                textShadow: '0 4px 20px rgba(0,0,0,0.5)',
              }}
            >
              O AMIGO
            </div>
            <div
              className="font-black leading-none"
              style={{
                fontSize: preview ? '42px' : '140px',
                background: 'linear-gradient(135deg, #D4623A 0%, #F5A945 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 4px 20px rgba(212, 98, 58, 0.5))',
              }}
            >
              SECRETO
            </div>

            {/* Tagline */}
            <div
              className="text-white/80 mt-2"
              style={{
                fontSize: preview ? '12px' : '36px',
                letterSpacing: '0.1em',
              }}
            >
              Organize sorteios com diversão!
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent bar */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: preview ? '4px' : '12px',
          background: 'linear-gradient(90deg, #D4623A, #6AAF52, #7AB4E0, #D4623A)',
        }}
      />
    </div>
  );
}
