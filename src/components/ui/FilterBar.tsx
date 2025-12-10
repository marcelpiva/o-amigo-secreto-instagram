'use client';

import { PostType, PostMonth, PostStatus } from '@/lib/posts-data';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface FilterBarProps {
  selectedMonth: PostMonth | 'all';
  selectedType: PostType | 'all';
  selectedStatus: PostStatus | 'all';
  showBoostOnly: boolean;
  viewMode: 'grid' | 'calendar';
  totalPosts: number;
  filteredPosts: number;
  totalBudget: number;
  onMonthChange: (month: PostMonth | 'all') => void;
  onTypeChange: (type: PostType | 'all') => void;
  onStatusChange: (status: PostStatus | 'all') => void;
  onBoostChange: (boostOnly: boolean) => void;
  onViewModeChange: (mode: 'grid' | 'calendar') => void;
}

const months: { value: PostMonth | 'all'; label: string; emoji: string }[] = [
  { value: 'all', label: 'Todos os Meses', emoji: '📅' },
  { value: 'dezembro', label: 'Dezembro 2025', emoji: '🎄' },
  { value: 'janeiro', label: 'Janeiro 2026', emoji: '🎆' },
  { value: 'fevereiro', label: 'Fevereiro 2026', emoji: '🎭' },
  { value: 'marco', label: 'Marco 2026', emoji: '🐰' },
];

const types: { value: PostType | 'all'; label: string; emoji: string; color: string }[] = [
  { value: 'all', label: 'Todos', emoji: '📱', color: 'bg-gray-500' },
  { value: 'story', label: 'Story', emoji: '📸', color: 'bg-purple-500' },
  { value: 'carousel', label: 'Carrossel', emoji: '🎠', color: 'bg-blue-500' },
  { value: 'reels', label: 'Reels', emoji: '🎬', color: 'bg-pink-500' },
  { value: 'static', label: 'Estatico', emoji: '🖼️', color: 'bg-green-500' },
];

const statuses: { value: PostStatus | 'all'; label: string; emoji: string }[] = [
  { value: 'all', label: 'Todos', emoji: '📋' },
  { value: 'draft', label: 'Rascunho', emoji: '✏️' },
  { value: 'scheduled', label: 'Agendado', emoji: '📆' },
  { value: 'published', label: 'Publicado', emoji: '✅' },
];

export default function FilterBar({
  selectedMonth,
  selectedType,
  selectedStatus,
  showBoostOnly,
  viewMode,
  totalPosts,
  filteredPosts,
  totalBudget,
  onMonthChange,
  onTypeChange,
  onStatusChange,
  onBoostChange,
  onViewModeChange,
}: FilterBarProps) {
  return (
    <div className="space-y-4">
      {/* Main Filters Row */}
      <div className="flex flex-wrap gap-3 items-end">
        {/* Month Select */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            Mes
          </label>
          <Select value={selectedMonth} onValueChange={(v) => onMonthChange(v as PostMonth | 'all')}>
            <SelectTrigger className="w-[180px] bg-card border-border">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {months.map((month) => (
                <SelectItem key={month.value} value={month.value}>
                  <span className="flex items-center gap-2">
                    <span>{month.emoji}</span>
                    <span>{month.label}</span>
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Type Select */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            Tipo
          </label>
          <Select value={selectedType} onValueChange={(v) => onTypeChange(v as PostType | 'all')}>
            <SelectTrigger className="w-[160px] bg-card border-border">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {types.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  <span className="flex items-center gap-2">
                    <span>{type.emoji}</span>
                    <span>{type.label}</span>
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Status Select */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            Status
          </label>
          <Select value={selectedStatus} onValueChange={(v) => onStatusChange(v as PostStatus | 'all')}>
            <SelectTrigger className="w-[150px] bg-card border-border">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {statuses.map((status) => (
                <SelectItem key={status.value} value={status.value}>
                  <span className="flex items-center gap-2">
                    <span>{status.emoji}</span>
                    <span>{status.label}</span>
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Boost Toggle */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            Boost
          </label>
          <Button
            variant={showBoostOnly ? 'default' : 'outline'}
            size="default"
            onClick={() => onBoostChange(!showBoostOnly)}
            className={showBoostOnly ? 'bg-[#D4623A] hover:bg-[#B54D2A]' : ''}
          >
            {showBoostOnly ? '💰 Com Boost' : '📊 Todos'}
          </Button>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* View Mode Tabs */}
        <Tabs value={viewMode} onValueChange={(v) => onViewModeChange(v as 'grid' | 'calendar')}>
          <TabsList className="bg-card border border-border">
            <TabsTrigger value="grid" className="data-[state=active]:bg-[#D4623A] data-[state=active]:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              Grid
            </TabsTrigger>
            <TabsTrigger value="calendar" className="data-[state=active]:bg-[#D4623A] data-[state=active]:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Calendario
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Stats Row */}
      <div className="flex items-center gap-4 pt-3 border-t border-border">
        <Badge variant="secondary" className="text-sm py-1 px-3">
          <span className="text-muted-foreground mr-1">Mostrando</span>
          <span className="font-bold text-foreground">{filteredPosts}</span>
          <span className="text-muted-foreground mx-1">de</span>
          <span className="font-bold text-foreground">{totalPosts}</span>
          <span className="text-muted-foreground ml-1">posts</span>
        </Badge>

        <Badge variant="outline" className="text-sm py-1 px-3 border-[#6AAF52]/50">
          <span className="text-muted-foreground mr-1">Budget Total:</span>
          <span className="font-bold text-[#6AAF52]">R$ {totalBudget.toLocaleString('pt-BR')}</span>
        </Badge>

        {/* Type Legend */}
        <div className="flex items-center gap-3 ml-auto">
          {types.slice(1).map((type) => (
            <div key={type.value} className="flex items-center gap-1.5">
              <div className={`w-3 h-3 rounded ${type.color}`} />
              <span className="text-xs text-muted-foreground">{type.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
