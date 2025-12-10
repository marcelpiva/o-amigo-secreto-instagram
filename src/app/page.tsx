'use client';

import { useState, useRef } from 'react';
import { toPng } from 'html-to-image';
import { posts } from '@/lib/posts-data';
import {
  Post01Teaser,
  Post02Problemas,
  Post03Revelacao,
  Post04Lancamento,
  Post05Algoritmo,
  Post06Wishlist,
  Post07Chat,
  Post08Grupos,
  Post09Tutorial,
  Post10Depoimentos,
  Post11Countdown,
  Post12B2B,
  Post13Natal,
  Post14AnoNovo,
  Post15Retrospectiva,
  Post16AnoTodo,
} from '@/components/posts';

const postComponents: Record<number, React.ComponentType<{ preview?: boolean; slideIndex?: number }>> = {
  1: Post01Teaser,
  2: Post02Problemas,
  3: Post03Revelacao,
  4: Post04Lancamento,
  5: Post05Algoritmo,
  6: Post06Wishlist,
  7: Post07Chat,
  8: Post08Grupos,
  9: Post09Tutorial,
  10: Post10Depoimentos,
  11: Post11Countdown,
  12: Post12B2B,
  13: Post13Natal,
  14: Post14AnoNovo,
  15: Post15Retrospectiva,
  16: Post16AnoTodo,
};

export default function Home() {
  const [selectedPost, setSelectedPost] = useState<number | null>(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [exporting, setExporting] = useState(false);
  const postRef = useRef<HTMLDivElement>(null);

  const selectedPostData = selectedPost ? posts.find(p => p.id === selectedPost) : null;
  const PostComponent = selectedPost ? postComponents[selectedPost] : null;
  const totalSlides = selectedPostData?.slides?.length || 1;

  const exportPost = async () => {
    if (!postRef.current || !selectedPostData) return;

    setExporting(true);
    try {
      const dataUrl = await toPng(postRef.current, {
        quality: 1,
        pixelRatio: 4,
      });

      const link = document.createElement('a');
      link.download = `post-${selectedPostData.id.toString().padStart(2, '0')}-${selectedPostData.slug}-slide-${slideIndex + 1}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Error exporting:', err);
    }
    setExporting(false);
  };

  const exportAllSlides = async () => {
    if (!postRef.current || !selectedPostData) return;

    setExporting(true);
    for (let i = 0; i < totalSlides; i++) {
      setSlideIndex(i);
      await new Promise(resolve => setTimeout(resolve, 500));

      try {
        const dataUrl = await toPng(postRef.current, {
          quality: 1,
          pixelRatio: 4,
        });

        const link = document.createElement('a');
        link.download = `post-${selectedPostData.id.toString().padStart(2, '0')}-${selectedPostData.slug}-slide-${i + 1}.png`;
        link.href = dataUrl;
        link.click();
        await new Promise(resolve => setTimeout(resolve, 300));
      } catch (err) {
        console.error('Error exporting slide:', i, err);
      }
    }
    setExporting(false);
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-[#E5E5E5]">
      {/* Header */}
      <header className="border-b border-[#484848] p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-[#D4623A]">O Amigo Secreto</h1>
            <p className="text-[#AFAFAF] text-sm">Campanha Instagram/TikTok - Dezembro 2025</p>
          </div>
          <div className="flex gap-4 text-sm">
            <span className="px-3 py-1 bg-[#484848]">{posts.length} posts</span>
            <span className="px-3 py-1 bg-[#D4623A]/20 text-[#D4623A]">
              R$ {posts.reduce((acc, p) => acc + (p.boost || 0), 0)} boost total
            </span>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6 flex gap-8">
        {/* Posts Grid */}
        <div className="flex-1">
          <h2 className="text-lg font-semibold mb-4">Todos os Posts ({posts.length})</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {posts.map((post) => {
              const Component = postComponents[post.id];
              return (
                <div
                  key={post.id}
                  onClick={() => {
                    setSelectedPost(post.id);
                    setSlideIndex(0);
                  }}
                  className={`cursor-pointer transition-all hover:scale-105 ${
                    selectedPost === post.id ? 'ring-2 ring-[#D4623A]' : ''
                  }`}
                >
                  <div className="relative">
                    <Component preview slideIndex={0} />
                    {post.boost && (
                      <div className="absolute top-2 right-2 bg-[#D4623A] text-white text-xs px-2 py-0.5">
                        R${post.boost}
                      </div>
                    )}
                  </div>
                  <div className="mt-2 text-xs">
                    <p className="font-medium truncate">{post.id}. {post.title}</p>
                    <p className="text-[#AFAFAF]">{post.date} - {post.time}</p>
                    <p className="text-[#666666] capitalize">{post.type} • {post.format}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Preview Panel */}
        {selectedPost && PostComponent && selectedPostData && (
          <div className="w-96 sticky top-6 h-fit">
            <div className="bg-[#484848] p-4">
              <h3 className="font-semibold mb-2">{selectedPostData.id}. {selectedPostData.title}</h3>
              <p className="text-sm text-[#AFAFAF] mb-4">
                {selectedPostData.date} às {selectedPostData.time}
              </p>

              {/* Preview (Full Size for export) */}
              <div ref={postRef} className="mb-4 transform scale-[0.35] origin-top-left" style={{ width: selectedPostData.format === 'story' ? '1080px' : '1080px', height: selectedPostData.format === 'story' ? '1920px' : selectedPostData.format === 'vertical' ? '1350px' : '1080px' }}>
                <PostComponent preview={false} slideIndex={slideIndex} />
              </div>

              {/* Container to prevent layout shift */}
              <div style={{ height: selectedPostData.format === 'story' ? '672px' : selectedPostData.format === 'vertical' ? '472px' : '378px', marginTop: '-' + (selectedPostData.format === 'story' ? '1248px' : selectedPostData.format === 'vertical' ? '878px' : '702px') }} />

              {/* Slide navigation */}
              {totalSlides > 1 && (
                <div className="flex items-center justify-between mb-4 mt-4">
                  <button
                    onClick={() => setSlideIndex(Math.max(0, slideIndex - 1))}
                    disabled={slideIndex === 0}
                    className="px-3 py-1 bg-[#363636] disabled:opacity-50"
                  >
                    ←
                  </button>
                  <span className="text-sm text-[#AFAFAF]">
                    Slide {slideIndex + 1} / {totalSlides}
                  </span>
                  <button
                    onClick={() => setSlideIndex(Math.min(totalSlides - 1, slideIndex + 1))}
                    disabled={slideIndex === totalSlides - 1}
                    className="px-3 py-1 bg-[#363636] disabled:opacity-50"
                  >
                    →
                  </button>
                </div>
              )}

              {/* Export buttons */}
              <div className="flex gap-2 mt-4">
                <button
                  onClick={exportPost}
                  disabled={exporting}
                  className="flex-1 px-4 py-2 bg-[#D4623A] text-white font-semibold disabled:opacity-50"
                >
                  {exporting ? 'Exportando...' : 'Exportar PNG'}
                </button>
                {totalSlides > 1 && (
                  <button
                    onClick={exportAllSlides}
                    disabled={exporting}
                    className="px-4 py-2 bg-[#6AAF52] text-white font-semibold disabled:opacity-50"
                    title="Exportar todos os slides"
                  >
                    Todos ({totalSlides})
                  </button>
                )}
              </div>

              {/* Post info */}
              <div className="mt-4 text-xs space-y-2 border-t border-[#666666] pt-4">
                <div className="flex justify-between">
                  <span className="text-[#AFAFAF]">Tipo:</span>
                  <span className="capitalize">{selectedPostData.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#AFAFAF]">Formato:</span>
                  <span>
                    {selectedPostData.format === 'square' && '1080x1080 (Feed)'}
                    {selectedPostData.format === 'vertical' && '1080x1350 (Feed)'}
                    {selectedPostData.format === 'story' && '1080x1920 (Story/Reels/TikTok)'}
                  </span>
                </div>
                {selectedPostData.boost && (
                  <div className="flex justify-between">
                    <span className="text-[#AFAFAF]">Boost:</span>
                    <span className="text-[#D4623A] font-semibold">R$ {selectedPostData.boost}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-[#AFAFAF]">Categoria:</span>
                  <span className="capitalize">{selectedPostData.category}</span>
                </div>
              </div>

              {/* CTA */}
              {selectedPostData.cta && (
                <div className="mt-4 text-xs">
                  <p className="text-[#AFAFAF] mb-1">CTA:</p>
                  <p className="bg-[#363636] p-2 text-[#D4623A]">{selectedPostData.cta}</p>
                </div>
              )}

              {/* Caption */}
              <div className="mt-4 text-xs">
                <p className="text-[#AFAFAF] mb-1">Caption (copiar):</p>
                <p className="bg-[#363636] p-2 max-h-24 overflow-y-auto whitespace-pre-wrap">
                  {selectedPostData.caption}
                </p>
              </div>

              {/* Hashtags */}
              <div className="mt-4 text-xs">
                <p className="text-[#AFAFAF] mb-1">Hashtags (copiar):</p>
                <p className="bg-[#363636] p-2 text-[#7AB4E0] break-all">
                  {selectedPostData.hashtags.join(' ')}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-[#484848] p-4 text-center text-xs text-[#666666]">
        <p>O Amigo Secreto - Campanha de Lançamento Dezembro 2025</p>
        <p className="mt-1">Formatos: Instagram Feed (1080x1080), Stories/Reels (1080x1920), TikTok (1080x1920)</p>
      </footer>
    </div>
  );
}
