import React, { useState } from 'react';
import { DIAGNOSTIC_CASES_DATA, STATIONS_DATA, DiagnosticCase } from '../data/geneRegulationData';
import { 
  ShieldAlert, 
  HelpCircle, 
  FileSpreadsheet, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  RotateCcw, 
  Lightbulb,
  FileCheck,
  ChevronRight
} from 'lucide-react';

interface CaseAnalysisWorkbenchProps {
  onGoToStation: (stationId: string) => void;
}

export const CaseAnalysisWorkbench: React.FC<CaseAnalysisWorkbenchProps> = ({
  onGoToStation,
}) => {
  const [activeCaseIndex, setActiveCaseIndex] = useState<number>(0);
  const currentCase: DiagnosticCase = DIAGNOSTIC_CASES_DATA[activeCaseIndex];

  // Progressive hints state (per case)
  const [revealedHintLevels, setRevealedHintLevels] = useState<{ [caseId: string]: number }>({
    'case-1': 0,
    'case-2': 0,
    'case-3': 0,
  });

  // Diagnostic submission form state
  const [selectedStationId, setSelectedStationId] = useState<string>('');
  const [selectedFailureType, setSelectedFailureType] = useState<'cantidad' | 'calidad' | 'ambas' | ''>('');
  const [submittedCases, setSubmittedCases] = useState<{ [caseId: string]: boolean }>({});
  const [studentNotes, setStudentNotes] = useState<{ [caseId: string]: string }>({});

  const currentHintLevel = revealedHintLevels[currentCase.id] || 0;
  const isSubmitted = !!submittedCases[currentCase.id];

  const handleRevealNextHint = () => {
    if (currentHintLevel < 3) {
      setRevealedHintLevels({
        ...revealedHintLevels,
        [currentCase.id]: currentHintLevel + 1,
      });
    }
  };

  const handleSubmitDiagnosis = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedStationId || !selectedFailureType) return;
    setSubmittedCases({
      ...submittedCases,
      [currentCase.id]: true,
    });
  };

  const handleResetCurrentCase = () => {
    setSubmittedCases({
      ...submittedCases,
      [currentCase.id]: false,
    });
    setSelectedStationId('');
    setSelectedFailureType('');
  };

  const isStationCorrect = selectedStationId === currentCase.targetStationId;
  const isFailureTypeCorrect = selectedFailureType === currentCase.primaryFailureType;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-10">
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono text-amber-700 dark:text-amber-400 font-bold">
          <span>SECCIÓN 06</span>
          <span aria-hidden="true">·</span>
          <span>TALLER DE RESOLUCIÓN DE PROBLEMAS</span>
          <span aria-hidden="true">·</span>
          <span>DIAGNÓSTICO BASADO EN MECANISMOS</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
          Casos de Análisis: Diagnóstico en los Puntos de Control
        </h1>
        <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 max-w-3xl leading-relaxed">
          Como investigador en biología molecular, debes deducir en qué <strong>punto de control de la ruta</strong> se produjo el fallo 
          a partir de los síntomas y datos de herramientas de análisis experimental. Utiliza las pistas progresivas si te encuentras bloqueado.
        </p>
      </div>

      {/* Case Selector Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {DIAGNOSTIC_CASES_DATA.map((cs, idx) => {
          const isCurrent = idx === activeCaseIndex;
          const caseSubmitted = !!submittedCases[cs.id];

          return (
            <button
              key={cs.id}
              onClick={() => {
                setActiveCaseIndex(idx);
                setSelectedStationId('');
                setSelectedFailureType('');
              }}
              className={`p-4 sm:p-5 rounded-2xl text-left transition-all border flex flex-col justify-between ${
                isCurrent
                  ? 'bg-amber-50 dark:bg-slate-900 border-amber-500 shadow-md ring-2 ring-amber-500/30'
                  : 'bg-white dark:bg-slate-950/60 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900/60 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <div className="space-y-1">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-amber-700 dark:text-amber-400 font-bold uppercase">
                    CASO CLÍNICO 0{cs.caseNumber}
                  </span>
                  {caseSubmitted && (
                    <span className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1 text-[10px]">
                      <CheckCircle2 className="w-3 h-3" /> Resuelto
                    </span>
                  )}
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-200 line-clamp-2">
                  {cs.title}
                </div>
              </div>
              <div className="text-[10px] text-slate-500 font-mono mt-3">
                {cs.organism}
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Case Workspace */}
      <div className="rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-8 shadow-sm dark:shadow-xl transition-colors">
        {/* Case Title and Vignette */}
        <div className="space-y-4 border-b border-slate-200 dark:border-slate-800 pb-6">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold uppercase px-2.5 py-0.5 rounded bg-amber-100 dark:bg-amber-500/20 border border-amber-300 dark:border-amber-500/40 text-amber-900 dark:text-amber-300">
              Caso {currentCase.caseNumber}
            </span>
            <span className="text-xs text-slate-600 dark:text-slate-400 font-mono">
              Modelo Biológico: {currentCase.organism}
            </span>
          </div>

          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100">
            {currentCase.title}
          </h2>

          <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/90 text-xs sm:text-sm text-slate-800 dark:text-slate-300 leading-relaxed space-y-2">
            <div className="text-[11px] font-mono text-amber-800 dark:text-amber-400 font-bold uppercase">
              Anamnesis / Viñeta Molecular:
            </div>
            <p>{currentCase.clinicalVignette}</p>
          </div>
        </div>

        {/* Laboratory Findings Table */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-slate-900 dark:text-slate-200 flex items-center gap-2">
            <FileSpreadsheet className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>Herramientas de Análisis Experimental y Evidencias (Northern, Western, Secuenciación)</span>
          </h3>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <thead className="bg-slate-100 dark:bg-slate-900/80 text-slate-700 dark:text-slate-400 font-mono text-[11px] sm:text-xs border-b border-slate-200 dark:border-slate-800 font-bold">
                <tr>
                  <th className="py-3 px-4 w-1/4">Técnica Analítica</th>
                  <th className="py-3 px-4 w-1/3">Resultado Experimental</th>
                  <th className="py-3 px-4 text-cyan-800 dark:text-cyan-300">Interpretación Mecanística</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800/70">
                {currentCase.laboratoryFindings.map((finding, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-colors">
                    <td className="py-3.5 px-4 font-mono font-bold text-slate-900 dark:text-slate-200">
                      {finding.technique}
                    </td>
                    <td className="py-3.5 px-4 text-slate-800 dark:text-slate-300 font-medium">
                      {finding.result}
                    </td>
                    <td className="py-3.5 px-4 text-slate-600 dark:text-slate-400 font-sans">
                      {finding.interpretation}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Step-by-Step Progressive Hints Section */}
        <div className="space-y-4 pt-2">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 dark:text-slate-200 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span>Pistas Biomoleculares Escalonadas ({currentHintLevel}/3 Reveladas)</span>
            </h3>

            {currentHintLevel < 3 && (
              <button
                onClick={handleRevealNextHint}
                className="px-3.5 py-1.5 text-xs font-bold text-amber-900 dark:text-amber-300 bg-amber-100 dark:bg-amber-500/10 hover:bg-amber-200 dark:hover:bg-amber-500/20 border border-amber-300 dark:border-amber-500/30 rounded-lg transition-colors flex items-center gap-1.5 shadow-2xs"
              >
                <Lightbulb className="w-3.5 h-3.5" />
                <span>Desbloquear Pista Nivel {currentHintLevel + 1}</span>
              </button>
            )}
          </div>

          {currentHintLevel === 0 ? (
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-500 italic">
              Intenta deducir el punto de control afectado analizando la tabla de herramientas de análisis experimental antes de consultar las pistas.
            </div>
          ) : (
            <div className="space-y-3">
              {currentCase.progressiveHints.slice(0, currentHintLevel).map((hint) => (
                <div
                  key={hint.level}
                  className="p-4 sm:p-5 rounded-2xl bg-amber-50/80 dark:bg-amber-950/20 border border-amber-300 dark:border-amber-500/30 space-y-1 text-xs sm:text-sm"
                >
                  <div className="font-mono text-amber-800 dark:text-amber-400 font-bold uppercase flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <span>{hint.title}</span>
                  </div>
                  <p className="text-slate-800 dark:text-slate-300 leading-relaxed pt-0.5">
                    {hint.content}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Diagnostic Form / Submission Workbench */}
        <div className="rounded-2xl p-6 sm:p-7 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Veredicto Diagnóstico del Estudiante</span>
            </h3>

            {isSubmitted && (
              <button
                onClick={handleResetCurrentCase}
                className="text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 flex items-center gap-1 font-mono font-medium"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reintentar Diagnóstico</span>
              </button>
            )}
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmitDiagnosis} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Question 1: Target Toll Station */}
                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-300 block">
                    1. ¿En qué punto de control molecular ocurrió el fallo primario?
                  </label>
                  <select
                    value={selectedStationId}
                    onChange={(e) => setSelectedStationId(e.target.value)}
                    required
                    className="w-full py-2.5 px-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-slate-200 focus:outline-none focus:border-cyan-500 font-medium"
                  >
                    <option value="">-- Selecciona un punto de control --</option>
                    <optgroup label="Nivel ADN (Acceso al Molde)">
                      {STATIONS_DATA.filter((s) => s.molecularLevel === 'ADN').map((s) => (
                        <option key={s.id} value={s.id}>
                          Punto de Control {s.stationNumber}: {s.title}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Nivel ARN (Eucariotas)">
                      {STATIONS_DATA.filter((s) => s.molecularLevel === 'ARN' && s.category === 'eukaryote').map((s) => (
                        <option key={s.id} value={s.id}>
                          Punto de Control {s.stationNumber}: {s.title}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Nivel ARN (Bacterias)">
                      {STATIONS_DATA.filter((s) => s.molecularLevel === 'ARN' && s.category === 'prokaryote').map((s) => (
                        <option key={s.id} value={s.id}>
                          Punto de Control {s.stationNumber}: {s.title}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Nivel Proteína (Destino Funcional)">
                      {STATIONS_DATA.filter((s) => s.molecularLevel === 'Proteína').map((s) => (
                        <option key={s.id} value={s.id}>
                          Punto de Control {s.stationNumber}: {s.title}
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </div>

                {/* Question 2: Failure Type */}
                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-300 block">
                    2. ¿Cuál es la naturaleza primordial del fallo?
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'cantidad', label: 'CANTIDAD' },
                      { id: 'calidad', label: 'CALIDAD' },
                      { id: 'ambas', label: 'AMBAS' },
                    ].map((opt) => (
                      <button
                        type="button"
                        key={opt.id}
                        onClick={() => setSelectedFailureType(opt.id as any)}
                        className={`py-2 px-3 text-xs sm:text-sm font-mono font-bold rounded-lg border transition-colors ${
                          selectedFailureType === opt.id
                            ? 'bg-cyan-100 dark:bg-cyan-500/20 text-cyan-900 dark:text-cyan-300 border-cyan-500 shadow-xs'
                            : 'bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Student notes / deduction text */}
              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-300 block">
                  3. Justificación Mecanística (Breve hipótesis del estudiante):
                </label>
                <textarea
                  value={studentNotes[currentCase.id] || ''}
                  onChange={(e) =>
                    setStudentNotes({ ...studentNotes, [currentCase.id]: e.target.value })
                  }
                  rows={2}
                  placeholder="Explica cómo se conectan la mutación/estrés observado con las herramientas de análisis experimental..."
                  className="w-full p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-slate-200 focus:outline-none focus:border-cyan-500 placeholder:text-slate-400 dark:placeholder:text-slate-600"
                />
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  disabled={!selectedStationId || !selectedFailureType}
                  className="px-6 py-2.5 text-xs sm:text-sm font-bold text-white dark:text-slate-950 bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-400 dark:hover:bg-emerald-300 disabled:opacity-40 disabled:cursor-not-allowed rounded-lg transition-colors shadow-xs"
                >
                  Evaluar Diagnóstico Molecular
                </button>
              </div>
            </form>
          ) : (
            /* Debrief Evaluation Panel */
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div
                  className={`p-4 rounded-xl border flex items-start gap-3 ${
                    isStationCorrect
                      ? 'bg-emerald-50 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-500/40 text-emerald-900 dark:text-emerald-300'
                      : 'bg-rose-50 dark:bg-rose-950/20 border-rose-300 dark:border-rose-500/40 text-rose-900 dark:text-rose-300'
                  }`}
                >
                  {isStationCorrect ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                  )}
                  <div className="text-xs sm:text-sm space-y-1">
                    <span className="font-bold block">
                      {isStationCorrect ? '¡Punto de Control Correcto!' : 'Punto de Control Incorrecto'}
                    </span>
                    <p className="text-slate-700 dark:text-slate-300">
                      Punto de control real: <strong>{currentCase.targetStationName}</strong>.
                    </p>
                  </div>
                </div>

                <div
                  className={`p-4 rounded-xl border flex items-start gap-3 ${
                    isFailureTypeCorrect
                      ? 'bg-emerald-50 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-500/40 text-emerald-900 dark:text-emerald-300'
                      : 'bg-rose-50 dark:bg-rose-950/20 border-rose-300 dark:border-rose-500/40 text-rose-900 dark:text-rose-300'
                  }`}
                >
                  {isFailureTypeCorrect ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                  )}
                  <div className="text-xs sm:text-sm space-y-1">
                    <span className="font-bold block">
                      {isFailureTypeCorrect ? '¡Naturaleza Acertada!' : 'Naturaleza Incorrecta'}
                    </span>
                    <p className="text-slate-700 dark:text-slate-300">
                      Naturaleza de fallo primordial: <strong>{currentCase.primaryFailureType.toUpperCase()}</strong>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Debrief Card */}
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-cyan-300 dark:border-cyan-500/30 space-y-3 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400 font-bold uppercase">
                    RESOLUCIÓN Y ANÁLISIS MECANÍSTICO
                  </span>
                  <button
                    onClick={() => onGoToStation(currentCase.targetStationId)}
                    className="text-xs sm:text-sm text-cyan-700 dark:text-cyan-300 hover:text-cyan-800 dark:hover:text-cyan-200 underline font-mono font-medium flex items-center gap-1"
                  >
                    <span>Repasar el Punto de Control</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100">
                  {currentCase.correctDiagnosis}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed pt-1">
                  {currentCase.pedagogicalDebrief}
                </p>
              </div>

              {/* Advance to next case */}
              <div className="flex justify-end pt-2">
                {activeCaseIndex < DIAGNOSTIC_CASES_DATA.length - 1 ? (
                  <button
                    onClick={() => {
                      setActiveCaseIndex(activeCaseIndex + 1);
                      setSelectedStationId('');
                      setSelectedFailureType('');
                    }}
                    className="px-5 py-2.5 text-xs sm:text-sm font-bold text-white dark:text-slate-950 bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-400 dark:hover:bg-cyan-300 rounded-lg transition-colors flex items-center gap-2 shadow-xs"
                  >
                    <span>Siguiente Caso Clínico</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <div className="text-xs sm:text-sm text-emerald-700 dark:text-emerald-400 font-mono font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Has completado los tres casos clínicos del módulo.</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
