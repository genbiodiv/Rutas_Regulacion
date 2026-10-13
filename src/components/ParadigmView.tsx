import React, { useState } from 'react';
import { CENTRAL_MOTTO, INTRODUCTION_DATA } from '../data/geneRegulationData';
import { ArrowRight, CheckCircle2, AlertTriangle, Layers, Dna, Activity, Sliders, ShieldAlert, BookMarked } from 'lucide-react';

interface ParadigmViewProps {
  onStartJourney: () => void;
  onGoToBifurcation: () => void;
  onOpenGlossary: () => void;
}

export const ParadigmView: React.FC<ParadigmViewProps> = ({
  onStartJourney,
  onGoToBifurcation,
  onOpenGlossary,
}) => {
  const [activeModelComparison, setActiveModelComparison] = useState<'route' | 'switch'>('route');
  const [activeFailureTab, setActiveFailureTab] = useState<'quantity' | 'quality'>('quantity');

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-12">
      {/* Hero Header */}
      <div className="space-y-5">
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold">
          <span>SECCIÓN 01</span>
          <span aria-hidden="true">·</span>
          <span>FUNDAMENTOS PEDAGÓGICOS</span>
          <span aria-hidden="true">·</span>
          <span>BIOLOGÍA MOLECULAR AVANZADA</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 max-w-4xl text-balance">
          El Paradigma de la Ruta y los Puntos de Control: Regulación como una Carrera de Obstáculos
        </h1>

        {/* Central Motto Banner */}
        <div className="p-6 sm:p-7 rounded-2xl bg-cyan-50/80 dark:bg-slate-900/90 border border-cyan-200 dark:border-cyan-500/30 relative overflow-hidden shadow-sm dark:shadow-lg dark:shadow-cyan-950/20 transition-colors">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="relative space-y-2.5">
            <span className="text-xs font-mono tracking-wider uppercase text-cyan-700 dark:text-cyan-400 font-bold block">
              Lema Central de la Guía
            </span>
            <p className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-slate-100 italic leading-snug">
              "{CENTRAL_MOTTO}"
            </p>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 pt-1 leading-relaxed">
              La expresión génica no culmina con el reclutamiento de la ARN polimerasa; la función biológica emerge únicamente si el intermediario supera una estricta serie de aduanas y puestos de control moleculares.
            </p>
          </div>
        </div>
      </div>

      {/* Model Contrast Section */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              01. De la Llave Binaria a los Obstáculos Distribuidos
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl mt-1">
              Compara el esquema pedagógico clásico con la realidad mecanicista de las células vivas.
            </p>
          </div>

          {/* Interactive model selector */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg shrink-0">
            <button
              onClick={() => setActiveModelComparison('switch')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                activeModelComparison === 'switch'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 shadow-xs font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              Modelo Clásico (Interruptor ON/OFF)
            </button>
            <button
              onClick={() => setActiveModelComparison('route')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                activeModelComparison === 'route'
                  ? 'bg-cyan-500/20 text-cyan-800 dark:text-cyan-300 border border-cyan-500/40 shadow-xs font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              Nuevo Paradigma (Ruta y Puntos de Control)
            </button>
          </div>
        </div>

        {/* Visual Model Canvas */}
        {activeModelComparison === 'switch' ? (
          <div className="p-7 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 space-y-5 shadow-xs transition-colors">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-amber-500" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-200">
                La Ilusión del Interruptor Binario (Modelo Lineal Simplificado)
              </h3>
            </div>
            
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed max-w-3xl">
              Este enfoque asume que si el promotor se activa, la proteína aparece inevitablemente; y si se reprime, la proteína desaparece. Ignora los controles nucleares, la vida media del ARNm, el silenciamiento por miRNAs, la vigilancia de calidad y las modificaciones postraduccionales.
            </p>

            <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 font-mono text-xs text-slate-700 dark:text-slate-300 flex flex-wrap items-center justify-center gap-3 py-8">
              <span className="px-3 py-2 bg-white dark:bg-slate-900 rounded-lg border border-slate-300 dark:border-slate-700 font-semibold shadow-xs">ADN (Gen)</span>
              <span className="text-amber-600 dark:text-amber-400 font-bold">───[ Interruptor ON/OFF ]───►</span>
              <span className="px-3 py-2 bg-white dark:bg-slate-900 rounded-lg border border-slate-300 dark:border-slate-700 font-semibold shadow-xs">ARNm Transcrito</span>
              <span className="text-amber-600 dark:text-amber-400 font-bold">──────────►</span>
              <span className="px-3 py-2 bg-white dark:bg-slate-900 rounded-lg border border-slate-300 dark:border-slate-700 font-semibold shadow-xs">Proteína Final</span>
            </div>

            <div className="text-xs text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-500/10 p-3.5 rounded-xl border border-amber-200 dark:border-amber-500/20 leading-relaxed">
              <strong>Limitación didáctica:</strong> No explica por qué mutaciones fuera de la región promotora provocan talasemias, cáncer por deslocalización o enfermedades neurodegenerativas por agregación.
            </div>
          </div>
        ) : (
          <div className="p-7 rounded-2xl bg-white dark:bg-slate-900/70 border border-cyan-200 dark:border-cyan-500/30 space-y-5 shadow-xs transition-colors">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-cyan-600 dark:bg-cyan-400" />
              <h3 className="text-lg font-bold text-cyan-900 dark:text-cyan-300">
                La Ruta Molecular con Puntos de Control Distribuidos
              </h3>
            </div>

            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed max-w-3xl">
              Cada etapa celular es un filtro independiente. Una molécula puede ser transcrita con éxito pero retenida en el núcleo, degradada prematuramente por un microARN, truncada por NMD o acumulada como un oligómero desnaturalizado. El producto final depende del paso exitoso por cada punto de control.
            </p>

            {/* Pipeline visual diagram */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 pt-2">
              {[
                { title: "Control 01", desc: "Cromatina y Remodelamiento", step: "Paso 0" },
                { title: "Control 02", desc: "Capping, Splicing, Poli-A", step: "Estación 1" },
                { title: "Control 03", desc: "Vigilancia NMD", step: "Estación 2" },
                { title: "Control 04", desc: "Exportación Poro NPC", step: "Estación 3" },
                { title: "Control 05", desc: "Estabilidad y miRNAs", step: "Estaciones 4-5" },
                { title: "Control 06", desc: "Plegamiento, PTMs y UPS", step: "Estaciones 6-11" },
              ].map((p, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1.5 hover:border-cyan-400 dark:hover:border-cyan-500/40 transition-colors shadow-2xs">
                  <div className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 font-bold uppercase">{p.step}</div>
                  <div className="text-xs font-bold text-slate-900 dark:text-slate-200">{p.title}</div>
                  <div className="text-[11px] text-slate-600 dark:text-slate-400 leading-tight">{p.desc}</div>
                </div>
              ))}
            </div>

            <div className="text-xs text-cyan-900 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-500/10 p-3.5 rounded-xl border border-cyan-200 dark:border-cyan-500/20 leading-relaxed">
              <strong>Virtud conceptual:</strong> Permite deducir con exactitud molecular en qué paso específico de la ruta biológica ocurrió un error clínico o adaptativo.
            </div>
          </div>
        )}
      </section>

      {/* Quantity vs Quality Framework */}
      <section className="space-y-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 font-semibold">
            <span>MARCO DE CLASIFICACIÓN</span>
            <span aria-hidden="true">·</span>
            <span>DIAGNÓSTICO MOLECULAR</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-1">
            02. La Gran Dicotomía: ¿Fallo de Cantidad o de Calidad?
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-3xl mt-1 leading-relaxed">
            {INTRODUCTION_DATA.quantityVsQuality.description}
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
          <button
            onClick={() => setActiveFailureTab('quantity')}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors flex items-center gap-2 ${
              activeFailureTab === 'quantity'
                ? 'bg-amber-100 dark:bg-amber-500/20 text-amber-900 dark:text-amber-300 border border-amber-300 dark:border-amber-500/40 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>Problemas de CANTIDAD (Dosis / Cinética)</span>
          </button>

          <button
            onClick={() => setActiveFailureTab('quality')}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors flex items-center gap-2 ${
              activeFailureTab === 'quality'
                ? 'bg-rose-100 dark:bg-rose-500/20 text-rose-900 dark:text-rose-300 border border-rose-300 dark:border-rose-500/40 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Problemas de CALIDAD (Identidad / Conformación / Topología)</span>
          </button>
        </div>

        {/* Cards for Quantity vs Quality */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {activeFailureTab === 'quantity' ? (
            INTRODUCTION_DATA.quantityVsQuality.quantityFeatures.map((item, index) => (
              <div
                key={index}
                className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-amber-400 dark:hover:border-amber-500/40 transition-colors space-y-3 shadow-xs"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-amber-700 dark:text-amber-400 font-bold uppercase">
                    MODO DE CANTIDAD 0{index + 1}
                  </span>
                  <Sliders className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                  {item.concept}
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {item.mechanism}
                </p>
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80">
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 block mb-0.5 font-semibold">
                    Impacto Biomédico:
                  </span>
                  <p className="text-xs text-slate-600 dark:text-slate-400 italic">
                    {item.example}
                  </p>
                </div>
              </div>
            ))
          ) : (
            INTRODUCTION_DATA.quantityVsQuality.qualityFeatures.map((item, index) => (
              <div
                key={index}
                className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-rose-400 dark:hover:border-rose-500/40 transition-colors space-y-3 shadow-xs"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-rose-700 dark:text-rose-400 font-bold uppercase">
                    MODO DE CALIDAD 0{index + 1}
                  </span>
                  <AlertTriangle className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                  {item.concept}
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {item.mechanism}
                </p>
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80">
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 block mb-0.5 font-semibold">
                    Impacto Biomédico:
                  </span>
                  <p className="text-xs text-slate-600 dark:text-slate-400 italic">
                    {item.example}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Navigation CTA footer */}
      <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenGlossary}
            className="px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700/80 rounded-lg transition-colors flex items-center gap-1.5 hover:text-cyan-600 dark:hover:text-cyan-300 shadow-2xs"
          >
            <BookMarked className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>Consultar Glosario Molecular</span>
          </button>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onGoToBifurcation}
            className="px-4 py-2.5 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-300 dark:border-transparent rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap shadow-2xs"
          >
            <Layers className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
            <span>Ver Paso 0: La Gran Bifurcación</span>
          </button>

          <button
            onClick={onStartJourney}
            className="px-5 py-2.5 text-xs font-bold text-white dark:text-slate-950 bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-400 dark:hover:bg-cyan-300 rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap shadow-xs"
          >
            <span>Iniciar Exploración de Puntos de Control</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
