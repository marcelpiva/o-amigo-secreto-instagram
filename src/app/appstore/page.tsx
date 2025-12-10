'use client';

import { useRef, useState } from 'react';
import { toPng } from 'html-to-image';
import { AppStoreHeader, MarketingScreenshot } from '@/components/appstore';

export default function AppStorePage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const screenshotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [exporting, setExporting] = useState<string | null>(null);

  const handleExport = async (ref: HTMLDivElement | null, filename: string) => {
    if (!ref) return;

    setExporting(filename);
    try {
      const dataUrl = await toPng(ref, {
        pixelRatio: 4,
        cacheBust: true,
      });

      const link = document.createElement('a');
      link.download = `${filename}.png`;
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error('Export error:', error);
    } finally {
      setExporting(null);
    }
  };

  const handleExportFull = async (type: 'header' | 'screenshot', variant?: number) => {
    setExporting(type === 'header' ? 'header' : `screenshot-${variant}`);

    try {
      // Create off-screen element at full size
      const container = document.createElement('div');
      container.style.position = 'absolute';
      container.style.left = '-9999px';
      container.style.top = '-9999px';
      document.body.appendChild(container);

      // Render full-size component
      const { createRoot } = await import('react-dom/client');
      const root = createRoot(container);

      await new Promise<void>((resolve) => {
        if (type === 'header') {
          root.render(<AppStoreHeader preview={false} />);
        } else {
          root.render(<MarketingScreenshot preview={false} variant={variant as 1|2|3|4|5} />);
        }
        setTimeout(resolve, 500); // Wait for render and images
      });

      const element = container.firstChild as HTMLElement;
      if (element) {
        const dataUrl = await toPng(element, {
          pixelRatio: 1,
          cacheBust: true,
        });

        const link = document.createElement('a');
        link.download = type === 'header' ? 'app-store-header-1800x1200.png' : `screenshot-${variant}-1290x2796.png`;
        link.href = dataUrl;
        link.click();
      }

      root.unmount();
      document.body.removeChild(container);
    } catch (error) {
      console.error('Export error:', error);
    } finally {
      setExporting(null);
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-2">App Store Assets</h1>
          <p className="text-white/60">Imagens para App Store Connect</p>
        </div>

        {/* App Clip Header */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-white">Imagem de Cabeçalho</h2>
              <p className="text-white/60 text-sm">1800 x 1200 pixels • App Clip</p>
            </div>
            <button
              onClick={() => handleExportFull('header')}
              disabled={exporting === 'header'}
              className="px-6 py-3 bg-[#D4623A] text-white font-semibold hover:bg-[#D4623A]/80 transition-colors disabled:opacity-50"
            >
              {exporting === 'header' ? 'Exportando...' : 'Exportar PNG'}
            </button>
          </div>

          <div
            ref={headerRef}
            className="inline-block border border-white/20"
          >
            <AppStoreHeader preview={true} />
          </div>
        </section>

        {/* Screenshots */}
        <section>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white">Screenshots Marketing</h2>
            <p className="text-white/60 text-sm">1290 x 2796 pixels • iPhone 6.7"</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[1, 2, 3, 4, 5].map((variant) => (
              <div key={variant} className="flex flex-col gap-3">
                <div
                  ref={(el) => { screenshotRefs.current[variant - 1] = el; }}
                  className="border border-white/20"
                >
                  <MarketingScreenshot preview={true} variant={variant as 1|2|3|4|5} />
                </div>
                <button
                  onClick={() => handleExportFull('screenshot', variant)}
                  disabled={exporting === `screenshot-${variant}`}
                  className="px-4 py-2 bg-white/10 text-white text-sm font-medium hover:bg-white/20 transition-colors disabled:opacity-50"
                >
                  {exporting === `screenshot-${variant}` ? 'Exportando...' : `Exportar #${variant}`}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Specs */}
        <section className="mt-16 p-6 bg-white/5 border border-white/10">
          <h3 className="text-lg font-bold text-white mb-4">Especificações</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="text-white/80 font-medium mb-2">Imagem de Cabeçalho (App Clip)</h4>
              <ul className="text-white/60 space-y-1">
                <li>• Dimensão: 1800 x 1200 pixels</li>
                <li>• Formato: PNG ou JPG</li>
                <li>• Modo de cor: RGB</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white/80 font-medium mb-2">Screenshots iPhone 6.7"</h4>
              <ul className="text-white/60 space-y-1">
                <li>• Dimensão: 1290 x 2796 pixels</li>
                <li>• Formato: PNG ou JPG</li>
                <li>• Obrigatório para App Store</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Instructions */}
        <section className="mt-8 p-6 bg-[#D4623A]/10 border border-[#D4623A]/20">
          <h3 className="text-lg font-bold text-white mb-2">Como usar</h3>
          <ol className="text-white/70 text-sm space-y-2">
            <li>1. Clique em "Exportar PNG" para baixar a imagem em tamanho real</li>
            <li>2. As imagens são geradas nas dimensões exatas exigidas pela App Store</li>
            <li>3. Faça upload no App Store Connect → Screenshots e Pré-visualizações</li>
            <li>4. Para outras dimensões (6.5", 5.5"), as mesmas imagens podem ser redimensionadas</li>
          </ol>
        </section>
      </div>
    </div>
  );
}
