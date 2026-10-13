import React, { useState } from 'react';
import { BIFURCATION_DATA } from '../data/geneRegulationData';
import { ArrowRight, Layers, Lock, Unlock, Clock, ShieldCheck, Zap, Dna } from 'lucide-react';

interface BifurcationViewProps {
  onSelectRoute: (route: 'eukaryote' | 'prokaryote') => void;
}

export const BifurcationView: React.FC<BifurcationViewProps> = ({
  onSelectRoute,
}) => {
  const [selectedCellType, setSelectedCellType] = useState<'eukaryote' | 'prokaryote'>('eukaryote');
  const euk = BIFURCATION_DATA.stepZero.eukaryoteModel;
  const prok = BIFURCATION_DATA.stepZero.prokaryoteModel;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-12">
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 font-bold">
          <span>SECCIÓN 02</span>
          <span aria-hidden="true">·</span>
          <span>PASO CERO</span>
          <span aria-hidden="true">·</span>
          <span>FILOSOFÍA EVOLUTIVA</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
          La Gran Bifurcación: Procariotas vs. Eucariotas
        </h1>
        <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 max-w-3xl leading-relaxed">
          Antes de analizar cualquier punto de control, el estudiante debe formular la pregunta evolutiva primordial: 
          <strong> ¿En qué arquitectura celular nos encontramos?</strong> Las reglas del juego biofísico divergen radicalmente.
        </p>
      </div>

      {/* Interactive Architecture Dual-Selector */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Eukaryote Card */}
        <div
          onClick={() => setSelectedCellType('eukaryote')}
          className={`cursor-pointer rounded-2xl p-7 transition-all border relative overflow-hidden flex flex-col justify-between ${
            selectedCellType === 'eukaryote'
              ? 'bg-cyan-50/70 dark:bg-slate-900/90 border-cyan-400 dark:border-cyan-500/60 shadow-md ring-1 ring-cyan-400/50 dark:ring-cyan-500/30'
              : 'bg-white dark:bg-slate-950/60 border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 opacity-90 hover:opacity-100'
          }`}
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400 font-bold tracking-wider uppercase flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5" />
                <span>ESTADO BASE RESTRICTIVO</span>
              </span>
              <span className="text-[11px] font-mono text-slate-600 dark:text-slate-400 px-2.5 py-0.5 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold">
                Eukarya
              </span>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{euk.title}</h2>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 font-mono font-medium">
                {euk.spatialOrganization}
              </p>
            </div>

            <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              {euk.keyCharacteristics.map((char, idx) => (
                <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                  <span className="text-cyan-600 dark:text-cyan-400 mt-0.5 font-mono text-xs">▸</span>
                  <span>{char}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
            <div className="text-[11px] sm:text-xs text-cyan-800 dark:text-cyan-300 font-semibold">
              Complejidad combinatoria y control postranscripcional
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onSelectRoute('eukaryote');
              }}
              className="px-4 py-2 text-xs font-bold text-white dark:text-slate-950 bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-400 dark:hover:bg-cyan-300 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap shadow-xs"
            >
              <span>Explorar Ruta Eucariota (1-5)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Prokaryote Card */}
        <div
          onClick={() => setSelectedCellType('prokaryote')}
          className={`cursor-pointer rounded-2xl p-7 transition-all border relative overflow-hidden flex flex-col justify-between ${
            selectedCellType === 'prokaryote'
              ? 'bg-amber-50/70 dark:bg-slate-900/90 border-amber-400 dark:border-amber-500/60 shadow-md ring-1 ring-amber-400/50 dark:ring-amber-500/30'
              : 'bg-white dark:bg-slate-950/60 border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 opacity-90 hover:opacity-100'
          }`}
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-amber-700 dark:text-amber-400 font-bold tracking-wider uppercase flex items-center gap-1.5">
                <Unlock className="w-3.5 h-3.5" />
                <span>ESTADO BASE PERMISIVO</span>
              </span>
              <span className="text-[11px] font-mono text-slate-600 dark:text-slate-400 px-2.5 py-0.5 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold">
                Bacteria
              </span>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{prok.title}</h2>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 font-mono font-medium">
                {prok.spatialOrganization}
              </p>
            </div>

            <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              {prok.keyCharacteristics.map((char, idx) => (
                <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                  <span className="text-amber-600 dark:text-amber-400 mt-0.5 font-mono text-xs">▸</span>
                  <span>{char}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
            <div className="text-[11px] sm:text-xs text-amber-800 dark:text-amber-300 font-semibold">
              Velocidad extrema y reprogramación inmediata
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onSelectRoute('prokaryote');
              }}
              className="px-4 py-2 text-xs font-bold text-white dark:text-slate-950 bg-amber-600 hover:bg-amber-700 dark:bg-amber-400 dark:hover:bg-amber-300 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap shadow-xs"
            >
              <span>Explorar Ruta Procariota (1-3)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Deep Mechanistic Matrix Table */}
      <section className="space-y-4">
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <Layers className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
          <span>Matriz Comparativa de Principios Biofísicos</span>
        </h3>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 shadow-xs">
          <table className="w-full text-left text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <thead className="bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-400 font-mono text-[11px] sm:text-xs border-b border-slate-200 dark:border-slate-800 font-bold">
              <tr>
                <th className="py-3.5 px-4">Dimensión Biológica</th>
                <th className="py-3.5 px-4 text-cyan-800 dark:text-cyan-300">Vía Eucariota (Barrera Epigenética)</th>
                <th className="py-3.5 px-4 text-amber-800 dark:text-amber-300">Vía Procariota (Interruptor Metabólico)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800/70">
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                <td className="py-3.5 px-4 font-bold text-slate-900 dark:text-slate-200">Estado Basal de la Cromatina</td>
                <td className="py-3.5 px-4">
                  <strong className="text-rose-700 dark:text-rose-400 font-bold">Restrictivo (No por defecto)</strong>. El ADN está condensado en nucleosomas; requiere acetilación de histonas y remodeladores SWI/SNF para permitir acceso.
                </td>
                <td className="py-3.5 px-4">
                  <strong className="text-emerald-700 dark:text-emerald-400 font-bold">Permisivo (Sí por defecto)</strong>. ADN desnudo en nucleoide; la ARN polimerasa holoenzima accede libremente al promotor.
                </td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                <td className="py-3.5 px-4 font-bold text-slate-900 dark:text-slate-200">Separación Espaciotemporal</td>
                <td className="py-3.5 px-4">
                  <strong>Totalmente desacoplado</strong>. Transcripción y corte ocurren en el núcleo; traducción en citoplasma tras exportación a través del NPC.
                </td>
                <td className="py-3.5 px-4">
                  <strong>Acoplado en tiempo real</strong>. El ribosoma traduce el 5' del ARNm mientras la polimerasa aún sintetiza el 3' (Complejo 'Expressome').
                </td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                <td className="py-3.5 px-4 font-bold text-slate-900 dark:text-slate-200">Cinética del ARNm</td>
                <td className="py-3.5 px-4">
                  Vida media de <strong>horas a días</strong>. Protegido por Cap 5' y cola Poli-A; modulado por elementos ARE y microARNs.
                </td>
                <td className="py-3.5 px-4">
                  Vida media de <strong>1 a 3 minutos</strong>. El degradosoma (ARNasa E) desmantela los transcritos para permitir cambios de operón inmediatos.
                </td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                <td className="py-3.5 px-4 font-bold text-slate-900 dark:text-slate-200">Estrategia de Sensores</td>
                <td className="py-3.5 px-4">
                  Vías de señalización de receptores, cascadas de quinasas (MAPK, mTOR), factores de transcripción combinatorios y microARNs.
                </td>
                <td className="py-3.5 px-4">
                  Sensores metabólicos directos: <strong>Riboswitches en el 5'-UTR</strong>, unión alostérica de ligandos a represores/activadores (LacI, TrpR).
                </td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                <td className="py-3.5 px-4 font-bold text-slate-900 dark:text-slate-200">Generación de Diversidad</td>
                <td className="py-3.5 px-4">
                  Splicing alternativo en el 95% de genes; un solo locus codifica decenas de isoformas polipeptídicas funcionales.
                </td>
                <td className="py-3.5 px-4">
                  Operones policistrónicos; un solo ARNm codifica múltiples enzimas de una misma ruta metabólica de forma coordinada.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Insight Banner */}
      <div className="p-6 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-2 leading-relaxed">
        <span className="font-mono text-cyan-700 dark:text-cyan-400 font-bold uppercase block text-xs">
          Reflexión Docente para el Estudiante:
        </span>
        <p>
          Comprender la bifurcación evita cometer el error común de buscar un "sitio de splicing" en una bacteria o un "operón policistrónico tradicional" en el genoma humano. La evolución resolvió la regulación con dos estrategias maestras: los procariotas apostaron por la <strong>agilidad metabólica ultrarrápida</strong>; los eucariotas apostaron por la <strong>compartimentación y el control de calidad escalonado</strong>.
        </p>
      </div>
    </div>
  );
};
