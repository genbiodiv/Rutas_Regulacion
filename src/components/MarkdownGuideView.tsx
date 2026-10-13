import React, { useState } from 'react';
import { generateFullMarkdownGuide } from '../data/geneRegulationData';
import { Copy, Check, FileText, Code2, Eye } from 'lucide-react';

export const MarkdownGuideView: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'preview' | 'raw'>('preview');

  const markdownContent = generateFullMarkdownGuide();

  const handleCopyClipboard = async () => {
    try {
      await navigator.clipboard.writeText(markdownContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Error al copiar al portapapeles:', err);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Header and Action Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6 transition-colors">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 dark:text-emerald-400 font-bold">
            <span>COMPENDIO ACADÉMICO</span>
            <span aria-hidden="true">·</span>
            <span>FORMATO MOODLE / CANVAS / CLASE</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 mt-1">
            Guía de Trabajo Universitaria Completa
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
            Texto canónico estructurado y limpio, listo para ser consultado en el aula virtual o utilizado como compendio académico.
          </p>
        </div>

        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0 flex-wrap">
          {/* Mode Switcher */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg">
            <button
              onClick={() => setViewMode('preview')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors flex items-center gap-1.5 ${
                viewMode === 'preview'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 shadow-xs font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Lectura</span>
            </button>
            <button
              onClick={() => setViewMode('raw')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors flex items-center gap-1.5 ${
                viewMode === 'raw'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 shadow-xs font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Código Markdown</span>
            </button>
          </div>

          <button
            onClick={handleCopyClipboard}
            className="px-3.5 sm:px-4 py-2 text-xs font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap shadow-xs"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span className="text-emerald-700 dark:text-emerald-300 font-bold">¡Copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                <span>Copiar texto</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Guide Content Display */}
      {viewMode === 'raw' ? (
        <div className="rounded-2xl bg-slate-900 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 p-6 relative overflow-hidden">
          <pre className="font-mono text-xs text-slate-200 dark:text-slate-300 whitespace-pre-wrap break-words leading-relaxed overflow-x-auto max-h-[750px]">
            {markdownContent}
          </pre>
        </div>
      ) : (
        <div className="rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-8 sm:p-12 space-y-10 text-slate-800 dark:text-slate-200 leading-relaxed max-w-4xl mx-auto shadow-sm dark:shadow-2xl transition-colors">
          {/* Formatted Academic Preview */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-8 text-center space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-700 dark:text-cyan-400 font-bold block">
              UNIVERSIDAD · BIOLOGÍA MOLECULAR Y GENÉTICA EVOLUTIVA
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100">
              Guía de Trabajo: La Ruta y los Puntos de Control Moleculares
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400 italic">
              Regulación de la Expresión Génica como una Carrera de Obstáculos Distribuida
            </p>
            <div className="inline-block mt-4 p-4 sm:p-5 rounded-xl bg-cyan-50/80 dark:bg-slate-950 border border-cyan-300 dark:border-cyan-500/30 text-sm font-semibold text-cyan-900 dark:text-cyan-300 italic max-w-2xl">
              "Regular la expresión génica significa controlar cuánto, cuándo, dónde y en qué forma funcional aparece el producto de un gen."
            </div>
          </div>

          <div className="space-y-12 text-sm text-slate-700 dark:text-slate-300">
            {/* Section 1 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-2">
                1. Introducción: El Paradigma de la Ruta y los Puntos de Control
              </h2>
              <p className="leading-relaxed">
                Durante décadas, los manuales de biología celular han transmitido un modelo de interruptor binario: promotor encendido o apagado. En esta guía presentamos la expresión génica como una <strong>carrera de obstáculos</strong> o <strong>sistema de puntos de control distribuidos</strong>. Cada etapa es un filtro selectivo que modula el flujo informacional.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-amber-300 dark:border-amber-500/30 space-y-2">
                  <h3 className="text-xs font-mono font-bold uppercase text-amber-800 dark:text-amber-400">
                    Problemas de CANTIDAD
                  </h3>
                  <p className="text-xs text-slate-700 dark:text-slate-300">
                    Afectan la dosis génica, la concentración homeostática o la cinética temporal (haploinsuficiencia, sobreexpresión oncogénica, retrasos en respuesta a estrés).
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-rose-300 dark:border-rose-500/30 space-y-2">
                  <h3 className="text-xs font-mono font-bold uppercase text-rose-800 dark:text-rose-400">
                    Problemas de CALIDAD
                  </h3>
                  <p className="text-xs text-slate-700 dark:text-slate-300">
                    Afectan la identidad molecular, el marco de lectura, la conformación tridimensional o la localización subcelular (splicing aberrante, agregados amiloides, deslocalización).
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-2">
                2. La Gran Bifurcación: Procariotas vs. Eucariotas
              </h2>
              <p className="leading-relaxed">
                En el <strong>Paso Cero</strong>, la célula se define por su arquitectura:
              </p>
              <ul className="space-y-2 text-xs list-disc pl-5">
                <li>
                  <strong className="text-slate-900 dark:text-slate-100">Vía Eucariota (Barrera Epigenética):</strong> Estado basal restrictivo por nucleosomas; compartimentación nuclear que separa transcripción y traducción en tiempo y espacio; control multietapa extenso.
                </li>
                <li>
                  <strong className="text-slate-900 dark:text-slate-100">Vía Procariota (El Interruptor Metabólico):</strong> Estado basal permisivo; transcripción acoplada instantáneamente a traducción (Expressome); recambio ultrarrápido por el degradosoma (vida media de 1-3 minutos).
                </li>
              </ul>
            </section>

            {/* Section 3 & 4 summary overview in preview */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-2">
                3. Matriz Pedagógica CQRF de los Puntos de Control
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Cada punto de control en el texto completo (disponible arriba para lectura y copiado) se evalúa rigurosamente bajo las 4 preguntas formativas:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono font-semibold">
                <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 text-cyan-800 dark:text-cyan-300">
                  1. ¿Qué ocurre?
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 text-purple-800 dark:text-purple-300">
                  2. ¿Quién participa?
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 text-amber-800 dark:text-amber-300">
                  3. ¿Qué se regula?
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 text-rose-800 dark:text-rose-300">
                  4. ¿Qué pasa si falla?
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 pt-1 leading-relaxed">
                Abarca los 11 puntos de control completos: Transcripción/Splicing, NMD, Exportación NPC, Estabilidad ARE, microARNs, Acoplamiento procariota, Degradosoma, Riboswitches, Inicio de Traducción (Kozak vs Shine-Dalgarno), Elongación/Terminación, Chaperonas/UPR, PTMs, Transporte/SRP, y Degradación Proteasoma 26S / Clp.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-2">
                4. Casos Clínicos y Biológicos de Análisis
              </h2>
              <div className="space-y-3 text-xs">
                <div className="p-4 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
                  <strong className="text-slate-900 dark:text-slate-100 text-sm">Caso 1: β-Talasemia por Sitio Críptico</strong>
                  <p className="text-slate-700 dark:text-slate-400 mt-1">
                    Mutación intrónica en HBB crea un sitio aceptor críptico (Fallo de CALIDAD en Punto de Control 1 Eucariota), provocando desfasamiento y degradación acelerada por NMD (Punto de Control 2).
                  </p>
                </div>

                <div className="p-4 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
                  <strong className="text-slate-900 dark:text-slate-100 text-sm">Caso 2: Estrés Proteotóxico por Choque Térmico</strong>
                  <p className="text-slate-700 dark:text-slate-400 mt-1">
                    Proteínas desnaturalizadas saturan a Hsp70 (Punto de Control 8) y forman oligómeros poliubiquitinados K48 que bloquean mecánicamente al Proteasoma 26S (Punto de Control 11), causando apoptosis.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
                  <strong className="text-slate-900 dark:text-slate-100 text-sm">Caso 3: Cepa Bacteriana con Riboswitch Desregulado</strong>
                  <p className="text-slate-700 dark:text-slate-400 mt-1">
                    Mutación en el aptámero 5'-UTR anula la unión del cofactor TPP (Punto de Control 3 Procariota), generando sobreexpresión constitutiva no reprimible (Fallo de CANTIDAD) y agotamiento de ATP.
                  </p>
                </div>
              </div>
            </section>
          </div>

          <div className="pt-8 border-t border-slate-200 dark:border-slate-800 text-center">
            <button
              onClick={handleCopyClipboard}
              className="px-6 py-3 text-xs sm:text-sm font-bold text-white dark:text-slate-950 bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-400 dark:hover:bg-cyan-300 rounded-lg transition-colors inline-flex items-center gap-2 shadow-md"
            >
              <Copy className="w-4 h-4" />
              <span>Copiar Guía Completa en Formato Markdown</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
