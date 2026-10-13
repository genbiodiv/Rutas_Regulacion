import React, { useState, useEffect } from 'react';
import { STATIONS_DATA, CQRFStation } from '../data/geneRegulationData';
import { 
  Dna, 
  Users, 
  Sliders, 
  AlertTriangle, 
  ChevronLeft, 
  ChevronRight, 
  Activity, 
  MapPin, 
  FileSearch,
  Zap,
  ShieldCheck,
  BookMarked,
  Cpu,
  Lock,
  GitCompare,
  ArrowRight,
  Layers
} from 'lucide-react';

interface TollStationExplorerProps {
  initialStationId?: string;
  initialMolecularLevel?: 'all' | 'ADN' | 'ARN' | 'Proteína';
  initialRoute?: 'eukaryote' | 'prokaryote';
  onOpenGlossaryTerm?: (termId: string) => void;
  onRouteChange?: (route: 'eukaryote' | 'prokaryote') => void;
}

export const TollStationExplorer: React.FC<TollStationExplorerProps> = ({
  initialStationId,
  initialMolecularLevel = 'all',
  initialRoute = 'eukaryote',
  onOpenGlossaryTerm,
  onRouteChange,
}) => {
  // Separate routes: 'eukaryote' | 'prokaryote'
  const [activeRoute, setActiveRoute] = useState<'eukaryote' | 'prokaryote'>(initialRoute);
  const [activeMolecularLevel, setActiveMolecularLevel] = useState<'all' | 'ADN' | 'ARN' | 'Proteína'>(initialMolecularLevel);
  const [activeStationId, setActiveStationId] = useState<string>(() => {
    if (initialStationId) return initialStationId;
    return initialRoute === 'eukaryote' ? 'euk-1' : 'prok-1';
  });
  const [showFailureSimulation, setShowFailureSimulation] = useState<boolean>(false);
  const [showComparisonModal, setShowComparisonModal] = useState<boolean>(false);

  // Sync initial props
  useEffect(() => {
    if (initialRoute) {
      setActiveRoute(initialRoute);
    }
  }, [initialRoute]);

  useEffect(() => {
    if (initialStationId) {
      setActiveStationId(initialStationId);
      // Auto-detect route from station ID
      if (initialStationId.startsWith('prok-')) {
        setActiveRoute('prokaryote');
      } else if (initialStationId.startsWith('euk-')) {
        setActiveRoute('eukaryote');
      }
    }
  }, [initialStationId]);

  useEffect(() => {
    if (initialMolecularLevel) {
      setActiveMolecularLevel(initialMolecularLevel);
    }
  }, [initialMolecularLevel]);

  // Stations strictly partitioned by route
  const currentRouteStations = STATIONS_DATA.filter((st) => st.category === activeRoute);

  // Apply molecular dimension filter within the current route
  const filteredStations = currentRouteStations.filter((st) => {
    if (activeMolecularLevel === 'all') return true;
    return st.molecularLevel === activeMolecularLevel;
  });

  // Ensure active station belongs to the current route
  const activeStationInCurrentRoute = currentRouteStations.find((st) => st.id === activeStationId);
  const currentStation: CQRFStation = activeStationInCurrentRoute || filteredStations[0] || currentRouteStations[0];
  const currentStationIndexInRoute = currentRouteStations.findIndex((st) => st.id === currentStation.id);

  const handleSelectRoute = (route: 'eukaryote' | 'prokaryote') => {
    setActiveRoute(route);
    setActiveMolecularLevel('all');
    setShowFailureSimulation(false);
    const firstStationOfNewRoute = route === 'eukaryote' ? 'euk-1' : 'prok-1';
    setActiveStationId(firstStationOfNewRoute);
    if (onRouteChange) {
      onRouteChange(route);
    }
  };

  const handleSelectStation = (id: string) => {
    setActiveStationId(id);
    setShowFailureSimulation(false);
  };

  const handlePrevStation = () => {
    if (currentStationIndexInRoute > 0) {
      setActiveStationId(currentRouteStations[currentStationIndexInRoute - 1].id);
      setShowFailureSimulation(false);
    }
  };

  const handleNextStation = () => {
    if (currentStationIndexInRoute < currentRouteStations.length - 1) {
      setActiveStationId(currentRouteStations[currentStationIndexInRoute + 1].id);
      setShowFailureSimulation(false);
    }
  };

  const getMolecularLevelBadge = (level: 'ADN' | 'ARN' | 'Proteína') => {
    switch (level) {
      case 'ADN':
        return {
          icon: <Dna className="w-3.5 h-3.5" />,
          label: 'Nivel ADN (Genoma & Epigenética)',
          classes: 'bg-cyan-100 text-cyan-900 border-cyan-300 dark:bg-cyan-500/20 dark:text-cyan-300 dark:border-cyan-500/40',
        };
      case 'ARN':
        return {
          icon: <Activity className="w-3.5 h-3.5" />,
          label: 'Nivel ARN (Transcrito & Maduración)',
          classes: 'bg-purple-100 text-purple-900 border-purple-300 dark:bg-purple-500/20 dark:text-purple-300 dark:border-purple-500/40',
        };
      case 'Proteína':
        return {
          icon: <ShieldCheck className="w-3.5 h-3.5" />,
          label: 'Nivel Proteína (Traducción & Destino)',
          classes: 'bg-emerald-100 text-emerald-900 border-emerald-300 dark:bg-emerald-500/20 dark:text-emerald-300 dark:border-emerald-500/40',
        };
    }
  };

  const levelBadge = getMolecularLevelBadge(currentStation.molecularLevel);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* 1. Header & Dedicated Route Switcher */}
      <div className="space-y-5 border-b border-slate-200 dark:border-slate-800 pb-6 transition-colors">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-bold tracking-wider uppercase block">
              RECORRIDO MOLECULAR EN RUTAS SEPARADAS
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
              Puntos de Control: ADN · ARN · Proteína
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
              Cada dominio celular opera bajo restricciones biofísicas distintas. Explora cada ruta por separado para no mezclar los mecanismos bacterianos y eucariotas.
            </p>
          </div>

          {/* Quick Route Switcher Tabs */}
          <div className="flex items-center gap-2 p-1.5 bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-2xl shrink-0 self-start lg:self-center shadow-xs">
            {/* Eukaryote Route Tab */}
            <button
              onClick={() => handleSelectRoute('eukaryote')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeRoute === 'eukaryote'
                  ? 'bg-white dark:bg-slate-800 text-cyan-700 dark:text-cyan-300 shadow-sm border border-cyan-300/60 dark:border-cyan-500/40'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <Lock className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span>Ruta Eucariota</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-100/80 dark:bg-cyan-500/20 text-cyan-800 dark:text-cyan-300">
                11 Puntos
              </span>
            </button>

            {/* Prokaryote Route Tab */}
            <button
              onClick={() => handleSelectRoute('prokaryote')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeRoute === 'prokaryote'
                  ? 'bg-white dark:bg-slate-800 text-amber-700 dark:text-amber-300 shadow-sm border border-amber-300/60 dark:border-amber-500/40'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <Zap className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span>Ruta Bacteriana</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-100/80 dark:bg-amber-500/20 text-amber-800 dark:text-amber-300">
                8 Puntos
              </span>
            </button>
          </div>
        </div>

        {/* Route Context Banner */}
        <div className={`p-4 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
          activeRoute === 'eukaryote'
            ? 'bg-cyan-50/60 dark:bg-cyan-950/20 border-cyan-200 dark:border-cyan-900/50 text-cyan-950 dark:text-cyan-200'
            : 'bg-amber-50/60 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900/50 text-amber-950 dark:text-amber-200'
        }`}>
          <div className="flex items-center gap-3 text-xs sm:text-sm">
            <span className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
              activeRoute === 'eukaryote'
                ? 'bg-cyan-500/20 text-cyan-700 dark:text-cyan-300'
                : 'bg-amber-500/20 text-amber-700 dark:text-amber-300'
            }`}>
              {activeRoute === 'eukaryote' ? <Lock className="w-4 h-4" /> : <Zap className="w-4 h-4" />}
            </span>
            <div>
              <strong className="block font-bold">
                {activeRoute === 'eukaryote' 
                  ? 'Estás navegando la Ruta Eucariota (Control Compartimentado y Multietapa)' 
                  : 'Estás navegando la Ruta Bacteriana (Control Acoplado por Operones y Velocidad)'}
              </strong>
              <span className="text-xs text-slate-600 dark:text-slate-400">
                {activeRoute === 'eukaryote'
                  ? 'Estado basal restrictivo por cromatina · Núcleo con poro nuclear · Splicing alternativo · microARN · Escaneo Kozak · Proteasoma 26S'
                  : 'Estado basal permisivo · Operones policistrónicos · Expressoma acoplado · Degradosoma · Shine-Dalgarno · Proteasas Clp'}
              </span>
            </div>
          </div>

          <button
            onClick={() => setShowComparisonModal(true)}
            className="self-start sm:self-center px-3 py-1.5 text-xs font-bold rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-1.5 shrink-0"
          >
            <GitCompare className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>Ver Tabla Comparativa Paralela</span>
          </button>
        </div>

        {/* Molecular Perspective Filter within Active Route */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
          <div className="flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-slate-400" />
            <span className="text-xs font-mono text-slate-600 dark:text-slate-400 font-bold uppercase">
              Filtrar Perspectiva Molecular en esta Ruta:
            </span>
          </div>

          <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg overflow-x-auto">
            <button
              onClick={() => setActiveMolecularLevel('all')}
              className={`px-3 py-1 text-xs rounded-md transition-colors whitespace-nowrap font-medium ${
                activeMolecularLevel === 'all'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 shadow-2xs font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              Todos los Niveles ({currentRouteStations.length})
            </button>
            <button
              onClick={() => setActiveMolecularLevel('ADN')}
              className={`px-3 py-1 text-xs rounded-md transition-colors whitespace-nowrap flex items-center gap-1 font-medium ${
                activeMolecularLevel === 'ADN'
                  ? 'bg-cyan-100 dark:bg-cyan-500/20 text-cyan-900 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-500/40 font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <Dna className="w-3 h-3 text-cyan-600 dark:text-cyan-400" />
              <span>Nivel ADN ({currentRouteStations.filter(s => s.molecularLevel === 'ADN').length})</span>
            </button>
            <button
              onClick={() => setActiveMolecularLevel('ARN')}
              className={`px-3 py-1 text-xs rounded-md transition-colors whitespace-nowrap flex items-center gap-1 font-medium ${
                activeMolecularLevel === 'ARN'
                  ? 'bg-purple-100 dark:bg-purple-500/20 text-purple-900 dark:text-purple-300 border border-purple-300 dark:border-purple-500/40 font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <Activity className="w-3 h-3 text-purple-600 dark:text-purple-400" />
              <span>Nivel ARN ({currentRouteStations.filter(s => s.molecularLevel === 'ARN').length})</span>
            </button>
            <button
              onClick={() => setActiveMolecularLevel('Proteína')}
              className={`px-3 py-1 text-xs rounded-md transition-colors whitespace-nowrap flex items-center gap-1 font-medium ${
                activeMolecularLevel === 'Proteína'
                  ? 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-900 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-500/40 font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <ShieldCheck className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
              <span>Nivel Proteína ({currentRouteStations.filter(s => s.molecularLevel === 'Proteína').length})</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Station Selector Rail for Current Route */}
      <div className="overflow-x-auto pb-2 scrollbar-thin">
        <div className="flex items-center gap-2 min-w-max">
          {filteredStations.map((st) => {
            const isSelected = st.id === currentStation.id;
            const levelColor = 
              st.molecularLevel === 'ADN' 
                ? 'text-cyan-600 dark:text-cyan-400'
                : st.molecularLevel === 'ARN'
                  ? 'text-purple-600 dark:text-purple-400'
                  : 'text-emerald-600 dark:text-emerald-400';

            return (
              <button
                key={st.id}
                onClick={() => handleSelectStation(st.id)}
                className={`px-3 py-2 rounded-xl text-left transition-all border whitespace-nowrap flex items-center gap-2.5 ${
                  isSelected
                    ? activeRoute === 'eukaryote'
                      ? 'bg-white dark:bg-slate-800 border-cyan-500 text-slate-900 dark:text-slate-100 shadow-md ring-2 ring-cyan-500/30'
                      : 'bg-white dark:bg-slate-800 border-amber-500 text-slate-900 dark:text-slate-100 shadow-md ring-2 ring-amber-500/30'
                    : 'bg-white/80 dark:bg-slate-950/70 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                <span className={`text-[11px] font-mono font-bold ${levelColor}`}>
                  {st.molecularLevel} · C{st.stationNumber}
                </span>
                <span className="text-xs font-medium max-w-[170px] truncate">
                  {st.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Active Station Display Card */}
      <div className="rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-8 shadow-sm dark:shadow-xl transition-colors">
        {/* Station Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-slate-200 dark:border-slate-800/80 pb-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className={`text-xs font-mono font-bold uppercase px-2.5 py-0.5 rounded border flex items-center gap-1.5 ${levelBadge.classes}`}>
                {levelBadge.icon}
                <span>{levelBadge.label}</span>
              </span>

              <span className={`text-xs font-mono font-bold uppercase px-2.5 py-0.5 rounded border ${
                activeRoute === 'eukaryote'
                  ? 'bg-cyan-50 dark:bg-cyan-950/30 border-cyan-200 dark:border-cyan-800 text-cyan-800 dark:text-cyan-300'
                  : 'bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300'
              }`}>
                Punto de Control {currentStation.stationNumber} de {currentRouteStations.length} · {currentStation.routeLabel}
              </span>

              <span className="text-xs text-slate-600 dark:text-slate-400 flex items-center gap-1 font-mono">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{currentStation.cellularLocation}</span>
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
              {currentStation.title}
            </h2>
            <p className="text-xs sm:text-sm text-cyan-800 dark:text-cyan-300 font-semibold">
              {currentStation.subtitle}
            </p>
          </div>

          {/* Linear navigation buttons */}
          <div className="flex items-center gap-2 shrink-0 self-start">
            <button
              onClick={handlePrevStation}
              disabled={currentStationIndexInRoute === 0}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              title="Punto de control anterior en esta ruta"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono text-slate-600 dark:text-slate-400 px-2 font-semibold">
              {currentStationIndexInRoute + 1} / {currentRouteStations.length}
            </span>
            <button
              onClick={handleNextStation}
              disabled={currentStationIndexInRoute === currentRouteStations.length - 1}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              title="Punto de control siguiente en esta ruta"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 1. Panel de Reguladores Clave de esta Etapa */}
        {currentStation.keyRegulators && currentStation.keyRegulators.length > 0 && (
          <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/90 space-y-3.5 shadow-2xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100">
                <Cpu className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>Reguladores Moleculares Clave (¿Quiénes toman la decisión de control en este punto?):</span>
              </div>
              <span className="text-[11px] font-mono text-cyan-700 dark:text-cyan-400 font-semibold hidden sm:inline">
                {currentStation.keyRegulators.length} reguladores destacados
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {currentStation.keyRegulators.map((reg, idx) => (
                <div 
                  key={idx}
                  className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 space-y-1.5 shadow-2xs"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100">
                        {reg.name}
                      </span>
                      {reg.glossaryId && onOpenGlossaryTerm && (
                        <button
                          onClick={() => onOpenGlossaryTerm(reg.glossaryId!)}
                          className="text-[10px] text-cyan-700 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-300 font-mono underline inline-flex items-center gap-0.5"
                          title="Ver en Glosario Molecular"
                        >
                          <BookMarked className="w-3 h-3" />
                          <span>Glosario</span>
                        </button>
                      )}
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800">
                      {reg.nature}
                    </span>
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    {reg.action}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. Recuadro Comparativo: Bacterias vs. Eucariotas en esta Etapa */}
        {currentStation.comparativeBacteriaVsEukaryote && (
          <div className="p-5 sm:p-6 rounded-2xl bg-amber-50/40 dark:bg-slate-950/60 border border-amber-200 dark:border-amber-900/40 space-y-3 shadow-2xs">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-amber-900 dark:text-amber-300">
              <GitCompare className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span>Contraste Evolutivo: ¿Cómo opera este control en Bacterias vs. Eucariotas?</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-3.5 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-amber-200 dark:border-amber-900/50 space-y-1">
                <span className="text-[11px] font-mono text-amber-800 dark:text-amber-400 font-bold block uppercase flex items-center gap-1">
                  <Zap className="w-3 h-3" />
                  <span>En Bacterias (Procariotas):</span>
                </span>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  {currentStation.comparativeBacteriaVsEukaryote.bacteria}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-cyan-200 dark:border-cyan-900/50 space-y-1">
                <span className="text-[11px] font-mono text-cyan-800 dark:text-cyan-400 font-bold block uppercase flex items-center gap-1">
                  <Lock className="w-3 h-3" />
                  <span>En Eucariotas:</span>
                </span>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  {currentStation.comparativeBacteriaVsEukaryote.eukaryote}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* 3. The CQRF Matrix: 4 Distinct Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 1. ¿Qué ocurre? */}
          <div className="rounded-2xl p-5 sm:p-6 bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/90 space-y-3 shadow-2xs">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-cyan-500/10 dark:bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                <Activity className="w-3.5 h-3.5" />
              </span>
              <div>
                <span className="text-[10px] font-mono text-cyan-700 dark:text-cyan-400 uppercase font-bold block">
                  PILAR C · 01
                </span>
                <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                  1. ¿Qué ocurre? (Proceso Biológico Esencial)
                </h3>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {currentStation.queOcurre}
            </p>
          </div>

          {/* 2. ¿Quién participa? */}
          <div className="rounded-2xl p-5 sm:p-6 bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/90 space-y-3 shadow-2xs">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-purple-500/10 dark:bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                <Users className="w-3.5 h-3.5" />
              </span>
              <div>
                <span className="text-[10px] font-mono text-purple-700 dark:text-purple-400 uppercase font-bold block">
                  PILAR Q · 02
                </span>
                <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                  2. ¿Quién participa? (Actores Moleculares Clave)
                </h3>
              </div>
            </div>

            <div className="space-y-2 pt-1 max-h-[220px] overflow-y-auto pr-1 scrollbar-thin">
              {currentStation.quienParticipa.map((actor, idx) => (
                <div 
                  key={idx}
                  className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 space-y-1"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-xs text-slate-900 dark:text-slate-200">
                        {actor.name}
                      </span>
                      {actor.glossaryId && onOpenGlossaryTerm && (
                        <button
                          onClick={() => onOpenGlossaryTerm(actor.glossaryId!)}
                          className="text-[10px] text-cyan-700 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-300 font-mono underline flex items-center gap-0.5"
                          title="Ver en Glosario Molecular"
                        >
                          <BookMarked className="w-3 h-3" />
                          <span>Glosario</span>
                        </button>
                      )}
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase font-semibold">
                      {actor.type}
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 leading-normal">
                    {actor.role}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 3. ¿Qué se regula? */}
          <div className="rounded-2xl p-5 sm:p-6 bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/90 space-y-3 shadow-2xs">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-amber-500/10 dark:bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
                <Sliders className="w-3.5 h-3.5" />
              </span>
              <div>
                <span className="text-[10px] font-mono text-amber-700 dark:text-amber-400 uppercase font-bold block">
                  PILAR R · 03
                </span>
                <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                  3. ¿Qué se regula? (Decisión Celular de Control)
                </h3>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {currentStation.queRegula}
            </p>
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
              <span className="text-[11px] font-mono text-amber-800 dark:text-amber-300 block font-bold">
                Punto de control biológico:
              </span>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">
                {currentStation.regulatoryDecision}
              </p>
            </div>
          </div>

          {/* 4. ¿Qué pasa si falla? */}
          <div className="rounded-2xl p-5 sm:p-6 bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/90 space-y-3 shadow-2xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-rose-500/10 dark:bg-rose-500/20 border border-rose-500/30 flex items-center justify-center text-rose-600 dark:text-rose-400">
                  <AlertTriangle className="w-3.5 h-3.5" />
                </span>
                <div>
                  <span className="text-[10px] font-mono text-rose-700 dark:text-rose-400 uppercase font-bold block">
                    PILAR F · 04
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                    4. ¿Qué pasa si falla? (Patología Celular)
                  </h3>
                </div>
              </div>

              <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded border font-semibold ${
                currentStation.failureNature === 'cantidad'
                  ? 'bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/30'
                  : currentStation.failureNature === 'calidad'
                    ? 'bg-rose-100 text-rose-900 border-rose-300 dark:bg-rose-500/10 dark:text-rose-400 dark:border-rose-500/30'
                    : 'bg-purple-100 text-purple-900 border-purple-300 dark:bg-purple-500/10 dark:text-purple-400 dark:border-purple-500/30'
              }`}>
                Fallo de {currentStation.failureNature}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {currentStation.quePasaSiFalla}
            </p>

            <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
              <span className="text-[11px] font-mono text-rose-800 dark:text-rose-300 block font-bold">
                Ejemplo Clínico o Patológico:
              </span>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">
                {currentStation.clinicalConsequence}
              </p>
            </div>
          </div>
        </div>

        {/* 4. Interactive Diagnostic Sandbox Toggle (Herramientas de Análisis Experimental) */}
        <div className="pt-2">
          <button
            onClick={() => setShowFailureSimulation(!showFailureSimulation)}
            className="w-full py-3.5 px-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-cyan-400 dark:hover:border-cyan-500/40 text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 transition-colors flex items-center justify-between shadow-2xs"
          >
            <span className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span>Simulador de Diagnóstico Molecular: ¿Qué herramientas de análisis experimental detectarían un fallo aquí?</span>
            </span>
            <span className="text-cyan-700 dark:text-cyan-400 font-mono text-xs font-semibold">
              {showFailureSimulation ? 'Ocultar Herramientas' : 'Desplegar Herramientas de Análisis Experimental'}
            </span>
          </button>

          {showFailureSimulation && (
            <div className="mt-3 p-5 rounded-2xl bg-white dark:bg-slate-950/90 border border-cyan-300 dark:border-cyan-500/30 space-y-3 shadow-xs">
              <div className="text-xs font-mono text-cyan-800 dark:text-cyan-400 font-bold uppercase flex items-center gap-1.5">
                <FileSearch className="w-4 h-4" />
                <span>Herramientas de Análisis Experimental y Detección:</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                {currentStation.diagnosticMarkers.map((marker, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 bg-slate-50 dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-800">
                    <span className="text-cyan-700 dark:text-cyan-400 font-mono font-bold">0{idx + 1}.</span>
                    <span>{marker}</span>
                  </li>
                ))}
              </ul>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 pt-1">
                *Estas herramientas de análisis experimental te permitirán resolver los tres casos de análisis clínico del curso.
              </div>
            </div>
          )}
        </div>

        {/* 5. End of Route Switcher Helper */}
        {currentStationIndexInRoute === currentRouteStations.length - 1 && (
          <div className={`p-6 rounded-2xl border text-center space-y-3 ${
            activeRoute === 'eukaryote'
              ? 'bg-amber-50/70 dark:bg-amber-950/20 border-amber-300 dark:border-amber-800/60'
              : 'bg-cyan-50/70 dark:bg-cyan-950/20 border-cyan-300 dark:border-cyan-800/60'
          }`}>
            <span className="text-xs font-mono uppercase font-bold text-slate-500 dark:text-slate-400">
              ¡Has completado todos los puntos de la {activeRoute === 'eukaryote' ? 'Ruta Eucariota' : 'Ruta Bacteriana'}!
            </span>
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
              ¿Deseas contrastar cómo resuelve estos retos la {activeRoute === 'eukaryote' ? 'Ruta Bacteriana' : 'Ruta Eucariota'}?
            </h4>
            <button
              onClick={() => handleSelectRoute(activeRoute === 'eukaryote' ? 'prokaryote' : 'eukaryote')}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all inline-flex items-center gap-2 shadow-sm ${
                activeRoute === 'eukaryote'
                  ? 'bg-amber-500 hover:bg-amber-600 text-slate-950'
                  : 'bg-cyan-600 hover:bg-cyan-700 text-white'
              }`}
            >
              <span>Cambiar a {activeRoute === 'eukaryote' ? 'Ruta Bacteriana (8 Puntos)' : 'Ruta Eucariota (11 Puntos)'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* 4. Comparative Matrix Modal: Bacterias vs Eucariotas */}
      {showComparisonModal && (
        <div 
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white dark:bg-[#0b0e14] border border-slate-200 dark:border-slate-800 rounded-3xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
                  <GitCompare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                    Matriz Comparativa: Ruta Eucariota vs. Ruta Bacteriana
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                    Contraste Mecanístico en los Tres Niveles: ADN · ARN · Proteína
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowComparisonModal(false)}
                className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Content Table */}
            <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm">
              {/* Nivel ADN */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-cyan-700 dark:text-cyan-400 font-bold font-mono">
                  <Dna className="w-4 h-4" />
                  <span>1. DIMENSIÓN ADN (Acceso al Molde)</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-cyan-50/50 dark:bg-slate-900/60 border border-cyan-200 dark:border-cyan-900/50 space-y-1.5">
                    <strong className="text-cyan-900 dark:text-cyan-300 font-bold block">Eucariotas (Restricción Epigenética):</strong>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-xs">
                      El ADN está envuelto en nucleosomas e histonas. Estado basal represivo. Requiere complejos SWI/SNF de remodelación, acetilaciones por HATs, metilación de ADN y factores basales (TFIID/TBP).
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-amber-50/50 dark:bg-slate-900/60 border border-amber-200 dark:border-amber-900/50 space-y-1.5">
                    <strong className="text-amber-900 dark:text-amber-300 font-bold block">Bacterias (Permisividad Metabólica):</strong>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-xs">
                      Cromosoma desnudo en nucleoide sin histonas densas. Estado basal permisivo. Factores sigma (σ70, σ32) reconocen cajas -10 y -35. Operones policistrónicos modulados por represores (LacI, TrpR).
                    </p>
                  </div>
                </div>
              </div>

              {/* Nivel ARN */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-purple-700 dark:text-purple-400 font-bold font-mono">
                  <Activity className="w-4 h-4" />
                  <span>2. DIMENSIÓN ARN (Procesamiento y Vida Media)</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-cyan-50/50 dark:bg-slate-900/60 border border-cyan-200 dark:border-cyan-900/50 space-y-1.5">
                    <strong className="text-cyan-900 dark:text-cyan-300 font-bold block">Eucariotas (Maduración y Control de Calidad):</strong>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-xs">
                      Capping 5', poliadenilación 3' y splicing alternativo (espliceosoma). Vigilancia NMD que destruye codones prematuros. Exportación obligada por poro nuclear (NPC) y silenciamiento postranscripcional por microARNs.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-amber-50/50 dark:bg-slate-900/60 border border-amber-200 dark:border-amber-900/50 space-y-1.5">
                    <strong className="text-amber-900 dark:text-amber-300 font-bold block">Bacterias (Expressoma y Degradación Rápida):</strong>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-xs">
                      Transcripción y traducción físicamente acopladas en el <em>Expressoma</em> (NusG/NusA). Sin intrones en ARNm estándar. Vida media corta (1-3 min) degradada por el <em>Degradosoma</em> (ARNasa E). Sensores Riboswitches y sRNAs asistidos por Hfq.
                    </p>
                  </div>
                </div>
              </div>

              {/* Nivel Proteína */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold font-mono">
                  <ShieldCheck className="w-4 h-4" />
                  <span>3. DIMENSIÓN PROTEÍNA (Inicio, Calidad y Destino)</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-cyan-50/50 dark:bg-slate-900/60 border border-cyan-200 dark:border-cyan-900/50 space-y-1.5">
                    <strong className="text-cyan-900 dark:text-cyan-300 font-bold block">Eucariotas (Escaneo Kozak y Proteasoma 26S):</strong>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-xs">
                      Ribosoma 80S escanea el extremo 5' Cap hasta encontrar el codón AUG en contexto Kozak. Chaperonas Hsp70/Hsp90 y control en RE (UPR). Vía secretora coordinada por SRP. Degradación selectiva por cascada de poliubicuitinación y proteasoma 26S.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-amber-50/50 dark:bg-slate-900/60 border border-amber-200 dark:border-amber-900/50 space-y-1.5">
                    <strong className="text-amber-900 dark:text-amber-300 font-bold block">Bacterias (Shine-Dalgarno y Proteasas Clp):</strong>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-xs">
                      Ribosoma 70S empareja directamente el ARNr 16S con la secuencia Shine-Dalgarno (AGGAGG). Chaperonas GroEL-GroES y Trigger Factor. Degradación proteica directa por proteasas ATPasas ClpXP, ClpAP y Lon sin ubiquitina.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex justify-end">
              <button
                onClick={() => setShowComparisonModal(false)}
                className="px-5 py-2 text-xs font-bold bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl transition-colors"
              >
                Entendido, Volver a la Ruta
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
