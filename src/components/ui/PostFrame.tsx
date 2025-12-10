'use client';

import { ReactNode } from 'react';
import Image from 'next/image';

export type PostSize = 'square' | 'vertical' | 'story';

interface PostFrameProps {
  size: PostSize;
  children: ReactNode;
  className?: string;
  showLogo?: boolean;
  preview?: boolean;
}

const sizeClasses = {
  square: {
    full: 'w-[1080px] h-[1080px]',
    preview: 'w-[270px] h-[270px]',
  },
  vertical: {
    full: 'w-[1080px] h-[1350px]',
    preview: 'w-[270px] h-[337px]',
  },
  story: {
    full: 'w-[1080px] h-[1920px]',
    preview: 'w-[270px] h-[480px]',
  },
};

export function PostFrame({
  size,
  children,
  className = '',
  showLogo = true,
  preview = true
}: PostFrameProps) {
  const sizeClass = preview ? sizeClasses[size].preview : sizeClasses[size].full;
  const scale = preview ? 0.25 : 1;

  return (
    <div
      className={`relative overflow-hidden bg-[#363636] ${sizeClass} ${className}`}
      style={{
        fontFamily: 'var(--font-oxanium), Oxanium, system-ui, sans-serif',
      }}
    >
      {children}

      {showLogo && (
        <div className="absolute bottom-4 right-4" style={{ transform: `scale(${scale})`, transformOrigin: 'bottom right' }}>
          <Image
            src="/logo.png"
            alt="O Amigo Secreto"
            width={preview ? 40 : 160}
            height={preview ? 40 : 160}
            className="opacity-80"
          />
        </div>
      )}
    </div>
  );
}

export function CarouselIndicator({
  total,
  current,
  preview = true
}: {
  total: number;
  current: number;
  preview?: boolean;
}) {
  const dotSize = preview ? 'w-2 h-2' : 'w-3 h-3';

  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`${dotSize} rounded-full transition-all ${
            i === current
              ? 'bg-[#D4623A]'
              : 'bg-white/30'
          }`}
        />
      ))}
    </div>
  );
}
