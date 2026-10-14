/**
 * Base de datos de fuentes bibliográficas, literatura seminal y recursos de consulta
 * para el estudio de la Regulación de la Expresión Génica y Puntos de Control Moleculares.
 */

export interface AcademicSource {
  id: string;
  category: 'textbook' | 'seminal_paper' | 'review' | 'database';
  topic: 'general' | 'dna_epigenetics' | 'rna_processing' | 'translation_protein' | 'prokaryotes' | 'clinical';
  title: string;
  authors: string;
  year: number;
  publication: string;
  doiOrUrl?: string;
  description: string;
  keyContributions: string[];
  relevanceToCheckpoint: string;
}

export const ACADEMIC_SOURCES_DATA: AcademicSource[] = [
  // --- LIBROS DE TEXTO FUNDAMENTALES ---
  {
    id: 'book-alberts',
    category: 'textbook',
    topic: 'general',
    title: 'Molecular Biology of the Cell (7th Edition)',
    authors: 'Alberts, B., Heald, R., Johnson, A., Morgan, D., Raff, M., Roberts, K., Walter, P.',
    year: 2022,
    publication: 'W.W. Norton & Company / Garland Science',
    doiOrUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK21054/',
    description: 'El texto de referencia estándar internacional en biología molecular y celular. Proporciona la base conceptual de la arquitectura de la cromatina, el poro nuclear y el control de calidad transcripcional.',
    keyContributions: [
      'Modelo mecanístico de remodelación de nucleosomas y acetilación de colas de histonas',
      'Dinámica del complejo del poro nuclear (NPC) y exportación de ribonucleoproteínas',
      'Mecanismos de la vía de respuesta a proteínas desplegadas (UPR) en el retículo endoplásmico'
    ],
    relevanceToCheckpoint: 'Puntos Eucariotas 1, 3, 8 y 9'
  },
  {
    id: 'book-lodish',
    category: 'textbook',
    topic: 'general',
    title: 'Molecular Cell Biology (9th Edition)',
    authors: 'Lodish, H., Berk, A., Kaiser, C.A., Krieger, M., Bretscher, A., Ploegh, H., Martin, K.C., Yaffe, M.B., Amon, A.',
    year: 2021,
    publication: 'W.H. Freeman / Macmillan Learning',
    description: 'Tratado avanzado con énfasis en datos experimentales, cinética celular y patologías asociadas a fallos de regulación génica.',
    keyContributions: [
      'Cuantificación cinético-molecular del acoplamiento transcripción-traducción',
      'Vías de degradación dependientes de ubiquitina y proteasoma 26S',
      'Señalización del receptor y activación de factores de transcripción específicos'
    ],
    relevanceToCheckpoint: 'Puntos Eucariotas 1, 7, 10 y 11'
  },
  {
    id: 'book-watson',
    category: 'textbook',
    topic: 'general',
    title: 'Molecular Biology of the Gene (7th Edition)',
    authors: 'Watson, J.D., Baker, T.A., Bell, S.P., Gann, A., Levine, M., Losick, R.',
    year: 2013,
    publication: 'Pearson / Cold Spring Harbor Laboratory Press',
    description: 'Enfoque riguroso en la lógica físico-química del ADN, el ensamblaje de complejos enzimáticos y las diferencias mecanísticas entre procariotas y eucariotas.',
    keyContributions: [
      'Estructura y función de los factores sigma bacterianos y reconocimiento de promotores -10 y -35',
      'Interacciones alostéricas represor-operador en los sistemas Lac y Trp',
      'Topología del ADN y superenrollamiento durante la elongación transcripcional'
    ],
    relevanceToCheckpoint: 'Puntos Procariotas 1, 2 y 4'
  },
  {
    id: 'book-lewin',
    category: 'textbook',
    topic: 'general',
    title: "Lewin's GENES XII",
    authors: 'Krebs, J.E., Goldstein, E.S., Kilpatrick, S.T.',
    year: 2018,
    publication: 'Jones & Bartlett Learning',
    description: 'Compendio exhaustivo de genética molecular moderna con cobertura profunda de ARNs no codificantes, riboswitches y epigenómica.',
    keyContributions: [
      'Detalle estructural de complejos de splicing y sitios donadores/aceptores',
      'Control por atenuación transcripcional y estructuras secundarias de ARN',
      'Epigenética de la metilación del ADN y marcas de histonas H3K4me3 / H3K27me3'
    ],
    relevanceToCheckpoint: 'Puntos Eucariotas 1, 2 y Puntos Procariotas 3'
  },

  // --- ARTÍCULOS SEMINALES Y PREMIOS NOBEL ---
  {
    id: 'paper-jacob-monod',
    category: 'seminal_paper',
    topic: 'prokaryotes',
    title: 'Genetic regulatory mechanisms in the synthesis of proteins',
    authors: 'Jacob, F., Monod, J.',
    year: 1961,
    publication: 'Journal of Molecular Biology, 3(3), 318-356',
    doiOrUrl: 'https://doi.org/10.1016/S0022-2836(61)80072-7',
    description: 'Artículo fundacional de la biología molecular contemporánea. Establece la hipótesis del ARN mensajero y el modelo del operón como circuito genético reprimible/inducible.',
    keyContributions: [
      'Definición formal del ARNm como intermediario inestable entre el genoma y la proteína',
      'Modelo del operador y el represor alostérico en Escherichia coli',
      'Bases conceptuales del Premio Nobel de Fisiología o Medicina de 1965'
    ],
    relevanceToCheckpoint: 'Punto Procariota 1 (Operón bacteriano y factores sigma)'
  },
  {
    id: 'paper-fire-mello',
    category: 'seminal_paper',
    topic: 'rna_processing',
    title: 'Potent and specific genetic interference by double-stranded RNA in Caenorhabditis elegans',
    authors: 'Fire, A., Xu, S., Montgomery, M.K., Kostas, S.A., Driver, S.E., Mello, C.C.',
    year: 1998,
    publication: 'Nature, 391(6669), 806-811',
    doiOrUrl: 'https://doi.org/10.1038/35888',
    description: 'Descubrimiento del silenciamiento génico postranscripcional mediado por ARN de doble cadena (RNAi). Demuestra que pequeñas moléculas de ARN guían el bloqueo traduccional y la degradación del ARNm.',
    keyContributions: [
      'Identificación del dsRNA como agente causal de la degradación selectiva de ARNm',
      'Apertura del campo de los microARNs endógenos y complejos RISC / Argonauta',
      'Premio Nobel de Fisiología o Medicina de 2006'
    ],
    relevanceToCheckpoint: 'Punto Eucariota 5 (microARNs y complejo RISC)'
  },
  {
    id: 'paper-maquat-nmd',
    category: 'seminal_paper',
    topic: 'rna_processing',
    title: 'Nonsense-mediated mRNA decay: splicing, translation and mRNP surveillance',
    authors: 'Maquat, L.E.',
    year: 2004,
    publication: 'Nature Reviews Molecular Cell Biology, 5(2), 89-99',
    doiOrUrl: 'https://doi.org/10.1038/nrm1310',
    description: 'Revisión canónica sobre el sistema de vigilancia NMD. Explica cómo la célula detecta codones de paro prematuros midiendo la distancia física entre el ribosoma en la primera ronda traduccional y el complejo de unión a exón (EJC).',
    keyContributions: [
      'Modelo de los 50-55 nucleótidos corriente abajo del último EJC',
      'Papel de las proteínas UPF1, UPF2 y UPF3 en la fosforilación y reclutamiento de nucleasas',
      'Explicación mecanística de la patogénesis de la beta-talasemia y fibrosis quística'
    ],
    relevanceToCheckpoint: 'Punto Eucariota 2 (Vigilancia NMD y control de calidad)'
  },
  {
    id: 'paper-webster-expressome',
    category: 'seminal_paper',
    topic: 'prokaryotes',
    title: 'Structural basis of transcription-translation coupling and collision in bacteria',
    authors: 'Webster, M.W., Takacs, M., Weixlbaumer, A., et al.',
    year: 2020,
    publication: 'Science, 369(6509), 1355-1359',
    doiOrUrl: 'https://doi.org/10.1126/science.abb5036',
    description: 'Resolución mediante criomicroscopía electrónica (cryo-EM) de la estructura del complejo supramolecular ARN polimerasa-ribosoma acoplado (Expressoma), demostrando la coordinación física en procariotas.',
    keyContributions: [
      'Visualización directa de la proteína NusG como puente molecular entre la RNAP y el ribosoma 70S',
      'Demostración de cómo el ribosoma líder previene la terminación prematura por el factor Rho',
      'Resolución de los estados de colisión y sincronización entre transcripción y traducción'
    ],
    relevanceToCheckpoint: 'Punto Procariota 2 (El Expressoma acoplado y atenuación)'
  },
  {
    id: 'paper-serganov-riboswitch',
    category: 'seminal_paper',
    topic: 'prokaryotes',
    title: 'A decade of riboswitches: structured RNA elements that modulate gene expression',
    authors: 'Serganov, A., Nudler, E.',
    year: 2013,
    publication: 'Cell, 152(1), 17-24',
    doiOrUrl: 'https://doi.org/10.1016/j.cell.2012.12.024',
    description: 'Análisis global de los riboswitches bacterianos como sensores moleculares directos integrados en el 5\'-UTR sin mediación de proteínas proteicas.',
    keyContributions: [
      'Arquitectura modular: dominio aptámero sensor vs. plataforma de expresión efectora',
      'Mecanismos de terminación transcripcional por horquilla intrínseca vs. secuestro del Shine-Dalgarno',
      'Importancia de los riboswitches como blancos farmacológicos para antibióticos de nueva generación'
    ],
    relevanceToCheckpoint: 'Punto Procariota 3 (Sensores de metabolitos y Riboswitches)'
  },
  {
    id: 'paper-ciechanover-proteasome',
    category: 'seminal_paper',
    topic: 'translation_protein',
    title: 'The ubiquitin-proteasome pathway: mechanisms and functions in cell regulation',
    authors: 'Ciechanover, A., Orian, A., Schwartz, A.L.',
    year: 2000,
    publication: 'Nature Reviews Molecular Cell Biology, 1(1), 125-134',
    doiOrUrl: 'https://doi.org/10.1038/35040061',
    description: 'Bases mecanísticas de la degradación selectiva de proteínas mediada por la cascada enzimática E1-E2-E3 y la destrucción por el complejo proteasoma 26S.',
    keyContributions: [
      'Jerarquía enzimática de ubiquitinación y especificidad dictada por ligasas E3',
      'Topología de cadenas de poliubiquitina (enlaces K48 para degradación proteasomal)',
      'Regulación del ciclo celular por degradación dirigida de ciclinas'
    ],
    relevanceToCheckpoint: 'Punto Eucariota 11 (Degradación por Proteasoma 26S)'
  },

  // --- RECURSOS Y BASES DE DATOS OFICIALES ABIERTAS ---
  {
    id: 'db-pubmed',
    category: 'database',
    topic: 'general',
    title: 'NCBI PubMed & PubMed Central (PMC)',
    authors: 'National Center for Biotechnology Information (NCBI / NIH)',
    year: 2026,
    publication: 'U.S. National Library of Medicine',
    doiOrUrl: 'https://pubmed.ncbi.nlm.nih.gov/',
    description: 'El mayor repositorio mundial de literatura biomédica y de ciencias biológicas indexada. Permite consultar artículos primarios, revisiones por pares y datos preclínicos.',
    keyContributions: [
      'Más de 36 millones de citas indexadas en MEDLINE',
      'Acceso libre a millones de manuscritos completos en PubMed Central',
      'Herramienta de búsqueda canónica para investigación biomédica'
    ],
    relevanceToCheckpoint: 'Búsqueda de literatura en todos los puntos de control'
  },
  {
    id: 'db-uniprot',
    category: 'database',
    topic: 'translation_protein',
    title: 'UniProtKB (Universal Protein Resource)',
    authors: 'The UniProt Consortium (EMBL-EBI, SIB, PIR)',
    year: 2026,
    publication: 'Nucleic Acids Research',
    doiOrUrl: 'https://www.uniprot.org/',
    description: 'Base de datos universal de secuencias y anotaciones funcionales de proteínas. Crucial para revisar isoformas de splicing, sitios de modificación postraduccional y localización subcelular.',
    keyContributions: [
      'Anotación manual curada por expertos en Swiss-Prot',
      'Catálogo completo de modificaciones postraduccionales (PTMs) validadas experimentalmente',
      'Mapeo de mutaciones patogénicas y dominios estructurales'
    ],
    relevanceToCheckpoint: 'Puntos Eucariotas 8, 9, 10 y 11'
  },
  {
    id: 'db-rfam',
    category: 'database',
    topic: 'rna_processing',
    title: 'Rfam: The RNA Families Database',
    authors: 'Kalvari, I., Nawrocki, E.P., Ontiveros-Palacios, N., et al.',
    year: 2021,
    publication: 'Nucleic Acids Research',
    doiOrUrl: 'https://rfam.org/',
    description: 'Colección de familias de ARN no codificantes, modelos de covariación de estructura secundaria y catálogo completo de riboswitches procariotas y eucariotas.',
    keyContributions: [
      'Alineamientos de secuencias y perfiles consensuados de estructura secundaria de ARN',
      'Catálogo canónico de clases de riboswitches (TPP, SAM, FMN, GlcN6P, cobalamina)',
      'Modelos de microARNs y pequeños ARNs bacterianos'
    ],
    relevanceToCheckpoint: 'Puntos Procariotas 3, 4 y Punto Eucariota 5'
  },
  {
    id: 'db-pdb',
    category: 'database',
    topic: 'general',
    title: 'RCSB Protein Data Bank (PDB)',
    authors: 'RCSB PDB, PDBe, PDBj',
    year: 2026,
    publication: 'wwPDB Consortium',
    doiOrUrl: 'https://www.rcsb.org/',
    description: 'Archivo mundial de estructuras tridimensionales de proteínas, ácidos nucleicos y complejos macromoleculares resueltas por cristalografía de rayos X, RMN y Cryo-EM.',
    keyContributions: [
      'Estructuras tridimensionales completas del ribosoma bacteriano 70S y eucariota 80S',
      'Coordenadas atómicas del complejo remodelador de nucleosomas SWI/SNF y del proteasoma 26S',
      'Visualización espacial de complejos ADN-factor de transcripción'
    ],
    relevanceToCheckpoint: 'Inspección estructural de todos los puntos de control'
  },
  {
    id: 'db-mirbase',
    category: 'database',
    topic: 'rna_processing',
    title: 'miRBase: The MicroRNA Database',
    authors: 'Kozomara, A., Birgaoanu, M., Griffiths-Jones, S.',
    year: 2019,
    publication: 'Nucleic Acids Research',
    doiOrUrl: 'https://www.mirbase.org/',
    description: 'Base de datos de referencia primaria para secuencias de microARNs, anotación genómica y nomenclaturas en organismos eucariotas.',
    keyContributions: [
      'Registro oficial de nombres y secuencias de microARNs maduros y precursores',
      'Enlaces a bases de predicción de dianas de ARNm (TargetScan, miRDB)',
      'Anotación de microARNs con desregulación en cáncer y patologías'
    ],
    relevanceToCheckpoint: 'Punto Eucariota 5 (microARNs y silenciamiento génico)'
  }
];
