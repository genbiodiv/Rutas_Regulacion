import React, { useState, useEffect } from 'react';
import { MOLECULAR_GLOSSARY } from '../data/molecularGlossaryData';
import { Search, BookMarked, X, MapPin, BookOpen } from 'lucide-react';

interface MolecularGlossaryProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTermId?: string | null;
  onSelectTerm?: (termId: string) => void;
}

export const MolecularGlossary: React.FC<MolecularGlossaryProps> = ({
  isOpen,
  onClose,
  selectedTermId,
  onSelectTerm,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeTermId, setActiveTermId] = useState<string | null>(selectedTermId || null);

  useEffect(() => {
    if (selectedTermId) {
      setActiveTermId(selectedTermId);
      // Auto-scroll to selected term if found
      const el = document.getElementById(`glossary-term-${selectedTermId}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [selectedTermId, isOpen]);

  if (!isOpen) return null;

  const categories = [
    { id: 'all', label: 'Todos los Términos' },
    { id: 'ARN y Procesamiento', label: 'ARN y Procesamiento' },
    { id: 'Vigilancia y Calidad', label: 'Vigilancia y Calidad' },
    { id: 'Traducción y Ribosoma', label: 'Traducción' },
    { id: 'Destino Proteico', label: 'Destino Proteico' },
    { id: 'Genética Bacteriana', label: 'Procariotas' },
  ];

  const filteredTerms = MOLECULAR_GLOSSARY.filter((term) => {
    const matchesCategory = selectedCategory === 'all' || term.category === selectedCategory;
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      term.term.toLowerCase().includes(query) ||
      term.shortDefinition.toLowerCase().includes(query) ||
      term.molecularMechanism.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-50 bg-black/60 dark:bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 transition-colors">
      <div className="bg-white dark:bg-[#0b0f17] border border-slate-200 dark:border-slate-800 rounded-2xl max-w-4xl w-full h-[90vh] flex flex-col shadow-2xl overflow-hidden relative text-slate-900 dark:text-slate-100 transition-colors">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-200 dark:border-slate-800/80 flex items-center justify-between gap-4 bg-slate-50 dark:bg-[#07090e]">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-xl bg-cyan-500/10 dark:bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
              <BookMarked className="w-5 h-5" />
            </span>
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <span>Glosario Molecular y Referencias</span>
                <span className="text-[11px] font-mono text-cyan-700 dark:text-cyan-400 font-bold px-2 py-0.5 rounded bg-cyan-100 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20">
                  {MOLECULAR_GLOSSARY.length} conceptos
                </span>
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Definiciones mecanicistas concisas y literatura científica para los puntos de control
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-200/70 dark:hover:bg-slate-800 transition-colors"
            title="Cerrar glosario"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="p-4 sm:px-6 bg-slate-100/70 dark:bg-slate-900/40 border-b border-slate-200 dark:border-slate-800/80 space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por término, enzima, complejo o mecanismo molecular..."
              className="w-full pl-9 pr-14 py-2 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-lg text-xs text-slate-900 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
              >
                Limpiar
              </button>
            )}
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-2.5 py-1 text-xs rounded-md whitespace-nowrap transition-colors font-medium ${
                  selectedCategory === cat.id
                    ? 'bg-cyan-100 dark:bg-cyan-500/20 text-cyan-900 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-500/40 font-bold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-800/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 scrollbar-thin">
          {filteredTerms.length === 0 ? (
            <div className="p-10 text-center text-slate-500 text-xs space-y-2">
              <p>No se encontraron términos para "{searchQuery}".</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="text-cyan-600 dark:text-cyan-400 underline font-semibold"
              >
                Restablecer filtros
              </button>
            </div>
          ) : (
            filteredTerms.map((t) => {
              const isHighlighted = activeTermId === t.id;

              return (
                <div
                  key={t.id}
                  id={`glossary-term-${t.id}`}
                  onClick={() => {
                    setActiveTermId(t.id);
                    if (onSelectTerm) onSelectTerm(t.id);
                  }}
                  className={`p-5 rounded-xl border transition-all text-xs space-y-3 cursor-pointer ${
                    isHighlighted
                      ? 'bg-cyan-50/50 dark:bg-slate-900 border-cyan-500 shadow-md ring-1 ring-cyan-500/30'
                      : 'bg-white dark:bg-slate-950/70 border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  {/* Title and metadata */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800/60 pb-2.5">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                        <span>{t.term}</span>
                        {isHighlighted && (
                          <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400" />
                        )}
                      </h3>
                      <div className="flex items-center gap-2 text-[11px] text-slate-600 dark:text-slate-400 pt-0.5">
                        <span className="text-cyan-700 dark:text-cyan-400 font-mono font-semibold">{t.category}</span>
                        <span aria-hidden="true">·</span>
                        <span className="flex items-center gap-1 font-mono">
                          <MapPin className="w-3 h-3 text-slate-400 dark:text-slate-500" />
                          <span>{t.cellularLocation}</span>
                        </span>
                      </div>
                    </div>

                    <span className="text-[10px] font-mono text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shrink-0 self-start sm:self-center font-medium">
                      {t.checkpointAssociation}
                    </span>
                  </div>

                  {/* Short definition */}
                  <div className="text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                    {t.shortDefinition}
                  </div>

                  {/* Molecular mechanism */}
                  <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 space-y-1">
                    <span className="text-[10px] font-mono text-cyan-700 dark:text-cyan-400 font-bold uppercase block">
                      Mecanismo de Acción Molecular:
                    </span>
                    <p className="text-slate-800 dark:text-slate-300 leading-relaxed">
                      {t.molecularMechanism}
                    </p>
                  </div>

                  {/* Bibliographic references */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[10px] font-mono text-slate-600 dark:text-slate-400 uppercase font-bold flex items-center gap-1">
                      <BookOpen className="w-3 h-3 text-slate-400 dark:text-slate-500" />
                      <span>Referencias Bibliográficas:</span>
                    </span>
                    <ul className="space-y-1 text-[11px] text-slate-600 dark:text-slate-400">
                      {t.references.map((ref, rIdx) => (
                        <li key={rIdx} className="bg-slate-50 dark:bg-slate-950 p-2.5 rounded border border-slate-200 dark:border-slate-900 font-sans leading-relaxed">
                          <span className="text-slate-900 dark:text-slate-300 font-semibold">{ref.author}</span> ({ref.year}).{' '}
                          <span className="italic text-slate-800 dark:text-slate-300">{ref.title}</span>.{' '}
                          <span className="text-cyan-700 dark:text-cyan-400">{ref.source}</span>.
                          {ref.doiOrPmid && (
                            <span className="ml-1 text-[10px] font-mono text-slate-500 dark:text-slate-400">
                              [{ref.doiOrPmid}]
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#07090e] flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
          <span className="font-mono text-[11px]">
            Haz clic en los términos destacados dentro de los Puntos de Control para consultar esta ventana.
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-bold text-white dark:text-slate-950 bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-400 dark:hover:bg-cyan-300 rounded-lg transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
