export type PostType = 'static' | 'carousel' | 'story' | 'reels';
export type PostFormat = 'square' | 'vertical' | 'story';
export type PostStatus = 'draft' | 'scheduled' | 'published';
export type PostMonth = 'dezembro' | 'janeiro' | 'fevereiro' | 'marco';

export interface PostSlide {
  id: number;
  content: string;
  subContent?: string;
}

export interface PostData {
  id: number;
  slug: string;
  title: string;
  type: PostType;
  format: PostFormat;
  slides?: PostSlide[];
  date: string;
  time: string;
  boost: number | null;
  caption: string;
  cta: string;
  hashtags: string[];
  category: 'teaser' | 'launch' | 'feature' | 'social-proof' | 'seasonal' | 'b2b' | 'branding' | 'engagement' | 'ugc';
  month: PostMonth;
  status: PostStatus;
}

export const posts: PostData[] = [
  // =============================================
  // DEZEMBRO 2025 - LANCAMENTO
  // =============================================

  // SEMANA 1: TEASER (10-13 DEZ)
  {
    id: 1,
    slug: 'teaser-countdown',
    title: 'Countdown Teaser',
    type: 'story',
    format: 'story',
    slides: [
      { id: 1, content: 'Cansado dé sórteios problemáticos?' },
      { id: 2, content: 'Casal que tira casal.', subContent: 'Mesma pessoa do ano passado.' },
      { id: 3, content: 'A solução chega em 3 dias...' },
    ],
    date: '10/12/2025',
    time: '19h',
    boost: null,
    caption: 'Algo novo está chegando...',
    cta: 'Link na bio para waitlist',
    hashtags: ['#AmigoSecreto', '#Natal2025', '#EmBreve'],
    category: 'teaser',
    month: 'dezembro',
    status: 'draft',
  },
  {
    id: 2,
    slug: 'problemas-amigo-secreto',
    title: '5 Problemas do Amigo Secreto',
    type: 'carousel',
    format: 'square',
    slides: [
      { id: 1, content: '5 problemas que arruinam seu Amigo Secreto' },
      { id: 2, content: '1. Casal tira casal - de novo' },
      { id: 3, content: '2. Você tira a mesma pessoa do ano passado' },
      { id: 4, content: '3. Ninguém sabe o que a pessoa quer' },
      { id: 5, content: '4. Alguém sempre descobre antes da hora', subContent: 'E se existisse uma solução?' },
    ],
    date: '11/12/2025',
    time: '12h',
    boost: 100,
    caption: 'Todo ano a mesma história: sorteio problematico, presentes errados, segredo vazado. E se existisse uma forma inteligente de resolver TODOS esses problemas?',
    cta: 'Quer saber primeiro? Link na bio',
    hashtags: ['#AmigoSecreto', '#NatalEmFamilia', '#Confraternizacao', '#ProblemasDeNatal', '#DicasDeNatal'],
    category: 'teaser',
    month: 'dezembro',
    status: 'draft',
  },
  {
    id: 3,
    slug: 'revelação-marca',
    title: 'Revelação da Marca',
    type: 'reels',
    format: 'story',
    slides: [
      { id: 1, content: 'O problema...' },
      { id: 2, content: 'A solução...' },
      { id: 3, content: 'O Amigo Secreto', subContent: 'Seu amigo secreto, sem complicação' },
    ],
    date: '12/12/2025',
    time: '18h',
    boost: 150,
    caption: 'Apresentamos O AMIGO SECRETO - o app que vai transformar sua brincadeira favorita de fim de ano.',
    cta: 'Cadastre-se na waitlist - Link na bio',
    hashtags: ['#OAmigoSecreto', '#AppNovo', '#Lancamento', '#Natal2025', '#AmigoSecretoApp'],
    category: 'launch',
    month: 'dezembro',
    status: 'draft',
  },

  // SEMANA 2: LANCAMENTO (14-18 DEZ)
  {
    id: 4,
    slug: 'lançamento',
    title: 'Lancamento Oficial',
    type: 'static',
    format: 'square',
    date: '14/12/2025',
    time: '10h',
    boost: 200,
    caption: 'O momento chegou! O Amigo Secreto está DISPONIVEL para download.',
    cta: 'Baixe agora - Link na bio',
    hashtags: ['#OAmigoSecreto', '#DownloadAgora', '#AppGrátis', '#Natal2025'],
    category: 'launch',
    month: 'dezembro',
    status: 'draft',
  },
  {
    id: 5,
    slug: 'feature-algoritmo',
    title: 'Feature: Sorteio Inteligente + Democratico',
    type: 'carousel',
    format: 'square',
    slides: [
      { id: 1, content: 'Nosso sorteio é INTELIGENTE' },
      { id: 2, content: 'Define restrições:', subContent: 'Marianão pode tirar Joao (sao casados)' },
      { id: 3, content: 'O algoritmo calcula TODAS as possibilidades' },
      { id: 4, content: 'Resultado: sorteio perfeito que respeita TODAS as regras' },
      { id: 5, content: 'NOVO: SORTEIO DEMOCRATICO!', subContent: 'O grupo vota para aprovar!' },
    ],
    date: '15/12/2025',
    time: '19h',
    boost: null,
    caption: `Chega dé sórteio manual com papelzinho! 🧠

Nosso algoritmo anti-ciclos garanté sórteio perfeito:
✅ Casaisnão tiram um ao outro
✅ Ninguém repete o ano anterior
✅ Restricoes personalizadas

🆕 NOVO: Sorteio Democratico!
Agora o grupo pode VOTAR para aprovar o sorteio.
Até 3 rodadas até o consenso!

"Sorteio que todo mundo aprova!" 🗳️`,
    cta: 'Experimente grátis - Link na bio',
    hashtags: ['#AmigoSecreto', '#SorteioInteligente', '#SorteioDemocratico', '#Tecnologia', '#AlgoritmoInteligente', '#Votacao'],
    category: 'feature',
    month: 'dezembro',
    status: 'draft',
  },
  {
    id: 6,
    slug: 'feature-wishlist',
    title: 'Feature: Wishlist',
    type: 'reels',
    format: 'story',
    slides: [
      { id: 1, content: 'Nunca mais erre o presente' },
      { id: 2, content: 'Cada participante cria sua lista' },
      { id: 3, content: 'Veja sugestoes de onde comprar' },
      { id: 4, content: 'Preços de varios marketplaces' },
    ],
    date: '16/12/2025',
    time: '12h',
    boost: null,
    caption: 'WISHLIST + VITRINE DE PRESENTES. Presente certo, garantido!',
    cta: 'Crie sua wishlist - Link na bio',
    hashtags: ['#ListaDeDesejos', '#Wishlist', '#PresentePerfeito', '#MelhorPreco', '#AmigoSecreto'],
    category: 'feature',
    month: 'dezembro',
    status: 'draft',
  },
  {
    id: 7,
    slug: 'feature-chat',
    title: 'Feature: Chat Anonimo',
    type: 'static',
    format: 'square',
    date: '17/12/2025',
    time: '19h',
    boost: null,
    caption: 'CHAT ANONIMO. De dicas sobre o presente sem revelar sua identidade.',
    cta: 'Comece a trocar mensagens - Link na bio',
    hashtags: ['#ChatSecreto', '#AmigoSecreto', '#MensagemAnonima', '#Surpresa', '#Segredo'],
    category: 'feature',
    month: 'dezembro',
    status: 'draft',
  },
  {
    id: 8,
    slug: 'feature-grupos',
    title: 'Feature: Grupos Ilimitados',
    type: 'story',
    format: 'story',
    slides: [
      { id: 1, content: 'Familia da Mamae' },
      { id: 2, content: 'Galera do Trabalho' },
      { id: 3, content: 'Amigos da Facul', subContent: 'GRUPOS ILIMITADOS - GRATIS' },
    ],
    date: '18/12/2025',
    time: '12h',
    boost: null,
    caption: 'Um app, todos os seus grupos. Familia. Trabalho. Amigos. Quantos você quiser. E GRATIS.',
    cta: 'Crie seus grupos - Link na bio',
    hashtags: ['#GruposIlimitados', '#Familia', '#Trabalho', '#Amigos', '#AmigoSecreto'],
    category: 'feature',
    month: 'dezembro',
    status: 'draft',
  },

  // SEMANA 3: SOCIAL PROOF (19-23 DEZ)
  {
    id: 9,
    slug: 'tutorial-rápido',
    title: 'Tutorial Rápido',
    type: 'reels',
    format: 'story',
    slides: [
      { id: 1, content: 'Amigo Secreto em 60 segundos' },
      { id: 2, content: '1. Baixe o app' },
      { id: 3, content: '2. Crie um grupo' },
      { id: 4, content: '3. Convide por link ou QR code' },
      { id: 5, content: '4. Defina restrições' },
      { id: 6, content: '5. Clique em sortear' },
      { id: 7, content: 'Pronto! Cada um ve apenas seu sorteado' },
    ],
    date: '19/12/2025',
    time: '18h',
    boost: 100,
    caption: 'TUTORIAL: Como organizar seu Amigo Secreto em menos de 1 minuto.',
    cta: 'Salve e compartilhe!',
    hashtags: ['#Tutorial', '#ComoFazer', '#AmigoSecreto', '#DicaRapida', '#Natal2025'],
    category: 'social-proof',
    month: 'dezembro',
    status: 'draft',
  },
  {
    id: 10,
    slug: 'depoimentos',
    title: 'Depoimentos',
    type: 'carousel',
    format: 'square',
    slides: [
      { id: 1, content: '"Finalmente minha sogranão tirou meu sogro!"', subContent: '- Ana, 34' },
      { id: 2, content: '"Usei pro amigo secreto da empresa com 50 pessoas!"', subContent: '- Carlos, RH' },
      { id: 3, content: '"A wishlist salvou minha vida!"', subContent: '- Mariana, 28' },
    ],
    date: '20/12/2025',
    time: '10h',
    boost: null,
    caption: 'O que estão falando sobre O Amigo Secreto.',
    cta: 'Junte-se a eles - Link na bio',
    hashtags: ['#Depoimentos', '#AvaliacaoDeUsuarios', '#AmigoSecreto', '#AppAprovado', '#5Estrelas'],
    category: 'social-proof',
    month: 'dezembro',
    status: 'draft',
  },
  {
    id: 11,
    slug: 'countdown-natal',
    title: 'Countdown Natal',
    type: 'static',
    format: 'square',
    date: '21/12/2025',
    time: '12h',
    boost: 100,
    caption: 'Calma, aínda da tempo! Organize tudo em 2 minutos.',
    cta: 'Baixe agora - Link na bio',
    hashtags: ['#Natal2025', '#ÚltimaHora', '#AindaDaTempo', '#AmigoSecreto', '#Countdown'],
    category: 'seasonal',
    month: 'dezembro',
    status: 'draft',
  },
  {
    id: 12,
    slug: 'b2b-empresas',
    title: 'Para Empresas',
    type: 'carousel',
    format: 'square',
    slides: [
      { id: 1, content: 'ATENCAO RH:', subContent: 'Amigo Secreto da empresa nunca foi tão fácil' },
      { id: 2, content: '10, 50, 100+ participantes.', subContent: 'O algoritmo da conta.' },
      { id: 3, content: 'Restricoes por departamento.', subContent: 'Ninguém tira o próprio chefe.' },
      { id: 4, content: 'Grátis. Sem limite de grupos. Sem limite de participantes.' },
    ],
    date: '22/12/2025',
    time: '10h',
    boost: 100,
    caption: 'Para RH e organizadores de confraternização.',
    cta: 'Marque seu RH! Link na bio para testar',
    hashtags: ['#RH', '#RecursosHumanos', '#Confraternizacao', '#B2B', '#GestãoDepessoas'],
    category: 'b2b',
    month: 'dezembro',
    status: 'draft',
  },

  // SEMANA 4: NATAL (24-27 DEZ)
  {
    id: 13,
    slug: 'feliz-natal',
    title: 'Feliz Natal',
    type: 'story',
    format: 'story',
    slides: [
      { id: 1, content: 'Feliz Natal!', subContent: 'Que seu Amigo Secreto seja perfeito' },
      { id: 2, content: 'Com ou sem o app...', subContent: 'Mas com o app é melhor' },
    ],
    date: '24/12/2025',
    time: '09h',
    boost: null,
    caption: 'Feliz Natal a todos!',
    cta: '',
    hashtags: ['#FelizNatal', '#Natal2025', '#OAmigoSecreto'],
    category: 'branding',
    month: 'dezembro',
    status: 'draft',
  },
  {
    id: 14,
    slug: 'ano-novo-dez',
    title: 'Ano Novo',
    type: 'static',
    format: 'square',
    date: '26/12/2025',
    time: '18h',
    boost: null,
    caption: 'O Amigo Secreto funciona o ano todo! Já deixa o grupo criado pro próximo encontro.',
    cta: 'Crie seu grupo - Link na bio',
    hashtags: ['#AnoNovo2026', '#Reveillon', '#Confraternizacao', '#AmigoSecreto'],
    category: 'seasonal',
    month: 'dezembro',
    status: 'draft',
  },
  {
    id: 15,
    slug: 'retrospectiva',
    title: 'Retrospectiva',
    type: 'carousel',
    format: 'square',
    slides: [
      { id: 1, content: 'OBRIGADO!' },
      { id: 2, content: 'X downloads', subContent: 'X grupos criados' },
      { id: 3, content: 'Em 2026, aínda mais novidades.', subContent: 'Fique ligado!' },
    ],
    date: '27/12/2025',
    time: '12h',
    boost: null,
    caption: 'Obrigado a cada pessoa que baixou e confiou no app!',
    cta: 'Siga para novidades!',
    hashtags: ['#Obrigado', '#Comunidade', '#OAmigoSecreto', '#2026VemAi'],
    category: 'branding',
    month: 'dezembro',
    status: 'draft',
  },
  {
    id: 16,
    slug: 'ano-todo',
    title: 'O Ano Todo',
    type: 'carousel',
    format: 'square',
    slides: [
      { id: 1, content: 'Não é só no Natal!', subContent: 'O Amigo Secreto funciona o ano todo' },
      { id: 2, content: 'Amigo Secreto', subContent: 'Dezembro' },
      { id: 3, content: 'Amigo Chocolate', subContent: 'Marco/Abril - Pascoa' },
      { id: 4, content: 'Amigo Caipira', subContent: 'Junho - Festa Junina' },
      { id: 5, content: 'Amigo Crianca', subContent: 'Outubro - Dia das Crianças' },
    ],
    date: '28/12/2025',
    time: '12h',
    boost: null,
    caption: 'O Amigo Secretonão é só pro Natal! Use o app em diversas ocasioes ao longo do ano.',
    cta: 'Baixe o app - Link na bio',
    hashtags: ['#AmigoSecreto', '#AmigoChocolate', '#AmigoCaipira', '#AmigoCrianca', '#OAnoTodo'],
    category: 'seasonal',
    month: 'dezembro',
    status: 'draft',
  },

  // =============================================
  // JANEIRO 2026 - ANO NOVO, NOVAS CELEBRACOES
  // =============================================
  {
    id: 17,
    slug: 'feliz-ano-novo',
    title: 'Feliz Ano Novo',
    type: 'story',
    format: 'story',
    slides: [
      { id: 1, content: '2026 chegou!' },
      { id: 2, content: 'Obrigado por fazer parte da nossa história' },
      { id: 3, content: 'Vem novidades por aí...' },
    ],
    date: '01/01/2026',
    time: '10h',
    boost: null,
    caption: 'Feliz Ano Novo! 2026 vem com muitas novidades.',
    cta: 'Link na bio',
    hashtags: ['#FelizAnoNovo', '#2026', '#OAmigoSecreto', '#AnoNovo'],
    category: 'branding',
    month: 'janeiro',
    status: 'draft',
  },
  {
    id: 18,
    slug: 'números-dezembro',
    title: 'Números de Dezembro',
    type: 'carousel',
    format: 'square',
    slides: [
      { id: 1, content: 'DEZEMBRO EM NÚMEROS' },
      { id: 2, content: '+5.000 SORTEIOS REALIZADOS' },
      { id: 3, content: '+2.000 GRUPOS CRIADOS' },
      { id: 4, content: '+10.000 MENSAGENS ANÔNIMAS' },
      { id: 5, content: '4.9/5 NOTA MÉDIA', subContent: 'Obrigado!' },
    ],
    date: '02/01/2026',
    time: '12h',
    boost: 50,
    caption: 'Ainda estamos em choque! Em menos de um mês vocês fizeram história com O Amigo Secreto.',
    cta: 'Baixe o app - Link na bio',
    hashtags: ['#OAmigoSecreto', '#Retrospectiva2025', '#Números', '#Sucesso', '#Obrigado'],
    category: 'social-proof',
    month: 'janeiro',
    status: 'draft',
  },
  {
    id: 19,
    slug: 'melhores-momentos',
    title: 'Melhores Momentos 2025',
    type: 'reels',
    format: 'story',
    slides: [
      { id: 1, content: 'Melhores Momentos 2025' },
      { id: 2, content: 'Lancamento do app' },
      { id: 3, content: 'Primeiros usuários' },
      { id: 4, content: 'Reviews incríveis' },
    ],
    date: '04/01/2026',
    time: '18h',
    boost: null,
    caption: 'Uma retrospectiva dos melhores momentos do lançamento!',
    cta: 'Faca parte em 2026 - Link na bio',
    hashtags: ['#Retrospectiva', '#MelhoresMomentos', '#OAmigoSecreto', '#2025'],
    category: 'branding',
    month: 'janeiro',
    status: 'draft',
  },
  {
    id: 20,
    slug: 'amigo-ano-novo',
    title: 'Amigo Oculto de Ano Novo',
    type: 'static',
    format: 'square',
    date: '06/01/2026',
    time: '12h',
    boost: 50,
    caption: 'Não conseguiu se reunir no Natal? Tranquilo! O Amigo Secreto funciona o ANO TODO.',
    cta: 'Crie seu grupo agora - Link na bio',
    hashtags: ['#AmigoOculto', '#AnoNovo2026', '#Reveillon', '#Confraternizacao', '#OAmigoSecreto'],
    category: 'seasonal',
    month: 'janeiro',
    status: 'draft',
  },
  {
    id: 21,
    slug: 'feature-badges',
    title: 'Feature: Sistema de Badges',
    type: 'carousel',
    format: 'square',
    slides: [
      { id: 1, content: 'CONQUISTE BADGES!' },
      { id: 2, content: 'Anfitrião Mestre', subContent: 'Criou 3+ grupos' },
      { id: 3, content: 'Enviador de Dicas', subContent: 'Mandou 10+ hints' },
      { id: 4, content: 'Rei do Chat', subContent: '100+ mensagens' },
      { id: 5, content: 'Mestre do Sorteio', subContent: 'Participou de 5+ sorteios' },
      { id: 6, content: 'Mestre do Quiz', subContent: 'Acertou 10+ perguntas' },
      { id: 7, content: 'Presente Top', subContent: 'Venceu o Ranking!' },
    ],
    date: '08/01/2026',
    time: '19h',
    boost: null,
    caption: `Você sabia que O Amigo Secreto tem um sistema de CONQUISTAS? 🏆

Desbloqueie badges especiais:
🎯 Anfitrião Mestre - Criou 3+ grupos
💡 Enviador de Dicas - Mandou 10+ hints
💬 Rei do Chat - 100+ mensagens
🎲 Mestre do Sorteio - 5+ sorteios

🆕 NOVOS BADGES:
🧠 Mestre do Quiz - Acertou 10+ perguntas
🥇 Presente Top - Venceu o Ranking de Presentes!

Quantos você já tem? 👇`,
    cta: 'Desbloqueie suas badges - Link na bio',
    hashtags: ['#Badges', '#Gamificacao', '#OAmigoSecreto', '#Conquistas', '#AppGrátis', '#QuizDoGrupo', '#RankingDePresentes'],
    category: 'feature',
    month: 'janeiro',
    status: 'draft',
  },
  {
    id: 22,
    slug: 'poll-badges',
    title: 'Poll: Qual badge você conquistou?',
    type: 'story',
    format: 'story',
    slides: [
      { id: 1, content: 'Qual badge você já conquistou?' },
      { id: 2, content: 'Vote aqui!' },
    ],
    date: '10/01/2026',
    time: '12h',
    boost: null,
    caption: 'Conta pra gente nos comentarios!',
    cta: '',
    hashtags: ['#Poll', '#Badges', '#OAmigoSecreto'],
    category: 'engagement',
    month: 'janeiro',
    status: 'draft',
  },
  {
    id: 23,
    slug: 'depoimentos-janeiro',
    title: 'Depoimentos Reais',
    type: 'carousel',
    format: 'square',
    slides: [
      { id: 1, content: 'O QUE DIZEM NOSSOS USUÁRIOS' },
      { id: 2, content: '"O melhor app de amigo secreto!"', subContent: '⭐⭐⭐⭐⭐ Maria S.' },
      { id: 3, content: '"Finalmente acabou a bagunça de papelzinho!"', subContent: '⭐⭐⭐⭐⭐ João P.' },
      { id: 4, content: '"Usei na empresa e foi SUCESSO!"', subContent: '⭐⭐⭐⭐⭐ Ana C.' },
      { id: 5, content: 'FAÇA PARTE DESSA HISTÓRIA', subContent: 'Baixe grátis!' },
    ],
    date: '13/01/2026',
    time: '10h',
    boost: 50,
    caption: 'Depoimentos REAIS de usuários do Natal 2025.',
    cta: 'Baixe e faca parte - Link na bio',
    hashtags: ['#Depoimentos', '#Reviews', '#5Estrelas', '#OAmigoSecreto', '#Recomendo'],
    category: 'social-proof',
    month: 'janeiro',
    status: 'draft',
  },
  {
    id: 24,
    slug: 'tutorial-chat',
    title: 'Tutorial: Chat Anonimo',
    type: 'reels',
    format: 'story',
    slides: [
      { id: 1, content: 'Você sabia que pode conversar com seu amigo secreto?' },
      { id: 2, content: 'SEM revelar quem você e!' },
      { id: 3, content: 'Demonstração do chat' },
      { id: 4, content: 'CTA' },
    ],
    date: '15/01/2026',
    time: '18h',
    boost: null,
    caption: 'Tutorial: Como usar o chat anônimo do app.',
    cta: 'Experimente - Link na bio',
    hashtags: ['#Tutorial', '#ChatAnonimo', '#OAmigoSecreto', '#Dica'],
    category: 'feature',
    month: 'janeiro',
    status: 'draft',
  },
  {
    id: 25,
    slug: 'qa-janeiro',
    title: 'Q&A: Duvidas sobre o app',
    type: 'story',
    format: 'story',
    slides: [
      { id: 1, content: 'Tem dúvidas sobre o app?' },
      { id: 2, content: 'Manda aqui!' },
    ],
    date: '17/01/2026',
    time: '12h',
    boost: null,
    caption: 'Responderemos todas as dúvidas!',
    cta: '',
    hashtags: ['#QeA', '#Duvidas', '#OAmigoSecreto'],
    category: 'engagement',
    month: 'janeiro',
    status: 'draft',
  },
  {
    id: 26,
    slug: 'feature-dicas',
    title: 'Feature: Sistema de Dicas',
    type: 'carousel',
    format: 'square',
    slides: [
      { id: 1, content: 'SISTEMA DE DICAS' },
      { id: 2, content: 'De dicas anônimas sobre você' },
      { id: 3, content: 'Receba dicas do seu amigo secreto' },
      { id: 4, content: 'Crie expectativa até a revelação' },
      { id: 5, content: 'A diversão dura o mês inteiro!' },
    ],
    date: '20/01/2026',
    time: '12h',
    boost: null,
    caption: 'A melhor parte do amigo secreto e o MISTERIO!',
    cta: 'Experimente - Link na bio',
    hashtags: ['#Dicas', '#Hints', '#AmigoSecreto', '#Misterio', '#Surpresa'],
    category: 'feature',
    month: 'janeiro',
    status: 'draft',
  },
  {
    id: 27,
    slug: 'dica-wishlist',
    title: 'Dica do Dia: Wishlist',
    type: 'static',
    format: 'square',
    date: '22/01/2026',
    time: '19h',
    boost: null,
    caption: 'Dica: Use a wishlist para nunca mais errar o presente!',
    cta: 'Crie sua wishlist - Link na bio',
    hashtags: ['#DicaDoDia', '#Wishlist', '#OAmigoSecreto', '#Presente'],
    category: 'feature',
    month: 'janeiro',
    status: 'draft',
  },
  {
    id: 28,
    slug: 'enquete-feature',
    title: 'Enquete: Feature mais usada',
    type: 'story',
    format: 'story',
    slides: [
      { id: 1, content: 'Qual feature você mais usa?' },
      { id: 2, content: 'Sorteio, Chat, Wishlist...' },
      { id: 3, content: '5 NOVAS features!', subContent: 'Quiz, Mural, Ranking...' },
    ],
    date: '24/01/2026',
    time: '12h',
    boost: null,
    caption: `Qual feature você mais usa? 📊

Temos TANTAS opções agora:

🎲 Sorteio inteligente
🗳️ Sorteio Democratico (NOVO!)
💬 Chat anônimo
📝 Wishlist
🎵 Temas Divertidos (NOVO!)
📸 Mural de Fotos (NOVO!)
❓ Quiz do Grupo (NOVO!)
🏆 Ranking de Presentes (NOVO!)

Vote nos stories! 👆`,
    cta: '',
    hashtags: ['#Enquete', '#Features', '#OAmigoSecreto', '#NovasFeatures', '#QuizDoGrupo', '#MuralDeFotos', '#SorteioDemocratico'],
    category: 'engagement',
    month: 'janeiro',
    status: 'draft',
  },
  {
    id: 29,
    slug: 'pov-descoberta',
    title: 'POV: Descobrindo seu amigo secreto',
    type: 'reels',
    format: 'story',
    slides: [
      { id: 1, content: 'POV: Você abre o app...' },
      { id: 2, content: 'E descobre quem te tirou...' },
      { id: 3, content: 'Reacao!' },
    ],
    date: '26/01/2026',
    time: '18h',
    boost: null,
    caption: 'Quem já teve essa reacao? Marca nos comentarios!',
    cta: 'Baixe o app - Link na bio',
    hashtags: ['#POV', '#AmigoSecreto', '#Reacao', '#Viral', '#OAmigoSecreto'],
    category: 'engagement',
    month: 'janeiro',
    status: 'draft',
  },
  {
    id: 30,
    slug: 'janeiro-review',
    title: 'Janeiro em Review',
    type: 'carousel',
    format: 'square',
    slides: [
      { id: 1, content: 'JANEIRO EM REVIEW' },
      { id: 2, content: 'Novos usuários' },
      { id: 3, content: 'Novos grupos' },
      { id: 4, content: 'Fevereiro vem aí!' },
    ],
    date: '29/01/2026',
    time: '12h',
    boost: null,
    caption: 'Obrigado por mais um mês incrível!',
    cta: 'Siga para novidades!',
    hashtags: ['#JaneiroEmReview', '#OAmigoSecreto', '#Retrospectiva'],
    category: 'branding',
    month: 'janeiro',
    status: 'draft',
  },

  // =============================================
  // FEVEREIRO 2026 - FOLIA E AMIZADE
  // =============================================
  {
    id: 31,
    slug: 'teaser-carnaval',
    title: 'Teaser Carnaval',
    type: 'story',
    format: 'story',
    slides: [
      { id: 1, content: 'Carnaval vem aí...' },
      { id: 2, content: 'E a gente tem uma ideia!' },
    ],
    date: '01/02/2026',
    time: '12h',
    boost: null,
    caption: 'Carnaval vem aí! Fique ligado.',
    cta: '',
    hashtags: ['#Carnaval2026', '#OAmigoSecreto', '#EmBreve'],
    category: 'teaser',
    month: 'fevereiro',
    status: 'draft',
  },
  {
    id: 32,
    slug: 'amigo-folia',
    title: 'Amigo Folia: Carnaval Edition',
    type: 'static',
    format: 'square',
    date: '02/02/2026',
    time: '10h',
    boost: 75,
    caption: 'AMIGO FOLIA! Quem disse que amigo secreto é só no Natal? No Carnaval, organize um amigo secreto tematico!',
    cta: 'Crie seu grupo - Link na bio',
    hashtags: ['#AmigoFolia', '#Carnaval2026', '#BlocoDeRua', '#AmigoSecreto', '#Folia'],
    category: 'seasonal',
    month: 'fevereiro',
    status: 'draft',
  },
  {
    id: 33,
    slug: 'ideias-carnaval',
    title: '5 Ideias de Presente de Carnaval',
    type: 'carousel',
    format: 'square',
    slides: [
      { id: 1, content: '5 IDEIAS DE PRESENTE DE CARNAVAL' },
      { id: 2, content: 'Fantasia criativa' },
      { id: 3, content: 'Kit dé sóbrevivencia', subContent: 'protetor, água, glitter' },
      { id: 4, content: 'Acessorios de bloco' },
      { id: 5, content: 'Playlist personalizada' },
    ],
    date: '04/02/2026',
    time: '12h',
    boost: null,
    caption: 'Salve essas ideias para o Amigo Folia!',
    cta: 'Use a wishlist do app - Link na bio',
    hashtags: ['#IdeiasDePresente', '#Carnaval2026', '#AmigoFolia', '#OAmigoSecreto'],
    category: 'seasonal',
    month: 'fevereiro',
    status: 'draft',
  },
  {
    id: 34,
    slug: 'poll-carnaval',
    title: 'Poll: Vai pular carnaval?',
    type: 'story',
    format: 'story',
    slides: [
      { id: 1, content: 'Vai pular carnaval?' },
      { id: 2, content: 'Sim / Não / Talvez' },
    ],
    date: '06/02/2026',
    time: '12h',
    boost: null,
    caption: 'Conta pra gente!',
    cta: '',
    hashtags: ['#Poll', '#Carnaval2026', '#OAmigoSecreto'],
    category: 'engagement',
    month: 'fevereiro',
    status: 'draft',
  },
  {
    id: 35,
    slug: 'team-building',
    title: 'Team Building B2B',
    type: 'carousel',
    format: 'square',
    slides: [
      { id: 1, content: 'TEAM BUILDING diferente' },
      { id: 2, content: 'Amigo secreto fora do Natal? SIM!' },
      { id: 3, content: 'Promove integração entre equipes' },
      { id: 4, content: 'Quiz do Grupo: Quebra-gelo perfeito!', subContent: '"Quem tem medo de barata?"' },
      { id: 5, content: 'Mural de Fotos: Memorias da equipe' },
      { id: 6, content: '100% grátis para empresas' },
    ],
    date: '09/02/2026',
    time: '10h',
    boost: 75,
    caption: `🏢 TEAM BUILDING COM O AMIGO SECRETO 🏢

RH, essa é pra vocês!

Organize confraternizacoes COMPLETAS:
✅ Grupos de 10 a 500 pessoas
✅ Sorteio com restrições por setor
✅ 🆕 QUIZ DO GRUPO - Integracao divertida!
✅ 🆕 MURAL DE FOTOS - Memorias da equipe
✅ 🆕 RANKING - Premie o melhor presente!
✅ 100% gratuito (serio!)

"Quem tem medo de barata?" - Quiz perfeito pra quebrar o gelo! 😂`,
    cta: 'Marque seu RH - Link na bio',
    hashtags: ['#TeamBuilding', '#RH', '#GestãoDepessoas', '#RecursosHumanos', '#Empresas', '#QuizDoGrupo', '#MuralDeFotos', '#Confraternizacao'],
    category: 'b2b',
    month: 'fevereiro',
    status: 'draft',
  },
  {
    id: 36,
    slug: 'case-empresa',
    title: 'Case: Empresa que usou o app',
    type: 'reels',
    format: 'story',
    slides: [
      { id: 1, content: 'Case de sucesso' },
      { id: 2, content: 'Empresa X usou o app' },
      { id: 3, content: 'Resultado incrível' },
    ],
    date: '11/02/2026',
    time: '18h',
    boost: null,
    caption: 'Veja como empresas estão usando O Amigo Secreto!',
    cta: 'Experimente na sua empresa - Link na bio',
    hashtags: ['#CaseDeSucesso', '#B2B', '#OAmigoSecreto', '#Empresas'],
    category: 'b2b',
    month: 'fevereiro',
    status: 'draft',
  },
  {
    id: 37,
    slug: 'guia-rh',
    title: 'Para RH: Guia de confraternização',
    type: 'story',
    format: 'story',
    slides: [
      { id: 1, content: 'Guia para RH' },
      { id: 2, content: 'Como organizar confraternização' },
      { id: 3, content: 'Link para download' },
    ],
    date: '13/02/2026',
    time: '12h',
    boost: null,
    caption: 'RH, baixe nosso guia gratuito!',
    cta: 'Link na bio',
    hashtags: ['#RH', '#Guia', '#Confraternizacao', '#OAmigoSecreto'],
    category: 'b2b',
    month: 'fevereiro',
    status: 'draft',
  },
  {
    id: 38,
    slug: 'dia-dos-amigos',
    title: 'Dia dos Amigos',
    type: 'static',
    format: 'square',
    date: '14/02/2026',
    time: '10h',
    boost: null,
    caption: 'Hoje é Dia dos NAMORADOS... mas também e dia de celebrar a AMIZADE! Amigos são a familia que escolhemos.',
    cta: 'Crie um grupo com seus amigos - Link na bio',
    hashtags: ['#DiadosAmigos', '#Amizade', '#BFF', '#AmigoSecreto', '#Celebracao'],
    category: 'seasonal',
    month: 'fevereiro',
    status: 'draft',
  },
  {
    id: 39,
    slug: 'revelações-carnaval',
    title: 'Compilacao: Revelacoes de Carnaval',
    type: 'reels',
    format: 'story',
    slides: [
      { id: 1, content: 'Revelacoes de Carnaval' },
      { id: 2, content: 'UGC compilation' },
    ],
    date: '16/02/2026',
    time: '18h',
    boost: null,
    caption: 'Os melhores momentos do Amigo Folia!',
    cta: 'Marque a gente nas suas revelações!',
    hashtags: ['#AmigoFolia', '#Carnaval2026', '#Revelação', '#OAmigoSecreto'],
    category: 'ugc',
    month: 'fevereiro',
    status: 'draft',
  },
  {
    id: 40,
    slug: 'ugc-carnaval',
    title: 'UGC: Mostre seu grupo',
    type: 'story',
    format: 'story',
    slides: [
      { id: 1, content: 'Mostre seu grupo de carnaval!' },
      { id: 2, content: 'Use #OAmigoSecreto' },
    ],
    date: '18/02/2026',
    time: '12h',
    boost: null,
    caption: 'Queremos ver seus grupos! Use a hashtag.',
    cta: '',
    hashtags: ['#UGC', '#OAmigoSecreto', '#Carnaval2026'],
    category: 'ugc',
    month: 'fevereiro',
    status: 'draft',
  },
  {
    id: 41,
    slug: 'melhores-carnaval',
    title: 'Melhores Momentos Carnaval',
    type: 'carousel',
    format: 'square',
    slides: [
      { id: 1, content: 'MELHORES MOMENTOS CARNAVAL' },
      { id: 2, content: 'Momento 1' },
      { id: 3, content: 'Momento 2' },
      { id: 4, content: 'Momento 3' },
    ],
    date: '23/02/2026',
    time: '10h',
    boost: null,
    caption: 'Os melhores momentos do Carnaval 2026!',
    cta: 'Marque quem pulou carnaval com você!',
    hashtags: ['#Carnaval2026', '#MelhoresMomentos', '#OAmigoSecreto'],
    category: 'branding',
    month: 'fevereiro',
    status: 'draft',
  },
  {
    id: 42,
    slug: 'volta-rotina',
    title: 'Volta a Rotina',
    type: 'static',
    format: 'square',
    date: '25/02/2026',
    time: '12h',
    boost: null,
    caption: 'Carnaval acabou, mas a diversão continua! Crie grupos para próximas celebrações.',
    cta: 'Link na bio',
    hashtags: ['#VoltaARotina', '#PosCarnaval', '#OAmigoSecreto'],
    category: 'seasonal',
    month: 'fevereiro',
    status: 'draft',
  },
  {
    id: 43,
    slug: 'teaser-pascoa',
    title: 'Teaser: Pascoa vem aí',
    type: 'story',
    format: 'story',
    slides: [
      { id: 1, content: 'Pascoa vem aí...' },
      { id: 2, content: 'Amigo Chocolate!' },
    ],
    date: '27/02/2026',
    time: '12h',
    boost: null,
    caption: 'Amigo Chocolate vem aí!',
    cta: '',
    hashtags: ['#Pascoa2026', '#AmigoChocolate', '#OAmigoSecreto'],
    category: 'teaser',
    month: 'fevereiro',
    status: 'draft',
  },
  {
    id: 44,
    slug: 'tutorial-restrições',
    title: 'Tutorial: Algoritmo de Restricoes',
    type: 'reels',
    format: 'story',
    slides: [
      { id: 1, content: 'Tutorial: Restricoes' },
      { id: 2, content: 'Como definir quemnão pode tirar quem' },
      { id: 3, content: 'Demonstração' },
    ],
    date: '28/02/2026',
    time: '18h',
    boost: null,
    caption: 'Aprenda a usar as restrições do app!',
    cta: 'Experimente - Link na bio',
    hashtags: ['#Tutorial', '#Restricoes', '#OAmigoSecreto', '#Algoritmo'],
    category: 'feature',
    month: 'fevereiro',
    status: 'draft',
  },

  // =============================================
  // MARCO 2026 - MULHERES QUE INSPIRAM + PASCOA
  // =============================================
  {
    id: 45,
    slug: 'mulheres-organizam',
    title: 'Mulheres que Organizam Celebracoes',
    type: 'carousel',
    format: 'square',
    slides: [
      { id: 1, content: 'AS ORGANIZADORAS' },
      { id: 2, content: '78% dos grupos são criados por mulheres' },
      { id: 3, content: 'Mães que reunem a familia' },
      { id: 4, content: 'Amigas que mantem o grupo unido' },
      { id: 5, content: 'Profissionais de RH', subContent: 'Obrigado por fazer acontecer!' },
    ],
    date: '02/03/2026',
    time: '10h',
    boost: 100,
    caption: 'Vocês são incríveis! 78% dos grupos são criados e organizados por MULHERES.',
    cta: 'Obrigado por escolher O Amigo Secreto',
    hashtags: ['#DiaInternacionalDaMulher', '#Mulheres', '#Organizadoras', '#OAmigoSecreto'],
    category: 'branding',
    month: 'marco',
    status: 'draft',
  },
  {
    id: 46,
    slug: 'countdown-mulher',
    title: 'Countdown Dia da Mulher',
    type: 'story',
    format: 'story',
    slides: [
      { id: 1, content: '8 de Marco' },
      { id: 2, content: 'Dia Internacional da Mulher' },
    ],
    date: '05/03/2026',
    time: '12h',
    boost: null,
    caption: 'Faltam 3 dias!',
    cta: '',
    hashtags: ['#8DeMarco', '#DiaDaMulher', '#Countdown'],
    category: 'seasonal',
    month: 'marco',
    status: 'draft',
  },
  {
    id: 47,
    slug: 'dia-mulher',
    title: 'Feliz Dia Internacional da Mulher',
    type: 'static',
    format: 'square',
    date: '08/03/2026',
    time: '09h',
    boost: 50,
    caption: 'Feliz Dia Internacional da Mulher! A todas as mulheres que fazem as celebrações acontecerem.',
    cta: '',
    hashtags: ['#8DeMarco', '#DiaInternacionalDaMulher', '#Mulheres', '#Empoderamento'],
    category: 'branding',
    month: 'marco',
    status: 'draft',
  },
  {
    id: 48,
    slug: 'amigo-chocolate',
    title: 'Amigo Chocolate: Como Funciona',
    type: 'carousel',
    format: 'square',
    slides: [
      { id: 1, content: 'AMIGO CHOCOLATE' },
      { id: 2, content: 'A versão de Pascoa do amigo secreto!' },
      { id: 3, content: 'Todo mundo troca chocolates' },
      { id: 4, content: 'Use a wishlist para sugerir marcas' },
      { id: 5, content: 'Organize sua Pascoa!' },
    ],
    date: '09/03/2026',
    time: '12h',
    boost: 75,
    caption: 'Já ouviu falar em AMIGO CHOCOLATE? E a versão de Pascoa do amigo secreto!',
    cta: 'Crie seu grupo - Link na bio',
    hashtags: ['#AmigoChocolate', '#Pascoa2026', '#TrocaDeChocolates', '#OAmigoSecreto'],
    category: 'seasonal',
    month: 'marco',
    status: 'draft',
  },
  {
    id: 49,
    slug: 'ideias-pascoa',
    title: 'Ideias de Presente de Pascoa',
    type: 'reels',
    format: 'story',
    slides: [
      { id: 1, content: 'Ideias de Presente de Pascoa' },
      { id: 2, content: 'Trufas' },
      { id: 3, content: 'Ovos de Pascoa' },
      { id: 4, content: 'Barras gourmet' },
    ],
    date: '12/03/2026',
    time: '18h',
    boost: null,
    caption: 'Ideias de presente para o Amigo Chocolate!',
    cta: 'Adicione na wishlist - Link na bio',
    hashtags: ['#IdeiasDePresente', '#Pascoa2026', '#AmigoChocolate', '#Chocolates'],
    category: 'seasonal',
    month: 'marco',
    status: 'draft',
  },
  {
    id: 50,
    slug: 'poll-chocolate',
    title: 'Poll: Vai fazer Amigo Chocolate?',
    type: 'story',
    format: 'story',
    slides: [
      { id: 1, content: 'Vai fazer Amigo Chocolate?' },
      { id: 2, content: 'Sim / Não / Talvez' },
    ],
    date: '14/03/2026',
    time: '12h',
    boost: null,
    caption: 'Conta pra gente!',
    cta: '',
    hashtags: ['#Poll', '#AmigoChocolate', '#Pascoa2026'],
    category: 'engagement',
    month: 'marco',
    status: 'draft',
  },
  {
    id: 51,
    slug: 'nova-feature',
    title: '5 Novas Features!',
    type: 'carousel',
    format: 'square',
    slides: [
      { id: 1, content: '5 NOVAS FEATURES!' },
      { id: 2, content: 'SORTEIO DEMOCRATICO', subContent: 'Todo mundo vota!' },
      { id: 3, content: 'TEMAS DIVERTIDOS', subContent: 'Música, filme, meme' },
      { id: 4, content: 'MURAL DE FOTOS', subContent: 'Feed do grupo' },
      { id: 5, content: 'QUIZ DO GRUPO', subContent: 'Perguntas divertidas' },
      { id: 6, content: 'RANKING DE PRESENTES', subContent: 'Vote no melhor!' },
    ],
    date: '16/03/2026',
    time: '12h',
    boost: 100,
    caption: `🚀 CHEGARAM 5 NOVAS FEATURES! 🚀

O app mais completo de Amigo Secreto ficou aínda melhor:

🗳️ SORTEIO DEMOCRATICO
Votacao para aprovar o sorteio. Até 3 rodadas!
"Sorteio que todo mundo aprova!"

🎵 TEMAS (Música, Filme, Meme)
Sugira a música que representa cada pessoa!
"Qual a música do Joao?"

📸 MURAL DE FOTOS
Feed igual Instagram so do grupo!
"Registre os melhores momentos!"

❓ QUIZ DO GRUPO
Perguntas divertidas sobre os participantes!
"Quem tem medo de barata?"

🏆 RANKING DE PRESENTES
Vote no presente mais criativo!
"Quem deu o melhor presente?"

Qual feature você mais quer usar? 👇`,
    cta: 'Atualize o app - Link na bio',
    hashtags: ['#OAmigoSecreto', '#NovasFeatures', '#SorteioDemocratico', '#QuizDoGrupo', '#MuralDeFotos', '#RankingDePresentes', '#TemaDoGrupo', '#AppCompleto', '#AmigoSecretoDigital'],
    category: 'feature',
    month: 'marco',
    status: 'draft',
  },
  {
    id: 52,
    slug: 'dicas-uso',
    title: 'Dicas de Uso que Você Não Sabia',
    type: 'carousel',
    format: 'square',
    slides: [
      { id: 1, content: '5 DICAS que vocênão sabia' },
      { id: 2, content: 'QR Code para convite rápido' },
      { id: 3, content: 'Restricoes multiplas no mesmo grupo' },
      { id: 4, content: 'Wishlist com links diretos' },
      { id: 5, content: 'Chat anônimo com hints' },
    ],
    date: '18/03/2026',
    time: '12h',
    boost: null,
    caption: 'Dicas que você provavelmentenão sabia!',
    cta: 'Domine o app - Link na bio',
    hashtags: ['#Dicas', '#Tips', '#OAmigoSecreto', '#TruquesDoApp'],
    category: 'feature',
    month: 'marco',
    status: 'draft',
  },
  {
    id: 53,
    slug: 'qa-marco',
    title: 'Q&A com a Equipe',
    type: 'story',
    format: 'story',
    slides: [
      { id: 1, content: 'Perguntas para a equipe?' },
      { id: 2, content: 'Manda aqui!' },
    ],
    date: '20/03/2026',
    time: '12h',
    boost: null,
    caption: 'Responderemos ao vivo!',
    cta: '',
    hashtags: ['#QeA', '#Equipe', '#OAmigoSecreto'],
    category: 'engagement',
    month: 'marco',
    status: 'draft',
  },
  {
    id: 54,
    slug: 'pov-chocolate',
    title: 'POV: Revelação de Amigo Chocolate',
    type: 'reels',
    format: 'story',
    slides: [
      { id: 1, content: 'POV: Você descobre...' },
      { id: 2, content: 'Que seu amigo chocolate...' },
      { id: 3, content: 'Te deu o melhor chocolate!' },
    ],
    date: '22/03/2026',
    time: '18h',
    boost: null,
    caption: 'Quem já teve essa felicidade?',
    cta: 'Baixe o app - Link na bio',
    hashtags: ['#POV', '#AmigoChocolate', '#Revelação', '#Pascoa2026'],
    category: 'engagement',
    month: 'marco',
    status: 'draft',
  },
  {
    id: 55,
    slug: 'countdown-pascoa',
    title: 'Countdown Pascoa',
    type: 'carousel',
    format: 'square',
    slides: [
      { id: 1, content: 'COUNTDOWN PASCOA' },
      { id: 2, content: 'Faltam X dias!' },
      { id: 3, content: 'Já criou seu grupo?' },
      { id: 4, content: 'Ainda da tempo!' },
    ],
    date: '23/03/2026',
    time: '10h',
    boost: 50,
    caption: 'Pascoa chegando! Já criou seu grupo de Amigo Chocolate?',
    cta: 'Crie agora - Link na bio',
    hashtags: ['#Countdown', '#Pascoa2026', '#AmigoChocolate', '#OAmigoSecreto'],
    category: 'seasonal',
    month: 'marco',
    status: 'draft',
  },
  {
    id: 56,
    slug: 'últimas-dicas-pascoa',
    title: 'Últimas Dicas antes da Pascoa',
    type: 'story',
    format: 'story',
    slides: [
      { id: 1, content: 'Últimas dicas!' },
      { id: 2, content: 'Antes da Pascoa' },
      { id: 3, content: 'Não esqueca de...' },
    ],
    date: '26/03/2026',
    time: '12h',
    boost: null,
    caption: 'Últimas dicas antes da Pascoa!',
    cta: '',
    hashtags: ['#Dicas', '#Pascoa2026', '#AmigoChocolate'],
    category: 'seasonal',
    month: 'marco',
    status: 'draft',
  },
  {
    id: 57,
    slug: 'tutorial-pascoa',
    title: 'Tutorial: Grupo de Pascoa em 1 min',
    type: 'reels',
    format: 'story',
    slides: [
      { id: 1, content: 'Crie um grupo de Pascoa' },
      { id: 2, content: 'Em menos de 1 minuto!' },
      { id: 3, content: 'Demonstração rápida' },
    ],
    date: '29/03/2026',
    time: '18h',
    boost: 50,
    caption: 'Tutorial rápido: Como criar um grupo de Amigo Chocolate em menos de 1 minuto!',
    cta: 'Baixe o app - Link na bio',
    hashtags: ['#Tutorial', '#AmigoChocolate', '#Pascoa2026', '#Em1Minuto'],
    category: 'feature',
    month: 'marco',
    status: 'draft',
  },
  {
    id: 58,
    slug: 'ultima-chamada-chocolate',
    title: 'Última Chamada Amigo Chocolate',
    type: 'static',
    format: 'square',
    date: '31/03/2026',
    time: '10h',
    boost: null,
    caption: 'ULTIMA CHAMADA! Pascoa e essa semana. Já criou seu grupo de Amigo Chocolate?',
    cta: 'Crie agora - Link na bio',
    hashtags: ['#ÚltimaChamada', '#AmigoChocolate', '#Pascoa2026', '#OAmigoSecreto'],
    category: 'seasonal',
    month: 'marco',
    status: 'draft',
  },

  // =============================================
  // POSTS HUMANIZADOS - CRESCIMENTO DE SEGUIDORES
  // =============================================
  // Estes posts usam fotos royalty-free de pessoas reais
  // para humanizar a marca e pedir apoio da comunidade

  {
    id: 59,
    slug: 'h1-ajude-nos-crescer',
    title: 'Ajude-nos a Crescer',
    type: 'static',
    format: 'square',
    date: '13/12/2025',
    time: '10h',
    boost: null,
    caption: `Oi, podemos ser sinceros com você?

Somos uma equipe pequena de desenvolvedores brasileiros.

Criamos O Amigo Secreto porque acreditamos que tecnologia para celebrar com família e amigos deveria ser:
- Gratuita
- Sem anúncios irritantes
- Sem vender seus dados
- Feita com carinho

Mas para continuar existindo, precisamos de VOCÊ.

Não pedimos dinheiro. Pedimos apenas: nos siga.

Cada seguidor nos ajuda a:
- Aparecer para mais pessoas
- Continuar desenvolvendo
- Manter o app 100% gratuito

Se você acredita que apps podem ser diferentes...
Se você quer apoiar criadores brasileiros...
Se você usa e gosta do que fazemos...

Toque em SEGUIR.

É de graça. E muda tudo pra gente.`,
    cta: 'SIGA nossa página',
    hashtags: ['#Comunidade', '#AppBrasileiro', '#Gratuito', '#AmigoSecreto', '#ApoieLocal', '#DesenvolvimentoBrasil', '#OAmigoSecreto'],
    category: 'engagement',
    month: 'dezembro',
    status: 'draft',
  },
  {
    id: 60,
    slug: 'h2-quem-faz-app',
    title: 'Quem Faz o App',
    type: 'story',
    format: 'story',
    slides: [
      { id: 1, content: 'Por trás do app...', subContent: 'Uma equipe pequena, um sonho grande' },
      { id: 2, content: 'Fazemos isso por VOCÊS', subContent: 'Para que toda família possa celebrar' },
      { id: 3, content: 'Nos siga para apoiar', subContent: 'Você apoia apps gratuitos?' },
    ],
    date: '16/12/2025',
    time: '19h',
    boost: null,
    caption: 'Conheça quem está por trás do O Amigo Secreto. Uma equipe pequena com um grande propósito.',
    cta: 'Siga para apoiar',
    hashtags: ['#Bastidores', '#QuemSomos', '#OAmigoSecreto', '#AppBrasileiro', '#Comunidade'],
    category: 'engagement',
    month: 'dezembro',
    status: 'draft',
  },
  {
    id: 61,
    slug: 'h3-por-que-gratuitos',
    title: 'Por Que Somos Gratuitos',
    type: 'carousel',
    format: 'square',
    slides: [
      { id: 1, content: 'POR QUE SOMOS 100% GRATUITOS?' },
      { id: 2, content: 'Estamos cansados de apps que...', subContent: 'Te enchem de anúncios' },
      { id: 3, content: 'Acreditamos que CELEBRAR', subContent: 'não deveria custar nada' },
      { id: 4, content: 'Somos brasileiros que programam', subContent: 'de noite, depois do trabalho' },
      { id: 5, content: 'COMO VOCÊ PODE AJUDAR', subContent: 'SIGA + COMPARTILHE + AVALIE' },
    ],
    date: '20/12/2025',
    time: '10h',
    boost: 50,
    caption: `POR QUE O AMIGO SECRETO É 100% GRATUITO?

Estamos cansados de apps que:
- Te enchem de anúncios
- Vendem seus dados
- Cobram por tudo
- Tratam você como produto

Acreditamos que CELEBRAR em família não deveria custar nada.

Somos brasileiros que programam de noite, depois do trabalho. Fazemos por amor. Pelo propósito. Não por lucro.

COMO VOCÊ PODE AJUDAR:
1. SIGA nossa página
2. COMPARTILHE com amigos
3. AVALIE o app (5 estrelas)
4. USE e aproveite!

Juntos, provamos que apps PODEM ser diferentes.`,
    cta: 'SIGA + COMPARTILHE',
    hashtags: ['#PorQueSomosGratuitos', '#AppGrátis', '#SemAnuncios', '#Comunidade', '#OAmigoSecreto', '#ApoieBrasileiros', '#NatalEmFamilia'],
    category: 'engagement',
    month: 'dezembro',
    status: 'draft',
  },
  {
    id: 62,
    slug: 'h4-siga-para-gratuito',
    title: 'Siga para App Gratuito',
    type: 'static',
    format: 'square',
    date: '23/12/2025',
    time: '12h',
    boost: null,
    caption: `Um pedido sincero antes do Natal...

Você sabia que quando você SEGUE uma página, está votando no que quer ver mais?

Ao seguir O Amigo Secreto, você diz ao Instagram:

"Quero mais apps gratuitos"
"Quero apoiar criadores brasileiros"
"Quero tecnologia sem anúncios"

Não custa nada. Leva 1 segundo.

Mas para nós, significa TUDO.

Significa que podemos:
- Continuar o app gratuito em 2026
- Criar novas funcionalidades
- Ajudar mais famílias a celebrar

Se você usou o app esse Natal...
Se fácilitou seu amigo secreto...
Se evitou aquele papelzinho...

SIGA.

É nossa única recompensa.

Feliz Natal! E obrigado por existir.`,
    cta: 'SIGA - É nossa única recompensa',
    hashtags: ['#SigaNos', '#Apoie', '#AmigoSecreto', '#Natal2025', '#Gratuito', '#Comunidade', '#FeitoNoBrasil', '#OAmigoSecreto'],
    category: 'engagement',
    month: 'dezembro',
    status: 'draft',
  },
  {
    id: 63,
    slug: 'h5-obrigado-comunidade',
    title: 'Obrigado, Comunidade',
    type: 'static',
    format: 'square',
    date: '25/12/2025',
    time: '12h',
    boost: null,
    caption: `FELIZ NATAL, COMUNIDADE!

Hoje, enquanto você abre presentes com quem ama...
Enquanto revela seu amigo secreto...
Enquanto celebra com família e amigos...

Queremos agradecer.

OBRIGADO por:
- Baixar nosso app
- Confiar em nós
- Compartilhar com amigos
- Acreditar que tecnologia pode ser gratuita
- Nos seguir e apoiar

Vocês são a razão de tudo isso existir.

Não temos investidores milionários.
Não temos escritório chique.
Não temos time de marketing.

Temos VOCÊS.

E isso vale mais que qualquer coisa.

De coração: OBRIGADO!

Que 2026 seja repleto de celebrações...
E estaremos aqui para cada uma delas.

Com amor,
Equipe O Amigo Secreto`,
    cta: 'Feliz Natal!',
    hashtags: ['#FelizNatal', '#Obrigado', '#Comunidade', '#Gratidao', '#OAmigoSecreto', '#Natal2025', '#AmigoSecreto'],
    category: 'branding',
    month: 'dezembro',
    status: 'draft',
  },
];

// Helper functions
export const getPostById = (id: number): PostData | undefined => {
  return posts.find(post => post.id === id);
};

export const getPostBySlug = (slug: string): PostData | undefined => {
  return posts.find(post => post.slug === slug);
};

export const getPostsByCategory = (category: PostData['category']): PostData[] => {
  return posts.filter(post => post.category === category);
};

export const getPostsByMonth = (month: PostMonth): PostData[] => {
  return posts.filter(post => post.month === month);
};

export const getPostsByStatus = (status: PostStatus): PostData[] => {
  return posts.filter(post => post.status === status);
};

export const getPostsByType = (type: PostType): PostData[] => {
  return posts.filter(post => post.type === type);
};

export const getBoostedPosts = (): PostData[] => {
  return posts.filter(post => post.boost !== null);
};

export const getTotalBudget = (): number => {
  return posts.reduce((sum, post) => sum + (post.boost || 0), 0);
};

export const getBudgetByMonth = (month: PostMonth): number => {
  return posts
    .filter(post => post.month === month)
    .reduce((sum, post) => sum + (post.boost || 0), 0);
};
