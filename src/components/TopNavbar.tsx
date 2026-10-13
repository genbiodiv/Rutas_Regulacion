import React from 'react';
import { Dna, Sparkles, ShieldAlert, FileText, BookMarked, Sun, Moon, Type, Lock, Zap } from 'lucide-react';
import { useTheme, FontSizeScale } from '../context/ThemeContext';

export type AppTabType = 'splash' | 'eukaryote' | 'prokaryote' | 'cases' | 'markdown';

interface TopNavbarProps {
  activeTab: AppTabType;
  onSelectTab: (tab: AppTabType) => void;
  onOpenGlossary: () => void;
}

export const TopNavbar: React.FC<TopNavbarProps> = ({
  activeTab,
  onSelectTab,
  onOpenGlossary,
}) => {
  const { theme, toggleTheme, fontSize, setFontSize } = useTheme();

  const navItems: { id: AppTabType; label: string; icon: React.ReactNode; badge?: string }[] = [
    { id: 'splash', label: '01. Portal del Recorrido', icon: <Sparkles className="w-3.5 h-3.5" /> },
    { id: 'eukaryote', label: '02. Ruta Eucariota', icon: <Lock className="w-3.5 h-3.5" />, badge: '11 Puntos' },
    { id: 'prokaryote', label: '03. Ruta Bacteriana', icon: <Zap className="w-3.5 h-3.5" />, badge: '8 Puntos' },
    { id: 'cases', label: '04. Casos Clínicos', icon: <ShieldAlert className="w-3.5 h-3.5" /> },
    { id: 'markdown', label: '05. Guía Completa', icon: <FileText className="w-3.5 h-3.5" /> },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-[#07090e]/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/80 transition-colors shadow-2xs">
      <div className="px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-3 sm:gap-6">
        {/* Zone 1: Brand wordmark */}
        <button 
          onClick={() => onSelectTab('splash')}
          className="text-left group flex items-center gap-2.5 text-slate-900 dark:text-slate-100 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0"
        >
          <span className="w-8 h-8 rounded-lg bg-cyan-500/10 dark:bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 group-hover:border-cyan-500 transition-colors">
            <Dna className="w-4 h-4" />
          </span>
          <div>
            <span className="text-sm sm:text-base font-bold tracking-tight text-slate-900 dark:text-slate-100 block group-hover:text-cyan-600 dark:group-hover:text-cyan-300">
              Recorrido Molecular
            </span>
            <span className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 font-mono hidden xs:block">
              Rutas Separadas: ADN · ARN · Proteína
            </span>
          </div>
        </button>

        {/* Zone 2: Desktop clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-4 text-sm font-medium text-slate-600 dark:text-slate-400">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onSelectTab(item.id)}
              className={`whitespace-nowrap shrink-0 transition-colors pb-1 border-b-2 flex items-center gap-1.5 ${
                activeTab === item.id
                  ? 'text-cyan-600 dark:text-cyan-400 border-cyan-600 dark:border-cyan-400 font-bold'
                  : 'border-transparent hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
              {item.badge && (
                <span className={`text-[9px] font-mono px-1 py-0.2 rounded font-semibold ${
                  activeTab === item.id 
                    ? 'bg-cyan-100 dark:bg-cyan-500/20 text-cyan-800 dark:text-cyan-300' 
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                }`}>
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </nav>

        {/* Zone 3: Accessibility controls and Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          {/* Font size control */}
          <div 
            className="flex items-center bg-slate-100 dark:bg-slate-900 p-0.5 rounded-lg border border-slate-200 dark:border-slate-800 text-xs"
            role="group"
            aria-label="Control de tamaño de letra"
          >
            <span className="flex items-center pl-1.5 pr-1 text-slate-500 dark:text-slate-400" title="Tamaño de letra">
              <Type className="w-3.5 h-3.5" />
            </span>
            {(['normal', 'large', 'xl'] as FontSizeScale[]).map((size) => (
              <button
                key={size}
                onClick={() => setFontSize(size)}
                title={
                  size === 'normal'
                    ? 'Tamaño Normal (16px)'
                    : size === 'large'
                      ? 'Tamaño Grande (18px)'
                      : 'Tamaño Muy Grande (20px)'
                }
                className={`px-2 py-1 rounded-md font-mono text-xs font-semibold transition-colors ${
                  fontSize === size
                    ? 'bg-white dark:bg-slate-800 text-cyan-700 dark:text-cyan-300 shadow-2xs font-bold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                {size === 'normal' ? 'A' : size === 'large' ? 'A+' : 'A++'}
              </button>
            ))}
          </div>

          {/* Light / Dark Mode Toggle Button */}
          <button
            onClick={toggleTheme}
            title={theme === 'dark' ? 'Cambiar a Modo Claro' : 'Cambiar a Modo Oscuro'}
            aria-label={theme === 'dark' ? 'Cambiar a Modo Claro' : 'Cambiar a Modo Oscuro'}
            className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 transition-colors flex items-center gap-1.5 font-medium"
          >
            {theme === 'dark' ? (
              <>
                <Sun className="w-4 h-4 text-amber-400" />
                <span className="hidden sm:inline">Claro</span>
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-indigo-600" />
                <span className="hidden sm:inline">Oscuro</span>
              </>
            )}
          </button>

          {/* Glossary Quick Button */}
          <button
            onClick={onOpenGlossary}
            className="p-1.5 sm:px-3 sm:py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 hover:text-cyan-600 dark:hover:text-cyan-300"
            title="Abrir glosario molecular con referencias"
          >
            <BookMarked className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span className="hidden md:inline">Glosario</span>
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Secondary Navigation Bar */}
      <nav className="lg:hidden flex items-center gap-2 overflow-x-auto px-4 py-2 border-t border-slate-200 dark:border-slate-800/80 bg-slate-50/80 dark:bg-slate-950/60 scrollbar-none text-xs font-medium">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onSelectTab(item.id)}
            className={`whitespace-nowrap px-2.5 py-1 rounded-md transition-colors flex items-center gap-1.5 shrink-0 ${
              activeTab === item.id
                ? 'bg-cyan-100 dark:bg-cyan-500/20 text-cyan-900 dark:text-cyan-300 font-bold border border-cyan-300 dark:border-cyan-500/30'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </header>
  );
};
