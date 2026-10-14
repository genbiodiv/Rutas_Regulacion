import React from 'react';
import { CENTRAL_MOTTO } from '../data/geneRegulationData';
import { 
  Dna, 
  ArrowRight, 
  Lock, 
  Zap, 
  BookOpen, 
  BookMarked,
  GraduationCap,
  Sparkles
} from 'lucide-react';

interface SplashJourneyPortalProps {
  onStartFullJourney: () => void;
  onSelectLineage: (lineage: 'eukaryote' | 'prokaryote') => void;
  onGoToGuide?: () => void;
  onGoToSources?: () => void;
  onOpenGlossary: () => void;
}

export const SplashJourneyPortal: React.FC<SplashJourneyPortalProps> = ({
  onSelectLineage,
  onGoToGuide,
  onGoToSources,
  onOpenGlossary,
}) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-12 sm:space-y-16">
      {/* 1. Clean Academic Welcome Hero */}
      <section className="text-center space-y-6">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-700 dark:text-cyan-400 font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
          <span>BIOLOGÍA MOLECULAR Y GENÉTICA EVOLUTIVA</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight leading-[1.15] text-balance">
          Bienvenido al Recorrido Molecular de la <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-teal-600 to-indigo-600 dark:from-cyan-400 dark:via-teal-300 dark:to-indigo-400">Expresión Génica</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Un espacio interactivo diseñado para comprender la regulación génica no como un simple interruptor binario, sino como una <strong>carrera de obstáculos distribuida</strong> a través de tres niveles críticos: <strong>ADN, ARN y Proteína</strong>.
        </p>

        {/* Central Motto Block */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-left relative overflow-hidden shadow-sm dark:shadow-xl transition-colors max-w-2xl mx-auto">
          <span className="text-[11px] font-mono tracking-widest uppercase text-cyan-700 dark:text-cyan-400 font-bold block mb-2">
            Lema Central del Curso
          </span>
          <blockquote className="text-base sm:text-xl font-bold text-slate-900 dark:text-slate-100 italic leading-snug">
            "{CENTRAL_MOTTO}"
          </blockquote>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-3 pt-3 border-t border-slate-100 dark:border-slate-800/80">
            La cantidad no basta: el producto debe sintetizarse en la coordenada correcta, en el tiempo exacto y con el plegamiento funcional requerido.
          </p>
        </div>
      </section>

      {/* 2. Clean Route Selection: Eucariota vs Bacteriana */}
      <section className="space-y-4">
        <div className="text-center space-y-1">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
            ELIGE TU RUTA DE ESTUDIO
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
            Dos filosofías arquitectónicas independientes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {/* Card 1: Ruta Eucariota */}
          <div className="p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-400 dark:hover:border-cyan-500 transition-all shadow-sm hover:shadow-md flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-400 flex items-center justify-center border border-cyan-300 dark:border-cyan-500/30">
                  <Lock className="w-5 h-5" />
                </span>
                <span className="text-xs font-mono font-bold text-cyan-800 dark:text-cyan-300 px-2 py-0.5 rounded bg-cyan-100/70 dark:bg-cyan-500/20">
                  11 Puntos de Control
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  Ruta Eucariota
                </h3>
                <p className="text-xs font-mono text-cyan-700 dark:text-cyan-400 font-medium mt-0.5">
                  Estado basal restrictivo · Barrera epigenética
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                El genoma está empaquetado en cromatina. La compartimentación nuclear separa transcripción de traducción, permitiendo un exhaustivo control de calidad (splicing, vigilancia NMD, exportación por NPC y microARNs).
              </p>
            </div>

            <button
              onClick={() => onSelectLineage('eukaryote')}
              className="w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-white dark:text-slate-950 bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-400 dark:hover:bg-cyan-300 transition-colors flex items-center justify-center gap-2 group shadow-sm"
            >
              <span>Explorar Ruta Eucariota</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Card 2: Ruta Bacteriana */}
          <div className="p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-amber-400 dark:hover:border-amber-500 transition-all shadow-sm hover:shadow-md flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400 flex items-center justify-center border border-amber-300 dark:border-amber-500/30">
                  <Zap className="w-5 h-5" />
                </span>
                <span className="text-xs font-mono font-bold text-amber-800 dark:text-amber-300 px-2 py-0.5 rounded bg-amber-100/70 dark:bg-amber-500/20">
                  8 Puntos de Control
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  Ruta Bacteriana
                </h3>
                <p className="text-xs font-mono text-amber-700 dark:text-amber-400 font-medium mt-0.5">
                  Estado basal permisivo · Velocidad metabólica
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Sin compartimentación nuclear: la transcripción y la traducción están físicamente acopladas en el <em>Expressoma</em>. La degradación rápida por el <em>Degradosoma</em> asegura una adaptación ambiental instantánea.
              </p>
            </div>

            <button
              onClick={() => onSelectLineage('prokaryote')}
              className="w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-amber-950 bg-amber-400 hover:bg-amber-300 transition-colors flex items-center justify-center gap-2 group shadow-sm"
            >
              <span>Explorar Ruta Bacteriana</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* 3. Quick Secondary Access Links */}
      <section className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-medium">
        {onGoToGuide && (
          <button
            onClick={onGoToGuide}
            className="px-4 py-2.5 rounded-lg bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 transition-colors flex items-center gap-1.5"
          >
            <BookOpen className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>Guía de Estudio Completa</span>
          </button>
        )}

        {onGoToSources && (
          <button
            onClick={onGoToSources}
            className="px-4 py-2.5 rounded-lg bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 transition-colors flex items-center gap-1.5"
          >
            <GraduationCap className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
            <span>Fuentes y Consulta Académica</span>
          </button>
        )}

        <button
          onClick={onOpenGlossary}
          className="px-4 py-2.5 rounded-lg bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 transition-colors flex items-center gap-1.5"
        >
          <BookMarked className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
          <span>Glosario Molecular</span>
        </button>
      </section>
    </div>
  );
};
