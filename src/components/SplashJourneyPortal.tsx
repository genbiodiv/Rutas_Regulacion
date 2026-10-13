import React from 'react';
import { CENTRAL_MOTTO } from '../data/geneRegulationData';
import { 
  Dna, 
  Layers, 
  ArrowRight, 
  Lock, 
  Zap, 
  Activity, 
  ShieldCheck, 
  Sparkles,
  ChevronRight,
  GitBranch,
  BookMarked
} from 'lucide-react';

interface SplashJourneyPortalProps {
  onStartFullJourney: () => void;
  onSelectLineage: (lineage: 'eukaryote' | 'prokaryote') => void;
  onSelectMolecularLevel: (level: 'ADN' | 'ARN' | 'Proteína', lineage?: 'eukaryote' | 'prokaryote') => void;
  onOpenGlossary: () => void;
}

export const SplashJourneyPortal: React.FC<SplashJourneyPortalProps> = ({
  onStartFullJourney,
  onSelectLineage,
  onSelectMolecularLevel,
  onOpenGlossary,
}) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-12 sm:space-y-16">
      {/* 1. Hero Section: Splash Title & Pedagogical Premise */}
      <div className="text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-100/80 dark:bg-cyan-500/10 border border-cyan-300 dark:border-cyan-500/20 text-cyan-900 dark:text-cyan-300 text-xs font-mono font-bold">
          <Sparkles className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
          <span>GUÍA UNIVERSITARIA INTERACTIVA · RECORRIDO POR PUNTOS DE CONTROL</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight leading-[1.15] text-balance">
          El Recorrido Molecular de la <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-teal-600 to-indigo-600 dark:from-cyan-400 dark:via-teal-300 dark:to-indigo-400">Expresión Génica</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Más allá del mito del interruptor binario: la expresión génica es una <strong>carrera de obstáculos distribuida</strong>. Acompáñanos a descifrar cómo se regula el flujo biológico a través de tres dimensiones fundamentales: <strong>ADN, ARN y Proteína</strong> en dos rutas evolutivas separadas.
        </p>

        {/* Central Motto Banner */}
        <div className="p-6 sm:p-7 rounded-2xl bg-cyan-50/80 dark:bg-slate-900/90 border border-cyan-200 dark:border-cyan-500/30 text-left relative overflow-hidden shadow-sm dark:shadow-xl transition-colors">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="relative space-y-2">
            <span className="text-xs font-mono tracking-wider uppercase text-cyan-700 dark:text-cyan-400 font-bold block">
              Lema Central del Curso
            </span>
            <blockquote className="text-base sm:text-xl font-bold text-slate-900 dark:text-slate-100 italic leading-snug">
              "{CENTRAL_MOTTO}"
            </blockquote>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 pt-1">
              La cantidad no basta: si el producto no aparece en el lugar correcto, en el momento preciso o con la conformación requerida, la función celular fracasa.
            </p>
          </div>
        </div>

        {/* Fast Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
          <button
            onClick={() => onSelectLineage('eukaryote')}
            className="px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white dark:text-slate-950 bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-400 dark:hover:bg-cyan-300 transition-all shadow-md flex items-center gap-2 group"
          >
            <Lock className="w-4 h-4" />
            <span>Explorar Ruta Eucariota (11 Puntos)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => onSelectLineage('prokaryote')}
            className="px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-amber-950 bg-amber-400 hover:bg-amber-300 transition-all shadow-md flex items-center gap-2 group"
          >
            <Zap className="w-4 h-4" />
            <span>Explorar Ruta Bacteriana (8 Puntos)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onOpenGlossary}
            className="px-5 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-800 transition-colors flex items-center gap-2"
          >
            <BookMarked className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>Consultar Glosario Molecular</span>
          </button>
        </div>
      </div>

      {/* 2. La Gran Bifurcación: Rutas Separadas para Bacterias y Eucariotas */}
      <section className="space-y-6 pt-4 border-t border-slate-200 dark:border-slate-800/80">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-700 dark:text-cyan-400 font-bold uppercase">
            <GitBranch className="w-4 h-4" />
            <span>LA GRAN BIFURCACIÓN EVOLUTIVA: DOS RUTAS SEPARADAS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
            ¿En qué arquitectura celular transcurre el recorrido?
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            Las leyes biofísicas de la regulación divergen radicalmente. Por eso, hemos generado <strong>dos rutas completamente independientes</strong> para evitar cualquier confusión mecanística.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Card 1: Ruta Eucariota */}
          <div className="rounded-2xl p-6 sm:p-7 bg-cyan-50/50 dark:bg-slate-900/80 border border-cyan-300 dark:border-cyan-500/40 space-y-5 flex flex-col justify-between transition-colors shadow-2xs">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase px-2.5 py-1 rounded bg-cyan-100 dark:bg-cyan-500/20 text-cyan-900 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-500/30 flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                  <span>RUTA EUCARIOTA (11 PUNTOS DE CONTROL)</span>
                </span>
                <span className="text-[11px] font-mono font-semibold text-slate-600 dark:text-slate-400">
                  Estado Basal Restrictivo
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  La Barrera Epigenética y el Control Multietapa
                </h3>
                <p className="text-xs font-mono text-cyan-800 dark:text-cyan-300 font-medium mt-1">
                  Compartimentación nuclear estricta · Transcripción y traducción espacialmente separadas
                </p>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <div className="p-3 rounded-lg bg-white/80 dark:bg-slate-950/80 border border-cyan-200 dark:border-cyan-900/50 space-y-1">
                  <strong className="text-cyan-900 dark:text-cyan-300 font-bold block">1. Nivel ADN:</strong>
                  <span>El genoma está empaquetado en nucleosomas e histonas. El acceso requiere remodeladores dependientes de ATP (SWI/SNF), acetilación (HATs/HDACs), metilación CpG y combinaciones de factores basales y específicos.</span>
                </div>

                <div className="p-3 rounded-lg bg-white/80 dark:bg-slate-950/80 border border-cyan-200 dark:border-cyan-900/50 space-y-1">
                  <strong className="text-cyan-900 dark:text-cyan-300 font-bold block">2. Nivel ARN:</strong>
                  <span>Capping 5', poliadenilación 3' y splicing alternativo (diversificación masiva). Control de calidad por vigilancia NMD contra codones prematuros, exportación a través del poro nuclear (NPC), y silenciamiento por microARNs (RISC).</span>
                </div>

                <div className="p-3 rounded-lg bg-white/80 dark:bg-slate-950/80 border border-cyan-200 dark:border-cyan-900/50 space-y-1">
                  <strong className="text-cyan-900 dark:text-cyan-300 font-bold block">3. Nivel Proteína:</strong>
                  <span>Inicio de traducción por escaneo y secuencia Kozak (ribosoma 80S), chaperonas Hsp70, control de calidad en RE (UPR), translocación SRP y degradación por el proteasoma 26S.</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-cyan-200 dark:border-cyan-900/50 flex items-center justify-between">
              <span className="text-[11px] font-mono text-cyan-800 dark:text-cyan-400 font-semibold">
                Complejidad pluricelular programada
              </span>
              <button
                onClick={() => onSelectLineage('eukaryote')}
                className="px-4 py-2 text-xs font-bold text-white dark:text-slate-950 bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-400 dark:hover:bg-cyan-300 rounded-lg transition-colors flex items-center gap-1.5 shadow-2xs"
              >
                <span>Explorar Ruta Eucariota</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: Ruta Bacteriana */}
          <div className="rounded-2xl p-6 sm:p-7 bg-amber-50/50 dark:bg-slate-900/80 border border-amber-300 dark:border-amber-500/40 space-y-5 flex flex-col justify-between transition-colors shadow-2xs">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase px-2.5 py-1 rounded bg-amber-100 dark:bg-amber-500/20 text-amber-900 dark:text-amber-300 border border-amber-300 dark:border-amber-500/30 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                  <span>RUTA BACTERIANA (8 PUNTOS DE CONTROL)</span>
                </span>
                <span className="text-[11px] font-mono font-semibold text-slate-600 dark:text-slate-400">
                  Estado Basal Permisivo
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  El Interruptor Metabólico y la Velocidad
                </h3>
                <p className="text-xs font-mono text-amber-800 dark:text-amber-300 font-medium mt-1">
                  Citoplasma único · Transcripción y traducción físicamente acopladas (El Expressoma)
                </p>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <div className="p-3 rounded-lg bg-white/80 dark:bg-slate-950/80 border border-amber-200 dark:border-amber-900/50 space-y-1">
                  <strong className="text-amber-900 dark:text-amber-300 font-bold block">1. Nivel ADN:</strong>
                  <span>Genoma desnudo sin nucleosomas. La ARN polimerasa accede libremente con ayuda de factores sigma (σ70, σ32). Operones policistrónicos modulados por represores metabólicos alostéricos (LacI, TrpR).</span>
                </div>

                <div className="p-3 rounded-lg bg-white/80 dark:bg-slate-950/80 border border-amber-200 dark:border-amber-900/50 space-y-1">
                  <strong className="text-amber-900 dark:text-amber-300 font-bold block">2. Nivel ARN:</strong>
                  <span>El ribosoma 70S traduce el ARNm naciente al vuelo. Vida media ultracorta (1 a 3 minutos) por digestión rápida mediante el <em>Degradosoma</em> (ARNasa E). Sensores de metabolitos en el propio ARN (Riboswitches) y sRNAs con Hfq.</span>
                </div>

                <div className="p-3 rounded-lg bg-white/80 dark:bg-slate-950/80 border border-amber-200 dark:border-amber-900/50 space-y-1">
                  <strong className="text-amber-900 dark:text-amber-300 font-bold block">3. Nivel Proteína:</strong>
                  <span>Reconocimiento de la secuencia Shine-Dalgarno, chaperonas procariotas GroEL-GroES y degradación directa por proteasas ClpXP y Lon sin ubiquitina.</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-amber-200 dark:border-amber-900/50 flex items-center justify-between">
              <span className="text-[11px] font-mono text-amber-800 dark:text-amber-400 font-semibold">
                Plasticidad adaptativa inmediata
              </span>
              <button
                onClick={() => onSelectLineage('prokaryote')}
                className="px-4 py-2 text-xs font-bold text-amber-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center gap-1.5 shadow-2xs"
              >
                <span>Explorar Ruta Bacteriana</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Las Tres Dimensiones del Recorrido: ADN -> ARN -> Proteína con sus Reguladores */}
      <section className="space-y-6 pt-4 border-t border-slate-200 dark:border-slate-800/80">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-purple-700 dark:text-purple-400 font-bold uppercase">
            <Layers className="w-4 h-4" />
            <span>LAS TRES DIMENSIONES DEL FLUJO DE INFORMACIÓN</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
            Navega por las Tres Dimensiones Moleculares y sus Reguladores
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            Cada molécula de información celular pasa por tres grandes filtros de control. Elige la dimensión y el linaje celular para iniciar tu estudio:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Dimension 1: ADN */}
          <div className="rounded-2xl p-6 bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-cyan-400 dark:hover:border-cyan-500 transition-all space-y-4 shadow-sm hover:shadow-md flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-400 flex items-center justify-center border border-cyan-300 dark:border-cyan-500/30">
                <Dna className="w-5 h-5" />
              </div>

              <div>
                <span className="text-[10px] font-mono text-cyan-700 dark:text-cyan-400 font-bold uppercase">
                  DIMENSIÓN 01 · ACCESO AL MOLDE
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  Nivel ADN
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                Control de la accesibilidad física al código genético. Regula si la ARN polimerasa puede ensamblarse sobre los promotores o si el molde permanece silenciado.
              </p>

              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-1.5 text-xs">
                <span className="font-mono text-[11px] text-cyan-800 dark:text-cyan-300 font-bold block">
                  Reguladores Principales:
                </span>
                <ul className="text-slate-600 dark:text-slate-400 space-y-1 text-xs">
                  <li>• Remodeladores SWI/SNF y Acetiltransferasas (HATs/HDACs)</li>
                  <li>• Factores Sigma bacterianos (σ70, σ32) y Represor LacI</li>
                </ul>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => onSelectMolecularLevel('ADN', 'eukaryote')}
                className="w-full py-2 px-3 rounded-lg text-xs font-bold text-cyan-900 dark:text-cyan-300 bg-cyan-100/70 dark:bg-cyan-500/20 hover:bg-cyan-200 dark:hover:bg-cyan-500/30 transition-colors flex items-center justify-between"
              >
                <span>En Ruta Eucariota (Cromatina)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onSelectMolecularLevel('ADN', 'prokaryote')}
                className="w-full py-2 px-3 rounded-lg text-xs font-bold text-amber-900 dark:text-amber-300 bg-amber-100/70 dark:bg-amber-500/20 hover:bg-amber-200 dark:hover:bg-amber-500/30 transition-colors flex items-center justify-between"
              >
                <span>En Ruta Bacteriana (Nucleoide)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Dimension 2: ARN */}
          <div className="rounded-2xl p-6 bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-purple-400 dark:hover:border-purple-500 transition-all space-y-4 shadow-sm hover:shadow-md flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-400 flex items-center justify-center border border-purple-300 dark:border-purple-500/30">
                <Activity className="w-5 h-5" />
              </div>

              <div>
                <span className="text-[10px] font-mono text-purple-700 dark:text-purple-400 font-bold uppercase">
                  DIMENSIÓN 02 · EDICIÓN DEL MENSAJE
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  Nivel ARN
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                Control de la maduración, integridad, localización y vida media del intermediario. Filtra transcritos defectuosos y diversifica isoformas.
              </p>

              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-1.5 text-xs">
                <span className="font-mono text-[11px] text-purple-800 dark:text-purple-300 font-bold block">
                  Reguladores Principales:
                </span>
                <ul className="text-slate-600 dark:text-slate-400 space-y-1 text-xs">
                  <li>• Espliceosoma, Vigilancia NMD y microARNs</li>
                  <li>• Expressoma acoplado, Degradosoma y Riboswitches</li>
                </ul>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => onSelectMolecularLevel('ARN', 'eukaryote')}
                className="w-full py-2 px-3 rounded-lg text-xs font-bold text-cyan-900 dark:text-cyan-300 bg-cyan-100/70 dark:bg-cyan-500/20 hover:bg-cyan-200 dark:hover:bg-cyan-500/30 transition-colors flex items-center justify-between"
              >
                <span>En Ruta Eucariota (Splicing/NMD)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onSelectMolecularLevel('ARN', 'prokaryote')}
                className="w-full py-2 px-3 rounded-lg text-xs font-bold text-amber-900 dark:text-amber-300 bg-amber-100/70 dark:bg-amber-500/20 hover:bg-amber-200 dark:hover:bg-amber-500/30 transition-colors flex items-center justify-between"
              >
                <span>En Ruta Bacteriana (Expressoma)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Dimension 3: Proteína */}
          <div className="rounded-2xl p-6 bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-emerald-400 dark:hover:border-emerald-500 transition-all space-y-4 shadow-sm hover:shadow-md flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 flex items-center justify-center border border-emerald-300 dark:border-emerald-500/30">
                <ShieldCheck className="w-5 h-5" />
              </div>

              <div>
                <span className="text-[10px] font-mono text-emerald-700 dark:text-emerald-400 font-bold uppercase">
                  DIMENSIÓN 03 · FUNCIÓN Y DESTINO FINAL
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  Nivel Proteína
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                Control de la traducción, plegamiento conformacional tridimensional, activación funcional covalente y degradación dirigida.
              </p>

              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-1.5 text-xs">
                <span className="font-mono text-[11px] text-emerald-800 dark:text-emerald-300 font-bold block">
                  Reguladores Principales:
                </span>
                <ul className="text-slate-600 dark:text-slate-400 space-y-1 text-xs">
                  <li>• Escaneo Kozak (80S), Chaperonas Hsp70 y Proteasoma 26S</li>
                  <li>• Shine-Dalgarno (70S), GroEL-GroES y Proteasas Clp</li>
                </ul>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => onSelectMolecularLevel('Proteína', 'eukaryote')}
                className="w-full py-2 px-3 rounded-lg text-xs font-bold text-cyan-900 dark:text-cyan-300 bg-cyan-100/70 dark:bg-cyan-500/20 hover:bg-cyan-200 dark:hover:bg-cyan-500/30 transition-colors flex items-center justify-between"
              >
                <span>En Ruta Eucariota (Kozak/Proteasoma)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onSelectMolecularLevel('Proteína', 'prokaryote')}
                className="w-full py-2 px-3 rounded-lg text-xs font-bold text-amber-900 dark:text-amber-300 bg-amber-100/70 dark:bg-amber-500/20 hover:bg-amber-200 dark:hover:bg-amber-500/30 transition-colors flex items-center justify-between"
              >
                <span>En Ruta Bacteriana (Shine-Dalgarno)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Call to Action Footer in Splash */}
      <div className="rounded-2xl p-8 bg-gradient-to-r from-slate-900 to-slate-950 text-white border border-slate-800 text-center space-y-4 shadow-xl">
        <h3 className="text-xl sm:text-2xl font-bold">
          ¿Listo para sumergirte en los puntos de control moleculares?
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Cada estación cuenta con la Matriz CQRF completa (¿Qué ocurre?, ¿Quién participa?, ¿Qué se regula?, ¿Qué pasa si falla?), herramientas de análisis experimental y perlas evolutivas.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={() => onSelectLineage('eukaryote')}
            className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm bg-cyan-400 text-slate-950 hover:bg-cyan-300 transition-all inline-flex items-center gap-2 shadow-lg"
          >
            <Lock className="w-4 h-4" />
            <span>Iniciar Ruta Eucariota (11 Puntos)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => onSelectLineage('prokaryote')}
            className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm bg-amber-400 text-slate-950 hover:bg-amber-300 transition-all inline-flex items-center gap-2 shadow-lg"
          >
            <Zap className="w-4 h-4" />
            <span>Iniciar Ruta Bacteriana (8 Puntos)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
