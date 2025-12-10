'use client';

import { PostFrame } from '../ui/PostFrame';
import Image from 'next/image';

interface Post04LancamentoProps {
  preview?: boolean;
}

export function Post04Lancamento({ preview = true }: Post04LancamentoProps) {
  return (
    <PostFrame size="square" preview={preview} showLogo={false}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#D4623A] via-[#F5A945] to-[#D4623A]" />

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/3 bg-black/10" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">
        {/* Badge */}
        <div
          className="mb-6 px-4 py-2 bg-white text-[#D4623A] font-bold uppercase tracking-wider"
          style={{
            fontSize: preview ? '8px' : '20px',
            padding: preview ? '2px 6px' : '8px 20px'
          }}
        >
          Lançamento Oficial
        </div>

        {/* Logo */}
        <div className="mb-6">
          <Image
            src="/logo.png"
            alt="O Amigo Secreto"
            width={preview ? 50 : 180}
            height={preview ? 50 : 180}
          />
        </div>

        {/* Title */}
        <h1
          className="font-bold text-white leading-tight mb-2"
          style={{
            fontSize: preview ? '20px' : '72px',
            fontFamily: 'var(--font-oxanium), Oxanium'
          }}
        >
          JÁ DISPONÍVEL!
        </h1>

        <p
          className="text-white/90 mb-8"
          style={{ fontSize: preview ? '10px' : '32px' }}
        >
          iOS & Android
        </p>

        {/* Store badges representation */}
        <div className="flex gap-4">
          <div
            className="bg-black text-white px-4 py-2 flex items-center gap-2"
            style={{
              fontSize: preview ? '6px' : '18px',
              padding: preview ? '4px 8px' : '12px 24px'
            }}
          >
            <span>📱</span>
            <span>App Store</span>
          </div>
          <div
            className="bg-black text-white px-4 py-2 flex items-center gap-2"
            style={{
              fontSize: preview ? '6px' : '18px',
              padding: preview ? '4px 8px' : '12px 24px'
            }}
          >
            <span>▶️</span>
            <span>Google Play</span>
          </div>
        </div>

        {/* GRATIS badge */}
        <div
          className="mt-8 px-6 py-3 bg-white text-[#D4623A] font-bold"
          style={{
            fontSize: preview ? '10px' : '28px',
            padding: preview ? '4px 12px' : '12px 32px'
          }}
        >
          100% GRÁTIS
        </div>
      </div>
    </PostFrame>
  );
}
