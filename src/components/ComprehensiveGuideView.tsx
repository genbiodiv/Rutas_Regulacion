import React, { useState, useMemo } from 'react';
import { 
  STATIONS_DATA, 
  DIAGNOSTIC_CASES_DATA, 
  INTRODUCTION_DATA, 
  CENTRAL_MOTTO,
  generateFullMarkdownGuide 
} from '../data/geneRegulationData';
import { 
  BookOpen, 
  Copy, 
  Check, 
  Search, 
  Eye, 
  Code2, 
  Lock, 
  Zap, 
  Dna, 
  Activity, 
  ShieldCheck, 
  HelpCircle, 
  AlertTriangle, 
  Lightbulb, 
  ChevronDown, 
  ChevronUp,
  BookmarkCheck,
  FlaskConical
} from 'lucide-react';

export const ComprehensiveGuideView: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'structured' | 'raw'>('structured');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedLineage, setSelectedLineage] = useState<'all' | 'eukaryote' | 'prokaryote'>('all');
  const [selectedLevel, setSelectedLevel] = useState<'all' | 'ADN' | 'ARN' | 'Proteína'>('all');
  const [collapsedSections, setCollapsedSections] = useState<Record<string, boolean>>({});

  const markdownContent = useMemo(() => generateFullMarkdownGuide(), []);

  const handleCopyClipboard = async () => {
    try {
      await navigator.clipboard.writeText(markdownContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Error al copiar al portapapeles:', err);
    }
  };

  const toggleSection = (sectionId: string) => {
    setCollapsedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  // Filter stations based on user search and filters
  const filteredEukStations = useMemo(() => {
    if (selectedLineage === 'prokaryote') return [];
    return STATIONS_DATA.filter(s => s.category === 'eukaryote').filter(s => {
      const matchesLevel = selectedLevel === 'all' || s.molecularLevel === selectedLevel;
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesLevel;

      const matchesQuery = 
        s.title.toLowerCase().includes(query) ||
        s.subtitle.toLowerCase().includes(query) ||
        s.queOcurre.toLowerCase().includes(query) ||
        s.queRegula.toLowerCase().includes(query) ||
        s.quePasaSiFalla.toLowerCase().includes(query) ||
        s.clinicalConsequence.toLowerCase().includes(query) ||
        s.keyRegulators.some(r => r.name.toLowerCase().includes(query) || r.action.toLowerCase().includes(query)) ||
        s.diagnosticMarkers.some(m => m.toLowerCase().includes(query));

      return matchesLevel && matchesQuery;
    });
  }, [selectedLineage, selectedLevel, searchQuery]);

  const filteredProkStations = useMemo(() => {
    if (selectedLineage === 'eukaryote') return [];
    return STATIONS_DATA.filter(s => s.category === 'prokaryote').filter(s => {
      const matchesLevel = selectedLevel === 'all' || s.molecularLevel === selectedLevel;
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesLevel;

      const matchesQuery = 
        s.title.toLowerCase().includes(query) ||
        s.subtitle.toLowerCase().includes(query) ||
        s.queOcurre.toLowerCase().includes(query) ||
        s.queRegula.toLowerCase().includes(query) ||
        s.quePasaSiFalla.toLowerCase().includes(query) ||
        s.clinicalConsequence.toLowerCase().includes(query) ||
        s.keyRegulators.some(r => r.name.toLowerCase().includes(query) || r.action.toLowerCase().includes(query)) ||
        s.diagnosticMarkers.some(m => m.toLowerCase().includes(query));

      return matchesLevel && matchesQuery;
    });
  }, [selectedLineage, selectedLevel, searchQuery]);

  const filteredCases = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return DIAGNOSTIC_CASES_DATA;
    return DIAGNOSTIC_CASES_DATA.filter(c => 
      c.title.toLowerCase().includes(query) ||
      c.organism.toLowerCase().includes(query) ||
      c.clinicalVignette.toLowerCase().includes(query) ||
      c.correctDiagnosis.toLowerCase().includes(query) ||
      c.pedagogicalDebrief.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-10">
      {/* 1. Header with Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-8 transition-colors">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-700 dark:text-cyan-400 font-bold uppercase">
            <BookOpen className="w-4 h-4" />
            <span>GUÍA DE ESTUDIO UNIVERSITARIA INTEGRAL</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mt-1">
            El Recorrido Molecular de la Expresión Génica
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-1 max-w-2xl leading-relaxed">
            Texto canónico completo con todas las estaciones, matrices CQRF, comparativas evolutivas y casos de análisis organizados para estudio y docencia.
          </p>
        </div>

        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0 flex-wrap">
          {/* Mode Switcher */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg">
            <button
              onClick={() => setViewMode('structured')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors flex items-center gap-1.5 ${
                viewMode === 'structured'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 shadow-2xs font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Lectura Organizada</span>
            </button>
            <button
              onClick={() => setViewMode('raw')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors flex items-center gap-1.5 ${
                viewMode === 'raw'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 shadow-2xs font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Código Markdown</span>
            </button>
          </div>

          {/* Copy Button */}
          <button
            onClick={handleCopyClipboard}
            className="px-4 py-2 text-xs font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap shadow-2xs"
            title="Copiar compendio completo en formato Markdown al portapapeles"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span className="text-emerald-700 dark:text-emerald-300 font-bold">¡Copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                <span>Copiar Guía</span>
              </>
            )}
          </button>
        </div>
      </div>

      {viewMode === 'raw' ? (
        /* Raw Markdown View */
        <div className="rounded-2xl bg-slate-900 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 p-6 relative overflow-hidden">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4 text-xs font-mono text-slate-400">
            <span>TEXTO COMPLETO EN FORMATO MARKDOWN DISPONIBLE PARA COPIADO</span>
            <button
              onClick={handleCopyClipboard}
              className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-bold"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>Copiar todo</span>
            </button>
          </div>
          <pre className="font-mono text-xs text-slate-200 dark:text-slate-300 whitespace-pre-wrap break-words leading-relaxed overflow-x-auto max-h-[800px]">
            {markdownContent}
          </pre>
        </div>
      ) : (
        /* Structured Academic Reading View */
        <div className="space-y-12">
          {/* Quick Table of Contents Jump Bar */}
          <nav className="p-4 rounded-xl bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs">
            <span className="font-mono text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-2">
              Índice de Secciones Principales:
            </span>
            <div className="flex flex-wrap gap-2 text-slate-700 dark:text-slate-300">
              <a href="#sec-intro" className="px-2.5 py-1 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                1. Paradigma & Lema Central
              </a>
              <a href="#sec-quantity-quality" className="px-2.5 py-1 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                2. Cantidad vs. Calidad
              </a>
              <a href="#sec-bifurcation" className="px-2.5 py-1 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                3. Comparativa: Eucariotas vs. Bacterias
              </a>
              <a href="#sec-eukaryote" className="px-2.5 py-1 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                4. Ruta Eucariota (11 Puntos)
              </a>
              <a href="#sec-prokaryote" className="px-2.5 py-1 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                5. Ruta Bacteriana (8 Puntos)
              </a>
              <a href="#sec-cases" className="px-2.5 py-1 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                6. Casos Clínico-Moleculares
              </a>
            </div>
          </nav>

          {/* Interactive Search & Filter Controls */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 shadow-2xs">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filtrar por concepto (ej. NMD, nucleosoma, riboswitch, proteasoma, lacI, Hsp70)..."
                className="w-full pl-9 pr-4 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-slate-100 focus:outline-hidden focus:ring-2 focus:ring-cyan-500/50"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  Limpiar
                </button>
              )}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-1.5">
                <span className="text-slate-500 font-mono text-[11px]">Ruta:</span>
                <button
                  onClick={() => setSelectedLineage('all')}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    selectedLineage === 'all'
                      ? 'bg-cyan-100 dark:bg-cyan-500/20 text-cyan-900 dark:text-cyan-300 font-bold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                  }`}
                >
                  Ambas Rutas
                </button>
                <button
                  onClick={() => setSelectedLineage('eukaryote')}
                  className={`px-2.5 py-1 rounded-md transition-colors flex items-center gap-1 ${
                    selectedLineage === 'eukaryote'
                      ? 'bg-cyan-100 dark:bg-cyan-500/20 text-cyan-900 dark:text-cyan-300 font-bold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                  }`}
                >
                  <Lock className="w-3 h-3" />
                  <span>Solo Eucariotas</span>
                </button>
                <button
                  onClick={() => setSelectedLineage('prokaryote')}
                  className={`px-2.5 py-1 rounded-md transition-colors flex items-center gap-1 ${
                    selectedLineage === 'prokaryote'
                      ? 'bg-amber-100 dark:bg-amber-500/20 text-amber-900 dark:text-amber-300 font-bold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                  }`}
                >
                  <Zap className="w-3 h-3" />
                  <span>Solo Bacterias</span>
                </button>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="text-slate-500 font-mono text-[11px]">Nivel:</span>
                {(['all', 'ADN', 'ARN', 'Proteína'] as const).map(lvl => (
                  <button
                    key={lvl}
                    onClick={() => setSelectedLevel(lvl)}
                    className={`px-2 py-1 rounded-md transition-colors ${
                      selectedLevel === lvl
                        ? 'bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-slate-100 font-bold'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                    }`}
                  >
                    {lvl === 'all' ? 'Todos' : lvl}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Section 1: Introduction & Central Motto */}
          <section id="sec-intro" className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-6 shadow-2xs">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-700 dark:text-cyan-400 font-bold block">
                SECCIÓN 1 · PARADIGMA CONCEPTUAL
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
                1. El Paradigma de la Ruta y los Puntos de Control
              </h2>
            </div>

            <div className="p-6 rounded-xl bg-cyan-50/70 dark:bg-slate-950 border border-cyan-200 dark:border-cyan-500/30 space-y-2">
              <span className="text-xs font-mono font-bold text-cyan-800 dark:text-cyan-300 uppercase tracking-wider block">
                Lema Canónico del Curso
              </span>
              <blockquote className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 italic leading-snug">
                "{CENTRAL_MOTTO}"
              </blockquote>
            </div>

            <div className="prose dark:prose-invert max-w-none text-sm text-slate-700 dark:text-slate-300 leading-relaxed space-y-3">
              <p>
                Durante décadas, la enseñanza tradicional ha reducido la regulación génica a un esquema lineal y estático gobernado por un interruptor binario: promotor "encendido" o "apagado".
              </p>
              <p>
                Esta guía establece el modelo actual: la expresión génica es una <strong>carrera de obstáculos distribuida</strong>. Cada molécula de información que se transcribe debe sortear una secuencia de aduanas biofísicas. Ningún gen se expresa de verdad simplemente por reclutar a la ARN polimerasa; la expresión culmina únicamente si el producto supera cada filtro de cantidad, calidad, localización subcelular y estabilidad hasta adquirir su conformación funcional.
              </p>
            </div>
          </section>

          {/* Section 2: Cantidad vs. Calidad */}
          <section id="sec-quantity-quality" className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-6 shadow-2xs">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-purple-700 dark:text-purple-400 font-bold block">
                SECCIÓN 2 · DICOTOMÍA ONTOLÓGICA
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
                2. Dicotomía Fundamental: Fallos de CANTIDAD vs. Fallos de CALIDAD
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                {INTRODUCTION_DATA.quantityVsQuality.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Quantity */}
              <div className="p-6 rounded-xl bg-amber-50/50 dark:bg-slate-950 border border-amber-300 dark:border-amber-500/30 space-y-3">
                <span className="text-xs font-mono font-bold uppercase text-amber-800 dark:text-amber-400 block">
                  Problemas de CANTIDAD (Dosis Génica y Dinámica Temporal)
                </span>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {INTRODUCTION_DATA.quantityVsQuality.quantityFeatures[0].mechanism}
                </p>
                <div className="pt-2 border-t border-amber-200 dark:border-amber-900/50 text-xs text-slate-600 dark:text-slate-400">
                  <strong className="text-amber-900 dark:text-amber-300">Ejemplo canónico:</strong>{' '}
                  {INTRODUCTION_DATA.quantityVsQuality.quantityFeatures[0].example}
                </div>
              </div>

              {/* Quality */}
              <div className="p-6 rounded-xl bg-rose-50/50 dark:bg-slate-950 border border-rose-300 dark:border-rose-500/30 space-y-3">
                <span className="text-xs font-mono font-bold uppercase text-rose-800 dark:text-rose-400 block">
                  Problemas de CALIDAD (Identidad Molecular y Destino Subcelular)
                </span>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {INTRODUCTION_DATA.quantityVsQuality.qualityFeatures[0].mechanism}
                </p>
                <div className="pt-2 border-t border-rose-200 dark:border-rose-900/50 text-xs text-slate-600 dark:text-slate-400">
                  <strong className="text-rose-900 dark:text-rose-300">Ejemplo canónico:</strong>{' '}
                  {INTRODUCTION_DATA.quantityVsQuality.qualityFeatures[0].example}
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Comparative Table Eukaryote vs Prokaryote */}
          <section id="sec-bifurcation" className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-6 shadow-2xs">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-700 dark:text-emerald-400 font-bold block">
                SECCIÓN 3 · COMPARATIVA EVOLUTIVA
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
                3. La Gran Bifurcación: Filosofías Arquitectónicas Separadas
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                Las limitaciones biofísicas y la compartimentación subcelular determinan estrategias divergentes:
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse border border-slate-200 dark:border-slate-800">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-mono text-xs">
                    <th className="p-3 border border-slate-200 dark:border-slate-800">Parámetro Comparativo</th>
                    <th className="p-3 border border-slate-200 dark:border-slate-800 text-cyan-800 dark:text-cyan-300">Ruta Eucariota (Barrera Epigenética)</th>
                    <th className="p-3 border border-slate-200 dark:border-slate-800 text-amber-800 dark:text-amber-300">Ruta Bacteriana (Interruptor Metabólico)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                  <tr>
                    <td className="p-3 font-semibold bg-slate-50 dark:bg-slate-950/50">Estado Basal de los Genes</td>
                    <td className="p-3"><strong>Restrictivo:</strong> Reprimido por empaquetamiento en nucleosomas y heterocromatina.</td>
                    <td className="p-3"><strong>Permisivo:</strong> Libre acceso de RNAP; promotores constitutivamente accesibles salvo represión activa.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold bg-slate-50 dark:bg-slate-950/50">Organización Espacial</td>
                    <td className="p-3"><strong>Compartimentada:</strong> Envoltura nuclear con poros (NPC) separa físicamente transcripción y traducción.</td>
                    <td className="p-3"><strong>No compartimentada:</strong> Nucleoide libre en el citoplasma en contacto directo con los ribosomas.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold bg-slate-50 dark:bg-slate-950/50">Acoplamiento Transcripción-Traducción</td>
                    <td className="p-3"><strong>Completamente Desacoplado:</strong> El pre-ARNm madura durante horas antes del egreso al citoplasma.</td>
                    <td className="p-3"><strong>Acoplado instantáneo:</strong> El ribosoma traduce el ARNm naciente al vuelo formando el <em>Expressoma</em>.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold bg-slate-50 dark:bg-slate-950/50">Mecanismo de Desafío Inicial</td>
                    <td className="p-3">Remodeladores dependientes de ATP (SWI/SNF), acetilación de histonas (HATs) y factores basales.</td>
                    <td className="p-3">Factores sigma (σ70, σ32) y represores metabólicos alostéricos (LacI, TrpR).</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold bg-slate-50 dark:bg-slate-950/50">Vida Media Típica del ARNm</td>
                    <td className="p-3">Larga y finamente calibrada (horas a días; regulada por elementos ARE y microARNs).</td>
                    <td className="p-3">Ultracorta (1 a 3 minutos; digestión acelerada por el <em>Degradosoma</em> para adaptación inmediata).</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 4: Ruta Eucariota Completa */}
          {filteredEukStations.length > 0 && (
            <section id="sec-eukaryote" className="space-y-6">
              <div className="border-b border-cyan-300 dark:border-cyan-500/40 pb-4 space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-700 dark:text-cyan-400 font-bold uppercase">
                  <Lock className="w-4 h-4" />
                  <span>SECCIÓN 4 · RUTA EUCARIOTA COMPLETA</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
                  Los 11 Puntos de Control Eucariotas (ADN · ARN · Proteína)
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  Mostrando {filteredEukStations.length} estaciones con desglose mecanístico completo según la Matriz CQRF:
                </p>
              </div>

              <div className="space-y-6">
                {filteredEukStations.map((station) => {
                  const isCollapsed = collapsedSections[`euk-${station.stationNumber}`];
                  return (
                    <article
                      key={station.id}
                      className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs overflow-hidden transition-all hover:border-cyan-400 dark:hover:border-cyan-500"
                    >
                      {/* Station Header */}
                      <header className="p-6 bg-slate-50/70 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-xs font-mono text-cyan-700 dark:text-cyan-400">
                            <span className="font-bold">PUNTO DE CONTROL {station.stationNumber}</span>
                            <span aria-hidden="true">·</span>
                            <span className="px-2 py-0.5 rounded bg-cyan-100 dark:bg-cyan-500/20 text-cyan-900 dark:text-cyan-300 font-bold">
                              {station.molecularLevel}
                            </span>
                            <span aria-hidden="true">·</span>
                            <span className="text-slate-500">{station.cellularLocation}</span>
                          </div>
                          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                            {station.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 italic">
                            {station.subtitle}
                          </p>
                        </div>

                        <button
                          onClick={() => toggleSection(`euk-${station.stationNumber}`)}
                          className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 transition-colors flex items-center gap-1.5 self-start sm:self-auto shrink-0"
                        >
                          <span>{isCollapsed ? 'Ver detalles' : 'Plegar'}</span>
                          {isCollapsed ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
                        </button>
                      </header>

                      {!isCollapsed && (
                        <div className="p-6 sm:p-8 space-y-6 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                          {/* Key Regulators */}
                          <div className="p-4 rounded-xl bg-cyan-50/50 dark:bg-slate-950 border border-cyan-200 dark:border-cyan-900/50 space-y-2">
                            <span className="font-mono text-[11px] uppercase tracking-wider font-bold text-cyan-800 dark:text-cyan-300 block">
                              Reguladores Clave de esta Etapa:
                            </span>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                              {station.keyRegulators.map((r, i) => (
                                <div key={i} className="flex items-start gap-1.5">
                                  <span className="text-cyan-600 dark:text-cyan-400 font-bold">•</span>
                                  <span>
                                    <strong className="text-slate-900 dark:text-slate-100">{r.name}</strong>{' '}
                                    <span className="text-slate-500 font-mono">[{r.nature}]:</span> {r.action}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* CQRF 4 Questions Grid */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Q1: Que Ocurre */}
                            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2">
                              <span className="font-mono text-xs font-bold text-cyan-700 dark:text-cyan-400 flex items-center gap-1.5">
                                <HelpCircle className="w-3.5 h-3.5" />
                                <span>1. ¿Qué ocurre? (Proceso Biológico)</span>
                              </span>
                              <p className="leading-relaxed">
                                {station.queOcurre}
                              </p>
                            </div>

                            {/* Q2: Quien Participa */}
                            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2">
                              <span className="font-mono text-xs font-bold text-purple-700 dark:text-purple-400 flex items-center gap-1.5">
                                <BookmarkCheck className="w-3.5 h-3.5" />
                                <span>2. ¿Quién participa? (Actores Moleculares)</span>
                              </span>
                              <ul className="space-y-1.5 text-xs">
                                {station.quienParticipa.map((p, i) => (
                                  <li key={i}>
                                    <strong className="text-slate-900 dark:text-slate-100">{p.name}</strong>{' '}
                                    <span className="font-mono text-[11px] text-slate-500">({p.type}):</span> {p.role}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Q3: Que Regula */}
                            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2">
                              <span className="font-mono text-xs font-bold text-amber-700 dark:text-amber-400 flex items-center gap-1.5">
                                <Lightbulb className="w-3.5 h-3.5" />
                                <span>3. ¿Qué se regula? (Decisión Celular)</span>
                              </span>
                              <p className="leading-relaxed">
                                {station.queRegula}
                              </p>
                              <p className="text-xs text-amber-900 dark:text-amber-300 font-medium italic pt-1">
                                Decisión: {station.regulatoryDecision}
                              </p>
                            </div>

                            {/* Q4: Que Pasa Si Falla */}
                            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2">
                              <span className="font-mono text-xs font-bold text-rose-700 dark:text-rose-400 flex items-center gap-1.5">
                                <AlertTriangle className="w-3.5 h-3.5" />
                                <span>4. ¿Qué pasa si falla? (Patología)</span>
                              </span>
                              <p className="leading-relaxed">
                                {station.quePasaSiFalla}
                              </p>
                              <div className="pt-1 text-xs space-y-1">
                                <div className="font-mono text-[11px]">
                                  <span className="text-slate-500">Naturaleza: </span>
                                  <span className="font-bold uppercase text-rose-700 dark:text-rose-400">
                                    Impacto en {station.failureNature}
                                  </span>
                                </div>
                                <div className="text-slate-600 dark:text-slate-400">
                                  <strong>Patología: </strong> {station.clinicalConsequence}
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Experimental Tools & Evolutionary Insight */}
                          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                              <FlaskConical className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                              <span>
                                <strong className="text-slate-800 dark:text-slate-200">Herramientas de Análisis Experimental:</strong>{' '}
                                {station.diagnosticMarkers.join(' · ')}
                              </span>
                            </div>
                          </div>

                          <div className="p-3.5 rounded-lg bg-slate-100/70 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 text-xs italic text-slate-600 dark:text-slate-400">
                            <strong>Perla evolutiva:</strong> "{station.evolutionaryInsight}"
                          </div>
                        </div>
                      )}
                    </article>
                  );
                })}
              </div>
            </section>
          )}

          {/* Section 5: Ruta Bacteriana Completa */}
          {filteredProkStations.length > 0 && (
            <section id="sec-prokaryote" className="space-y-6">
              <div className="border-b border-amber-300 dark:border-amber-500/40 pb-4 space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono text-amber-700 dark:text-amber-400 font-bold uppercase">
                  <Zap className="w-4 h-4" />
                  <span>SECCIÓN 5 · RUTA BACTERIANA COMPLETA</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
                  Los 8 Puntos de Control Bacterianos (ADN · ARN · Proteína)
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  Mostrando {filteredProkStations.length} estaciones con desglose mecanístico completo según la Matriz CQRF:
                </p>
              </div>

              <div className="space-y-6">
                {filteredProkStations.map((station) => {
                  const isCollapsed = collapsedSections[`prok-${station.stationNumber}`];
                  return (
                    <article
                      key={station.id}
                      className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs overflow-hidden transition-all hover:border-amber-400 dark:hover:border-amber-500"
                    >
                      {/* Station Header */}
                      <header className="p-6 bg-slate-50/70 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-xs font-mono text-amber-700 dark:text-amber-400">
                            <span className="font-bold">PUNTO DE CONTROL {station.stationNumber} BACTERIANO</span>
                            <span aria-hidden="true">·</span>
                            <span className="px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-500/20 text-amber-900 dark:text-amber-300 font-bold">
                              {station.molecularLevel}
                            </span>
                            <span aria-hidden="true">·</span>
                            <span className="text-slate-500">{station.cellularLocation}</span>
                          </div>
                          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                            {station.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 italic">
                            {station.subtitle}
                          </p>
                        </div>

                        <button
                          onClick={() => toggleSection(`prok-${station.stationNumber}`)}
                          className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 transition-colors flex items-center gap-1.5 self-start sm:self-auto shrink-0"
                        >
                          <span>{isCollapsed ? 'Ver detalles' : 'Plegar'}</span>
                          {isCollapsed ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
                        </button>
                      </header>

                      {!isCollapsed && (
                        <div className="p-6 sm:p-8 space-y-6 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                          {/* Key Regulators */}
                          <div className="p-4 rounded-xl bg-amber-50/50 dark:bg-slate-950 border border-amber-200 dark:border-amber-900/50 space-y-2">
                            <span className="font-mono text-[11px] uppercase tracking-wider font-bold text-amber-800 dark:text-amber-300 block">
                              Reguladores Clave de esta Etapa:
                            </span>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                              {station.keyRegulators.map((r, i) => (
                                <div key={i} className="flex items-start gap-1.5">
                                  <span className="text-amber-600 dark:text-amber-400 font-bold">•</span>
                                  <span>
                                    <strong className="text-slate-900 dark:text-slate-100">{r.name}</strong>{' '}
                                    <span className="text-slate-500 font-mono">[{r.nature}]:</span> {r.action}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* CQRF 4 Questions Grid */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Q1: Que Ocurre */}
                            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2">
                              <span className="font-mono text-xs font-bold text-amber-700 dark:text-amber-400 flex items-center gap-1.5">
                                <HelpCircle className="w-3.5 h-3.5" />
                                <span>1. ¿Qué ocurre? (Proceso Biológico)</span>
                              </span>
                              <p className="leading-relaxed">
                                {station.queOcurre}
                              </p>
                            </div>

                            {/* Q2: Quien Participa */}
                            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2">
                              <span className="font-mono text-xs font-bold text-purple-700 dark:text-purple-400 flex items-center gap-1.5">
                                <BookmarkCheck className="w-3.5 h-3.5" />
                                <span>2. ¿Quién participa? (Actores Moleculares)</span>
                              </span>
                              <ul className="space-y-1.5 text-xs">
                                {station.quienParticipa.map((p, i) => (
                                  <li key={i}>
                                    <strong className="text-slate-900 dark:text-slate-100">{p.name}</strong>{' '}
                                    <span className="font-mono text-[11px] text-slate-500">({p.type}):</span> {p.role}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Q3: Que Regula */}
                            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2">
                              <span className="font-mono text-xs font-bold text-cyan-700 dark:text-cyan-400 flex items-center gap-1.5">
                                <Lightbulb className="w-3.5 h-3.5" />
                                <span>3. ¿Qué se regula? (Decisión Celular)</span>
                              </span>
                              <p className="leading-relaxed">
                                {station.queRegula}
                              </p>
                              <p className="text-xs text-cyan-900 dark:text-cyan-300 font-medium italic pt-1">
                                Decisión: {station.regulatoryDecision}
                              </p>
                            </div>

                            {/* Q4: Que Pasa Si Falla */}
                            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2">
                              <span className="font-mono text-xs font-bold text-rose-700 dark:text-rose-400 flex items-center gap-1.5">
                                <AlertTriangle className="w-3.5 h-3.5" />
                                <span>4. ¿Qué pasa si falla? (Patología)</span>
                              </span>
                              <p className="leading-relaxed">
                                {station.quePasaSiFalla}
                              </p>
                              <div className="pt-1 text-xs space-y-1">
                                <div className="font-mono text-[11px]">
                                  <span className="text-slate-500">Naturaleza: </span>
                                  <span className="font-bold uppercase text-rose-700 dark:text-rose-400">
                                    Impacto en {station.failureNature}
                                  </span>
                                </div>
                                <div className="text-slate-600 dark:text-slate-400">
                                  <strong>Patología: </strong> {station.clinicalConsequence}
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Experimental Tools & Evolutionary Insight */}
                          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                              <FlaskConical className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                              <span>
                                <strong className="text-slate-800 dark:text-slate-200">Herramientas de Análisis Experimental:</strong>{' '}
                                {station.diagnosticMarkers.join(' · ')}
                              </span>
                            </div>
                          </div>

                          <div className="p-3.5 rounded-lg bg-slate-100/70 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 text-xs italic text-slate-600 dark:text-slate-400">
                            <strong>Perla evolutiva:</strong> "{station.evolutionaryInsight}"
                          </div>
                        </div>
                      )}
                    </article>
                  );
                })}
              </div>
            </section>
          )}

          {/* Section 6: Casos Clínico-Moleculares de Deducción */}
          <section id="sec-cases" className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-6 shadow-2xs">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-indigo-700 dark:text-indigo-400 font-bold block">
                SECCIÓN 6 · ANÁLISIS DE CASOS Y RAZONAMIENTO CLÍNICO-MOLECULAR
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
                6. Casos de Estudio Aplicado: Del Dato Experimental al Mecanismo
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                Resolución de discrepancias entre tasas de transcripción y niveles de proteína mediante la identificación del punto de control afectado:
              </p>
            </div>

            <div className="space-y-6">
              {filteredCases.map((cs) => (
                <article
                  key={cs.id}
                  className="p-6 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
                    <div>
                      <span className="text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400">
                        CASO {cs.caseNumber} · {cs.lineage === 'eukaryote' ? 'RUTA EUCARIOTA' : 'RUTA BACTERIANA'}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                        {cs.title}
                      </h3>
                      <span className="text-xs text-slate-500 font-mono">Organismo: {cs.organism}</span>
                    </div>

                    <div className="px-3 py-1 rounded-md bg-rose-100 dark:bg-rose-500/20 text-rose-900 dark:text-rose-300 font-mono text-xs font-bold self-start sm:self-auto">
                      Fallo: {cs.primaryFailureType.toUpperCase()}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic bg-white dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800">
                    "{cs.clinicalVignette}"
                  </p>

                  {/* Findings Table */}
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold text-slate-500 uppercase">
                      Herramientas de Análisis Experimental y Hallazgos:
                    </span>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs border border-slate-200 dark:border-slate-800">
                        <thead>
                          <tr className="bg-slate-200/60 dark:bg-slate-900 font-mono text-[11px]">
                            <th className="p-2 border border-slate-200 dark:border-slate-800">Técnica</th>
                            <th className="p-2 border border-slate-200 dark:border-slate-800">Resultado Obtenido</th>
                            <th className="p-2 border border-slate-200 dark:border-slate-800">Interpretación Mecanística</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                          {cs.laboratoryFindings.map((f, i) => (
                            <tr key={i}>
                              <td className="p-2 font-semibold">{f.technique}</td>
                              <td className="p-2 font-mono text-cyan-700 dark:text-cyan-400">{f.result}</td>
                              <td className="p-2 text-slate-600 dark:text-slate-400">{f.interpretation}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Diagnosis & Debrief */}
                  <div className="p-4 rounded-lg bg-cyan-50/60 dark:bg-slate-900 border border-cyan-200 dark:border-cyan-900/50 space-y-1.5 text-xs">
                    <div className="font-bold text-cyan-900 dark:text-cyan-300 text-sm">
                      Diagnóstico: {cs.correctDiagnosis}
                    </div>
                    <div className="text-slate-600 dark:text-slate-400">
                      <strong>Punto de Control Primario:</strong> {cs.targetStationName}
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 pt-1 leading-relaxed">
                      {cs.pedagogicalDebrief}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Bottom Action: Copy Markdown Guide */}
          <div className="pt-6 border-t border-slate-200 dark:border-slate-800 text-center">
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
