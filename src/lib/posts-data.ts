export type PostType = 'static' | 'carousel' | 'story' | 'reels';
export type PostFormat = 'square' | 'vertical' | 'story';

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
  category: 'teaser' | 'launch' | 'feature' | 'social-proof' | 'seasonal' | 'b2b' | 'branding';
}

export const posts: PostData[] = [
  // SEMANA 1: TEASER (10-13 DEZ)
  {
    id: 1,
    slug: 'teaser-countdown',
    title: 'Countdown Teaser',
    type: 'story',
    format: 'story',
    slides: [
      { id: 1, content: 'Cansado de sorteios problemáticos?' },
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
    caption: 'Todo ano a mesma história: sorteio problemático, presentes errados, segredo vazado. E se existisse uma forma inteligente de resolver TODOS esses problemas? Vem aí uma novidade que vai mudar seu Amigo Secreto para sempre. Link na bio!',
    cta: 'Quer saber primeiro? Link na bio',
    hashtags: ['#AmigoSecreto', '#NatalEmFamilia', '#Confraternizacao', '#ProblemasDeNatal', '#DicasDeNatal'],
    category: 'teaser',
  },
  {
    id: 3,
    slug: 'revelacao-marca',
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
    caption: 'Apresentamos O AMIGO SECRETO - o app que vai transformar sua brincadeira favorita de fim de ano. Sorteio inteligente. Chat anônimo. Lista de desejos. E muito mais. Disponível em breve para iOS e Android. 100% GRATUITO. Sem anúncios. Cadastre-se na waitlist! Link na bio',
    cta: 'Cadastre-se na waitlist - Link na bio',
    hashtags: ['#OAmigoSecreto', '#AppNovo', '#Lancamento', '#Natal2025', '#AmigoSecretoApp', '#GratuitoSemAnuncios'],
    category: 'launch',
  },

  // SEMANA 2: LANÇAMENTO (14-18 DEZ)
  {
    id: 4,
    slug: 'lancamento',
    title: 'Lançamento Oficial',
    type: 'static',
    format: 'square',
    date: '14/12/2025',
    time: '10h',
    boost: 200,
    caption: 'O momento chegou! O Amigo Secreto está DISPONÍVEL para download no iOS e Android. Crie seu grupo em segundos. Convide seus amigos. Deixa o algoritmo fazer a mágica. Simples assim. Baixe agora - link na bio!',
    cta: 'Baixe agora - Link na bio',
    hashtags: ['#OAmigoSecreto', '#DownloadAgora', '#AppGratis', '#Natal2025', '#iOS', '#Android', '#AmigoSecretoDigital'],
    category: 'launch',
  },
  {
    id: 5,
    slug: 'feature-algoritmo',
    title: 'Feature: Algoritmo Inteligente',
    type: 'carousel',
    format: 'square',
    slides: [
      { id: 1, content: 'Nosso sorteio é INTELIGENTE' },
      { id: 2, content: 'Define restrições:', subContent: 'Maria não pode tirar João (são casados)' },
      { id: 3, content: 'O algoritmo calcula TODAS as possibilidades' },
      { id: 4, content: 'Resultado: sorteio perfeito que respeita TODAS as regras' },
    ],
    date: '15/12/2025',
    time: '19h',
    boost: null,
    caption: 'Chega de sorteio manual com papelzinho. Chega de "refaz porque deu errado". Nosso algoritmo anti-ciclos garante: Casais não tiram um ao outro. Ninguém repete o ano anterior. Famílias podem ter restrições personalizadas. E tudo automático. Tecnologia a serviço da diversão!',
    cta: 'Experimente grátis - Link na bio',
    hashtags: ['#AmigoSecreto', '#SorteioInteligente', '#Tecnologia', '#AlgoritmoInteligente', '#SemComplicacao'],
    category: 'feature',
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
      { id: 3, content: 'Veja sugestões de onde comprar' },
      { id: 4, content: 'Preços de vários marketplaces' },
    ],
    date: '16/12/2025',
    time: '12h',
    boost: null,
    caption: 'WISHLIST + VITRINE DE PRESENTES. Cada participante cria sua lista de desejos. Você vê exatamente o que a pessoa quer. E ainda mostramos onde comprar pelo melhor preço: Amazon, Mercado Livre, Magazine Luiza, Shopee. Presente certo, garantido!',
    cta: 'Crie sua wishlist - Link na bio',
    hashtags: ['#ListaDeDesejos', '#Wishlist', '#PresentePerfeito', '#OndeComprar', '#MelhorPreco', '#AmigoSecreto'],
    category: 'feature',
  },
  {
    id: 7,
    slug: 'feature-chat',
    title: 'Feature: Chat Anônimo',
    type: 'static',
    format: 'square',
    date: '17/12/2025',
    time: '19h',
    boost: null,
    caption: 'CHAT ANÔNIMO. Dê dicas sobre o presente. Pergunte preferências. Crie expectativa. Tudo isso sem revelar sua identidade. O app garante o anonimato até a hora da revelação. A diversão do Amigo Secreto agora dura o mês inteiro!',
    cta: 'Comece a trocar mensagens - Link na bio',
    hashtags: ['#ChatSecreto', '#AmigoSecreto', '#MensagemAnonima', '#Surpresa', '#Segredo'],
    category: 'feature',
  },
  {
    id: 8,
    slug: 'feature-grupos',
    title: 'Feature: Grupos Ilimitados',
    type: 'story',
    format: 'story',
    slides: [
      { id: 1, content: 'Família da Mamãe' },
      { id: 2, content: 'Galera do Trabalho' },
      { id: 3, content: 'Amigos da Facul', subContent: 'GRUPOS ILIMITADOS - GRÁTIS' },
    ],
    date: '18/12/2025',
    time: '12h',
    boost: null,
    caption: 'Um app, todos os seus grupos. Família. Trabalho. Amigos. Vizinhos. Quantos você quiser. E GRÁTIS.',
    cta: 'Crie seus grupos - Link na bio',
    hashtags: ['#GruposIlimitados', '#Familia', '#Trabalho', '#Amigos', '#AmigoSecreto'],
    category: 'feature',
  },

  // SEMANA 3: SOCIAL PROOF (19-23 DEZ)
  {
    id: 9,
    slug: 'tutorial-rapido',
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
      { id: 7, content: 'Pronto! Cada um vê apenas seu sorteado' },
    ],
    date: '19/12/2025',
    time: '18h',
    boost: 100,
    caption: 'TUTORIAL: Como organizar seu Amigo Secreto em menos de 1 minuto. Sério. É só isso. Sem complicação. Salva esse vídeo e compartilha com quem vai organizar o amigo secreto esse ano!',
    cta: 'Salve e compartilhe!',
    hashtags: ['#Tutorial', '#ComoFazer', '#AmigoSecreto', '#DicaRapida', '#Natal2025', '#Facil'],
    category: 'social-proof',
  },
  {
    id: 10,
    slug: 'depoimentos',
    title: 'Depoimentos',
    type: 'carousel',
    format: 'square',
    slides: [
      { id: 1, content: '"Finalmente minha sogra não tirou meu sogro!"', subContent: '- Ana, 34' },
      { id: 2, content: '"Usei pro amigo secreto da empresa com 50 pessoas. Funcionou perfeito!"', subContent: '- Carlos, RH' },
      { id: 3, content: '"A wishlist salvou minha vida. Dei o presente certo!"', subContent: '- Mariana, 28' },
    ],
    date: '20/12/2025',
    time: '10h',
    boost: null,
    caption: 'O que estão falando sobre O Amigo Secreto. Baixe e faça parte dessa revolução no jeito de brincar de amigo secreto. Link na bio!',
    cta: 'Junte-se a eles - Link na bio',
    hashtags: ['#Depoimentos', '#AvaliacaoDeUsuarios', '#AmigoSecreto', '#AppAprovado', '#5Estrelas'],
    category: 'social-proof',
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
    caption: 'Calma, ainda dá tempo! Com O Amigo Secreto, você organiza tudo em 2 minutos: 1. Baixa o app. 2. Cria o grupo. 3. Manda o link. 4. Sorteia. Pronto! Até quem deixou pra última hora consegue. Baixe agora!',
    cta: 'Baixe agora - Link na bio',
    hashtags: ['#Natal2025', '#UltimaHora', '#AindaDaTempo', '#AmigoSecreto', '#Countdown', '#FaltamXDias'],
    category: 'seasonal',
  },
  {
    id: 12,
    slug: 'b2b-empresas',
    title: 'Para Empresas',
    type: 'carousel',
    format: 'square',
    slides: [
      { id: 1, content: 'ATENÇÃO RH:', subContent: 'Amigo Secreto da empresa nunca foi tão fácil' },
      { id: 2, content: '10, 50, 100+ participantes.', subContent: 'O algoritmo dá conta.' },
      { id: 3, content: 'Restrições por departamento.', subContent: 'Ninguém tira o próprio chefe.' },
      { id: 4, content: 'Grátis. Sem limite de grupos. Sem limite de participantes.' },
    ],
    date: '22/12/2025',
    time: '10h',
    boost: 100,
    caption: 'Para RH e organizadores de confraternização: O Amigo Secreto resolve aquela dor de cabeça de organizar o amigo secreto da empresa. Funciona com qualquer tamanho de equipe. Define restrições customizadas. E o melhor: GRÁTIS. Marque o RH da sua empresa!',
    cta: 'Marque seu RH! Link na bio para testar',
    hashtags: ['#RH', '#RecursosHumanos', '#Confraternizacao', '#EmpresasFelizes', '#B2B', '#GestaoDepessoas', '#FestaDaEmpresa'],
    category: 'b2b',
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
      { id: 2, content: 'Com ou sem o app...', subContent: 'Mas com o app é melhor 😉' },
    ],
    date: '24/12/2025',
    time: '09h',
    boost: null,
    caption: 'Feliz Natal a todos! Que a magia das festas esteja presente em cada momento.',
    cta: '',
    hashtags: ['#FelizNatal', '#Natal2025', '#OAmigoSecreto'],
    category: 'branding',
  },
  {
    id: 14,
    slug: 'ano-novo',
    title: 'Ano Novo',
    type: 'static',
    format: 'square',
    date: '26/12/2025',
    time: '18h',
    boost: null,
    caption: 'Tem grupo que só consegue se reunir depois do Natal. Réveillon com os amigos. Confraternização em janeiro. O Amigo Secreto funciona o ano todo! Já deixa o grupo criado pro próximo encontro.',
    cta: 'Crie seu grupo - Link na bio',
    hashtags: ['#AnoNovo2026', '#Reveillon', '#Confraternizacao', '#AmigoSecreto', '#Janeiro'],
    category: 'seasonal',
  },
  {
    id: 15,
    slug: 'retrospectiva',
    title: 'Retrospectiva',
    type: 'carousel',
    format: 'square',
    slides: [
      { id: 1, content: 'OBRIGADO!' },
      { id: 2, content: 'X downloads', subContent: 'X grupos criados • X sorteios realizados' },
      { id: 3, content: 'Em 2026, ainda mais novidades.', subContent: 'Fique ligado!' },
    ],
    date: '27/12/2025',
    time: '12h',
    boost: null,
    caption: 'Lançamos há menos de 2 semanas e já estamos emocionados com a recepção! Obrigado a cada pessoa que baixou, criou um grupo, e confiou no app pro Amigo Secreto desse ano. Em 2026 vem MUITO mais. Fiquem ligados!',
    cta: 'Siga para novidades!',
    hashtags: ['#Obrigado', '#Comunidade', '#OAmigoSecreto', '#2026VemAi', '#Gratidao'],
    category: 'branding',
  },

  // POST EXTRA: O ANO TODO
  {
    id: 16,
    slug: 'ano-todo',
    title: 'O Ano Todo',
    type: 'carousel',
    format: 'square',
    slides: [
      { id: 1, content: 'Não é só no Natal!', subContent: 'O Amigo Secreto funciona o ano todo' },
      { id: 2, content: 'Amigo Secreto 🎄', subContent: 'Dezembro - O clássico das festas de fim de ano' },
      { id: 3, content: 'Amigo Chocolate 🐰', subContent: 'Março/Abril - Troca de chocolates na Páscoa' },
      { id: 4, content: 'Amigo Caipira 🎃', subContent: 'Junho - Presentes temáticos de festa junina' },
      { id: 5, content: 'Amigo Criança 🧸', subContent: 'Outubro - Presenteie uma criança especial' },
    ],
    date: '28/12/2025',
    time: '12h',
    boost: null,
    caption: 'O Amigo Secreto não é só pro Natal! Use o app em diversas ocasiões ao longo do ano. Amigo Chocolate na Páscoa, Amigo Caipira na Festa Junina, Amigo Criança no Dia das Crianças. Baixe agora e crie memórias o ano todo!',
    cta: 'Baixe o app - Link na bio',
    hashtags: ['#AmigoSecreto', '#AmigoChocolate', '#AmigoCaipira', '#AmigoCrianca', '#OAnoTodo', '#Pascoa', '#FestaJunina', '#DiaDasCriancas'],
    category: 'seasonal',
  },
];

export const getPostById = (id: number): PostData | undefined => {
  return posts.find(post => post.id === id);
};

export const getPostBySlug = (slug: string): PostData | undefined => {
  return posts.find(post => post.slug === slug);
};

export const getPostsByCategory = (category: PostData['category']): PostData[] => {
  return posts.filter(post => post.category === category);
};

export const getBoostedPosts = (): PostData[] => {
  return posts.filter(post => post.boost !== null);
};
