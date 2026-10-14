/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TopNavbar, AppTabType } from './components/TopNavbar';
import { SplashJourneyPortal } from './components/SplashJourneyPortal';
import { TollStationExplorer } from './components/TollStationExplorer';
import { CaseAnalysisWorkbench } from './components/CaseAnalysisWorkbench';
import { ComprehensiveGuideView } from './components/ComprehensiveGuideView';
import { AcademicSourcesView } from './components/AcademicSourcesView';
import { MolecularGlossary } from './components/MolecularGlossary';

export default function App() {
  const [activeTab, setActiveTab] = useState<AppTabType>('splash');
  const [targetStationId, setTargetStationId] = useState<string>('euk-1');
  const [targetMolecularLevel, setTargetMolecularLevel] = useState<'all' | 'ADN' | 'ARN' | 'Proteína'>('all');
  const [isGlossaryOpen, setIsGlossaryOpen] = useState<boolean>(false);
  const [activeGlossaryTermId, setActiveGlossaryTermId] = useState<string | null>(null);

  // Full journey start from splash
  const handleStartFullJourney = () => {
    setTargetStationId('euk-1');
    setTargetMolecularLevel('all');
    setActiveTab('eukaryote');
  };

  // Lineage selection from splash
  const handleSelectLineage = (lineage: 'eukaryote' | 'prokaryote') => {
    if (lineage === 'eukaryote') {
      setTargetStationId('euk-1');
      setActiveTab('eukaryote');
    } else {
      setTargetStationId('prok-1');
      setActiveTab('prokaryote');
    }
    setTargetMolecularLevel('all');
  };

  const handleGoToStationFromCase = (stationId: string) => {
    setTargetStationId(stationId);
    setTargetMolecularLevel('all');
    if (stationId.startsWith('prok-')) {
      setActiveTab('prokaryote');
    } else {
      setActiveTab('eukaryote');
    }
  };

  const handleOpenGlossaryWithTerm = (termId: string) => {
    setActiveGlossaryTermId(termId);
    setIsGlossaryOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#07090e] text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
      {/* 3-Zone Top Navbar with Font Size and Theme Switchers */}
      <TopNavbar
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        onOpenGlossary={() => {
          setActiveGlossaryTermId(null);
          setIsGlossaryOpen(true);
        }}
      />

      {/* Main Workspace Body */}
      <main className="flex-1">
        {activeTab === 'splash' && (
          <SplashJourneyPortal
            onStartFullJourney={handleStartFullJourney}
            onSelectLineage={handleSelectLineage}
            onGoToGuide={() => setActiveTab('guide')}
            onGoToSources={() => setActiveTab('sources')}
            onOpenGlossary={() => {
              setActiveGlossaryTermId(null);
              setIsGlossaryOpen(true);
            }}
          />
        )}

        {(activeTab === 'eukaryote' || activeTab === 'prokaryote') && (
          <TollStationExplorer
            key={activeTab}
            initialRoute={activeTab}
            initialStationId={targetStationId}
            initialMolecularLevel={targetMolecularLevel}
            onOpenGlossaryTerm={handleOpenGlossaryWithTerm}
            onRouteChange={(newRoute) => {
              setActiveTab(newRoute);
              setTargetStationId(newRoute === 'eukaryote' ? 'euk-1' : 'prok-1');
              setTargetMolecularLevel('all');
            }}
          />
        )}

        {activeTab === 'cases' && (
          <CaseAnalysisWorkbench
            onGoToStation={handleGoToStationFromCase}
          />
        )}

        {activeTab === 'guide' && (
          <ComprehensiveGuideView />
        )}

        {activeTab === 'sources' && (
          <AcademicSourcesView />
        )}
      </main>

      {/* Interactive Molecular Glossary Modal */}
      <MolecularGlossary
        isOpen={isGlossaryOpen}
        onClose={() => setIsGlossaryOpen(false)}
        selectedTermId={activeGlossaryTermId}
        onSelectTerm={(termId) => setActiveGlossaryTermId(termId)}
      />

      {/* Academic Institutional Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-900 bg-white dark:bg-[#05070a] py-6 px-6 text-center text-xs text-slate-600 dark:text-slate-500 space-y-1 transition-colors">
        <p className="font-medium text-slate-700 dark:text-slate-400">
          Biología Molecular y Genética Evolutiva · Guía Universitaria Interactiva
        </p>
        <p className="text-[11px] text-slate-500 dark:text-slate-600 font-mono">
          Rutas Separadas para Eucariotas y Bacterias · Dimensiones: ADN · ARN · Proteína y Modelo CQRF (Qué, Quién, Regula, Falla)
        </p>
      </footer>
    </div>
  );
}
