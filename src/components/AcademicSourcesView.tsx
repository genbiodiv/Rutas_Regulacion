import React, { useState, useMemo } from 'react';
import { ACADEMIC_SOURCES_DATA, AcademicSource } from '../data/academicSourcesData';
import { 
  BookOpen, 
  FileText, 
  Database, 
  ExternalLink, 
  Copy, 
  Check, 
  Search, 
  BookMarked, 
  Compass, 
  GraduationCap
} from 'lucide-react';

export const AcademicSourcesView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'textbook' | 'seminal_paper' | 'database'>('all');
  const [selectedTopic, setSelectedTopic] = useState<'all' | 'general' | 'dna_epigenetics' | 'rna_processing' | 'translation_protein' | 'prokaryotes'>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Filter sources
  const filteredSources = useMemo(() => {
    return ACADEMIC_SOURCES_DATA.filter((source) => {
      const matchesCategory = selectedCategory === 'all' || source.category === selectedCategory;
      const matchesTopic = selectedTopic === 'all' || source.topic === selectedTopic;
      
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory && matchesTopic;

      const matchesSearch = 
        source.title.toLowerCase().includes(query) ||
        source.authors.toLowerCase().includes(query) ||
        source.publication.toLowerCase().includes(query) ||
        source.description.toLowerCase().includes(query) ||
        source.relevanceToCheckpoint.toLowerCase().includes(query) ||
        source.keyContributions.some(c => c.toLowerCase().includes(query));

      return matchesCategory && matchesTopic && matchesSearch;
    });
  }, [searchQuery, selectedCategory, selectedTopic]);

  const handleCopyCitation = async (source: AcademicSource) => {
    const citation = `${source.authors} (${source.year}). ${source.title}. ${source.publication}.${source.doiOrUrl ? ` ${source.doiOrUrl}` : ''}`;
    try {
      await navigator.clipboard.writeText(citation);
      setCopiedId(source.id);
      setTimeout(() => setCopiedId(null), 2500);
    } catch (err) {
      console.error('Error al copiar cita:', err);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-10">
      {/* 1. Header & Context */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-8 space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-700 dark:text-cyan-400 font-bold uppercase">
          <GraduationCap className="w-4 h-4" />
          <span>REPOSITORIO BIBLIOGRÁFICO Y LITERATURA PRIMARIA</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
          Fuentes y Consulta Académica
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          Literatura canónica, artículos seminales revisados por pares y bases de datos moleculares de acceso abierto que fundamentan cada punto de control del recorrido.
        </p>
      </div>

      {/* 2. Interactive Search & Filters Bar */}
      <div className="space-y-4">
        {/* Search input */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar por autor, título, concepto (ej. NMD, expressoma, riboswitch, proteasoma)..."
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-slate-100 focus:outline-hidden focus:ring-2 focus:ring-cyan-500/50 transition-colors shadow-2xs"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 px-2 py-1"
            >
              Limpiar
            </button>
          )}
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
          {/* Category filter */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 shadow-2xs font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              Todas las Fuentes ({ACADEMIC_SOURCES_DATA.length})
            </button>
            <button
              onClick={() => setSelectedCategory('textbook')}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors flex items-center gap-1.5 ${
                selectedCategory === 'textbook'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 shadow-2xs font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Libros de Texto</span>
            </button>
            <button
              onClick={() => setSelectedCategory('seminal_paper')}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors flex items-center gap-1.5 ${
                selectedCategory === 'seminal_paper'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 shadow-2xs font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Artículos Seminales</span>
            </button>
            <button
              onClick={() => setSelectedCategory('database')}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors flex items-center gap-1.5 ${
                selectedCategory === 'database'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 shadow-2xs font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <Database className="w-3.5 h-3.5" />
              <span>Bases de Datos</span>
            </button>
          </div>

          {/* Topic filter */}
          <div className="flex items-center gap-1 text-slate-500 font-mono text-[11px] overflow-x-auto pb-1 sm:pb-0">
            <span className="hidden sm:inline mr-1 text-slate-400">Área:</span>
            {[
              { id: 'all', label: 'Todo' },
              { id: 'dna_epigenetics', label: 'ADN / Epigenética' },
              { id: 'rna_processing', label: 'ARN & Splicing' },
              { id: 'translation_protein', label: 'Traducción & Proteína' },
              { id: 'prokaryotes', label: 'Procariotas' },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setSelectedTopic(t.id as any)}
                className={`px-2 py-1 rounded transition-colors whitespace-nowrap ${
                  selectedTopic === t.id
                    ? 'bg-cyan-100 dark:bg-cyan-500/20 text-cyan-900 dark:text-cyan-300 font-bold'
                    : 'hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Sources Grid List */}
      <div className="space-y-4">
        {filteredSources.length === 0 ? (
          <div className="p-12 text-center border border-dashed border-slate-300 dark:border-slate-800 rounded-2xl space-y-2">
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              No se encontraron fuentes para los filtros aplicados.
            </p>
            <p className="text-xs text-slate-500">
              Prueba cambiando la búsqueda o restableciendo los filtros de categoría y área.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); setSelectedTopic('all'); }}
              className="mt-2 text-xs font-bold text-cyan-600 dark:text-cyan-400 underline"
            >
              Restablecer filtros
            </button>
          </div>
        ) : (
          filteredSources.map((source) => {
            const isCopied = copiedId === source.id;
            return (
              <article
                key={source.id}
                className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 transition-all hover:border-cyan-400 dark:hover:border-cyan-500 shadow-2xs space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
                      <span className="font-bold text-cyan-700 dark:text-cyan-400 uppercase">
                        {source.category === 'textbook' ? 'Libro de Texto' : source.category === 'seminal_paper' ? 'Artículo Seminal' : 'Base de Datos Oficial'}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{source.year}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-slate-600 dark:text-slate-400">{source.relevanceToCheckpoint}</span>
                    </div>

                    <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
                      {source.title}
                    </h2>

                    <p className="text-xs text-slate-600 dark:text-slate-400 font-serif italic">
                      {source.authors} — <span className="font-sans font-medium text-slate-700 dark:text-slate-300">{source.publication}</span>
                    </p>
                  </div>

                  {/* Actions: Copy citation & External link */}
                  <div className="flex items-center gap-2 shrink-0 pt-1 sm:pt-0">
                    <button
                      onClick={() => handleCopyCitation(source)}
                      className="px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 transition-colors flex items-center gap-1.5 whitespace-nowrap"
                      title="Copiar cita bibliográfica en formato APA"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                          <span className="text-emerald-700 dark:text-emerald-300 font-bold">¡Copiado!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copiar Cita</span>
                        </>
                      )}
                    </button>

                    {source.doiOrUrl && (
                      <a
                        href={source.doiOrUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-cyan-50 dark:bg-cyan-500/10 hover:bg-cyan-100 dark:hover:bg-cyan-500/20 text-cyan-800 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-500/30 transition-colors flex items-center gap-1.5 whitespace-nowrap"
                      >
                        <span>Consultar Fuente</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {source.description}
                </p>

                {/* Key Contributions */}
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 space-y-1.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400 block">
                    Aportes Clave para la Regulación Génica:
                  </span>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-400">
                    {source.keyContributions.map((contrib, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-cyan-600 dark:text-cyan-400 font-bold mt-0.5">•</span>
                        <span>{contrib}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })
        )}
      </div>

      {/* 4. Practical Guide: How to Consult and Verify Primary Literature */}
      <section className="p-8 rounded-2xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-700 dark:text-cyan-400 font-bold uppercase">
          <Compass className="w-4 h-4" />
          <span>GUÍA PRÁCTICA DE CONSULTA CIENTÍFICA</span>
        </div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          ¿Cómo verificar experimentalmente un punto de control en PubMed?
        </h2>
        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          Cuando analices un caso clínico o una variante genética, busca en las bases primarias usando combinaciones de términos que acoplen el gen con la técnica experimental adecuada:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2 text-xs">
          <div className="p-3.5 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
            <span className="font-mono font-bold text-cyan-700 dark:text-cyan-300 block">Epigenética y Promotores</span>
            <p className="text-slate-600 dark:text-slate-400">
              <code>"[Gene] AND ChIP-seq"</code> o <code>"ATAC-seq chromatin accessibility promoter"</code>
            </p>
          </div>

          <div className="p-3.5 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
            <span className="font-mono font-bold text-purple-700 dark:text-purple-300 block">Splicing y NMD</span>
            <p className="text-slate-600 dark:text-slate-400">
              <code>"[Gene] AND nonsense-mediated decay"</code> o <code>"UPF1 cycloheximide rescue"</code>
            </p>
          </div>

          <div className="p-3.5 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
            <span className="font-mono font-bold text-amber-700 dark:text-amber-300 block">Traducción y Ribosoma</span>
            <p className="text-slate-600 dark:text-slate-400">
              <code>"[Gene] AND Ribo-seq"</code> o <code>"polysome profiling translation efficiency"</code>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
