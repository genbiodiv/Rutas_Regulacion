/**
 * Base de datos conceptual y pedagógica para la Guía Universitaria:
 * "El Paradigma de la Ruta y los Puntos de Control: Regulación de la Expresión Génica"
 * Biología Molecular, Genética Evolutiva y Pedagogía Científica.
 * 
 * Claves técnicas libres de tildes/caracteres especiales.
 * Textos narrativos con ortografía académica y precisión mecanística rigurosa.
 */

export interface CQRFStation {
  id: string;
  stationNumber: number;
  category: 'eukaryote' | 'prokaryote';
  routeLabel: string;
  molecularLevel: 'ADN' | 'ARN' | 'Proteína';
  title: string;
  subtitle: string;
  cellularLocation: string;
  glossaryTermIds: string[];
  keyRegulators: {
    name: string;
    nature: string;
    action: string;
    glossaryId?: string;
  }[];
  lineageContext: string;
  queOcurre: string;
  quienParticipa: {
    name: string;
    role: string;
    type: 'enzyme' | 'factor' | 'rna' | 'complex' | 'structural';
    glossaryId?: string;
  }[];
  queRegula: string;
  regulatoryDecision: string;
  quePasaSiFalla: string;
  failureNature: 'cantidad' | 'calidad' | 'ambas';
  clinicalConsequence: string;
  evolutionaryInsight: string;
  comparativeBacteriaVsEukaryote?: {
    bacteria: string;
    eukaryote: string;
  };
  diagnosticMarkers: string[];
}

export interface DiagnosticCase {
  id: string;
  caseNumber: number;
  title: string;
  clinicalVignette: string;
  organism: string;
  lineage: 'eukaryote' | 'prokaryote';
  laboratoryFindings: {
    technique: string;
    result: string;
    interpretation: string;
  }[];
  progressiveHints: {
    level: number;
    title: string;
    content: string;
  }[];
  targetStationId: string;
  targetStationName: string;
  primaryFailureType: 'cantidad' | 'calidad' | 'ambas';
  correctDiagnosis: string;
  pedagogicalDebrief: string;
}

export const CENTRAL_MOTTO = "Regular la expresión génica significa controlar cuánto, cuándo, dónde y en qué forma funcional aparece el producto de un gen.";

export const INTRODUCTION_DATA = {
  paradigmShift: `Durante décadas, la biología celular y molecular se ha transmitido en las aulas mediante un modelo estático y lineal: ADN -> ARN -> Proteína. Bajo ese prisma tradicional, la regulación génica se reducía a un interruptor binario: el promotor está "encendido" o "apagado", gobernado casi en exclusiva por la afinidad de la ARN polimerasa y un par de factores de transcripción.

Esta guía rompe ese paradigma reduccionista. En las células vivas, la expresión génica no es un interruptor; es una carrera de obstáculos distribuida o un sistema continuo de aduanas y puntos de control moleculares. Cada molécula de información que se transcribe debe sortear una secuencia estricta de puntos de control biofísicos. Ningún gen se expresa de verdad simplemente por reclutar a la polimerasa; la expresión culmina únicamente si el producto supera cada filtro de cantidad, calidad, localización y estabilidad hasta adquirir su conformación biológicamente activa en la coordenada espacial correcta.`,
  quantityVsQuality: {
    description: `Para comprender las patologías moleculares y la fisiología celular moderna, es indispensable clasificar cualquier anomalía de expresión bajo la dicotomía entre cantidad y calidad:`,
    quantityFeatures: [
      {
        concept: "Problemas de CANTIDAD (Dosis Génica y Dinámica Temporal)",
        mechanism: "La molécula producida tiene una estructura primaria, plegamiento y función bioquímica totalmente normales, pero se encuentra en una concentración homeostática errónea (exceso o déficit) o aparece con un retraso cinético incompatible con la fisiología.",
        example: "Haploinsuficiencia por deleción de un alelo; sobreexpresión oncogénica de c-Myc por amplificación génica; respuesta atenuada a choque térmico por baja inducción de chaperonas."
      }
    ],
    qualityFeatures: [
      {
        concept: "Problemas de CALIDAD (Identidad Molecular y Destino Subcelular)",
        mechanism: "La molécula producida posee una identidad anómala, una alteración estructural en su marco de lectura, un plegamiento aberrante o es transportada hacia el compartimento subcelular equivocado donde no puede ejercer su función o resulta proteotóxica.",
        example: "Splicing aberrante que introduce un codón de terminación prematuro; proteína mal plegada que expone parches hidrofóbicos y forma oligómeros amiloides insolubles; pérdida de péptido señal que retiene en citosol una proteína que debía secretarse."
      }
    ]
  }
};

export const BIFURCATION_DATA = {
  stepZero: {
    title: "Dos Rutas Separadas: Procariotas vs. Eucariotas",
    subtitle: "Filosofías arquitectónicas independientes de la regulación génica",
    eukaryoteModel: {
      type: "Eucariota",
      title: "Ruta Eucariota: La Barrera Epigenética y el Control Multietapa",
      groundState: "Restrictivo (No por defecto)",
      spatialOrganization: "Compartimentado (Envoltura nuclear separa físicamente transcripción de traducción)",
      keyCharacteristics: [
        "El genoma desnudo no existe en condiciones fisiológicas: está empaquetado en nucleosomas octaméricos de histonas (H2A, H2B, H3, H4) y fibra cromatínica compacta.",
        "El estado basal transcripcional es restrictivo; la ARN polimerasa II no tiene acceso estérico a los promotores a menos que actúen complejos remodeladores dependientes de ATP (SWI/SNF) y modificadores covalentes de cromatina (HATs, HMTs).",
        "La separación espaciotemporal impuesta por la membrana nuclear crea una ventana crítica para el procesamiento exhaustivo del pre-ARNm (capping, splicing alternativo, poliadenilación y control de calidad antes de cruzar el poro nuclear).",
        "Regulación combinatoria: múltiples factores de transcripción basales y específicos, mediadores y enhancers distales coordinan la respuesta celular."
      ],
      evolutionaryAdvantage: "Permite una enorme complejidad morfológica, desarrollo pluricelular programado, tipos celulares diferenciados con el mismo genoma y múltiples niveles de refinamiento postranscripcional."
    },
    prokaryoteModel: {
      type: "Procariota",
      title: "Ruta Bacteriana: El Interruptor Metabólico y la Velocidad de Acoplamiento",
      groundState: "Permisivo (Sí por defecto con control de factores sigma y represores)",
      spatialOrganization: "Sin compartimentación (Transcripción y traducción colocalizadas en el citoplasma)",
      keyCharacteristics: [
        "El cromosoma bacteriano (nucleoide) no contiene nucleosomas histónicos; está libre de barreras cromatínicas densas.",
        "El estado basal de los promotores es mayoritariamente permisivo: la ARN polimerasa holoenzima (con su factor sigma correspondiente) se une directamente a las secuencias consenso -10 y -35.",
        "La regulación primaria se ejerce mediante represores y activadores alostéricos que responden directamente a concentraciones de metabolitos intracelulares (lactosa, triptófano, arabinosa).",
        "Transcripción acoplada a traducción instantánea: los ribosomas 70S comienzan a sintetizar la cadena polipeptídica sobre el extremo 5' del ARNm mientras la ARN polimerasa continúa sintetizando el extremo 3' (Expressoma).",
        "Vida media del ARNm extraordinariamente breve (1 a 3 minutos), lo que faculta a la bacteria a reprogramar su proteoma en minutos ante cambios ambientales drásticos."
      ],
      evolutionaryAdvantage: "Economía energética extrema, velocidad de duplicación celular rápida y plasticidad adaptativa inmediata ante fluctuaciones nutricionales."
    }
  }
};

export const STATIONS_DATA: CQRFStation[] = [
  // =========================================================================
  // RUTA EUCARIOTA COMPLETA (11 PUNTOS DE CONTROL: ADN -> ARN -> PROTEÍNA)
  // =========================================================================
  {
    id: "euk-1",
    stationNumber: 1,
    category: "eukaryote",
    routeLabel: "Ruta Eucariota",
    molecularLevel: "ADN",
    title: "Arquitectura de la Cromatina, Remodelación y Epigenética",
    subtitle: "Nucleosomas, Complejo SWI/SNF y Acetilación de Histonas",
    cellularLocation: "Núcleo celular (Eucromatina / Heterocromatina)",
    glossaryTermIds: ["cromatina-nucleosomas", "swi-snf-remodelacion"],
    lineageContext: "Exclusivo de Eucariotas: Barrera cromatínica restrictiva obligatoria antes de iniciar cualquier transcripción.",
    keyRegulators: [
      { name: "Complejo SWI/SNF (SMARCA4/BRG1)", nature: "Remodelador ATPasa", action: "Desliza o expulsa octámeros de histonas liberando la caja TATA y enhancers distales", glossaryId: "swi-snf-remodelacion" },
      { name: "Histona Acetiltransferasas (HATs: p300/CBP, GCN5)", nature: "Enzimas epigenéticas", action: "Acetilan lisinas en colas de histonas neutralizando cargas positivas para descondensar la cromatina", glossaryId: "cromatina-nucleosomas" },
      { name: "Desacetilasas de Histonas (HDACs 1-3)", nature: "Represores epigenéticos", action: "Remueven grupos acetilo restaurando la carga positiva y compactando la cromatina en heterocromatina" },
      { name: "Factores de Transcripción Basales (TFIID/TBP, TFIIB)", nature: "Complejo de preinicio (PIC)", action: "Reconocen la caja TATA e iniciadores reclutando a la ARN Polimerasa II" }
    ],
    queOcurre: "En eucariotas, el ADN genómico está empaquetado en nucleosomas (octámeros de histonas H2A, H2B, H3, H4 envueltos por 147 pb de ADN), confiriendo un estado basal restrictivo donde la ARN Polimerasa II no tiene acceso al promotor. Complejos remodeladores dependientes de ATP (SWI/SNF) y acetiltransferasas (HATs) modifican la cromatina para exponer secuencias reguladoras a factores basales y específicos.",
    quienParticipa: [
      { name: "Octámero de Histonas", role: "Unidad estructural proteica que envuelve el ADN formando el nucleosoma", type: "structural", glossaryId: "cromatina-nucleosomas" },
      { name: "Complejo SWI/SNF", role: "Remodelador dependiente de ATP que desplaza nucleosomas", type: "complex", glossaryId: "swi-snf-remodelacion" },
      { name: "HATs y HDACs", role: "Enzimas antagónicas de acetilación y desacetilación de histonas", type: "enzyme", glossaryId: "cromatina-nucleosomas" },
      { name: "TFIID y TBP (TATA-binding protein)", role: "Reconocen el núcleo del promotor y coordinan el complejo PIC", type: "factor" }
    ],
    queRegula: "¿Tiene la maquinaria basal acceso físico al gen? Regula la tasa de encendido del locus y el silenciamiento epigenético tejido-específico.",
    regulatoryDecision: "Apertura permisiva de cromatina en respuesta a programas de diferenciación celular o señales extracelulares.",
    quePasaSiFalla: "Hipermetilación de islas CpG o hipoacetilación aberrante provoca el silenciamiento de genes supresores de tumores (ej. p16, BRCA1). Mutaciones en remodeladores impiden el encendido de genes del desarrollo.",
    failureNature: "cantidad",
    clinicalConsequence: "Síndrome de Coffin-Siris por mutaciones en subunidades SWI/SNF (SMARCA4/ARID1B); Síndrome de Rubinstein-Taybi por defectos en CBP/p300; silenciamiento tumoral.",
    evolutionaryInsight: "La arquitectura de cromatina en eucariotas permitió que un único genoma codifique cientos de tipos celulares especializados en organismos pluricelulares gracias a paisajes epigenéticos diferenciados.",
    diagnosticMarkers: ["ATAC-Seq para mapear picos de accesibilidad abierta de cromatina", "ChIP-Seq para marcas activas (H3K4me3, H3K27ac) vs represivas (H3K27me3)", "Secuenciación con bisulfito para metilación de ADN"]
  },
  {
    id: "euk-2",
    stationNumber: 2,
    category: "eukaryote",
    routeLabel: "Ruta Eucariota",
    molecularLevel: "ARN",
    title: "Transcripción y Procesamiento Cotranscripcional del pre-ARNm",
    subtitle: "Capping 5', Poliadenilación 3' y Splicing Alternativo por el Espliceosoma",
    cellularLocation: "Núcleo celular (Asociado al dominio CTD de la ARN Polimerasa II)",
    glossaryTermIds: ["espliceosoma", "splicing-alternativo"],
    lineageContext: "Exclusivo de Eucariotas: El 95% de los genes humanos multiexónicos sufren corte y empalme alternativo coordinado cotranscripcionalmente.",
    keyRegulators: [
      { name: "ARN Polimerasa II (Dominio CTD fosforilado)", nature: "Enzima nuclear y andamio", action: "Fosforilaciones en Ser5 y Ser2 reclutan secuencialmente la maquinaria de Capping, Espliceosoma y Poliadenilación" },
      { name: "Espliceosoma (snRNPs U1, U2, U4/U6, U5)", nature: "Megacomplejo catalítico RNP", action: "Reconoce los dinucleótidos invariables GU (5') y AG (3') eliminando intrones mediante dos transesterificaciones", glossaryId: "espliceosoma" },
      { name: "Proteínas SR y hnRNPs", nature: "Factores de corte alternativo", action: "Las proteínas SR promueven la inclusión de exones uniéndose a ESEs; las hnRNPs bloquean el corte uniéndose a ESSs", glossaryId: "splicing-alternativo" },
      { name: "CPSF / CstF", nature: "Complejo de poliadenilación", action: "Reconocen la señal AAUAAA, escinden el extremo 3' y reclutan a la Poli(A) Polimerasa (PAP)" }
    ],
    queOcurre: "La ARN Polimerasa II transcribe el gen mientras su CTD fosforilado recluta de forma cotranscripcional la maquinaria de modificación: adición de la caperuza de 7-metilguanosina (Cap 5'), escisión endonucleolítica y síntesis de la cola poli-A de ~200 adeninas (Poliadenilación 3'), y eliminación de intrones mediante transesterificación orquestada por el espliceosoma (Splicing).",
    quienParticipa: [
      { name: "ARN Polimerasa II", role: "Enzima nuclear de transcripción cuyo CTD fosforilado sirve de plataforma", type: "enzyme" },
      { name: "Complejo de Capping (Ceg1, Abd1)", role: "Transfiere monofosfato de guanina 5'-5' y metila N7", type: "complex" },
      { name: "Espliceosoma (snRNPs U1-U6)", role: "Ribonucleoproteínas que reconocen sitios donor, ramificación y aceptor", type: "complex", glossaryId: "espliceosoma" },
      { name: "Proteínas SR y hnRNPs", role: "Reguladores tejido-específicos de inclusión o salto de exones", type: "factor", glossaryId: "splicing-alternativo" }
    ],
    queRegula: "¿Qué isoforma proteica codifica el transcrito y con qué estructura primaria? Diversificación de variantes a partir de un único locus génico.",
    regulatoryDecision: "Diversificación combinatoria del proteoma y control de retención nuclear.",
    quePasaSiFalla: "Mutaciones en dinucleótidos invariables GU o AG, o en enhancers de corte, provocan retención de intrones, exclusión de exones esenciales o activación de sitios crípticos con desfasamiento de lectura.",
    failureNature: "calidad",
    clinicalConsequence: "β-Talasemia por sitios de splicing crípticos en HBB; distrofia muscular de Duchenne por deleciones de exones en DMD; ataxia telangiectasia por cortes aberrantes en ATM.",
    evolutionaryInsight: "El splicing alternativo permite que ~20.000 genes humanos generen más de 100.000 isoformas proteicas distintas, multiplicando exponencialmente la complejidad funcional sin expandir el genoma.",
    diagnosticMarkers: ["RT-PCR con cebadores flanqueantes que revelan amplicones de peso anómalo", "Secuenciación de ARN (RNA-Seq) que detecta uniones exónicas aberrantes (junction reads)"]
  },
  {
    id: "euk-3",
    stationNumber: 3,
    category: "eukaryote",
    routeLabel: "Ruta Eucariota",
    molecularLevel: "ARN",
    title: "Vigilancia de Calidad del ARNm y Decaimiento NMD",
    subtitle: "Nonsense-Mediated mRNA Decay contra Codones de Parada Prematuros",
    cellularLocation: "Transición Núcleo-Citoplasma y Ribosomas citoplásmicos (Traducción pionera)",
    glossaryTermIds: ["nmd", "complejo-ejc"],
    lineageContext: "Exclusivo de Eucariotas: Sistema centinela que previene la acumulación de proteínas truncadas tóxicas.",
    keyRegulators: [
      { name: "Complejo EJC (Exon Junction Complex)", nature: "Marca ribonucleoproteica", action: "Se deposita 20-24 nt río arriba de cada unión exón-exón tras la eliminación de intrones", glossaryId: "complejo-ejc" },
      { name: "UPF1 (ARN Helicasa dependiente de ATP)", nature: "Sensor central de NMD", action: "Se hiperfosforila al interaccionar con ribosomas estancados frente a un complejo EJC no desalojado", glossaryId: "nmd" },
      { name: "SMG1 (Proteína quinasa)", nature: "Quinasa activadora", action: "Fosforila a UPF1 reclutando las nucleasas XRN1 y el Exosoma para degradar el ARNm defectuoso", glossaryId: "nmd" }
    ],
    queOcurre: "Durante la primera ronda pionera de traducción en el citoplasma, el ribosoma inspecciona el ARNm. Si encuentra un codón de parada prematuro (PTC) situado a más de 50-54 nucleótidos río arriba de la última unión entre exones (marcada por el complejo EJC), el ribosoma se detiene y activa la cascada de NMD mediada por UPF1, desestabilizando y destruyendo el ARNm.",
    quienParticipa: [
      { name: "Complejo EJC (eIF4AIII, Y14, MAGOH)", role: "Marca física de posición de los exones empalmados", type: "complex", glossaryId: "complejo-ejc" },
      { name: "UPF1, UPF2 y UPF3", role: "Complejo de detección que conecta el ribosoma estancado con el EJC", type: "factor", glossaryId: "nmd" },
      { name: "Quinasa SMG1", role: "Fosforila a UPF1 para ordenar la lisis del ARNm", type: "enzyme", glossaryId: "nmd" },
      { name: "Exonucleasa XRN1 y Exosoma", role: "Degradan el transcrito aberrante desde los extremos 5' y 3'", type: "complex" }
    ],
    queRegula: "¿Contiene el ARNm instrucciones de longitud completa o codones de parada erróneos? Destrucción selectiva antes de que produzca proteínas defectuosas.",
    regulatoryDecision: "Eliminación profiláctica de transcritos aberrantes para impedir efectos dominante-negativos.",
    quePasaSiFalla: "Si el NMD falla, se traducen proteínas truncas que forman polímeros tóxicos o secuestran complejos nativos. Si el NMD es hiperactivo frente a mutaciones sin sentido inocuas, produce pérdida total de cantidad.",
    failureNature: "ambas",
    clinicalConsequence: "Fibrosis quística severa por mutaciones con codón prematuro en CFTR (G542X, W1282X); formas graves de anemia de Fanconi y retinoblastoma.",
    evolutionaryInsight: "El NMD también regula transcritos fisiológicos normales que contienen marcos abiertos río arriba (uORFs) o intrones con señales de parada retenidos deliberadamente para silenciar la expresión.",
    diagnosticMarkers: ["Disminución drástica de los niveles de ARNm en Northern Blot con pre-ARNm nuclear normal", "Restauración de niveles de ARNm tras inhibición farmacológica de la traducción con cicloheximida"]
  },
  {
    id: "euk-4",
    stationNumber: 4,
    category: "eukaryote",
    routeLabel: "Ruta Eucariota",
    molecularLevel: "ARN",
    title: "Exportación a Través del Poro Nuclear (NPC) y Localización",
    subtitle: "Filtro TAP/NXF1 y Enrutamiento por Zipcodes de ARNm",
    cellularLocation: "Envoltura Nuclear (Complejo del Poro Nuclear) y Citoesqueleto citoplásmico",
    glossaryTermIds: ["poro-nuclear-npc", "tap-nxf1"],
    lineageContext: "Exclusivo de Eucariotas: La envoltura nuclear actúa como una frontera biofísica infranqueable para ARNms no madurados.",
    keyRegulators: [
      { name: "Complejo TAP/NXF1 y NXT1 (p15)", nature: "Receptor de exportación", action: "Interacciona transitoriamente con las repeticiones fenilalanina-glicina (FG) del NPC para cruzar el canal acuoso", glossaryId: "tap-nxf1" },
      { name: "Dbp5 (Helicasa DEAD-box)", nature: "Helicasa citoplásmica", action: "Remueve a TAP/NXF1 del ARNm al emerger en el citosol consumiendo ATP, confiriendo direccionalidad irreversible" },
      { name: "ZBP1 (Proteína de unión a Zipcode)", nature: "Factor de transporte", action: "Reconoce motivos en 3'-UTR reprimiendo la traducción hasta que el mRNP llega a su destino citoesquelético" }
    ],
    queOcurre: "El ARNm maduro forma una partícula mRNP competente que recluta al heterodímero TAP/NXF1-NXT1. Este complejo interacciona con los dominios ricos en fenilalanina-glicina (FG-repeats) de las nucleoporinas del NPC para translocar el mRNP al citoplasma. En la cara citosólica, Dbp5 retira a TAP/NXF1 impidiendo el retorno al núcleo. Motores moleculares (dineínas/quinesinas) transportan el ARNm hacia polos celulares específicos guiados por 'zipcodes' en 3'-UTR.",
    quienParticipa: [
      { name: "Complejo del Poro Nuclear (NPC)", role: "Canal acuoso macromolecular de ~120 nm formado por nucleoporinas", type: "structural", glossaryId: "poro-nuclear-npc" },
      { name: "TAP/NXF1 y NXT1", role: "Receptores de exportación que se unen al ARNm maduro procesado", type: "factor", glossaryId: "tap-nxf1" },
      { name: "ARN Helicasa Dbp5", role: "Desaloja a TAP/NXF1 en la cara citosólica acoplada a hidrólisis de ATP", type: "enzyme" },
      { name: "Motores Citoesqueléticos", role: "Transportan el mRNP sobre microtúbulos hacia axones o polos celulares", type: "complex" }
    ],
    queRegula: "¿Dónde y cuándo cruza el ARNm al citosol, y en qué coordenada intracelular se concentra? Regula la distribución espacial de la traducción.",
    regulatoryDecision: "Asimetría proteica celular y prevención de escape nuclear de transcritos inmaduros con intrones retenidos.",
    quePasaSiFalla: "Transcritos sin procesar quedan retenidos en el núcleo en 'speckles' o son degradados por el exosoma nuclear. Fallos en zipcodes provocan traducción ectópica en compartimentos erróneos.",
    failureNature: "calidad",
    clinicalConsequence: "Atrofia muscular espinal (fallo en SMN y transporte de ARNm axonal); defectos graves en plasticidad sináptica y memoria; microcefalia por deslocalización en células madre neurales.",
    evolutionaryInsight: "La localización de ARNm de beta-actina en conos de crecimiento axonal permite síntesis local inmediata sin esperar el transporte de proteínas desde el soma a distancias de más de 1 metro.",
    diagnosticMarkers: ["Hibridación in situ fluorescente (FISH) que evidencia acúmulo patológico de ARNm en focos nucleares", "Fraccionamiento subcelular con acumulación de transcritos en la fracción nuclear"]
  },
  {
    id: "euk-5",
    stationNumber: 5,
    category: "eukaryote",
    routeLabel: "Ruta Eucariota",
    molecularLevel: "ARN",
    title: "Estabilidad del ARNm y MicroARNs (miRNA/siRNA)",
    subtitle: "Elementos ARE, Complejo CCR4-NOT y Silenciamiento por RISC/Ago2",
    cellularLocation: "Citosol / Cuerpos P (Processing Bodies) / Gránulos de Estrés",
    glossaryTermIds: ["elementos-are", "microrna-mirna", "complejo-risc"],
    lineageContext: "Exclusivo de Eucariotas: Red combinatoria postranscripcional que afina la concentración de más del 60% de los genes humanos.",
    keyRegulators: [
      { name: "Tristetraprolina (TTP)", nature: "Proteína desestabilizadora", action: "Se une a secuencias AUUUA (AREs) en 3'-UTR y recluta al complejo desadenilasa CCR4-NOT acelerando la degradación", glossaryId: "elementos-are" },
      { name: "HuR (Hu-antígeno R)", nature: "Proteína estabilizadora", action: "Compite con TTP sobre elementos ARE, bloqueando el acceso a nucleasas y aumentando la vida media del ARNm", glossaryId: "elementos-are" },
      { name: "Complejo miRISC (Ago2 / miRNA)", nature: "Complejo de silenciamiento", action: "Aparea su secuencia semilla con el 3'-UTR reprimiendo la traducción y reclutando desadenilasas", glossaryId: "complejo-risc" },
      { name: "Complejo Desadenilasa CCR4-NOT", nature: "Megacomplejo catalítico", action: "Elimina progresivamente la cola poli-A desde 3' a 5', detonando el decapping por DCP2 y la lisis por XRN1" }
    ],
    queOcurre: "La vida media del ARNm en eucariotas varía desde 15 minutos hasta más de 24 horas. Elementos cis en 3'-UTR (secuencias ricas en AU - AREs) son reconocidos por proteínas que reclutan desadenilasas (CCR4-NOT) o las bloquean (HuR). En paralelo, microARNs procesados por Drosha y Dicer se cargan en el complejo RISC con una proteína Argonauta (Ago2); el apareamiento de bases induce represión traduccional y degradación del transcrito diana.",
    quienParticipa: [
      { name: "Elementos ARE en 3'-UTR", role: "Motivos AUUUA que modulan la degradación de citocinas y factores de transcripción", type: "structural", glossaryId: "elementos-are" },
      { name: "TTP y HuR", role: "Proteínas antagónicas que aceleran o impiden la desadenilación", type: "factor", glossaryId: "elementos-are" },
      { name: "MicroARN guía (miRNA)", role: "ARN monocatenario de ~22 nt que dirige al complejo RISC a sus dianas", type: "rna", glossaryId: "microrna-mirna" },
      { name: "Argonauta (Ago2)", role: "Endonucleasa central del complejo RISC", type: "enzyme", glossaryId: "complejo-risc" }
    ],
    queRegula: "¿Durante cuánto tiempo estará disponible el ARNm y en qué dosis final? Control cuantitativo estricto del número de proteínas sintetizadas por molécula de ARNm.",
    regulatoryDecision: "Apagado dinámico de señales transitorias (citocinas, ciclo celular) y ajuste fino combinatorio de redes génicas.",
    quePasaSiFalla: "La estabilización patológica de ARNm de citocinas genera inflamación crónica destructiva. La pérdida de microARNs supresores de tumores (miR-15/16, let-7) desata la sobreexpresión de oncogenes (BCL2, RAS).",
    failureNature: "cantidad",
    clinicalConsequence: "Artritis autoinmune severa por deleción de TTP con sobreexpresión de TNF-alfa; Leucemia linfocítica crónica por pérdida de miR-15a/16-1; Glioblastoma multiforme por sobreexpresión de miR-21.",
    evolutionaryInsight: "Los microARNs permitieron calibrar con precisión milimétrica la dosis proteica sin necesidad de alterar las secuencias codificantes del genoma en metazoos pluricelulares.",
    diagnosticMarkers: ["Ensayos de pulso y caza con actinomicina D para medir la cinética de caída del ARNm", "Perfilado de expresión de microARNs por sRNA-Seq o RT-qPCR cuantitativo"]
  },
  {
    id: "euk-6",
    stationNumber: 6,
    category: "eukaryote",
    routeLabel: "Ruta Eucariota",
    molecularLevel: "Proteína",
    title: "Inicio de la Traducción Eucariota (Ribosoma 80S y Escaneo)",
    subtitle: "Complejo eIF4F, Contexto Kozak y Respuesta Integrada al Estrés por eIF2α",
    cellularLocation: "Citoplasma celular (Ribosomas 80S citosólicos y asociados al RE)",
    glossaryTermIds: ["contexto-kozak"],
    lineageContext: "Exclusivo de Eucariotas: Inicio dependiente de Caperuza 5' con escaneo lineal por la subunidad 40S hasta encontrar el codón AUG en contexto Kozak.",
    keyRegulators: [
      { name: "eIF4E (Proteína de unión a Cap)", nature: "Factor limitante de inicio", action: "Reconoce la 7-metilguanosina 5'; regulado por proteínas 4E-BP que lo secuestran cuando están desfosforiladas" },
      { name: "eIF2 (GTPasa del complejo ternario)", nature: "Factor iniciador de metionina", action: "Carga el Met-tRNAi en la subunidad 40S; su fosforilación en Ser51 por quinasas de estrés apaga la traducción global" },
      { name: "Kinasas de eIF2α (PERK, GCN2, PKR, HRI)", nature: "Sensores de estrés celular", action: "Fosforilan a eIF2α en respuesta a estrés de RE, inanición de aminoácidos, infección viral o deficiencia de hemo" },
      { name: "Secuencia Kozak (gccRccAUGG)", nature: "Elemento nucleotídico cis", action: "Optimiza el reconocimiento del codón de inicio AUG por el complejo 43S durante el escaneo lineal", glossaryId: "contexto-kozak" }
    ],
    queOcurre: "El complejo de preinicio 43S (subunidad 40S unida a eIF2-GTP-Met-tRNAi) es reclutado a la caperuza 5' por el complejo eIF4F (eIF4E, eIF4G, eIF4A). La subunidad 40S escanea linealmente el 5'-UTR hasta identificar el codón AUG en un contexto óptimo de Kozak (CRCCaugG), momento en que eIF5 induce la hidrólisis de GTP en eIF2, se ensambla la subunidad 60S formando el ribosoma 80S y comienza la elongación. La fosforilación de eIF2α por quinasas de estrés bloquea el intercambio de GDP por GTP e inhibe globalmente la síntesis proteica.",
    quienParticipa: [
      { name: "Complejo eIF4F (eIF4E, eIF4G, eIF4A)", role: "Reconoce el Cap 5' y desenrolla la estructura secundaria del 5'-UTR", type: "complex" },
      { name: "Factor eIF2 (Heterotrímero α, β, γ)", role: "Carga el Met-tRNAi iniciador dependiente de GTP para formar el complejo ternario", type: "factor" },
      { name: "Quinasas de eIF2α (PERK, PKR, GCN2, HRI)", role: "Fosforilan eIF2α en respuesta a estrés de RE, virus o inanición", type: "enzyme" },
      { name: "Proteínas 4E-BP", role: "Represores traduccionales controlados por la ruta de señalización mTORC1", type: "factor" }
    ],
    queRegula: "¿A qué velocidad general o selectiva se sintetizan las proteínas? Regula la tasa global de traducción según el estado energético y activa transcritos de supervivencia (ej. ATF4).",
    regulatoryDecision: "Control de encendido de la síntesis proteica en respuesta a nutrientes (mTOR) y estrés celular (Respuesta Integrada al Estrés).",
    quePasaSiFalla: "La sobreactivación de eIF4E promueve proliferación tumoral y resistencia apoptótica. Mutaciones en el contexto Kozak reducen drásticamente la eficiencia de traducción.",
    failureNature: "cantidad",
    clinicalConsequence: "Síndrome VWM (Vanishing White Matter / Leucodistrofia infantil) por mutaciones en el factor de intercambio eIF2B; transformación tumoral por hiperactivación de eIF4E.",
    evolutionaryInsight: "El mecanismo de escaneo eucariota permitió el control regulador mediante marcos abiertos de lectura río arriba (uORFs), permitiendo traducir selectivamente factores de estrés como ATF4 cuando la traducción global está reprimida.",
    diagnosticMarkers: ["Western blot con anticuerpos específicos fosfo-eIF2α (Ser51)", "Polysome profiling por ultracentrifugación en gradiente de sacarosa"]
  },
  {
    id: "euk-7",
    stationNumber: 7,
    category: "eukaryote",
    routeLabel: "Ruta Eucariota",
    molecularLevel: "Proteína",
    title: "Elongación, Terminación y Control de Calidad Cotraduccional",
    subtitle: "Factores eEF1A/eEF2, Factores de Liberación eRF1/eRF3 y Complejo de Rescate Pelota/Hbs1",
    cellularLocation: "Citoplasma celular / Ribosomas 80S activos",
    glossaryTermIds: ["contexto-kozak"],
    lineageContext: "Exclusivo de Eucariotas: Elongación asistida por eEF1A y reconocimiento omnipotente de los tres codones de parada por el factor eRF1.",
    keyRegulators: [
      { name: "eEF1A (GTPasa de elongación)", nature: "Factor de entrega de aminoacil-tRNA", action: "Carga el aminoacil-tRNA correcto en el sitio A del ribosoma con rigurosa verificación de lectura cinética" },
      { name: "eEF2 (Translocasa ribosómica)", nature: "GTPasa de translocación", action: "Cataliza el desplazamiento relativo de un codón del ribosoma respecto al ARNm tras el enlace peptídico" },
      { name: "Factor de liberación eRF1", nature: "Imitador molecular de tRNA", action: "Reconoce los tres codones de parada (UAA, UAG, UGA) e induce la hidrólisis del enlace éster peptidil-tRNA" },
      { name: "Complejo Pelota / Hbs1", nature: "Sistema de rescate No-Go Decay", action: "Disocia subunidades ribosómicas 80S atascadas en transcritos truncados sin codón de parada" }
    ],
    queOcurre: "El ribosoma 80S avanza triplete a triplete a ~5-6 aminoácidos por segundo. En cada ciclo, el aminoacil-tRNA entregado por eEF1A entra al sitio A; la peptidil-transferasa del 28S ARNr cataliza el enlace peptídico y eEF2 transloca el ARNm un codón hacia el sitio P. Si el ribosoma encuentra estructuras secundarias insolubles o daños químicos en el ARNm, se detiene, activando el control RQC (Ribosome-associated Quality Control). Al llegar a un codón de parada, eRF1/eRF3 hidrolizan el enlace éster liberando la proteína naciente.",
    quienParticipa: [
      { name: "Factores de elongación eEF1A y eEF2", role: "GTPasas que garantizan fidelidad de lectura y translocación", type: "factor" },
      { name: "Factores de liberación eRF1 y eRF3", role: "Reconocen los codones de parada y liberan la cadena polipeptídica", type: "factor" },
      { name: "Complejo Pelota / Hbs1", role: "Separa ribosomas eucariotas atascados en ARNm aberrantes", type: "complex" },
      { name: "Ligasa de ubiquitina LTN1 (Listerina)", role: "Ubiquitina cadenas nacientes incompletas en ribosomas atascados para degradación proteasomal", type: "enzyme" }
    ],
    queRegula: "¿A qué ritmo se sintetiza el péptido y con qué fidelidad? La velocidad de elongación modula directamente el plegamiento cotraduccional de dominios y previene marcos de lectura desfasados.",
    regulatoryDecision: "Coordinación entre velocidad de traducción y plegamiento de dominios proteicos discretos.",
    quePasaSiFalla: "El deslizamiento del marco de lectura o la lectura a través de codones de parada genera proteínas gigantes aberrantes. El estancamiento prolongado de ribosomas dispara la neurodegeneración.",
    failureNature: "calidad",
    clinicalConsequence: "Neurodegeneración hereditaria por acumulación de ribosomas atascados; toxicidad por toxina diftérica (inactiva eEF2 por ribosilación de ADP); enfermedades causadas por mutaciones de corrimiento de marco.",
    evolutionaryInsight: "El uso de codones sinónimos (sesgo de codones) no es neutro: la célula usa codones de lectura lenta deliberadamente para pausar el ribosoma y permitir que un dominio proteico se pliegue antes de sintetizar el siguiente.",
    diagnosticMarkers: ["Ribosome profiling (Ribo-Seq) con huellas de nucleótidos protegidos por el ribosoma 80S", "Marcaje con puromicina para medir elongación activa en tiempo real (SUnSET)"]
  },
  {
    id: "euk-8",
    stationNumber: 8,
    category: "eukaryote",
    routeLabel: "Ruta Eucariota",
    molecularLevel: "Proteína",
    title: "Plegamiento en el RE y Respuesta a Proteínas Mal Plegadas (UPR)",
    subtitle: "Chaperonas Hsp70, Chaperonina TRiC, BiP y Sensores IRE1/PERK/ATF6",
    cellularLocation: "Lumen del Retículo Endoplásmico (RE) y Citosol",
    glossaryTermIds: ["chaperonas-moleculares", "upr-estres-re"],
    lineageContext: "Exclusivo de Eucariotas: Red de plegamiento oxidativo en el lumen del RE acoplada a los transductores IRE1, PERK y ATF6.",
    keyRegulators: [
      { name: "Chaperona BiP / GRP78", nature: "Chaperona Hsp70 de RE", action: "Se une a proteínas no plegadas en el RE; al titularse, se disocia de IRE1, PERK y ATF6 activando la UPR", glossaryId: "upr-estres-re" },
      { name: "Sensor IRE1 (Kinasa y Endoribonucleasa)", nature: "Transductor de membrana de RE", action: "Se oligomeriza y cataliza el splicing no convencional citoplásmico del factor de transcripción XBP1", glossaryId: "upr-estres-re" },
      { name: "Sensor PERK (Kinasa de eIF2α)", nature: "Transductor de membrana de RE", action: "Fosforila a eIF2α apagando la síntesis proteica para reducir la carga de polipéptidos hacia el RE", glossaryId: "upr-estres-re" },
      { name: "Complejo ERAD (HRD1 / VCP-p97)", nature: "Maquinaria de retrotranslocación", action: "Expulsa proteínas mal plegadas del RE al citosol para ubiquitinación y lisis en el proteasoma", glossaryId: "upr-estres-re" }
    ],
    queOcurre: "Las proteínas que ingresan a la vía secretora se pliegan en el lumen del RE bajo la supervisión de chaperonas (BiP, calnexina, PDI). Si la carga de proteínas mal plegadas supera la capacidad del organelo, BiP se disocia de los tres transductores de membrana: IRE1 se autofosforila y corta al ARNm de XBP1 generando XBP1s; PERK fosforila a eIF2α deteniendo la traducción; y ATF6 viaja al Golgi para ser activado por proteólisis. Si el estrés no se resuelve, la UPR activa apoptosis mediada por CHOP.",
    quienParticipa: [
      { name: "BiP / GRP78", role: "Chaperona máster del lumen del RE y represor sensor de los transductores de estrés", type: "enzyme", glossaryId: "upr-estres-re" },
      { name: "Transductores IRE1, PERK y ATF6", role: "Sensores de membrana que activan programas transcripcionales de adaptación", type: "factor", glossaryId: "upr-estres-re" },
      { name: "Factor de transcripción XBP1s", role: "Induce genes de chaperonas, expansión lipídica del RE y componentes ERAD", type: "factor", glossaryId: "upr-estres-re" },
      { name: "Chaperonas citosólicas Hsp70 y TRiC/CCT", role: "Pliegan proteínas solubles en el citoplasma previniendo agregación", type: "complex", glossaryId: "chaperonas-moleculares" }
    ],
    queRegula: "¿Alcanza la proteína su conformación tridimensional nativa en el RE o debe destruirse por toxicidad? Regula la supervivencia y la capacidad secretora celular.",
    regulatoryDecision: "Resolución del estrés proteotóxico o inducción de apoptosis si el daño conformacional es irreparable.",
    quePasaSiFalla: "La acumulación de intermediarios mal plegados provoca estrés crónico del RE, formación de agregados insolubles y muerte celular masiva mediada por CHOP y caspasa-12.",
    failureNature: "calidad",
    clinicalConsequence: "Esteatohepatitis no alcohólica; diabetes tipo 2 por apoptosis de células β pancreáticas; enfermedades neurodegenerativas conformacionales (Alzheimer, ELA).",
    evolutionaryInsight: "El retículo endoplásmico requirió un sistema de control de calidad autónomo para evitar secretar moléculas aberrantes al espacio extracelular en organismos pluricelulares.",
    diagnosticMarkers: ["Detección de XBP1 empalmado (spliced XBP1s) por RT-PCR como marcador de activación de IRE1", "Western blot para inducción de BiP/GRP78 y el factor proapoptótico CHOP"]
  },
  {
    id: "euk-9",
    stationNumber: 9,
    category: "eukaryote",
    routeLabel: "Ruta Eucariota",
    molecularLevel: "Proteína",
    title: "Modificaciones Postraduccionales (PTMs) Complejas",
    subtitle: "Fosforilación, Acetilación, Ubiquitinación y Glicosilación en RE/Golgi",
    cellularLocation: "Citosol, Núcleo, Membrana plasmática, Aparato de Golgi",
    glossaryTermIds: ["modificaciones-postraduccionales-ptm"],
    lineageContext: "Exclusivo de Eucariotas: Código combinatorio de cientos de modificaciones covalentes que diversifican el proteoma.",
    keyRegulators: [
      { name: "Proteín-Kinasas (PKA, Akt, CDKs) y Fosfatasas (PP1, PP2A)", nature: "Enzimas de fosforilación", action: "Agregan o remueven fosfatos en Ser, Thr o Tyr, actuando como interruptores alostéricos de encendido/apagado", glossaryId: "modificaciones-postraduccionales-ptm" },
      { name: "Lisina Acetiltransferasas (KATs) y Desacetilasas (HDACs/Sirtuinas)", nature: "Enzimas de acetilación", action: "Modulan la carga neta de lisinas en factores de transcripción alterando su afinidad por el ADN" },
      { name: "Glicosiltransferasas de RE y Golgi", nature: "Enzimas de glicosilación", action: "Construyen árboles de N- y O-glicosilación indispensables para la solubilidad, estabilidad y señalización" }
    ],
    queOcurre: "La secuencia primaria de aminoácidos es decorada covalentemente por enzimas especializadas: fosforilación que introduce cargas negativas repulsivas; acetilación que neutraliza cargas positivas; mono o poliubiquitinación que altera interacciones o marca para degradación; y glicosilación compleja en el RE y Golgi.",
    quienParticipa: [
      { name: "Kinasas y Fosfatasas", role: "Controlan la transducción de señales en cascadas de fosforilación reversibles", type: "enzyme", glossaryId: "modificaciones-postraduccionales-ptm" },
      { name: "KATs y HDACs", role: "Modifican lisinas en histonas y proteínas no histónicas", type: "enzyme" },
      { name: "Glicosiltransferasas de Golgi", role: "Maduran oligosacáridos complejos de membrana y secreción", type: "enzyme" }
    ],
    queRegula: "¿En qué estado funcional se encuentra la proteína? Activa, inactiva, redirigida a otro organelo o marcada para interactuar con complejos específicos.",
    regulatoryDecision: "Interruptor dinámico ultrarrápido (segundos a minutos) de redes enzimáticas en respuesta a estímulos externos.",
    quePasaSiFalla: "La hiperactivación constitutiva de quinasas oncogénicas desata proliferación celular autónoma. Defectos en glicosilación causan plegamiento erróneo o secreción anómala.",
    failureNature: "calidad",
    clinicalConsequence: "Melanoma maligno por mutación BRAF V600E; Leucemia mieloide crónica por BCR-ABL; Trastornos congénitos de la glicosilación (CDG); tauopatías por hiperfosforilación de tau.",
    evolutionaryInsight: "Las PTMs multiplican la capacidad informacional del genoma: una única proteína de 50 kDa puede existir en miles de proteoformas funcionalmente distintas según su mapa de fosforilación y acetilación.",
    diagnosticMarkers: ["Western blot con anticuerpos fosfo-específicos", "Espectrometría de masas cuantitativa con enriquecimiento por TiO2 (Fosfoproteómica)"]
  },
  {
    id: "euk-10",
    stationNumber: 10,
    category: "eukaryote",
    routeLabel: "Ruta Eucariota",
    molecularLevel: "Proteína",
    title: "Tráfico por la Vía Secretora (SRP y Sec61)",
    subtitle: "Péptido Señal N-terminal, Partícula SRP y Translocón de la Membrana del RE",
    cellularLocation: "Membrana del Retículo Endoplásmico Rugoso / Vía Secretora",
    glossaryTermIds: ["particula-srp"],
    lineageContext: "Exclusivo de Eucariotas: Enrutamiento cotraduccional hacia la vía vesicular que conecta RE, Golgi, lisosomas y membrana plasmática.",
    keyRegulators: [
      { name: "Partícula SRP (7SL ARN + 6 proteínas)", nature: "Complejo ribonucleoproteico sensor", action: "Reconoce el péptido señal hidrofóbico emergente, frena la elongación y guía el ribosoma al RE", glossaryId: "particula-srp" },
      { name: "Receptor de la SRP (SRα y SRβ)", nature: "GTPasa heterodimérica de membrana", action: "Interacciona con la SRP coordinando la hidrólisis de GTP y transfiriendo el ribosoma al canal Sec61" },
      { name: "Translocón Sec61", nature: "Canal acuoso transmembrana", action: "Abre su poro axial hacia el lumen del RE y una compuerta lateral para integrar segmentos transmembrana en la bicapa lipídica" },
      { name: "Peptidasa Señal", nature: "Endopeptidasa de membrana", action: "Corta el péptido señal liberando la proteína soluble dentro del lumen del RE" }
    ],
    queOcurre: "Aproximadamente un tercio del proteoma eucariota debe cruzar la membrana del RE o insertarse en ella. Cuando un péptido señal hidrofóbico N-terminal emerge del ribosoma, es capturado por la partícula SRP; ésta frena temporalmente la elongación y dirige el complejo al receptor de la SRP en la membrana del RE. El ribosoma se transfiere al translocón Sec61 y la traducción se reanuda cotraduccionalmente hacia el lumen del organelo.",
    quienParticipa: [
      { name: "Partícula SRP", role: "Sensa el péptido señal y pausa la traducción durante el tránsito a la membrana", type: "complex", glossaryId: "particula-srp" },
      { name: "Receptor de la SRP", role: "GTPasa anclada en la membrana del RE", type: "complex" },
      { name: "Translocón Sec61", role: "Poro acuoso con compuerta axial y lateral", type: "structural" },
      { name: "Peptidasa Señal", role: "Escinde el péptido señal liberando la proteína madura", type: "enzyme" }
    ],
    queRegula: "¿Dónde residirá la proteína? Localización precisa: soluble en citosol, anclada en membrana plasmática, residente de organelos o secretada al medio extracelular.",
    regulatoryDecision: "Destinación compartimental e inserción topológica correcta en la vía secretora.",
    quePasaSiFalla: "La mutación o pérdida del péptido señal provoca escape citoplásmico de proteínas lumelares, causando toxicidad o pérdida de función en membrana.",
    failureNature: "calidad",
    clinicalConsequence: "Fibrosis quística por retención de CFTR mutado ΔF508 en el RE; Enfermedad de células I por fallo de fosforilación para el receptor de manosa-6-fosfato; hipercolesterolemia familiar por mutaciones de tráfico del receptor de LDL.",
    evolutionaryInsight: "La partícula SRP se encuentra conservada desde bacterias hasta humanos, pero en eucariotas evolucionó para alimentar la gigantesca red vesicular del sistema endomembranoso.",
    diagnosticMarkers: ["Ensayos de digestión con proteasa K en microsomas aislados para evaluar protección lumelar", "Microscopía confocal de inmunofluorescencia para colocalización de compartimentos"]
  },
  {
    id: "euk-11",
    stationNumber: 11,
    category: "eukaryote",
    routeLabel: "Ruta Eucariota",
    molecularLevel: "Proteína",
    title: "Degradación por el Sistema Ubiquitina-Proteasoma 26S",
    subtitle: "Cascada Enzimática E1-E2-E3, Poliubiquitinación K48 y el Barril Proteolítico 20S",
    cellularLocation: "Citosol y Núcleo celular",
    glossaryTermIds: ["proteasoma-26s"],
    lineageContext: "Exclusivo de Eucariotas: Sistema de destrucción selectiva dependiente de ATP mediante etiquetado covalente con cadenas de poliubiquitina.",
    keyRegulators: [
      { name: "Ligasas E3 de Ubiquitina (MDM2, Parkin, SCF, APC/C)", nature: "Sensores de especificidad", action: "Reconocen degrones específicos en sustratos diana y transfieren ubiquitina a lisinas determinadas", glossaryId: "proteasoma-26s" },
      { name: "Partícula Regulatoria 19S del Proteasoma", nature: "Tapa con ATPasas", action: "Reconoce cadenas poliubiquitina K48, desubiquitina el sustrato y lo despliega forzando su entrada al barril 20S", glossaryId: "proteasoma-26s" },
      { name: "Cámara Catalítica 20S del Proteasoma", nature: "Cilindro proteolítico", action: "Hidroliza la cadena desplegada mediante treoninas catalíticas tipo quimiotripsina, tripsina y caspasa a oligopéptidos", glossaryId: "proteasoma-26s" },
      { name: "Deubiquitinasas (DUBs)", nature: "Enzimas de rescate", action: "Remueven ubiquitina reciclando monómeros y rescatando proteínas de la degradación inmediata" }
    ],
    queOcurre: "La expresión génica culmina de manera tan crucial con la destrucción como con la síntesis. Una cascada enzimática trifásica (E1 activa ubiquitina, E2 la conjuga y E3 liga específicamente el sustrato) construye cadenas de poliubiquitina enlazadas por Lys48. El proteasoma 26S reconoce la marca con su partícula 19S, utiliza ATPasas para desplegar la proteína y la transloca al interior del cilindro 20S para hidrólisis en péptidos cortos.",
    quienParticipa: [
      { name: "Enzima E1 activadora", role: "Activa ubiquitina mediante adenilación consumiendo ATP", type: "enzyme", glossaryId: "proteasoma-26s" },
      { name: "Enzimas E2 conjugadoras", role: "Transfieren ubiquitina activada a la ligasa E3", type: "enzyme", glossaryId: "proteasoma-26s" },
      { name: "Ubiquitina ligasas E3", role: "Aportan exquisita especificidad reconociendo sustratos particulares", type: "enzyme", glossaryId: "proteasoma-26s" },
      { name: "Proteasoma 26S (19S + 20S)", role: "Megamáquina proteolítica cilíndrica dependiente de ATP", type: "complex", glossaryId: "proteasoma-26s" }
    ],
    queRegula: "¿Cuánto tiempo vive la proteína en la célula? Regula la terminación irreversible de señales moleculares, transiciones del ciclo celular (degradación de ciclinas) y depuración de proteínas envejecidas.",
    regulatoryDecision: "Muerte proteica selectiva para reiniciar programas de desarrollo o evitar estrés proteotóxico.",
    quePasaSiFalla: "La degradación insuficiente causa acumulación de oncoproteínas o agregados proteotóxicos. La degradación excesiva (ej. sobreexpresión de MDM2) elimina supresores tumorales vitales como p53.",
    failureNature: "calidad",
    clinicalConsequence: "Mieloma múltiple (las células plasmáticas mueren por sobrecarga proteica al usar inhibidores del proteasoma como bortezomib); Enfermedad de Parkinson (mutaciones en Parkin E3 ligasa); neoplasias con amplificación de MDM2.",
    evolutionaryInsight: "Sin degradación proteica específica no existiría el ciclo celular: la transición de metafase a anafase es un evento unidireccional irreversible impulsado por la destrucción proteasomal de securina y ciclina B mediada por APC/C.",
    diagnosticMarkers: ["Inmunoprecipitación con anticuerpos antipoliubiquitina K48 para cuantificar sustratos marcados", "Medición de actividad proteolítica 20S con sustratos fluorogénicos (Suc-LLVY-AMC)"]
  },

  // =========================================================================
  // RUTA BACTERIANA COMPLETA (8 PUNTOS DE CONTROL: ADN -> ARN -> PROTEÍNA)
  // =========================================================================
  {
    id: "prok-1",
    stationNumber: 1,
    category: "prokaryote",
    routeLabel: "Ruta Bacteriana",
    molecularLevel: "ADN",
    title: "El Nucleoide, Operones y Factores Sigma de Especificidad",
    subtitle: "Promotores -10 y -35, Holoenzima de ARN Polimerasa y Represores Alostéricos",
    cellularLocation: "Nucleoide bacteriano / Citosol",
    glossaryTermIds: ["factores-sigma", "operon-lac"],
    lineageContext: "Exclusivo de Bacterias: Genoma circular desnudo sin nucleosomas (estado basal permisivo) organizado en operones policistrónicos.",
    keyRegulators: [
      { name: "Holoenzima de ARN Polimerasa (Core α2ββ'ω + Factor Sigma)", nature: "Enzima de transcripción", action: "El factor sigma primario (σ70) reconoce las cajas consenso -35 y -10 para la transcripción basal", glossaryId: "factores-sigma" },
      { name: "Factores Sigma Alternativos (σ32, σ54, σS)", nature: "Subunidades intercambiables", action: "Redirigen en masa la polimerasa hacia regulones de choque térmico, nitrógeno o fase estacionaria", glossaryId: "factores-sigma" },
      { name: "Represor LacI / TrpR", nature: "Proteínas alostéricas de operón", action: "Se unen a secuencias operadoras bloqueando físicamente el avance de la polimerasa en ausencia de inductor", glossaryId: "operon-lac" },
      { name: "Proteína CAP / CRP", nature: "Activador transcripcional", action: "Se une a cAMP cuando los niveles de glucosa son bajos, estimulando la unión de la polimerasa al promotor" }
    ],
    queOcurre: "El cromosoma bacteriano circular se encuentra compactado en un nucleoide libre de histonas y nucleosomas densos; su estado basal es permisivo. La holoenzima de ARN polimerasa se acopla directamente a las secuencias consenso -35 (TTGACA) y -10 (caja Pribnow: TATAAT) gracias a factores sigma intercambiables. La expresión de operones policistrónicos (múltiples genes estructurales bajo un único promotor) se enciende o apaga por represores alostéricos directos que responden a metabolitos nutricionales.",
    quienParticipa: [
      { name: "Holoenzima ARN Polimerasa bacteriana", role: "Complejo central catalítico de transcripción", type: "enzyme", glossaryId: "factores-sigma" },
      { name: "Factores Sigma (σ70, σ32, σ54)", role: "Confiren especificidad de reconocimiento de promotores", type: "factor", glossaryId: "factores-sigma" },
      { name: "Represores de Operón (LacI, TrpR)", role: "Se unen a operadores impidiendo la transcripción hasta sensar ligandos", type: "factor", glossaryId: "operon-lac" },
      { name: "Complejo CAP-cAMP", role: "Sensor de glucosa que activa la transcripción por catabolismo alternativo", type: "complex" }
    ],
    queRegula: "¿Qué operón metabólico se transcribe y con qué factor sigma? Control primario instantáneo de encendido en respuesta a disponibilidad de nutrientes.",
    regulatoryDecision: "Encendido o apagado estricto del uso de fuentes de carbono alternativas sin derroche energético.",
    quePasaSiFalla: "Mutaciones constitutivas en el operador (lacOc) o en el represor provocan síntesis innecesaria y derrochadora de enzimas en ausencia de sustrato, reduciendo la velocidad de duplicación bacteriana.",
    failureNature: "cantidad",
    clinicalConsequence: "La resistencia bacteriana inducida por factores sigma de estrés (σS) activa bombas de expulsión de antibióticos; dianas de nuevos antibióticos que inhiben el acoplamiento sigma-polimerasa.",
    evolutionaryInsight: "La organización en operones policistrónicos faculta a la bacteria a producir en proporciones estequiométricas exactas todas las enzimas de una vía biosintética a partir de un único evento de iniciación.",
    diagnosticMarkers: ["Ensayos de desplazamiento de movilidad electroforética (EMSA) con ADN promotor y proteínas represoras", "Ensayos con gen reportero beta-galactosidasa (LacZ) bajo inductores metabólicos"]
  },
  {
    id: "prok-2",
    stationNumber: 2,
    category: "prokaryote",
    routeLabel: "Ruta Bacteriana",
    molecularLevel: "ARN",
    title: "Transcripción Acoplada a Traducción (El Expressoma)",
    subtitle: "Acoplamiento NusG/NusA, Atenuación de Operones y Terminación por Factor Rho",
    cellularLocation: "Citosol bacteriano / Nucleoide",
    glossaryTermIds: ["acoplamiento-transcripcion-traduccion"],
    lineageContext: "Exclusivo de Bacterias: Ausencia de carioteca permite que el ribosoma 70S traduzca el ARNm naciente al mismo tiempo que es sintetizado.",
    keyRegulators: [
      { name: "Complejo NusG / NusA", nature: "Factores acopladores", action: "Conectan físicamente la ARN polimerasa con el ribosoma 70S naciente formando el 'Expressoma'", glossaryId: "acoplamiento-transcripcion-traduccion" },
      { name: "Factor Rho (Helicasa dependiente de ATP)", nature: "Factor de terminación", action: "Se une a secuencias rut en ARNm desnudo; si la traducción se retrasa, Rho alcanza a la polimerasa y disocia el complejo" },
      { name: "Péptido Líder del Operón (TrpL)", nature: "Sensor traduccional", action: "La velocidad de traducción del péptido líder dicta la formación de horquillas alternativas de atenuación o antiterminación" }
    ],
    queOcurre: "Al no existir membrana nuclear, el primer ribosoma 70S se acopla a la secuencia Shine-Dalgarno y comienza la síntesis proteica mientras la ARN Polimerasa apenas ha sintetizado unos cientos de nucleótidos. Factores NusG y NusA conectan a la polimerasa y al ribosoma líder formando un complejo molecular unificado ('Expressoma'). La velocidad con la que el ribosoma traduce el péptido líder dicta la formación de estructuras secundarias alternativas en el ARNm naciente, permitiendo o abortando la elongación (Atenuación).",
    quienParticipa: [
      { name: "ARN Polimerasa bacteriana", role: "Holoenzima bacteriana de transcripción", type: "enzyme" },
      { name: "Ribosoma 70S Líder", role: "Inicia la traducción cotranscripcional inmediata", type: "complex", glossaryId: "acoplamiento-transcripcion-traduccion" },
      { name: "Proteínas NusG y NusA", role: "Puentes proteicos que acoplan el Expressoma", type: "factor", glossaryId: "acoplamiento-transcripcion-traduccion" },
      { name: "Factor Rho (Helicasa hexamérica)", role: "Reconoce secuencias rut libres de ribosomas y desacopla la transcripción", type: "factor" }
    ],
    queRegula: "¿Debe continuarse transcribiendo el operón biosintético cuando el aminoácido ya abunda en el medio? Regula la elongación transcripcional acoplada al ritmo traduccional en tiempo real.",
    regulatoryDecision: "Aborto cotranscripcional inmediato de la síntesis de enzimas biosintéticas costosas ante suficiencia metabólica.",
    quePasaSiFalla: "Si el acoplamiento se rompe (por inhibición farmacológica del ribosoma con cloranfenicol), el ARNm naciente queda desprotegido; el factor Rho se une a sitios rut y provoca terminación polar prematura.",
    failureNature: "cantidad",
    clinicalConsequence: "Efecto polar en mutaciones bacterianas sin sentido tempranas; base de la hipersensibilidad a inhibidores de la traducción en bacterias patógenas.",
    evolutionaryInsight: "El acoplamiento del Expressoma protege al ARNm naciente de la digestión prematura por la ARNasa E y sincroniza la producción de enzimas con la demanda metabólica instantánea.",
    diagnosticMarkers: ["Ensayos de terminación in vitro con factor Rho", "Medición de transcritos del operón trp mediante RT-qPCR en presencia y ausencia de triptófano"]
  },
  {
    id: "prok-3",
    stationNumber: 3,
    category: "prokaryote",
    routeLabel: "Ruta Bacteriana",
    molecularLevel: "ARN",
    title: "Recambio Ultrarrápido y el Degradosoma Bacteriano",
    subtitle: "ARNasa E, PNPasa, RhlB y la Caducidad Minutaria del ARNm",
    cellularLocation: "Membrana plasmática bacteriana interna (Complejo Degradosoma)",
    glossaryTermIds: ["degradosoma"],
    lineageContext: "Exclusivo de Bacterias: Vida media del ARNm de apenas 1 a 3 minutos para permitir reprogramaciones metabólicas en tiempo real.",
    keyRegulators: [
      { name: "ARNasa E (RNase E)", nature: "Endoribonucleasa y andamio", action: "Corta endonucleolíticamente en regiones monocatenarias ricas en AU y sirve de andamio físico para el degradosoma", glossaryId: "degradosoma" },
      { name: "PNPasa (Polinucleótido fosforilasa)", nature: "Exoribonucleasa procesiva 3'-5'", action: "Degrada procesivamente los fragmentos generados por ARNasa E utilizando fosfato inorgánico", glossaryId: "degradosoma" },
      { name: "RhlB (ARN Helicasa DEAD-box)", nature: "Helicasa bacteriana", action: "Desenrolla horquillas y estructuras secundarias de ARN facilitando el paso de la PNPasa", glossaryId: "degradosoma" },
      { name: "PAP I (Poli-A Polimerasa bacteriana)", nature: "Enzima de marcaje", action: "Añade colas cortas de poli(A) que en bacterias actúan paradójicamente como MARCA DE DEGRADACIÓN rápida" }
    ],
    queOcurre: "La bacteria necesita resetear sus transcritos rápidamente para adaptarse a transiciones nutricionales continuas. El megacomplejo del 'Degradosoma' bacteriano, anclado a la membrana citoplásmica interna, inicia la lisis endonucleolítica mediante la ARNasa E en regiones ricas en AU, seguida por la digestión exoribonucleolítica 3'-5' por la PNPasa con ayuda de la helicasa RhlB.",
    quienParticipa: [
      { name: "ARNasa E", role: "Endoribonucleasa y andamio estructural del degradosoma", type: "enzyme", glossaryId: "degradosoma" },
      { name: "PNPasa", role: "Exoribonucleasa procesiva 3'-5' dependiente de fosfato", type: "enzyme", glossaryId: "degradosoma" },
      { name: "RhlB", role: "ARN helicasa que desenrolla horquillas secundarias", type: "enzyme", glossaryId: "degradosoma" },
      { name: "Enolasa bacteriana", role: "Enzima glucolítica asociada al andamio del degradosoma", type: "enzyme", glossaryId: "degradosoma" }
    ],
    queRegula: "¿A qué velocidad se resetea el programa de expresión génica ante una transición ambiental? Control de la caducidad del mensaje.",
    regulatoryDecision: "Velocidad de renovación del transcriptoma bacteriano para permitir reprogramaciones metabólicas en minutos.",
    quePasaSiFalla: "Mutaciones termosensibles en rne (gen de la ARNasa E) prolongan artificialmente la vida media del ARNm, provocando acumulación tóxica de proteínas y muerte celular en transiciones diaúxicas.",
    failureNature: "cantidad",
    clinicalConsequence: "La ARNasa E es una diana prioritaria para el diseño de nuevos antibacterianos de amplio espectro, ya que es esencial en bacterias Gram-negativas y carece de homólogo directo en mamíferos.",
    evolutionaryInsight: "A diferencia de los eucariotas, donde la cola poli(A) protege al ARNm y promueve la traducción, en bacterias la adición de poli(A) por PAP I es una marca destructiva que recluta exoribonucleasas.",
    diagnosticMarkers: ["Cinética de degradación por Northern blot tras detener la transcripción con rifampicina", "Curvas de supervivencia bacteriana en medios de cambio de fuente de carbono (glucosa a lactosa)"]
  },
  {
    id: "prok-4",
    stationNumber: 4,
    category: "prokaryote",
    routeLabel: "Ruta Bacteriana",
    molecularLevel: "ARN",
    title: "Sensores de Metabolitos (Riboswitches) y sRNAs con Chaperona Hfq",
    subtitle: "Aptámeros en 5'-UTR, Terminadores Intrínsecos y Silenciamiento por ARN Pequeños",
    cellularLocation: "Citosol bacteriano",
    glossaryTermIds: ["riboswitch"],
    lineageContext: "Exclusivo de Bacterias: Sensores de metabolitos en el propio ARNm sin intermediarios proteicos y sRNAs mediados por Hfq.",
    keyRegulators: [
      { name: "Aptámero de Riboswitch", nature: "Sensor de ARN no codificante", action: "Se une con alta afinidad a ligandos (TPP, SAM, FMN, Glucosamina-6P) sin ayuda de proteínas accesorias", glossaryId: "riboswitch" },
      { name: "Plataforma de Expresión", nature: "Interruptor conformacional", action: "Adopta una conformación de terminador transcripcional intrínseco o secuestra Shine-Dalgarno al unirse el ligando", glossaryId: "riboswitch" },
      { name: "Chaperona Hfq y sRNAs (RyhB, DsrA)", nature: "Complejo regulador bacteriano", action: "Facilita el apareamiento de sRNAs con ARNm diana reprimiendo o estimulando su traducción" }
    ],
    queOcurre: "Los riboswitches son dominios estructurados en la región 5'-UTR del ARNm que se pliegan en un aptámero capaz de unirse directamente a un metabolito pequeño. La unión induce un cambio conformacional en la plataforma de expresión adyacente, formando una horquilla terminadora intrínseca o secuestrando la secuencia Shine-Dalgarno para abortar la traducción. En paralelo, sRNAs bacterianos aparean con ARNm dianas con ayuda de la chaperona Hfq.",
    quienParticipa: [
      { name: "Dominio Aptámero del Riboswitch", role: "Sensor tridimensional de alta afinidad para metabolitos", type: "rna", glossaryId: "riboswitch" },
      { name: "Plataforma de Expresión", role: "Interruptor conformacional que forma un terminador o anti-Shine-Dalgarno", type: "structural", glossaryId: "riboswitch" },
      { name: "sRNAs bacterianos (DsrA, RyhB, Spot 42)", role: "ARN reguladores de 50-250 nt que modulan la traducción", type: "rna" },
      { name: "Chaperona Hfq", role: "Homólogo bacteriano de proteínas Sm que acelera el apareamiento de sRNAs", type: "factor" }
    ],
    queRegula: "¿Debe reprimirse la biosíntesis de un cofactor cuando su concentración citosólica ya es saturante? Control por retroalimentación alostérica directa.",
    regulatoryDecision: "Sensado metabólico directo sin intermediarios proteicos para ahorro biosintético estricto.",
    quePasaSiFalla: "Mutaciones puntuales en el aptámero impiden la unión del ligando, generando biosíntesis descontrolada y constitutiva de metabolitos con derroche masivo de ATP y recursos celulares.",
    failureNature: "cantidad",
    clinicalConsequence: "La ribocil (fármaco experimental que mimetiza al FMN) se une al riboswitch de flavina mononucleótido en bacterias y apaga la síntesis de riboflavina con potente acción bactericida.",
    evolutionaryInsight: "Los riboswitches son considerados fósiles moleculares del 'Mundo de ARN' primitivo, demostrando que moléculas de ARN pueden sensar el entorno y regular su propia expresión sin proteínas.",
    diagnosticMarkers: ["Ensayos de 'in-line probing' que revelan cambios conformacionales de ARN tras añadir el ligando", "Cuantificación de metabolitos celulares libres por cromatografía HPLC"]
  },
  {
    id: "prok-5",
    stationNumber: 5,
    category: "prokaryote",
    routeLabel: "Ruta Bacteriana",
    molecularLevel: "Proteína",
    title: "Inicio y Elongación Traduccional en el Ribosoma 70S",
    subtitle: "Alineamiento Shine-Dalgarno con 16S ARNr, fMet-tRNA y Factores IF1-IF3 / EF-Tu",
    cellularLocation: "Citosol bacteriano / Ribosomas 70S",
    glossaryTermIds: ["shine-dalgarno"],
    lineageContext: "Exclusivo de Bacterias: Apareamiento de bases directo entre el ARNm y el 16S ARNr (sin escaneo lineal de 5'-UTR).",
    keyRegulators: [
      { name: "Secuencia Shine-Dalgarno (5'-AGGAGG-3')", nature: "Elemento cis de unión a ribosoma", action: "Aparea directamente por complementariedad de bases con el extremo 3' del 16S ARNr en la subunidad 30S", glossaryId: "shine-dalgarno" },
      { name: "Factores de inicio bacterianos (IF1, IF2, IF3)", nature: "Factores de ensamblaje 70S", action: "IF3 previene asociación prematura de 50S; IF2-GTP carga el iniciador N-formilmetionina (fMet-tRNAfMet)" },
      { name: "Factores de elongación EF-Tu y EF-G", nature: "GTPasas de elongación procariotas", action: "EF-Tu entrega aminoacil-tRNA con corrección cinética; EF-G transloca el ribosoma a lo largo del ARNm" },
      { name: "Factores de liberación RF1 y RF2", nature: "Factores de terminación específicos", action: "RF1 reconoce UAA/UAG; RF2 reconoce UAA/UGA; RF3-GTP cataliza la disociación" }
    ],
    queOcurre: "La subunidad ribosómica 30S se alinea directamente sobre el codón de inicio gracias al apareamiento de la secuencia Shine-Dalgarno con el 16S ARNr. El factor IF2 carga el tRNA iniciador especial N-formilmetionina (fMet-tRNA). Tras la unión de la subunidad 50S, el ribosoma 70S funcional elonga rápidamente impulsado por EF-Tu y EF-G. La terminación ocurre cuando RF1 o RF2 reconocen codones de parada específicos liberando la proteína.",
    quienParticipa: [
      { name: "Subunidades ribosómicas 30S y 50S (Ribosoma 70S)", role: "Complejo macromolecular catalítico de síntesis proteica bacteriana", type: "complex", glossaryId: "shine-dalgarno" },
      { name: "Factores IF1, IF2 e IF3", role: "Coordinan el ensamblaje sobre Shine-Dalgarno y la colocación de fMet-tRNA", type: "factor", glossaryId: "shine-dalgarno" },
      { name: "EF-Tu y EF-G", role: "GTPasas de entrega de aminoacil-tRNA y translocación", type: "factor" },
      { name: "RF1, RF2 y RF3", role: "Factores de terminación bacterianos", type: "factor" }
    ],
    queRegula: "¿A qué velocidad y con qué eficiencia se inicia la traducción del cistrón? En operones policistrónicos, cada cistrón tiene su propio Shine-Dalgarno con afinidad diferencial.",
    regulatoryDecision: "Traducción estequiométrica diferencial de genes individuales dentro de un mismo ARNm policistrónico.",
    quePasaSiFalla: "Mutaciones en Shine-Dalgarno abolen por completo la traducción del gen correspondiente. El secuestro estérico de Shine-Dalgarno por estructuras secundarias apaga selectivamente el cistrón.",
    failureNature: "cantidad",
    clinicalConsequence: "Dianas de los principales antibióticos clínicos: tetraciclinas (bloquean sitio A), aminoglucósidos (inducen lecturas erróneas en 30S), macrólidos y cloranfenicol (bloquean túnel de salida 50S).",
    evolutionaryInsight: "La presencia de Shine-Dalgarno independientes permite que un solo ARNm policistrónico produzca 100 moléculas de una enzima y sólo 5 de otra según la afinidad de cada secuencia por el 16S ARNr.",
    diagnosticMarkers: ["Ensayos de unión ribosómica con oligonucleótidos complementarios a 16S ARNr", "Western blot para cuantificación estequiométrica de productos de operones policistrónicos"]
  },
  {
    id: "prok-6",
    stationNumber: 6,
    category: "prokaryote",
    routeLabel: "Ruta Bacteriana",
    molecularLevel: "Proteína",
    title: "Plegamiento Asistido Bacteriano (DnaK-DnaJ-GrpE y GroEL-GroES)",
    subtitle: "Chaperonas Citoplásmicas Hsp70 Bacterianas y Chaperoninas de Doble Barril",
    cellularLocation: "Citosol bacteriano",
    glossaryTermIds: ["chaperonas-moleculares"],
    lineageContext: "Exclusivo de Bacterias: Plegamiento citosólico directo mediante la red DnaK-DnaJ y la cámara cilíndrica GroEL-GroES en ausencia de retículo endoplásmico.",
    keyRegulators: [
      { name: "DnaK (Hsp70 bacteriana)", nature: "Chaperona ATPasa citosólica", action: "Se une a segmentos hidrofóbicos nacientes impidiendo la agregación durante la traducción rápida", glossaryId: "chaperonas-moleculares" },
      { name: "DnaJ (Hsp40) y GrpE (Factor de intercambio)", nature: "Co-chaperonas reguladoras", action: "DnaJ estimula la hidrólisis de ATP en DnaK; GrpE promueve la liberación de ADP permitiendo ciclos continuos" },
      { name: "GroEL (Chaperonina Hsp60) y GroES (Tapa)", nature: "Nanocámara cilíndrica de doble anillo", action: "Encapsula proteínas no plegadas en su cavidad protegida permitiendo el plegamiento asistido por ATP" }
    ],
    queOcurre: "A medida que la cadena polipeptídica emerge del ribosoma 70S, la chaperona DnaK (Hsp70 bacteriana), asistida por DnaJ y GrpE, se une a motivos hidrofóbicos para evitar la formación de agregados citosólicos. Si el polipéptido requiere confinamiento estricto, es transferido a la chaperonina cilíndrica GroEL-GroES, donde se pliega en una cámara hidrofílica cerrada impulsada por ciclos de hidrólisis de ATP.",
    quienParticipa: [
      { name: "DnaK, DnaJ y GrpE", role: "Tríada primaria de chaperonas citoplásmicas bacterianas dependientes de ATP", type: "complex", glossaryId: "chaperonas-moleculares" },
      { name: "Complejo GroEL-GroES", role: "Chaperonina cilíndrica con cavidad central para plegamiento aislado", type: "complex", glossaryId: "chaperonas-moleculares" },
      { name: "Proteasa ClpB", role: "Desagregasa bacteriana que colabora con DnaK para rescatar proteínas agregadas tras choque térmico", type: "enzyme" }
    ],
    queRegula: "¿Alcanza la enzima su estructura terciaria activa o forma cuerpos de inclusión insolubles? Regula la solubilidad y actividad del proteoma bacteriano bajo estrés térmico.",
    regulatoryDecision: "Plegamiento productivo vs secuestro en cuerpos de inclusión bacterianos.",
    quePasaSiFalla: "La sobrecarga proteica bacteriana bajo calor desnaturaliza enzimas y forma cuerpos de inclusión agregados que colapsan la viabilidad celular.",
    failureNature: "calidad",
    clinicalConsequence: "DnaK y GroEL son esenciales para la virulencia y supervivencia de patógenos intracelulares como Mycobacterium tuberculosis y Salmonella dentro de macrófagos.",
    evolutionaryInsight: "La chaperonina GroEL-GroES es el ancestro evolutivo directo de la chaperonina TRiC/CCT eucariota y de las chaperonas mitocondriales de origen endosimbiótico.",
    diagnosticMarkers: ["Fraccionamiento de lisados bacterianos en fracciones soluble e insoluble (cuerpos de inclusión)", "Ensayos de actividad enzimática dependiente de chaperonas in vitro"]
  },
  {
    id: "prok-7",
    stationNumber: 7,
    category: "prokaryote",
    routeLabel: "Ruta Bacteriana",
    molecularLevel: "Proteína",
    title: "Translocación y Secreción a Través de la Membrana Bacteriana",
    subtitle: "Vía General SecYEG asistida por SecA y Sistema Tat para Proteínas Plegadas",
    cellularLocation: "Membrana plasmática interna bacteriana / Espacio periplásmico",
    glossaryTermIds: ["particula-srp"],
    lineageContext: "Exclusivo de Bacterias: Translocación al periplasma a través del complejo SecYEG impulsado por la ATPasa SecA o transporte de proteínas ya plegadas por la vía Tat.",
    keyRegulators: [
      { name: "Translocón SecYEG", nature: "Canal acuoso de translocación de membrana interna", action: "Canal conservado por donde translocan polipéptidos hacia el periplasma o se insertan en la membrana interna" },
      { name: "ATPasa Motora SecA", nature: "Motor de empuje molecular", action: "Hidroliza ATP para empujar físicamente segmentos de la proteína no plegada a través de SecYEG" },
      { name: "SRP bacteriana (Proteína Ffh + 4.5S ARN)", nature: "Partícula de reconocimiento bacteriana", action: "Reconoce péptidos señal muy hidrofóbicos dirigiendo proteínas integrales de membrana a SecYEG", glossaryId: "particula-srp" },
      { name: "Complejo Tat (Twin-Arginine Translocation: TatA, TatB, TatC)", nature: "Canal transmembrana impulsado por PMF", action: "Transloca proteínas completamente plegadas con cofactores unidos reconociendo el motivo RR" }
    ],
    queOcurre: "Las proteínas destinadas al periplasma, a la membrana externa o a la secreción extracelular contienen un péptido señal N-terminal. La vía Sec transloca proteínas en estado no plegado: SecA empuja el polipéptido a través del canal SecYEG utilizando ATP, mientras que proteínas integrales de membrana son guiadas por la SRP bacteriana (Ffh/4.5S ARN). En contraste, la vía Tat transloca proteínas ya completamente plegadas con cofactores redox utilizando la fuerza protón-motriz (PMF).",
    quienParticipa: [
      { name: "Canal SecYEG", role: "Poro conductor de proteínas en la membrana interna bacteriana", type: "structural" },
      { name: "SecA y chaperona SecB", role: "SecB mantiene la proteína no plegada en el citosol; SecA la transloca a través de SecYEG", type: "factor" },
      { name: "Ffh y 4.5S ARN (SRP bacteriano)", role: "Enruta proteínas integrales de membrana", type: "complex", glossaryId: "particula-srp" },
      { name: "Complejo Tat (TatABC)", role: "Canal para exportar proteínas ya plegadas", type: "complex" },
      { name: "Peptidasa de Señal bacteriana (LepB)", role: "Corta el péptido señal liberando la proteína madura en el periplasma", type: "enzyme" }
    ],
    queRegula: "¿Alcanza la proteína el espacio periplásmico o la membrana externa? Esencial para la síntesis de pared celular, transporte de nutrientes y secreción de toxinas.",
    regulatoryDecision: "Exportación compartimental selectiva a través de la envoltura celular bacteriana.",
    quePasaSiFalla: "El bloqueo de SecYEG es bactericida inmediato: proteínas del periplasma se acumulan en el citosol y desestabilizan la membrana, provocando lisis osmótica.",
    failureNature: "calidad",
    clinicalConsequence: "SecA es una diana terapéutica para antibacterianos experimentales; defectos en translocación periplásmica atenúan la formación de biofilms y factores de virulencia.",
    evolutionaryInsight: "El canal bacteriano SecYEG es el ancestro homólogo directo del translocón Sec61 del retículo endoplásmico eucariota.",
    diagnosticMarkers: ["Ensayos de procesamiento del péptido señal por Western blot en fracciones periplásmicas y citoplásmicas", "Sensibilidad a la azida sódica (inhibidor específico de la ATPasa SecA)"]
  },
  {
    id: "prok-8",
    stationNumber: 8,
    category: "prokaryote",
    routeLabel: "Ruta Bacteriana",
    molecularLevel: "Proteína",
    title: "Degradación por Cámaras Proteolíticas Bacterianas y Rescate por tmRNA",
    subtitle: "Proteasas Cilíndricas ClpXP, ClpAP, Lon y Marcaje con Etiqueta SsrA",
    cellularLocation: "Citosol bacteriano",
    glossaryTermIds: ["proteasoma-26s"],
    lineageContext: "Exclusivo de Bacterias: Ausencia de ubiquitina eucariota; degradación por proteasas cilíndricas directas (ClpXP, Lon) y marcaje por tmRNA.",
    keyRegulators: [
      { name: "Proteasa ClpP", nature: "Cámara proteolítica de doble anillo", action: "Cilindro con 14 sitios activos de serina que hidroliza proteínas a péptidos en su cavidad interna", glossaryId: "proteasoma-26s" },
      { name: "ATPasas ClpX y ClpA", nature: "Anillos reguladores hexaméricos", action: "Reconocen motivos degrones específicos (como la etiqueta SsrA), despliegan el sustrato y lo introducen en ClpP" },
      { name: "Proteasa Lon", nature: "Proteasa ATPasa homotetramérica", action: "Degrada proteínas desnaturalizadas, proteínas mal plegadas y reguladores de vida media corta (ej. SulA, RpoS)" },
      { name: "tmRNA bacteriano (SsrA)", nature: "ARN rescate dual", action: "Rescata ribosomas atascados agregando la etiqueta peptídica degron AANDENYALAA para destrucción inmediata por ClpXP" }
    ],
    queOcurre: "Las bacterias no poseen la cascada de ubiquitina de los eucariotas. En su lugar, utilizan proteasas cilíndricas directas de la familia AAA+: ClpP, acoplada a las ATPasas desplegadoras ClpX o ClpA, y la proteasa Lon. Cuando un ribosoma bacteriano se atasca en un ARNm roto, el ARN tmRNA (SsrA) entra al ribosoma, actúa como tRNA y traduce un péptido de 11 aminoácidos que sirve de etiqueta de destrucción ('degron') para lisis inmediata en ClpXP.",
    quienParticipa: [
      { name: "Complejo ClpXP y ClpAP", role: "Proteasas cilíndricas multicatalíticas bacterianas dependientes de ATP", type: "complex", glossaryId: "proteasoma-26s" },
      { name: "Proteasa Lon", role: "Proteasa central de respuesta a choque térmico y recambio proteico", type: "enzyme" },
      { name: "tmRNA (SsrA)", role: "Molécula híbrida de rescate que marca proteínas incompletas con una señal degron", type: "rna" },
      { name: "Proteasa FtsH", role: "Proteasa esencial anclada a membrana que degrada factores de choque térmico (σ32)", type: "enzyme" }
    ],
    queRegula: "¿Cuánto tiempo persisten los reguladores bacterianos y cómo se depuran proteínas incompletas? Regula el reinicio de división celular (degradación de SulA) y la respuesta a estrés.",
    regulatoryDecision: "Recambio de reguladores clave y depuración de polipéptidos truncados para evitar toxicidad proteica.",
    quePasaSiFalla: "La falta de degradación de SulA por Lon impide que la bacteria reanude la división celular tras reparar su ADN; fallos en tmRNA saturan los ribosomas bacterianos con proteínas truncas.",
    failureNature: "calidad",
    clinicalConsequence: "Las acildepsipeptidas (ADEPs) son nuevos antibióticos que activan a ClpP en ausencia de ClpX, provocando que ClpP degrade descontroladamente proteínas bacterianas esenciales hasta matar a bacterias multirresistentes como S. aureus.",
    evolutionaryInsight: "El cilindro catalítico ClpP comparte la misma arquitectura cilíndrica de cámara cerrada que el barril 20S del proteasoma eucariota, demostrando convergencia biofísica en la estrategia de aislamiento proteolítico.",
    diagnosticMarkers: ["Ensayos de degradación de sustratos etiquetados con SsrA in vitro por ClpXP", "Acumulación de proteínas fluorescentes GFP-SsrA en cepas bacterianas mutantes clpX o clpP"]
  }
];

export const DIAGNOSTIC_CASES_DATA: DiagnosticCase[] = [
  {
    id: "case-1",
    caseNumber: 1,
    title: "Síndrome de Anemia Severa y la Mutación Oculta en el intrón de HBB",
    organism: "Homo sapiens (Células precursoras eritroides)",
    lineage: "eukaryote",
    clinicalVignette: "Un paciente pediátrico de 4 años presenta fatiga extrema, palidez cutánea marcada, microcitosis hipocrómica grave y hepatoesplenomegalia. Los análisis cuantitativos de hemoglobina revelan una reducción del 92% en los niveles de la cadena β-globina en glóbulos rojos, con transcripción nuclear del gen HBB activa en niveles normales según ensayos de Run-On. La secuenciación exónica no detecta mutaciones en la región codificante, pero la secuenciación profunda intrónica descubre una sustitución puntual G>A en el intrón 1 (c.93-21G>A).",
    laboratoryFindings: [
      {
        technique: "Nuclear Run-On Assay",
        result: "Tasa de síntesis del transcrito primario HBB normal (100% de la actividad control)",
        interpretation: "El promotor y los enhancers están intactos. No hay fallo transcripcional basal en el ADN."
      },
      {
        technique: "Northern Blot de ARN Citoplásmico",
        result: "Banda de ARNm de HBB maduro prácticamente indetectable (<8% del control)",
        interpretation: "El ARNm maduro de tamaño normal no se acumula en el citosol celular."
      },
      {
        technique: "RT-PCR con cebadores en exones 1 y 2",
        result: "Aparición de un amplicón alternativo anormalmente largo con 19 nucleótidos intrónicos retenidos",
        interpretation: "La mutación intrónica generó un sitio aceptor de splicing críptico (AG) que introduce un fragmento intrónico con codón de parada prematuro."
      },
      {
        technique: "Tratamiento con Cicloheximida",
        result: "Los niveles del transcrito anormal de HBB se estabilizan y aumentan 10 veces en el citoplasma",
        interpretation: "Al inhibir la traducción pionera, se bloquea la ruta de degradación por NMD, confirmando que el ARNm anómalo era destruido por vigilancia de calidad."
      }
    ],
    progressiveHints: [
      {
        level: 1,
        title: "Pista Nivel 1: Integridad del Transcrito",
        content: "El fallo NO está en el promotor ni en la polimerasa (el ensayo Run-On fue normal). El problema ocurre mientras el transcrito primario es editado en la Ruta Eucariota."
      },
      {
        level: 2,
        title: "Pista Nivel 2: Secuencias Consenso Alteradas",
        content: "La mutación puntual intrónica genera un dinucleótido AG que simula un aceptor de corte. El espliceosoma se equivoca e incorpora un segmento intrónico con un codón UGA prematuro."
      },
      {
        level: 3,
        title: "Pista Nivel 3: El Segundo Puesto de Control en Acción",
        content: "Aunque el fallo original se gestó en el Punto de Control 2 Eucariota (Splicing), la desaparición del ARNm en el citosol es ejecutada por el Punto de Control 3 Eucariota (Vigilancia NMD / UPF1) al detectar el complejo EJC distal tras el codón prematuro."
      }
    ],
    targetStationId: "euk-2",
    targetStationName: "Punto de Control 2 Eucariota: Transcripción y Procesamiento del pre-ARNm (Splicing Alternativo)",
    primaryFailureType: "calidad",
    correctDiagnosis: "Fallo primario de CALIDAD en el Punto de Control 2 de la Ruta Eucariota (Splicing / Procesamiento), que genera un codón prematuro y desencadena la destrucción masiva secundaria por el Punto de Control 3 Eucariota (Vigilancia NMD).",
    pedagogicalDebrief: "Este caso clínico en la Ruta Eucariota ilustra el paradigma de los puntos de control interconectados: un error intrónico altera la CALIDAD del splicing en el Punto de Control 2 (creando un pseudositio de corte). Aunque el ARNm resultante logra salir al citoplasma, el ribosoma pionero detecta un codón prematuro a más de 50 nucleótidos del EJC y activa la ruta de NMD (Punto de Control 3). El síntoma clínico final se manifiesta como un déficit drástico de CANTIDAD de proteína β-globina funcional, pero la causa molecular raíz fue un fallo de CALIDAD en la aduana del procesamiento del pre-ARNm."
  },
  {
    id: "case-2",
    caseNumber: 2,
    title: "Inclusiones Citoplásmicas Tóxicas y Apoptosis Tras Choque Térmico Isquémico",
    organism: "Mus musculus (Cultivo de cardiomiocitos bajo estrés isquémico y térmico)",
    lineage: "eukaryote",
    clinicalVignette: "Tras un episodio agudo de hipoxia y elevación térmica (42 °C durante 45 minutos), una línea de cardiomiocitos muestra pérdida masiva de contractilidad y entrada en apoptosis. El análisis morfológico revela agregados proteicos amorfos e inclusiones citoplásmicas electrodensas. El análisis bioquímico detecta niveles saturantes de proteínas marcadas con cadenas de poliubiquitina ligadas por K48, pero la tasa de transcripción y los niveles de ARNm de las proteínas diana se encuentran inalterados. La enzima E1 y las ligasas E3 funcionan normalmente.",
    laboratoryFindings: [
      {
        technique: "Western Blot anti-Ubiquitina K48",
        result: "Acumulación masiva de frotis proteico de muy alto peso molecular (>250 kDa) en lisados celulares",
        interpretation: "Las proteínas están siendo marcadas adecuadamente por las ligasas E3 para su degradación."
      },
      {
        technique: "Ensayo Fluorogénico de Actividad Proteolítica 20S",
        result: "Disminución del 80% en la hidrólisis del sustrato fluorogénico Suc-LLVY-AMC en extractos celulares sin diluir",
        interpretation: "El cilindro catalítico del proteasoma está físicamente obstruido o inhibido mecánicamente."
      },
      {
        technique: "Inmunofluorescencia para Hsp70",
        result: "Hsp70 colocaliza completamente dentro de los agregados insolubles",
        interpretation: "El sistema de chaperonas moleculares ha sido sobrepasado por la avalancha de proteínas desnaturalizadas."
      },
      {
        technique: "Herramientas de Análisis Experimental de Apoptosis",
        result: "Activación intensa de caspasa-3 y caspasa-12; escisión de PARP",
        interpretation: "El colapso de la homeostasis proteotóxica dispara el programa de muerte celular programada."
      }
    ],
    progressiveHints: [
      {
        level: 1,
        title: "Pista Nivel 1: Localización del Fallo",
        content: "El ADN y el ARN están perfectamente intactos. El problema radica exclusivamente en el destino proteico en la Ruta Eucariota."
      },
      {
        level: 2,
        title: "Pista Nivel 2: La Conexión Chaperona-Proteasoma",
        content: "El calor desenrolló proteínas que saturaron la capacidad de re-plegamiento de Hsp70 (Punto de Control 8 Eucariota). Al no plegarse, fueron poliubiquitinadas en masa para degradación."
      },
      {
        level: 3,
        title: "Pista Nivel 3: El Cuello de Botella Final",
        content: "La partícula reguladora 19S del Proteasoma 26S (Punto de Control 11 Eucariota) no puede desplegar oligómeros agregados de gran tamaño; éstos actúan como un tapón mecánico que bloquea el canal 20S."
      }
    ],
    targetStationId: "euk-11",
    targetStationName: "Punto de Control 11 Eucariota: Degradación por el Sistema Ubiquitina-Proteasoma 26S",
    primaryFailureType: "calidad",
    correctDiagnosis: "Fallo primario de CALIDAD conformacional en el Punto de Control 8 Eucariota (Chaperonas / Plegamiento) que colapsa secundariamente el Punto de Control 11 Eucariota (Proteasoma 26S) por saturación y bloqueo estérico de la cámara catalítica.",
    pedagogicalDebrief: "En este caso de la Ruta Eucariota, el estrés ambiental superó la capacidad de control de calidad del Punto de Control 8 (Plegamiento asistido por chaperonas). Las proteínas desplegadas expusieron parches hidrofóbicos que formaron microagregados. La maquinaria de ubiquitinación (Punto de Control 9) reconoció correctamente estas proteínas dañadas y les colocó la marca de destrucción K48. Sin embargo, en el Punto de Control 11 (Proteasoma 26S), la partícula 19S sólo puede introducir cadenas polipeptídicas individualizadas y desplegadas; los agregados voluminosos atascaron la entrada del barril 20S, provocando parálisis proteasomal generalizada y muerte celular por estrés proteotóxico."
  },
  {
    id: "case-3",
    caseNumber: 3,
    title: "Cepa Bacteriana Salmonella con Biosíntesis Desregulada de Tiamina",
    organism: "Salmonella enterica serovar Typhimurium",
    lineage: "prokaryote",
    clinicalVignette: "Se aísla una cepa mutante de Salmonella capaz de crecer en medios mínimos pero con un fenotipo metabólico anómalo: produce pirofosfato de tiamina (vitamina B1) de forma constitutiva e ininterrumpida, incluso cuando se le suministra tiamina exógena en concentraciones diez veces superiores a las saturantes. Este derroche energético ralentiza su tiempo de duplicación bacteriana en un 40%. La secuenciación del operón thi revela que las regiones codificantes de las enzimas y el promotor basal son idénticos a la cepa silvestre, pero existe una mutación puntual G>U en la región 5'-UTR no codificante del transcrito del operón thiC.",
    laboratoryFindings: [
      {
        technique: "Cuantificación de Pirofosfato de Tiamina (TPP) Celular",
        result: "Concentración intracelular 15 veces superior al nivel homeostático basal",
        interpretation: "La síntesis de tiamina no responde al mecanismo normal de inhibición por producto final."
      },
      {
        technique: "In-line Probing de la región 5'-UTR de thiC con TPP",
        result: "La región no sufre el cambio conformacional de corte inducido por TPP que se observa en la cepa salvaje",
        interpretation: "El aptámero de ARN ha perdido la capacidad tridimensional de unir pirofosfato de tiamina."
      },
      {
        technique: "Ensayo de Transcripción in vitro en presencia de TPP",
        result: "La ARN polimerasa produce transcritos de longitud completa del operón thiC sin detenerse",
        interpretation: "La plataforma de expresión no logra adoptar la estructura de horquilla terminadora intrínseca Rho-independiente."
      },
      {
        technique: "Northern Blot del ARNm de thiC tras adición de tiamina",
        result: "Niveles elevados constantes de ARNm de thiC idénticos en presencia o ausencia de tiamina",
        interpretation: "La represión transcripcional está totalmente anulada en la cepa mutante."
      }
    ],
    progressiveHints: [
      {
        level: 1,
        title: "Pista Nivel 1: Ausencia de Factores Proteicos Represores",
        content: "El operón thiC en la Ruta Bacteriana no utiliza un represor proteico como LacI. El propio ARNm es el que 'siente' directamente el nivel de tiamina."
      },
      {
        level: 2,
        title: "Pista Nivel 2: Mecanismo en el 5'-UTR",
        content: "La mutación puntual en la región líder no afecta a ningún aminoácido, pero altera el apareamiento de bases del dominio aptámero que reconoce al TPP."
      },
      {
        level: 3,
        title: "Pista Nivel 3: El Fósil Molecular del ARN Bacteriano",
        content: "Se trata de un Riboswitch bacteriano en el Punto de Control 4 de la Ruta Bacteriana. Al no poder unir TPP, la plataforma de expresión no puede formar la horquilla terminadora."
      }
    ],
    targetStationId: "prok-4",
    targetStationName: "Punto de Control 4 Bacteriano: Sensores de Metabolitos (Riboswitches) y sRNAs",
    primaryFailureType: "cantidad",
    correctDiagnosis: "Fallo primario de sensado por Riboswitch en el Punto de Control 4 de la Ruta Bacteriana, provocando una anomalía de CANTIDAD (sobreexpresión constitutiva masiva por incapacidad de apagado transcripcional).",
    pedagogicalDebrief: "Este caso ilustra el poder regulador de los riboswitches en la Ruta Bacteriana (Punto de Control 4). En condiciones normales, cuando la tiamina (TPP) abunda en el citosol bacteriano, se une directamente al dominio aptámero del 5'-UTR del ARNm naciente; esto induce un cambio alostérico en el ARN que forma una horquilla de terminación transcripcional Rho-independiente, abortando la síntesis del operón thiC. La mutación puntual abolió la unión alostérica del metabolito. El resultado es un fallo clásico de CANTIDAD: síntesis masiva y derrochadora de un metabolito porque el sensor del ARNm quedó ciego a la señal de saciedad."
  }
];

export function generateFullMarkdownGuide(): string {
  let md = `# GUÍA DE TRABAJO UNIVERSITARIA: EL RECORRIDO MOLECULAR DE LA EXPRESIÓN GÉNICA
## Dos Rutas Separadas: Ruta Eucariota (11 Puntos de Control) vs. Ruta Bacteriana (8 Puntos de Control)
**Biología Molecular y Genética Evolutiva**

> **Lema Central de la Guía:**  
> *"Regular la expresión génica significa controlar cuánto, cuándo, dónde y en qué forma funcional aparece el producto de un gen."*

---

## 1. INTRODUCCIÓN: EL PARADIGMA DE LA RUTA Y LOS PUNTOS DE CONTROL

### 1.1 El Cambio de Paradigma: De la Llave Binaria a los Obstáculos Distribuidos
${INTRODUCTION_DATA.paradigmShift}

### 1.2 La Dicotomía Ontológica: Fallos de CANTIDAD vs. Fallos de CALIDAD
${INTRODUCTION_DATA.quantityVsQuality.description}

#### A. Problemas de CANTIDAD (Dosis Génica y Dinámica Temporal)
`;

  for (const q of INTRODUCTION_DATA.quantityVsQuality.quantityFeatures) {
    md += `- **${q.concept}:** ${q.mechanism}\n  *Ejemplo representativo:* ${q.example}\n\n`;
  }

  md += `#### B. Problemas de CALIDAD (Identidad Molecular y Destino Subcelular)\n`;
  for (const q of INTRODUCTION_DATA.quantityVsQuality.qualityFeatures) {
    md += `- **${q.concept}:** ${q.mechanism}\n  *Ejemplo representativo:* ${q.example}\n\n`;
  }

  md += `---

## 2. DOS FILOSOFÍAS ARQUITECTÓNICAS SEPARADAS: BACTERIAS VS EUCARIOTAS

| Parámetro Comparativo | Ruta Eucariota (Barrera Epigenética) | Ruta Bacteriana (Interruptor Metabólico) |
| :--- | :--- | :--- |
| **Estado Basal de los Genes** | **Restrictivo** (Reprimido por nucleosomas / heterocromatina) | **Permisivo** (Libre acceso de RNAP con factor sigma) |
| **Organización Espacial** | **Compartimentada** (Núcleo y citosol separados por envoltura nuclear) | **No compartimentada** (Nucleoide y ribosomas colocalizados) |
| **Acoplamiento Transcripción-Traducción** | **Desacoplado** (Horas de procesamiento antes de salir al citosol) | **Acoplado instantáneo** (El ribosoma traduce el ARNm naciente) |
| **Mecanismo de Desafío Inicial** | Requiere remodeladores de cromatina (SWI/SNF, HATs) | Control por factores sigma y represores alostéricos |
| **Vida Media Típica del ARNm** | Larga (Horas a días, altamente regulada) | Ultracorta (1 a 3 minutos para reseteo metabólico veloz) |

---

## 3. RUTA EUCARIOTA COMPLETA (11 Puntos de Control: ADN · ARN · Proteína)
`;

  const eukStations = STATIONS_DATA.filter(s => s.category === 'eukaryote');
  for (const st of eukStations) {
    md += `\n### Punto de Control ${st.stationNumber} Eucariota (${st.molecularLevel}): ${st.title}
*${st.subtitle}*
- **Dimensión Molecular:** ${st.molecularLevel}
- **Localización Subcelular:** ${st.cellularLocation}
- **Contexto de Linaje:** ${st.lineageContext}

#### Reguladores Clave de esta Etapa:
${st.keyRegulators.map(r => `- **${r.name}** [${r.nature}]: ${r.action}`).join('\n')}

#### Matriz CQRF:
1. **¿Qué ocurre? (Proceso Biológico Esencial):**
   ${st.queOcurre}

2. **¿Quién participa? (Actores Moleculares Clave):**
${st.quienParticipa.map(a => `   - **${a.name}** [${a.type}]: ${a.role}`).join('\n')}

3. **¿Qué se regula? (La Decisión Celular en este Punto):**
   ${st.queRegula}
   *Decisión Mecanística:* ${st.regulatoryDecision}

4. **¿Qué pasa si falla? (Patología y Descalabro Homeostático):**
   ${st.quePasaSiFalla}
   - **Naturaleza del Fallo:** Impacto predominante de **${st.failureNature.toUpperCase()}**.
   - **Consecuencia Clínica / Patología:** ${st.clinicalConsequence}

> **Perla Mecanística y Evolutiva:**
> ${st.evolutionaryInsight}
> 
> *Herramientas de Análisis Experimental:* ${st.diagnosticMarkers.join(' · ')}
`;
  }

  md += `\n---\n\n## 4. RUTA BACTERIANA COMPLETA (8 Puntos de Control: ADN · ARN · Proteína)\n`;
  const prokStations = STATIONS_DATA.filter(s => s.category === 'prokaryote');
  for (const st of prokStations) {
    md += `\n### Punto de Control ${st.stationNumber} Bacteriano (${st.molecularLevel}): ${st.title}
*${st.subtitle}*
- **Dimensión Molecular:** ${st.molecularLevel}
- **Localización Subcelular:** ${st.cellularLocation}
- **Contexto de Linaje:** ${st.lineageContext}

#### Reguladores Clave de esta Etapa:
${st.keyRegulators.map(r => `- **${r.name}** [${r.nature}]: ${r.action}`).join('\n')}

#### Matriz CQRF:
1. **¿Qué ocurre? (Proceso Biológico Esencial):**
   ${st.queOcurre}

2. **¿Quién participa? (Actores Moleculares Clave):**
${st.quienParticipa.map(a => `   - **${a.name}** [${a.type}]: ${a.role}`).join('\n')}

3. **¿Qué se regula? (La Decisión Celular en este Punto):**
   ${st.queRegula}
   *Decisión Mecanística:* ${st.regulatoryDecision}

4. **¿Qué pasa si falla? (Patología y Descalabro Homeostático):**
   ${st.quePasaSiFalla}
   - **Naturaleza del Fallo:** Impacto predominante de **${st.failureNature.toUpperCase()}**.
   - **Consecuencia Clínica / Patología:** ${st.clinicalConsequence}

> **Perla Mecanística y Evolutiva:**
> ${st.evolutionaryInsight}
> 
> *Herramientas de Análisis Experimental:* ${st.diagnosticMarkers.join(' · ')}
`;
  }

  md += `\n---\n\n## 5. CASOS DE ANÁLISIS: RESOLUCIÓN DIAGNÓSTICA BASADA EN MECANISMOS\n`;
  for (const cs of DIAGNOSTIC_CASES_DATA) {
    md += `\n### Caso de Estudio Clínico-Molecular ${cs.caseNumber}: ${cs.title}
**Organismo / Modelo:** ${cs.organism} (${cs.lineage === 'eukaryote' ? 'Ruta Eucariota' : 'Ruta Bacteriana'})

#### Viñeta del Caso:
${cs.clinicalVignette}

#### Herramientas de Análisis Experimental y Hallazgos:
| Técnica Analítica | Resultado Experimental | Interpretación Mecanística |
| :--- | :--- | :--- |
${cs.laboratoryFindings.map(f => `| ${f.technique} | ${f.result} | ${f.interpretation} |`).join('\n')}

#### Preguntas de Deducción Guiada para el Estudiante:
1. ¿A qué punto de control de la ruta molecular (${cs.lineage === 'eukaryote' ? 'Eucariota' : 'Bacteriana'}) pertenece el fallo primario?
2. ¿Se trata de un problema intrínseco de CANTIDAD o un problema de CALIDAD que causa una consecuencia secundaria?
3. ¿Cómo explica la aparente contradicción entre la tasa de transcripción y los niveles citoplásmicos de la molécula funcional?

#### Resolución y Análisis Mecanístico:
- **Punto de Control Afectado:** ${cs.targetStationName}
- **Naturaleza del Fallo:** **${cs.primaryFailureType.toUpperCase()}**
- **Diagnóstico Preciso:** ${cs.correctDiagnosis}

> **Desglose Pedagógico:**
> ${cs.pedagogicalDebrief}
`;
  }

  md += `\n---\n*Guía interactiva universitaria de Biología Molecular y Genética Evolutiva.*`;

  return md;
}
