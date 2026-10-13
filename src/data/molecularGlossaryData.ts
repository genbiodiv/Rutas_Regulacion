/**
 * Glosario Molecular Universitario:
 * Definiciones mecanicistas cortas y referencias bibliográficas rigurosas
 * para los términos destacados en la ruta y puntos de control de la expresión génica.
 */

export interface GlossaryTerm {
  id: string;
  term: string;
  category: 'ARN y Procesamiento' | 'Vigilancia y Calidad' | 'Traducción y Ribosoma' | 'Destino Proteico' | 'Genética Bacteriana' | 'Epigenética';
  shortDefinition: string;
  molecularMechanism: string;
  cellularLocation: string;
  checkpointAssociation: string;
  references: {
    author: string;
    year: number;
    title: string;
    source: string;
    doiOrPmid?: string;
  }[];
}

export const MOLECULAR_GLOSSARY: GlossaryTerm[] = [
  {
    id: "espliceosoma",
    term: "Espliceosoma (Spliceosome)",
    category: "ARN y Procesamiento",
    shortDefinition: "Megacomplejo ribonucleoproteico dinámico nuclear responsable de catalizar la eliminación de intrones y el empalme de exones en los pre-ARNm eucariotas.",
    molecularMechanism: "Ensambla de forma secuencial cinco ribonucleoproteínas nucleares pequeñas (snRNPs U1, U2, U4/U6, U5) y más de cien proteínas auxiliares para catalizar dos reacciones consecutivas de transesterificación nucleofílica.",
    cellularLocation: "Núcleoplasma (asociado al dominio CTD de la ARN Polimerasa II)",
    checkpointAssociation: "Punto de Control 1 (Ruta Eucariota)",
    references: [
      {
        author: "Wahl, M. C., Will, C. L., & Lührmann, R.",
        year: 2009,
        title: "The spliceosome: design principles of a dynamic RNP machine",
        source: "Cell, 136(4), 701-718",
        doiOrPmid: "10.1016/j.cell.2009.02.009"
      },
      {
        author: "Alberts, B. et al.",
        year: 2022,
        title: "Molecular Biology of the Cell (7ª ed.)",
        source: "Garland Science / W.W. Norton, Cap. 6",
      }
    ]
  },
  {
    id: "splicing-alternativo",
    term: "Splicing Alternativo",
    category: "ARN y Procesamiento",
    shortDefinition: "Proceso postranscripcional mediante el cual los exones de un pre-ARNm se combinan de diferentes maneras para producir múltiples isoformas de ARNm maduro a partir de un único locus génico.",
    molecularMechanism: "Factores proteicos reguladores (proteínas SR promotoras y hnRNPs represoras) se unen a elementos en cis (ESE, ESS, ISE, ISS) modulando el reclutamiento del espliceosoma en sitios de empalme débiles.",
    cellularLocation: "Núcleoplasma",
    checkpointAssociation: "Punto de Control 1 (Ruta Eucariota)",
    references: [
      {
        author: "Nilsen, T. W., & Graveley, B. R.",
        year: 2010,
        title: "Expansion of the eukaryotic proteome by alternative splicing",
        source: "Nature, 463(7280), 457-463",
        doiOrPmid: "10.1038/nature08909"
      }
    ]
  },
  {
    id: "nmd",
    term: "NMD (Nonsense-Mediated mRNA Decay)",
    category: "Vigilancia y Calidad",
    shortDefinition: "Vía de vigilancia de calidad del ARNm eucariota que reconoce y degrada selectivamente transcritos que contienen codones de terminación prematuros (PTC).",
    molecularMechanism: "Durante la ronda pionera de traducción, si el ribosoma encuentra un codón STOP más de 50-54 nt río arriba de un complejo EJC residual, la helicasa UPF1 se hiperfosforila vía SMG1 y recluta desadenilasas y exonucleasas para digerir el ARNm.",
    cellularLocation: "Citosol / Ribosomas pioneros",
    checkpointAssociation: "Punto de Control 2 (Ruta Eucariota)",
    references: [
      {
        author: "Popp, M. W., & Maquat, L. E.",
        year: 2016,
        title: "Leveraging rules of nonsense-mediated mRNA decay for genome medicine and targeted therapeutics",
        source: "Cell, 165(6), 1319-1322",
        doiOrPmid: "10.1016/j.cell.2016.05.048"
      },
      {
        author: "Lykke-Andersen, J., & Jensen, T. H.",
        year: 2015,
        title: "Nonsense-mediated mRNA decay: an intricate machinery that shapes transcriptomes",
        source: "Nature Reviews Molecular Cell Biology, 16(11), 665-677",
        doiOrPmid: "10.1038/nrm4063"
      }
    ]
  },
  {
    id: "complejo-ejc",
    term: "Complejo EJC (Exon Junction Complex)",
    category: "Vigilancia y Calidad",
    shortDefinition: "Marca proteica nuclear depositada de forma estable ~20-24 nucleótidos río arriba de cada unión exón-exón tras la remoción de un intrón.",
    molecularMechanism: "Tetrámero central (eIF4AIII, MAGOH, Y14, MLN51) ensamblado por el espliceosoma. Sirve como memoria posicional nuclear que viaja al citoplasma y es desalojada por el ribosoma en la primera ronda de traducción.",
    cellularLocation: "Uniones exón-exón en el pre-ARNm y mRNP citoplásmico",
    checkpointAssociation: "Punto de Control 1 y 2 (Ruta Eucariota)",
    references: [
      {
        author: "Le Hir, H., Saulière, J., & Wang, Z.",
        year: 2016,
        title: "The exon junction complex as a master regulator of mRNA fate",
        source: "Biochemical Society Transactions, 44(4), 1082-1087",
        doiOrPmid: "10.1042/BST20160081"
      }
    ]
  },
  {
    id: "poro-nuclear-npc",
    term: "Complejo del Poro Nuclear (NPC)",
    category: "ARN y Procesamiento",
    shortDefinition: "Estructura macromolecular cilíndrica de ~120 nm que perfora la doble membrana de la envoltura nuclear, actuando como aduana selectiva entre núcleo y citoplasma.",
    molecularMechanism: "Compuesto por ~30 nucleoporinas (Nups). Contiene un canal acuoso central tapizado de dominios intrínsecamente desordenados ricos en fenilalanina y glicina (FG-repeats) que forman un gel hidrofóbico permeable sólo a receptores de transporte.",
    cellularLocation: "Envoltura nuclear",
    checkpointAssociation: "Punto de Control 3 (Ruta Eucariota)",
    references: [
      {
        author: "Knockenhauer, K. E., & Schwartz, T. U.",
        year: 2016,
        title: "The nuclear pore complex as a flexible and dynamic gate",
        source: "Cell, 164(6), 1162-1171",
        doiOrPmid: "10.1016/j.cell.2016.01.034"
      }
    ]
  },
  {
    id: "tap-nxf1",
    term: "TAP / NXF1 (Receptor de Exportación)",
    category: "ARN y Procesamiento",
    shortDefinition: "Proteína adaptadora principal encargada de translocar los mRNPs maduros desde el nucleoplasma hacia el citoplasma a través del NPC.",
    molecularMechanism: "Heterodimeriza con p15/NXT1, se une al ARNm procesado y establece interacciones hidrofóbicas transitorias con las repeticiones FG de las nucleoporinas. Al llegar al citosol, es desprendida por la helicasa Dbp5.",
    cellularLocation: "Núcleo, poro nuclear y cara citoplásmica del NPC",
    checkpointAssociation: "Punto de Control 3 (Ruta Eucariota)",
    references: [
      {
        author: "Köhler, A., & Hurt, E.",
        year: 2007,
        title: "Exporting RNA from the nucleus to the cytoplasm",
        source: "Nature Reviews Molecular Cell Biology, 8(10), 761-773",
        doiOrPmid: "10.1038/nrm2255"
      }
    ]
  },
  {
    id: "elementos-are",
    term: "Elementos ARE (AU-Rich Elements)",
    category: "ARN y Procesamiento",
    shortDefinition: "Motivos reguladores conservados ricos en adenilato y uridilato (típicamente pentámeros AUUUA) localizados en la región 3'-UTR de ARNm de vida media corta.",
    molecularMechanism: "Son reconocidos por proteínas que promueven la desestabilización (como Tristetraprolina / TTP o AUF1, que reclutan desadenilasas) o por proteínas protectoras competidoras (como HuR).",
    cellularLocation: "Región 3'-UTR de ARNm en citoplasma",
    checkpointAssociation: "Punto de Control 4 (Ruta Eucariota)",
    references: [
      {
        author: "Chen, C. Y., & Shyu, A. B.",
        year: 1995,
        title: "AU-rich elements: characterization and importance in mRNA degradation",
        source: "Trends in Biochemical Sciences, 20(11), 465-470",
        doiOrPmid: "10.1016/S0968-0004(00)89102-1"
      }
    ]
  },
  {
    id: "microrna-mirna",
    term: "MicroARN (miRNA)",
    category: "ARN y Procesamiento",
    shortDefinition: "Pequeñas moléculas de ARN no codificante monocatenarias (~21-23 nt) que regulan negativamente la expresión génica postranscripcionalmente en eucariotas.",
    molecularMechanism: "Se ensamblan en el complejo ribonucleoproteico RISC con proteínas Argonauta (Ago). Mediante apareamiento de bases entre su región 'semilla' (seed, nt 2-8) y el 3'-UTR del ARNm diana, provocan bloqueo traduccional y desadenilación acelerada.",
    cellularLocation: "Citosol / Cuerpos P (Processing Bodies)",
    checkpointAssociation: "Punto de Control 5 (Ruta Eucariota)",
    references: [
      {
        author: "Bartel, D. P.",
        year: 2018,
        title: "Metazoan MicroRNAs",
        source: "Cell, 173(1), 20-51",
        doiOrPmid: "10.1016/j.cell.2018.03.006"
      }
    ]
  },
  {
    id: "complejo-risc",
    term: "Complejo RISC y Argonauta (Ago2)",
    category: "ARN y Procesamiento",
    shortDefinition: "Complejo silenciador inducido por ARN (RNA-Induced Silencing Complex) efector del silenciamiento postranscripcional mediado por microARNs y siARNs.",
    molecularMechanism: "La proteína Argonauta ancla el extremo 5' y 3' del microARN guía. En humanos, Ago2 posee además actividad endonucleasa ('slicer') capaz de cortar ARNm con complementariedad perfecta.",
    cellularLocation: "Citosol",
    checkpointAssociation: "Punto de Control 5 (Ruta Eucariota)",
    references: [
      {
        author: "Jinek, M., & Doudna, J. A.",
        year: 2009,
        title: "A three-dimensional view of the molecular machinery of RNA interference",
        source: "Nature, 457(7228), 405-412",
        doiOrPmid: "10.1038/nature07755"
      }
    ]
  },
  {
    id: "expressome",
    term: "Expressome (Acoplamiento Transcripción-Traducción)",
    category: "Genética Bacteriana",
    shortDefinition: "Megacomplejo macromolecular físico procariota en el que la ARN polimerasa se acopla directamente al ribosoma líder en síntesis simultánea.",
    molecularMechanism: "Factores de transcripción NusA y NusG forman un puente molecular entre la polimerasa bacteriana y la subunidad 30S del ribosoma. Si el ribosoma frena, la polimerasa se desprotege y el factor Rho detiene la transcripción.",
    cellularLocation: "Citosol bacteriano / Periferia del nucleoide",
    checkpointAssociation: "Punto de Control 1 (Ruta Procariota)",
    references: [
      {
        author: "Webster, M. W. et al.",
        year: 2020,
        title: "Structural basis of transcription-translation coupling and collision in bacteria",
        source: "Science, 369(6509), 1355-1359",
        doiOrPmid: "10.1126/science.abb5036"
      }
    ]
  },
  {
    id: "degradosoma",
    term: "Degradosoma Bacteriano",
    category: "Genética Bacteriana",
    shortDefinition: "Complejo multiproteico catalítico anclado a la membrana plasmática bacteriana responsable del rápido recambio y degradación del ARNm.",
    molecularMechanism: "La endoribonucleasa ARNasa E actúa como andamio estructural y corta el ARN en regiones AU no estructuradas; la fosforilasa PNPasa procesa exonucleolíticamente 3'-5' con la ayuda de la helicasa RhlB y la enolasa.",
    cellularLocation: "Cara interna de la membrana citoplásmica bacteriana",
    checkpointAssociation: "Punto de Control 2 (Ruta Procariota)",
    references: [
      {
        author: "Carpousis, A. J.",
        year: 2007,
        title: "The RNA degradosome of Escherichia coli: an mRNA-degrading machine assembled on RNase E",
        source: "Annual Review of Microbiology, 61, 71-87",
        doiOrPmid: "10.1146/annurev.micro.61.080706.093440"
      }
    ]
  },
  {
    id: "riboswitch",
    term: "Riboswitch (Interruptor de ARN)",
    category: "Genética Bacteriana",
    shortDefinition: "Elemento regulador estructurado en la región 5'-UTR del ARNm procariota que se une directamente a un ligando metabólico pequeño sin requerir proteínas.",
    molecularMechanism: "Consta de un dominio aptámero que sensa el metabolito (ej. TPP, SAM, lisina) y una plataforma de expresión acoplada. La unión del ligando estabiliza una conformación que secuestra la secuencia Shine-Dalgarno o forma un terminador de transcripción.",
    cellularLocation: "Región 5'-UTR de ARNm bacterianos",
    checkpointAssociation: "Punto de Control 3 (Ruta Procariota)",
    references: [
      {
        author: "Breaker, R. R.",
        year: 2012,
        title: "Riboswitches and the RNA world",
        source: "Cold Spring Harbor Perspectives in Biology, 4(2), a003566",
        doiOrPmid: "10.1101/cshperspect.a003566"
      },
      {
        author: "Serganov, A., & Nudler, E.",
        year: 2013,
        title: "A decade of riboswitches",
        source: "Cell, 152(1-2), 17-24",
        doiOrPmid: "10.1016/j.cell.2012.12.024"
      }
    ]
  },
  {
    id: "contexto-kozak",
    term: "Contexto Kozak (GCCRCCAUGG)",
    category: "Traducción y Ribosoma",
    shortDefinition: "Secuencia consenso óptima que rodea al codón de inicio AUG en los ARNm eucariotas para asegurar el reconocimiento eficiente por el complejo ribosómico 43S.",
    molecularMechanism: "Durante el escaneo 5'-3', la presencia de una purina (A o G) en posición -3 y una guanina en posición +4 interactúa con bases del ARNr 18S facilitando la detención del complejo de preinicio e inicio de traducción.",
    cellularLocation: "Extremo 5' del marco abierto de lectura (ORF)",
    checkpointAssociation: "Punto de Control 6 (Destino Proteico)",
    references: [
      {
        author: "Kozak, M.",
        year: 1987,
        title: "An analysis of 5'-noncoding sequences from 699 vertebrate messenger RNAs",
        source: "Nucleic Acids Research, 15(20), 8125-8148",
        doiOrPmid: "10.1093/nar/15.20.8125"
      }
    ]
  },
  {
    id: "shine-dalgarno",
    term: "Secuencia Shine-Dalgarno (AGGAGG)",
    category: "Traducción y Ribosoma",
    shortDefinition: "Secuencia consenso procariota situada ~8 nucleótidos río arriba del codón de inicio AUG que recluta directamente la subunidad menor del ribosoma.",
    molecularMechanism: "Se aparea por complementariedad de bases con la secuencia anti-Shine-Dalgarno situada en el extremo 3' del ARNr 16S de la subunidad ribosómica 30S, posicionando el codón de inicio exactamente en el sitio P.",
    cellularLocation: "Región líder de ARNm policistrónicos bacterianos",
    checkpointAssociation: "Punto de Control 6 (Destino Proteico)",
    references: [
      {
        author: "Shine, J., & Dalgarno, L.",
        year: 1974,
        title: "The 3'-terminal sequence of Escherichia coli 16S ribosomal RNA: complementarity to nonsense triplets and ribosome binding sites",
        source: "Proceedings of the National Academy of Sciences USA, 71(4), 1342-1346",
        doiOrPmid: "10.1073/pnas.71.4.1342"
      }
    ]
  },
  {
    id: "eif2a-isr",
    term: "eIF2α y Respuesta Integrada al Estrés (ISR)",
    category: "Traducción y Ribosoma",
    shortDefinition: "Interruptor maestro de control traduccional eucariota. La fosforilación de su subunidad alfa en Serina 51 bloquea la iniciación global de la traducción.",
    molecularMechanism: "Fosforilado por quinasas de estrés (PERK, PKR, GCN2, HRI), eIF2-P secuestra con altísima afinidad a su factor intercambiador eIF2B, impidiendo la regeneración de eIF2-GTP requerido para formar el complejo ternario iniciador.",
    cellularLocation: "Citosol",
    checkpointAssociation: "Punto de Control 6 (Destino Proteico)",
    references: [
      {
        author: "Pakos-Zebrucka, K. et al.",
        year: 2016,
        title: "The integrated stress response",
        source: "EMBO Reports, 17(10), 1374-1395",
        doiOrPmid: "10.15252/embr.201642924"
      }
    ]
  },
  {
    id: "chaperonas-hsp70",
    term: "Chaperonas Moleculares (Hsp70 / GroEL)",
    category: "Destino Proteico",
    shortDefinition: "Maquinaria de proteínas que asisten al plegamiento conformacional correcto de otras cadenas polipeptídicas sin formar parte de la estructura final.",
    molecularMechanism: "Hsp70 cicla entre conformaciones abierta (unida a ATP) y cerrada (unida a ADP) para blindar parches hidrofóbicos transitorios. Las chaperoninas cilíndricas (GroEL-GroES / TRiC) ofrecen una cavidad hidrofílica protegida para el plegamiento sin interferencias.",
    cellularLocation: "Citosol, matriz mitocondrial y lumen del RE",
    checkpointAssociation: "Punto de Control 8 (Destino Proteico)",
    references: [
      {
        author: "Hartl, F. U., Bracher, A., & Hayer-Hartl, M.",
        year: 2011,
        title: "Molecular chaperones in protein folding and proteostasis",
        source: "Nature, 475(7356), 324-332",
        doiOrPmid: "10.1038/nature10317"
      }
    ]
  },
  {
    id: "upr-erad",
    term: "Respuesta UPR y Vía ERAD",
    category: "Destino Proteico",
    shortDefinition: "Sistemas de control de calidad del retículo endoplásmico frente a la sobrecarga de proteínas desplegadas.",
    molecularMechanism: "Tres sensores transmembrana (IRE1, PERK, ATF6) detectan el desprendimiento de la chaperona BiP. Si el estrés persiste, polipéptidos no plegados son retrotranslocados por ERAD al citosol para ubiquitinación y destrucción por el proteasoma.",
    cellularLocation: "Membrana y lumen del Retículo Endoplásmico",
    checkpointAssociation: "Punto de Control 8 (Destino Proteico)",
    references: [
      {
        author: "Walter, P., & Ron, D.",
        year: 2011,
        title: "The unfolded protein response: from stress pathway to homeostatic regulation",
        source: "Science, 334(6059), 1081-1086",
        doiOrPmid: "10.1126/science.1209038"
      }
    ]
  },
  {
    id: "ptms",
    term: "Modificaciones Postraduccionales (PTMs)",
    category: "Destino Proteico",
    shortDefinition: "Adiciones covalentes enzimáticas que modifican la estructura primaria de la proteína tras su síntesis (fosforilación, ubiquitinación, glicosilación, etc.).",
    molecularMechanism: "Alteran la carga eléctrica neta, crean sitios de unión para dominios de interacción (como SH2 con fosfotirosinas) o provocan cambios alostéricos que modulan la actividad catalítica o la vida media.",
    cellularLocation: "Citosol, RE, Aparato de Golgi y Núcleo",
    checkpointAssociation: "Punto de Control 9 (Destino Proteico)",
    references: [
      {
        author: "Walsh, C. T.",
        year: 2006,
        title: "Posttranslational Modification of Proteins: Expanding Nature's Inventory",
        source: "Roberts and Company Publishers",
      }
    ]
  },
  {
    id: "srp-sec61",
    term: "Partícula SRP y Translocón Sec61",
    category: "Destino Proteico",
    shortDefinition: "Maquinaria responsable de dirigir cotraduccionalmente a los ribosomas hacia la membrana del retículo endoplásmico en la vía secretora.",
    molecularMechanism: "La ribonucleoproteína SRP reconoce el péptido señal hidrofóbico naciente, frena la elongación y se acopla a su receptor en la membrana del RE. El ribosoma se transfiere al canal Sec61, que se abre hacia el lumen.",
    cellularLocation: "Citosol y membrana del Retículo Endoplásmico Rugoso",
    checkpointAssociation: "Punto de Control 10 (Destino Proteico)",
    references: [
      {
        author: "Rapoport, T. A.",
        year: 2007,
        title: "Protein translocation across the eukaryotic endoplasmic reticulum and bacterial inner membrane",
        source: "Nature, 450(7170), 663-669",
        doiOrPmid: "10.1038/nature06384"
      }
    ]
  },
  {
    id: "proteasoma-26s",
    term: "Proteasoma 26S y Cascada de Ubiquitinación",
    category: "Destino Proteico",
    shortDefinition: "Cilindro proteolítico multicatalítico dependiente de ATP encargado de degradar proteínas reguladas, dañadas o mal plegadas marcadas con ubiquitina.",
    molecularMechanism: "La cascada E1 (activación), E2 (conjugación) y E3 (ligación específica) construye cadenas de poliubiquitina unidas por K48. La partícula reguladora 19S reconoce la marca, despliega la proteína con ATP y la introduce en la cavidad 20S para hidrólisis a oligopéptidos.",
    cellularLocation: "Citosol y Núcleo celular",
    checkpointAssociation: "Punto de Control 11 (Destino Proteico)",
    references: [
      {
        author: "Ciechanover, A.",
        year: 2005,
        title: "Proteolysis: from the lysosome to ubiquitin and the proteasome",
        source: "Nature Reviews Molecular Cell Biology, 6(1), 79-87",
        doiOrPmid: "10.1038/nrm1552"
      },
      {
        author: "Finley, D.",
        year: 2009,
        title: "Recognition and processing of ubiquitin-protein conjugates by the proteasome",
        source: "Annual Review of Biochemistry, 78, 477-513",
        doiOrPmid: "10.1146/annurev.biochem.78.082307.132250"
      }
    ]
  },
  {
    id: "cromatina-nucleosomas",
    term: "Cromatina, Nucleosomas y Código de Histonas",
    category: "Epigenética",
    shortDefinition: "Complejo de ADN y proteínas histonas que confiere empaquetamiento y un estado basal restrictivo al genoma eucariota.",
    molecularMechanism: "El octámero de histonas [2x(H2A, H2B, H3, H4)] envuelve 147 pb de ADN. Las modificaciones covalentes en colas N-terminales (acetilación por HATs, metilación por HMTs, fosforilación) alteran la condensación e inducen el reclutamiento de lectores proteicos de transcripción.",
    cellularLocation: "Núcleo celular (Eucromatina y Heterocromatina)",
    checkpointAssociation: "Punto de Control 0 (Nivel ADN)",
    references: [
      {
        author: "Luger, K. et al.",
        year: 1997,
        title: "Crystal structure of the nucleosome core particle at 2.8 A resolution",
        source: "Nature, 389(6648), 251-260",
        doiOrPmid: "10.1038/38444"
      },
      {
        author: "Allis, C. D., & Jenuwein, T.",
        year: 2016,
        title: "The molecular hallmarks of epigenetic control",
        source: "Nature Reviews Genetics, 17(8), 487-500",
        doiOrPmid: "10.1038/nrg.2016.59"
      }
    ]
  },
  {
    id: "swi-snf-remodelacion",
    term: "Complejo Remodelador de Cromatina SWI/SNF",
    category: "Epigenética",
    shortDefinition: "Complejo macromolecular multiproteico dependiente de ATP que desliza o expulsa nucleosomas para modular la accesibilidad física del ADN.",
    molecularMechanism: "Utiliza la energía de hidrólisis de ATP generada por su subunidad catalítica SMARCA4/BRG1 para romper contactos ADN-histona y propagar bucles de torsión que reubican los octámeros, exponiendo secuencias promotoras y enhancers a factores de transcripción.",
    cellularLocation: "Núcleoplasma",
    checkpointAssociation: "Punto de Control 0 (Nivel ADN)",
    references: [
      {
        author: "Clapier, C. R., & Cairns, B. R.",
        year: 2009,
        title: "The biology of chromatin remodeling complexes",
        source: "Annual Review of Biochemistry, 78, 273-304",
        doiOrPmid: "10.1146/annurev.biochem.77.062706.153223"
      }
    ]
  },
  {
    id: "factores-sigma",
    term: "Factores Sigma Bacterianos (σ)",
    category: "Genética Bacteriana",
    shortDefinition: "Subunidades proteicas intercambiables que se acoplan a la ARN polimerasa central bacteriana para conferir especificidad de reconocimiento de promotores.",
    molecularMechanism: "El factor sigma primario (σ70 en E. coli) reconoce las secuencias consenso -35 y -10 para la transcripción basal en crecimiento logarítmico. Factores alternativos (σ32 en choque térmico, σ54 en limitación de nitrógeno, σS en fase estacionaria) redirigen la polimerasa a regulones de estrés.",
    cellularLocation: "Citoplasma / Nucleoide bacteriano",
    checkpointAssociation: "Punto de Control 0 / 1 (Nivel ADN y Transcripción Procariota)",
    references: [
      {
        author: "Paget, M. S., & Helmann, J. D.",
        year: 2003,
        title: "The sigma70 family of sigma factors",
        source: "Genome Biology, 4(1), 203",
        doiOrPmid: "10.1186/gb-2003-4-1-203"
      }
    ]
  },
  {
    id: "operon-lac",
    term: "Operón y Represión Alostérica (Modelo Jacob-Monod)",
    category: "Genética Bacteriana",
    shortDefinition: "Unidad genética bacteriana transcrita como un solo ARNm policistrónico bajo el control coordinado de un promotor y un operador.",
    molecularMechanism: "Un represor homotetramérico (como LacI) se une con afinidad picomolar a la secuencia operadora impidiendo el avance estérico de la ARN polimerasa. La unión de una molécula inductora (alolactosa) provoca un cambio alostérico que disocia el represor.",
    cellularLocation: "Nucleoide bacteriano",
    checkpointAssociation: "Punto de Control 0 (Nivel ADN Procariota)",
    references: [
      {
        author: "Jacob, F., & Monod, J.",
        year: 1961,
        title: "Genetic regulatory mechanisms in the synthesis of proteins",
        source: "Journal of Molecular Biology, 3(3), 318-356",
        doiOrPmid: "10.1016/s0022-2836(61)80072-7"
      }
    ]
  }
];

