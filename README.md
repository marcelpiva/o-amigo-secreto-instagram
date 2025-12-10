# O Amigo Secreto - Campanha Instagram/TikTok

![Version](https://img.shields.io/badge/version-2.0.0-blue)
![Posts](https://img.shields.io/badge/posts-58-green)
![Boost](https://img.shields.io/badge/boost-R%241.250-orange)

Projeto para criacao e exportacao de posts de Instagram e TikTok para a campanha de lancamento do app "O Amigo Secreto".

## Sobre a Campanha

- **Periodo:** Dezembro 2025 - Marco 2026
- **Posts:** 58 posts (estaticos, carrosseis, stories, reels)
- **Orcamento Boost:** R$ 1.250
- **Plataformas:** Instagram + TikTok

## Formatos Suportados

| Formato | Dimensao | Uso |
|---------|----------|-----|
| Square | 1080x1080 | Instagram Feed |
| Vertical | 1080x1350 | Instagram Feed |
| Story | 1080x1920 | Stories, Reels, TikTok |

## Como Usar

### 1. Instalar dependencias

```bash
npm install
```

### 2. Rodar o servidor de desenvolvimento

```bash
npm run dev
```

### 3. Acessar a galeria

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### 4. Exportar posts

1. Clique em um post para visualizar
2. Navegue entre slides (se houver)
3. Clique em "Exportar PNG" para baixar a imagem
4. Use "Todos" para exportar todos os slides de um carrossel

## Estrutura do Projeto

```
instagram/
├── src/
│   ├── app/
│   │   ├── page.tsx         # Galeria principal com filtros
│   │   └── layout.tsx       # Layout com fontes
│   ├── components/
│   │   ├── posts/           # 58 componentes de posts
│   │   └── ui/              # Componentes base (shadcn/ui)
│   └── lib/
│       ├── posts-data.ts    # Dados de todos os posts
│       └── colors.ts        # Paleta de cores
├── public/
│   └── logo.png             # Logo do app
└── docs/
    ├── ESTRATEGIA.md        # Estrategia de marketing
    ├── CALENDARIO.md        # Cronograma de publicacao
    ├── CAPTIONS.md          # Captions e hashtags
    └── BOOST.md             # Guia de impulsionamento
```

## Identidade Visual

| Elemento | Valor |
|----------|-------|
| **Primary** | #D4623A (Terracotta) |
| **Secondary** | #6AAF52 (Verde) |
| **Accent** | #7AB4E0 (Azul) |
| **Background** | #363636 |
| **Fonte** | Oxanium (Google Fonts) |

## Calendario de Posts

### Dezembro 2025 (16 posts) - R$750
Lancamento + Natal

### Janeiro 2026 (14 posts) - R$150
Ano Novo, Novas Celebracoes
- Posts 17-30
- Temas: Ano Novo, Badges, Depoimentos, Tutoriais

### Fevereiro 2026 (14 posts) - R$150
Folia e Amizade (Carnaval)
- Posts 31-44
- Temas: Carnaval, Team Building B2B, UGC

### Marco 2026 (14 posts) - R$200
Mulheres que Inspiram + Pascoa
- Posts 45-58
- Temas: Dia da Mulher, Amigo Chocolate, Pascoa

## Features da Galeria

- Filtros por mes, tipo, status e boost
- Visualizacao em Grid ou Calendario
- Preview em tempo real
- Exportacao PNG em alta resolucao
- Navegacao entre slides de carrosseis
- Exibicao de captions e hashtags

## Tecnologias

- Next.js 16
- TypeScript
- Tailwind CSS
- shadcn/ui
- html-to-image (exportacao PNG)
- Unsplash (fotos royalty-free)

## Links

- [App O Amigo Secreto](https://oamigosecreto.app)
- [Repositorio Principal](https://github.com/marcelpiva/o-amigo-secreto)

---

Feito com ❤️ para O Amigo Secreto
