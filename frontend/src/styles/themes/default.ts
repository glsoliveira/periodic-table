export const defaultTheme = {
  colors: {
    white: '#fff',
    green300: '#00B37E',
    green500: '#055036', 
    grey100: '#B3B3B3',
    grey700: '#212121',
    gray500: '#6B7280',
    gray300: '##9ca3af',
    darkBlue: '#282c34',  // Background color for BoxContainer
  },
  fontSize: {
    base: '1rem', // 16px
    lg: '1.25rem', // 20px
    xl: '4rem', // 64px
    '2xl': '2rem', // 32px,
    small: '0.875rem', // 14px
  },
  spacing: {
    px: '1px',
    0: '0px',
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    10: '40px',
    15: '60px'
  },
  lineHeight: {
    normal: 'normal',
    none: '1',
    tighter: '1.25',
    tight: '1.375',
    snug: '1.5',
    relaxed: '1.625',
    loose: '2',
  },
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    default: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    full: '9999px',
  },
  screens: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px'
  }
} as const;
