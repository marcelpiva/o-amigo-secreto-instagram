# O Amigo Secreto - Campanha Instagram/TikTok

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Posts](https://img.shields.io/badge/posts-16-green)
![Boost](https://img.shields.io/badge/boost-R%24750-orange)

Projeto para criação e exportação de posts de Instagram e TikTok para a campanha de lançamento do app "O Amigo Secreto".

## Sobre a Campanha

- **Lançamento:** Dezembro 2025
- **Posts:** 16 posts (estáticos, carrosséis, stories, reels)
- **Orçamento Boost:** R$ 750
- **Plataformas:** Instagram + TikTok

## Formatos Suportados

| Formato | Dimensão | Uso |
|---------|----------|-----|
| Square | 1080x1080 | Instagram Feed |
| Vertical | 1080x1350 | Instagram Feed |
| Story | 1080x1920 | Stories, Reels, TikTok |

## Como Usar

### 1. Instalar dependências

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
│   │   ├── page.tsx         # Galeria principal
│   │   └── layout.tsx       # Layout com fontes
│   ├── components/
│   │   ├── posts/           # 16 componentes de posts
│   │   └── ui/              # Componentes base
│   └── lib/
│       ├── posts-data.ts    # Dados de todos os posts
│       └── colors.ts        # Paleta de cores
├── public/
│   └── logo.png             # Logo do app
└── docs/
    ├── ESTRATEGIA.md        # Estratégia de marketing
    ├── CALENDARIO.md        # Cronograma de publicação
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

## Lista de Posts

### Semana 1: Teaser (10-13 Dez)
| # | Título | Tipo | Boost |
|---|--------|------|-------|
| 01 | Countdown Teaser | Story | - |
| 02 | 5 Problemas do Amigo Secreto | Carrossel | R$100 |
| 03 | Revelação da Marca | Reels | R$150 |

### Semana 2: Lançamento (14-18 Dez)
| # | Título | Tipo | Boost |
|---|--------|------|-------|
| 04 | **LANÇAMENTO** | Estático | R$200 |
| 05 | Algoritmo Inteligente | Carrossel | - |
| 06 | Wishlist | Reels | - |
| 07 | Chat Anônimo | Estático | - |
| 08 | Grupos Ilimitados | Story | - |

### Semana 3: Social Proof (19-23 Dez)
| # | Título | Tipo | Boost |
|---|--------|------|-------|
| 09 | Tutorial Rápido | Reels | R$100 |
| 10 | Depoimentos | Carrossel | - |
| 11 | Countdown Natal | Estático | R$100 |
| 12 | Para Empresas B2B | Carrossel | R$100 |

### Semana 4: Natal (24-28 Dez)
| # | Título | Tipo | Boost |
|---|--------|------|-------|
| 13 | Feliz Natal | Story | - |
| 14 | Ano Novo | Estático | - |
| 15 | Retrospectiva | Carrossel | - |
| 16 | O Ano Todo | Carrossel | - |

## Documentação

- [Estratégia de Marketing](docs/ESTRATEGIA.md)
- [Calendário de Publicações](docs/CALENDARIO.md)
- [Guia de Impulsionamento](docs/BOOST.md)

## Tecnologias

- Next.js 16
- TypeScript
- Tailwind CSS
- html-to-image (exportação PNG)

## Links

- [App O Amigo Secreto](https://oamigosecreto.app)
- [Repositório Principal](https://github.com/marcelpiva/o-amigo-secreto)

---

Feito com ❤️ para O Amigo Secreto
