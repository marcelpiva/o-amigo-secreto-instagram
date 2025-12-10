// O Amigo Secreto - Brand Colors
export const colors = {
  // Dark Theme (Primary)
  background: '#363636',
  foreground: '#E5E5E5',
  card: '#484848',
  cardForeground: '#E5E5E5',

  // Primary - Terracotta
  primary: '#D4623A',
  primaryForeground: '#FFFFFF',

  // Secondary - Forest Green
  secondary: '#6AAF52',
  secondaryForeground: '#000000',

  // Accent - Steel Blue
  accent: '#7AB4E0',
  accentForeground: '#000000',

  // Others
  muted: '#434343',
  mutedForeground: '#AFAFAF',
  destructive: '#F5A945',
  border: '#666666',
  ring: '#D4623A',

  // Light variants
  lightBg: '#D4D4D4',
  lightCard: '#B8B8B8',
} as const;

// Gradient definitions
export const gradients = {
  primary: 'linear-gradient(135deg, #D4623A 0%, #F5A945 100%)',
  secondary: 'linear-gradient(135deg, #6AAF52 0%, #7AB4E0 100%)',
  accent: 'linear-gradient(135deg, #7AB4E0 0%, #D4623A 100%)',
  christmas: 'linear-gradient(135deg, #D4623A 0%, #6AAF52 100%)',
} as const;
