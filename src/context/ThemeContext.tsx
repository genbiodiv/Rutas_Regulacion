import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeMode = 'light' | 'dark';
export type FontSizeScale = 'normal' | 'large' | 'xl';

interface ThemeContextType {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
  fontSize: FontSizeScale;
  setFontSize: (size: FontSizeScale) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    try {
      const saved = localStorage.getItem('molecular_app_theme');
      if (saved === 'light' || saved === 'dark') return saved;
    } catch {}
    return 'light'; // Default to light mode for crisp readability, as requested by user
  });

  const [fontSize, setFontSizeState] = useState<FontSizeScale>(() => {
    try {
      const saved = localStorage.getItem('molecular_app_font_size');
      if (saved === 'normal' || saved === 'large' || saved === 'xl') return saved;
    } catch {}
    return 'normal';
  });

  useEffect(() => {
    try {
      localStorage.setItem('molecular_app_theme', theme);
    } catch {}

    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    try {
      localStorage.setItem('molecular_app_font_size', fontSize);
    } catch {}

    const root = document.documentElement;
    root.setAttribute('data-font-size', fontSize);

    // Apply scale multiplier to root font-size so all rem-based units scale cleanly
    if (fontSize === 'normal') {
      root.style.fontSize = '16px';
    } else if (fontSize === 'large') {
      root.style.fontSize = '18px';
    } else if (fontSize === 'xl') {
      root.style.fontSize = '20px';
    }
  }, [fontSize]);

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
  };

  const toggleTheme = () => {
    setThemeState((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const setFontSize = (newSize: FontSizeScale) => {
    setFontSizeState(newSize);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, fontSize, setFontSize }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
