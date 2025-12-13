'use client';

import React, { useState, useRef, useMemo } from 'react';
import Image from 'next/image';
import { toPng } from 'html-to-image';
import { posts, PostData, PostType, PostMonth, PostStatus, getTotalBudget, getBudgetByMonth } from '@/lib/posts-data';
import FilterBar from '@/components/ui/FilterBar';
import CalendarView from '@/components/ui/CalendarView';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
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

// Import new 2026 posts - Janeiro
import { Post17AnoNovo } from '@/components/posts/Post17AnoNovo';
import { Post18NumerosDezembro } from '@/components/posts/Post18NumerosDezembro';
import { Post19MelhoresMomentos } from '@/components/posts/Post19MelhoresMomentos';
import { Post20AmigoAnoNovo } from '@/components/posts/Post20AmigoAnoNovo';
import { Post21Badges } from '@/components/posts/Post21Badges';
import { Post22PollBadges } from '@/components/posts/Post22PollBadges';
import { Post23DepoimentosReais } from '@/components/posts/Post23DepoimentosReais';
import { Post24TutorialChat } from '@/components/posts/Post24TutorialChat';
import { Post25QAJaneiro } from '@/components/posts/Post25QAJaneiro';
import { Post26FeatureDicas } from '@/components/posts/Post26FeatureDicas';
import { Post27DicaWishlist } from '@/components/posts/Post27DicaWishlist';
import { Post28EnqueteFeature } from '@/components/posts/Post28EnqueteFeature';
import { Post29POVDescoberta } from '@/components/posts/Post29POVDescoberta';
import { Post30JaneiroReview } from '@/components/posts/Post30JaneiroReview';

// Import new 2026 posts - Fevereiro
import { Post31TeaserCarnaval } from '@/components/posts/Post31TeaserCarnaval';
import { Post32AmigoFolia } from '@/components/posts/Post32AmigoFolia';
import { Post33IdeiasCarnaval } from '@/components/posts/Post33IdeiasCarnaval';
import { Post34PollCarnaval } from '@/components/posts/Post34PollCarnaval';
import { Post35TeamBuilding } from '@/components/posts/Post35TeamBuilding';
import { Post36CaseEmpresa } from '@/components/posts/Post36CaseEmpresa';
import { Post37GuiaRH } from '@/components/posts/Post37GuiaRH';
import { Post38DiaAmigos } from '@/components/posts/Post38DiaAmigos';
import { Post39RevelacoesCarnaval } from '@/components/posts/Post39RevelacoesCarnaval';
import { Post40UGCCarnaval } from '@/components/posts/Post40UGCCarnaval';
import { Post41MelhoresCarnaval } from '@/components/posts/Post41MelhoresCarnaval';
import { Post42VoltaRotina } from '@/components/posts/Post42VoltaRotina';
import { Post43TeaserPascoa } from '@/components/posts/Post43TeaserPascoa';
import { Post44TutorialRestricoes } from '@/components/posts/Post44TutorialRestricoes';

// Import new 2026 posts - Março
import { Post45MulheresOrganizam } from '@/components/posts/Post45MulheresOrganizam';
import { Post46CountdownMulher } from '@/components/posts/Post46CountdownMulher';
import { Post47DiaMulher } from '@/components/posts/Post47DiaMulher';
import { Post48AmigoChocolate } from '@/components/posts/Post48AmigoChocolate';
import { Post49IdeiasPascoa } from '@/components/posts/Post49IdeiasPascoa';
import { Post50PollChocolate } from '@/components/posts/Post50PollChocolate';
import { Post51NovaFeature } from '@/components/posts/Post51NovaFeature';
import { Post52DicasUso } from '@/components/posts/Post52DicasUso';
import { Post53QAMarco } from '@/components/posts/Post53QAMarco';
import { Post54POVChocolate } from '@/components/posts/Post54POVChocolate';
import { Post55CountdownPascoa } from '@/components/posts/Post55CountdownPascoa';
import { Post56UltimasDicasPascoa } from '@/components/posts/Post56UltimasDicasPascoa';
import { Post57TutorialPascoa } from '@/components/posts/Post57TutorialPascoa';
import { Post58UltimaChamada } from '@/components/posts/Post58UltimaChamada';

// Import HUMANIZED posts - Crescimento de Seguidores
import { PostH1AjudeNos } from '@/components/posts/PostH1AjudeNos';

// Component placeholder for posts that don't have components yet
function PlaceholderPost({ preview, slideIndex = 0, post }: { preview?: boolean; slideIndex?: number; post?: PostData }) {
  const displayPost = post || { id: 0, title: 'Post', type: 'static', slides: [], month: 'dezembro' as PostMonth };
  const slides = displayPost.slides || [{ id: 1, content: displayPost.title }];
  const currentSlide = slides[slideIndex] || slides[0];

  const monthEmojis: Record<PostMonth, string> = {
    dezembro: '🎄',
    janeiro: '🎆',
    fevereiro: '🎭',
    marco: '🐰',
  };

  const typeEmojis: Record<string, string> = {
    story: '📸',
    carousel: '🎠',
    reels: '🎬',
    static: '🖼️',
  };

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-[#2a2a2a] via-[#363636] to-[#2a2a2a] flex items-center justify-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: preview ? '15px 15px' : '40px 40px',
        }}
      />

      {/* Decorative elements */}
      <div
        className="absolute top-1/4 left-1/4 rounded-full blur-3xl animate-pulse"
        style={{
          width: preview ? '100px' : '300px',
          height: preview ? '100px' : '300px',
          background: 'radial-gradient(circle, rgba(212,98,58,0.3) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 text-center p-6">
        {/* Month + Type emoji */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <span style={{ fontSize: preview ? '40px' : '80px' }}>
            {monthEmojis[displayPost.month]}
          </span>
          <span style={{ fontSize: preview ? '30px' : '60px' }}>
            {typeEmojis[displayPost.type]}
          </span>
        </div>

        {/* Post number */}
        <div
          className="inline-block px-4 py-1 bg-[#D4623A] text-white font-black mb-3"
          style={{
            fontSize: preview ? '14px' : '32px',
            padding: preview ? '4px 12px' : '8px 24px',
          }}
        >
          #{displayPost.id.toString().padStart(2, '0')}
        </div>

        {/* Title */}
        <h2
          className="font-bold text-white mb-2 leading-tight"
          style={{ fontSize: preview ? '14px' : '36px' }}
        >
          {currentSlide.content}
        </h2>

        {/* Subtitle */}
        {currentSlide.subContent && (
          <p
            className="text-gray-400"
            style={{ fontSize: preview ? '10px' : '24px' }}
          >
            {currentSlide.subContent}
          </p>
        )}

        {/* Type badge */}
        <div
          className="mt-4 inline-block px-3 py-1 bg-white/10 backdrop-blur text-white/70 capitalize"
          style={{
            fontSize: preview ? '9px' : '20px',
            padding: preview ? '4px 10px' : '8px 20px',
          }}
        >
          {displayPost.type} • {displayPost.month}
        </div>
      </div>
    </div>
  );
}

const postComponents: Record<number, React.ComponentType<{ preview?: boolean; slideIndex?: number }>> = {
  // December 2025 posts (original)
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

  // January 2026 posts
  17: Post17AnoNovo,
  18: Post18NumerosDezembro,
  19: Post19MelhoresMomentos,
  20: Post20AmigoAnoNovo,
  21: Post21Badges,
  22: Post22PollBadges,
  23: Post23DepoimentosReais,
  24: Post24TutorialChat,
  25: Post25QAJaneiro,
  26: Post26FeatureDicas,
  27: Post27DicaWishlist,
  28: Post28EnqueteFeature,
  29: Post29POVDescoberta,
  30: Post30JaneiroReview,

  // February 2026 posts
  31: Post31TeaserCarnaval,
  32: Post32AmigoFolia,
  33: Post33IdeiasCarnaval,
  34: Post34PollCarnaval,
  35: Post35TeamBuilding,
  36: Post36CaseEmpresa,
  37: Post37GuiaRH,
  38: Post38DiaAmigos,
  39: Post39RevelacoesCarnaval,
  40: Post40UGCCarnaval,
  41: Post41MelhoresCarnaval,
  42: Post42VoltaRotina,
  43: Post43TeaserPascoa,
  44: Post44TutorialRestricoes,

  // March 2026 posts
  45: Post45MulheresOrganizam,
  46: Post46CountdownMulher,
  47: Post47DiaMulher,
  48: Post48AmigoChocolate,
  49: Post49IdeiasPascoa,
  50: Post50PollChocolate,
  51: Post51NovaFeature,
  52: Post52DicasUso,
  53: Post53QAMarco,
  54: Post54POVChocolate,
  55: Post55CountdownPascoa,
  56: Post56UltimasDicasPascoa,
  57: Post57TutorialPascoa,
  58: Post58UltimaChamada,

  // HUMANIZED posts - Crescimento de Seguidores
  59: PostH1AjudeNos,
  // 60: PostH2QuemFaz, // TODO
  // 61: PostH3PorQueGratuitos, // TODO
  // 62: PostH4SigaParaGratuito, // TODO
  // 63: PostH5ObrigadoComunidade, // TODO
};

const monthLabels: Record<PostMonth, string> = {
  dezembro: 'Dezembro 2025',
  janeiro: 'Janeiro 2026',
  fevereiro: 'Fevereiro 2026',
  marco: 'Marco 2026',
};

const monthThemes: Record<PostMonth, { color: string; emoji: string; description: string }> = {
  dezembro: { color: '#D4623A', emoji: '🎄', description: 'Lancamento + Natal' },
  janeiro: { color: '#7AB4E0', emoji: '🎆', description: 'Ano Novo, Novas Celebracoes' },
  fevereiro: { color: '#F5A945', emoji: '🎭', description: 'Folia e Amizade (Carnaval)' },
  marco: { color: '#9B59B6', emoji: '🐰', description: 'Mulheres que Inspiram + Pascoa' },
};

function PostCard({ post, isSelected, onClick }: { post: PostData; isSelected: boolean; onClick: () => void }) {
  const Component = postComponents[post.id];

  return (
    <Card
      onClick={onClick}
      className={`cursor-pointer transition-all hover:scale-[1.02] bg-card border-border overflow-hidden ${
        isSelected ? 'ring-2 ring-[#D4623A] ring-offset-2 ring-offset-background' : ''
      }`}
    >
      <div className="relative aspect-square overflow-hidden">
        {Component ? (
          <Component preview slideIndex={0} />
        ) : (
          <PlaceholderPost preview slideIndex={0} post={post} />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

        {post.boost && (
          <Badge className="absolute top-2 right-2 bg-[#6AAF52] hover:bg-[#6AAF52]">
            R${post.boost}
          </Badge>
        )}

        <Badge
          variant="secondary"
          className="absolute top-2 left-2 capitalize"
        >
          {post.type}
        </Badge>

        {post.status === 'published' && (
          <Badge className="absolute top-2 left-1/2 -translate-x-1/2 bg-[#6AAF52] hover:bg-[#6AAF52]">
            Publicado
          </Badge>
        )}

        <div className="absolute bottom-2 left-2 text-white font-bold text-lg drop-shadow-lg">
          #{post.id.toString().padStart(2, '0')}
        </div>

        <div className="absolute bottom-2 right-2 text-white/70 text-[10px]">
          {post.format === 'square' && '1080x1080'}
          {post.format === 'vertical' && '1080x1350'}
          {post.format === 'story' && '1080x1920'}
        </div>
      </div>

      <CardContent className="p-3">
        <h3 className="font-semibold text-sm text-foreground truncate">{post.title}</h3>
        <p className="text-[11px] text-muted-foreground mt-1">{post.date} as {post.time}</p>
        {post.slides && post.slides.length > 1 && (
          <p className="text-[10px] text-[#7AB4E0] mt-1">{post.slides.length} slides</p>
        )}
      </CardContent>
    </Card>
  );
}

export default function Home() {
  const [selectedPost, setSelectedPost] = useState<number | null>(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [exporting, setExporting] = useState(false);
  const postRef = useRef<HTMLDivElement>(null);

  // Filter state
  const [selectedMonth, setSelectedMonth] = useState<PostMonth | 'all'>('all');
  const [selectedType, setSelectedType] = useState<PostType | 'all'>('all');
  const [selectedStatus, setSelectedStatus] = useState<PostStatus | 'all'>('all');
  const [showBoostOnly, setShowBoostOnly] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'calendar'>('grid');

  // Filter posts
  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      if (selectedMonth !== 'all' && post.month !== selectedMonth) return false;
      if (selectedType !== 'all' && post.type !== selectedType) return false;
      if (selectedStatus !== 'all' && post.status !== selectedStatus) return false;
      if (showBoostOnly && !post.boost) return false;
      return true;
    });
  }, [selectedMonth, selectedType, selectedStatus, showBoostOnly]);

  // Group posts by month for grid view
  const postsByMonth = useMemo(() => {
    const grouped: Record<PostMonth, PostData[]> = {
      dezembro: [],
      janeiro: [],
      fevereiro: [],
      marco: [],
    };
    filteredPosts.forEach(post => {
      grouped[post.month].push(post);
    });
    return grouped;
  }, [filteredPosts]);

  const selectedPostData = selectedPost ? posts.find(p => p.id === selectedPost) : null;
  const PostComponent = selectedPost ? postComponents[selectedPost] : null;
  const totalSlides = selectedPostData?.slides?.length || 1;

  const handlePostClick = (post: PostData) => {
    setSelectedPost(post.id);
    setSlideIndex(0);
  };

  const exportPost = async () => {
    if (!postRef.current || !selectedPostData) return;

    setExporting(true);
    try {
      const width = 1080;
      const height = selectedPostData.format === 'story' ? 1920 : selectedPostData.format === 'vertical' ? 1350 : 1080;

      const originalTransform = postRef.current.style.transform;
      postRef.current.style.transform = 'none';

      const dataUrl = await toPng(postRef.current, {
        quality: 1,
        pixelRatio: 1,
        width,
        height,
        canvasWidth: width,
        canvasHeight: height,
      });

      postRef.current.style.transform = originalTransform;

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

    const width = 1080;
    const height = selectedPostData.format === 'story' ? 1920 : selectedPostData.format === 'vertical' ? 1350 : 1080;

    for (let i = 0; i < totalSlides; i++) {
      setSlideIndex(i);
      await new Promise(resolve => setTimeout(resolve, 500));

      try {
        const originalTransform = postRef.current.style.transform;
        postRef.current.style.transform = 'none';

        const dataUrl = await toPng(postRef.current, {
          quality: 1,
          pixelRatio: 1,
          width,
          height,
          canvasWidth: width,
          canvasHeight: height,
        });

        postRef.current.style.transform = originalTransform;

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

  const boostTotal = getTotalBudget();
  const filteredBudget = filteredPosts.reduce((sum, p) => sum + (p.boost || 0), 0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="container mx-auto px-8 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
              <div className="p-2 bg-gradient-to-br from-[#D4623A]/20 to-[#F5A945]/20 rounded-xl">
                <Image
                  src="/logo.png"
                  alt="O Amigo Secreto"
                  width={52}
                  height={52}
                  className="rounded-lg"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-[#D4623A]">O Amigo Secreto</h1>
                <p className="text-muted-foreground text-sm">Campanha Instagram • Dez 2025 → Mar 2026</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Card className="px-5 py-3 bg-card border-border/50">
                <div className="text-center">
                  <div className="text-foreground font-bold text-xl">{posts.length}</div>
                  <div className="text-muted-foreground text-xs uppercase tracking-wider">posts</div>
                </div>
              </Card>
              <Card className="px-5 py-3 bg-[#D4623A]/10 border-[#D4623A]/30">
                <div className="text-center">
                  <div className="text-[#D4623A] font-bold text-xl">R$ {boostTotal.toLocaleString('pt-BR')}</div>
                  <div className="text-[#D4623A]/70 text-xs uppercase tracking-wider">boost total</div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-8 py-8">
        {/* Filter Bar */}
        <Card className="p-4 mb-6">
          <FilterBar
            selectedMonth={selectedMonth}
            selectedType={selectedType}
            selectedStatus={selectedStatus}
            showBoostOnly={showBoostOnly}
            viewMode={viewMode}
            totalPosts={posts.length}
            filteredPosts={filteredPosts.length}
            totalBudget={filteredBudget}
            onMonthChange={setSelectedMonth}
            onTypeChange={setSelectedType}
            onStatusChange={setSelectedStatus}
            onBoostChange={setShowBoostOnly}
            onViewModeChange={setViewMode}
          />
        </Card>

        <div className="flex gap-6">
          {/* Posts Grid / Calendar */}
          <div className="flex-1 min-w-0">
            {viewMode === 'calendar' ? (
              <CalendarView
                posts={filteredPosts}
                selectedMonth={selectedMonth}
                onPostClick={handlePostClick}
              />
            ) : (
              <div className="space-y-8">
                {(['dezembro', 'janeiro', 'fevereiro', 'marco'] as PostMonth[]).map((month) => {
                  const monthPosts = postsByMonth[month];
                  if (monthPosts.length === 0) return null;

                  const theme = monthThemes[month];
                  const monthBudget = getBudgetByMonth(month);

                  return (
                    <section key={month}>
                      <Card className="mb-4 p-4" style={{ borderLeftColor: theme.color, borderLeftWidth: '4px' }}>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{theme.emoji}</span>
                            <div>
                              <h2 className="text-lg font-bold" style={{ color: theme.color }}>
                                {monthLabels[month]}
                              </h2>
                              <p className="text-sm text-muted-foreground">{theme.description}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <Badge variant="secondary">{monthPosts.length} posts</Badge>
                            {monthBudget > 0 && (
                              <Badge className="bg-[#6AAF52] hover:bg-[#6AAF52]">
                                Budget: R${monthBudget}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </Card>

                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                        {monthPosts.map((post) => (
                          <PostCard
                            key={post.id}
                            post={post}
                            isSelected={selectedPost === post.id}
                            onClick={() => handlePostClick(post)}
                          />
                        ))}
                      </div>
                    </section>
                  );
                })}
              </div>
            )}
          </div>

          {/* Preview Panel */}
          <div className="w-[420px] flex-shrink-0">
            <div className="sticky top-24">
              {selectedPost && selectedPostData ? (
                <Card className="overflow-hidden">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <Badge className="bg-[#D4623A] hover:bg-[#D4623A] mb-2">
                          #{selectedPostData.id.toString().padStart(2, '0')}
                        </Badge>
                        <CardTitle className="text-lg">{selectedPostData.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{selectedPostData.date} as {selectedPostData.time}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedPost(null)}
                      >
                        ✕
                      </Button>
                    </div>

                    <div className="flex gap-2 mt-2 flex-wrap">
                      <Badge variant="outline" className="capitalize">{selectedPostData.type}</Badge>
                      <Badge variant="outline" className="capitalize">{selectedPostData.month}</Badge>
                      <Badge variant="outline">
                        {selectedPostData.format === 'square' && '1080x1080'}
                        {selectedPostData.format === 'vertical' && '1080x1350'}
                        {selectedPostData.format === 'story' && '1080x1920'}
                      </Badge>
                      {selectedPostData.boost && (
                        <Badge className="bg-[#6AAF52] hover:bg-[#6AAF52]">R${selectedPostData.boost}</Badge>
                      )}
                    </div>
                  </CardHeader>

                  <Separator />

                  <CardContent className="p-4 bg-muted/50">
                    <div
                      className="overflow-hidden rounded-lg"
                      style={{
                        height: selectedPostData.format === 'story' ? '384px' : selectedPostData.format === 'vertical' ? '486px' : '389px'
                      }}
                    >
                      <div
                        ref={postRef}
                        className="transform origin-top-left"
                        style={{
                          transform: `scale(${selectedPostData.format === 'story' ? 0.2 : 0.36})`,
                          width: '1080px',
                          height: selectedPostData.format === 'story' ? '1920px' : selectedPostData.format === 'vertical' ? '1350px' : '1080px',
                        }}
                      >
                        {PostComponent ? (
                          <PostComponent preview={false} slideIndex={slideIndex} />
                        ) : (
                          <PlaceholderPost preview={false} slideIndex={slideIndex} post={selectedPostData} />
                        )}
                      </div>
                    </div>
                  </CardContent>

                  {totalSlides > 1 && (
                    <>
                      <Separator />
                      <CardContent className="py-3 flex items-center justify-between">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setSlideIndex(Math.max(0, slideIndex - 1))}
                          disabled={slideIndex === 0}
                        >
                          Anterior
                        </Button>
                        <div className="flex items-center gap-2">
                          {Array.from({ length: totalSlides }).map((_, i) => (
                            <button
                              key={i}
                              onClick={() => setSlideIndex(i)}
                              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                                i === slideIndex ? 'bg-[#D4623A]' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                              }`}
                            />
                          ))}
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setSlideIndex(Math.min(totalSlides - 1, slideIndex + 1))}
                          disabled={slideIndex === totalSlides - 1}
                        >
                          Proximo
                        </Button>
                      </CardContent>
                    </>
                  )}

                  <Separator />

                  <CardContent className="py-4">
                    <div className="flex gap-2">
                      <Button
                        onClick={exportPost}
                        disabled={exporting}
                        className="flex-1 bg-[#D4623A] hover:bg-[#B54D2A]"
                      >
                        {exporting ? 'Exportando...' : `Exportar PNG ${totalSlides > 1 ? `(Slide ${slideIndex + 1})` : ''}`}
                      </Button>
                      {totalSlides > 1 && (
                        <Button
                          onClick={exportAllSlides}
                          disabled={exporting}
                          className="bg-[#6AAF52] hover:bg-[#5a9a45]"
                        >
                          Todos ({totalSlides})
                        </Button>
                      )}
                    </div>
                  </CardContent>

                  <Separator />

                  <CardContent className="space-y-4 py-4 max-h-[350px] overflow-y-auto">
                    {selectedPostData.cta && (
                      <div>
                        <label className="text-xs uppercase tracking-wider text-muted-foreground font-medium">CTA</label>
                        <p className="text-sm text-[#D4623A] mt-1 bg-muted p-3 rounded font-medium">{selectedPostData.cta}</p>
                      </div>
                    )}

                    <div>
                      <label className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Caption</label>
                      <p className="text-sm mt-1 bg-muted p-3 rounded whitespace-pre-wrap max-h-[120px] overflow-y-auto">{selectedPostData.caption}</p>
                    </div>

                    <div>
                      <label className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Hashtags</label>
                      <p className="text-sm text-[#7AB4E0] mt-1 bg-muted p-3 rounded break-all">{selectedPostData.hashtags.join(' ')}</p>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card className="p-8 text-center">
                  <div className="text-4xl mb-4">{viewMode === 'calendar' ? '📅' : '🎨'}</div>
                  <CardTitle className="text-lg mb-2">Selecione um post</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {viewMode === 'calendar'
                      ? 'Clique em um post no calendario para visualizar'
                      : 'Clique em um post para visualizar e exportar'}
                  </p>
                </Card>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 mt-auto">
        <div className="container mx-auto px-8 text-center">
          <p className="text-sm text-muted-foreground">
            O Amigo Secreto • Campanha Instagram Dezembro 2025 → Março 2026
          </p>
          <p className="mt-2 text-xs text-muted-foreground/70">
            58 posts • Budget: R$1.250 • #OAmigoSecreto
          </p>
        </div>
      </footer>
    </div>
  );
}
