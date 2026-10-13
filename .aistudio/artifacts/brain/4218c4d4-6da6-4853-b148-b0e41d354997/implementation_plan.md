# Guía de Trabajo Interactiva: El Paradigma del Peaje Molecular

Una aplicación interactiva universitaria de Biología Molecular y Genética Evolutiva que transforma la enseñanza de la regulación de la expresión génica desde un modelo lineal estático hacia un sistema dinámico de peajes y puestos de control distribuidos, estructurado bajo la matriz pedagógica CQRF (Qué, Quién, Regula, Falla) con resolución de casos clínicos y exportación de contenidos.

### User Review & Critical Decisions

> [!IMPORTANT]
> Se han incorporado las preferencias pedagógicas y estéticas confirmadas:
> - **Modalidad interactiva**: Explorador interactivo de peajes (*Toll Road Explorer*) con simulador de diagnóstico de casos biológicos y exportador directo a Markdown estructurado para Moodle/PDF.
> - **Identidad visual**: Tema *Dark Laboratory* de alta precisión con acentos moleculares luminiscentes (cian bioeléctrico, esmeralda fluorescente, ámbar de vigilancia y carmesí de degradación).
> - **Retroalimentación diagnóstica**: Sistema de deducción asistida paso a paso con pistas biomoleculares progresivas que guían al estudiante hacia la estación y naturaleza de la falla (Cantidad vs. Calidad).

- **Decisión pedagógica confirmada 1**: Estructura de navegación multifacética que permite alternar entre la Introducción (El Paradigma del Peaje), la Gran Bifurcación (Paso 0: Procariotas vs Eucariotas), la Ruta Eucariota (estaciones 1–5), la Ruta Procariota (estaciones 1–3), la Ruta Convergente de Destino Proteico (estaciones 6–11), el Laboratorio de Casos de Análisis y el Visor/Exportador de Guía en Markdown.
- **Decisión de contenido confirmada 2**: Matriz rigurosa CQRF en cada estación con taxonomía analítica: Qué ocurre, Quién participa, Qué se regula, y Qué pasa si falla (con distinción explícita de impacto fenotípico en *Cantidad* vs. *Calidad*).
- **Decisión de exportación confirmada 3**: Generador de texto Markdown completo, limpio, sin caracteres especiales en claves internas, con ortografía académica rigurosa en español y listo para copiar o descargar como `.md`.

---

### 1. Overview & Core Concept

- **What It Does**: Proporciona a estudiantes y docentes universitarios una plataforma de aprendizaje activo para explorar la expresión génica no como un mero interruptor ON/OFF, sino como una carrera de obstáculos molecular distribuida donde cada estación ejerce control sobre *cuánto, cuándo, dónde y en qué forma funcional* surge el producto génico.
- **Target Audience / Persona**: Estudiantes de Biología, Bioquímica, Biotecnología, Medicina y Genética que cursan Biología Molecular Avanzada, así como docentes que requieren materiales estructurados y casos diagnósticos basados en mecanismos.
- **Key Value**: Supera la memorización pasiva mediante la deducción mecanicista, el análisis de control de calidad celular (NMD, ERAD, vigilancia del poro, degradosoma) y la resolución de dilemas biomoleculares reales.

---

### 2. User Experience & Visual Design

- **Key User Flows**:
  1. *El Paradigma del Peaje (Introducción)*: El estudiante explora el lema fundamental del curso, el contraste interactivo entre el modelo simplista de interruptor y el sistema de obstáculos distribuidos, y la matriz conceptual entre problemas de **Cantidad** (exceso/déficit, dosis génica) y problemas de **Calidad** (isoforma incorrecta, deslocalización, agregados).
  2. *La Gran Bifurcación (Paso 0)*: Selector celular comparativo: Eucariotas (estado base restrictivo por cromatina, compartimentación espacial núcleo-citoplasma) vs. Procariotas (estado base permisivo, velocidad extrema, acoplamiento y control metabólico por operones).
  3. *Explorador de Estaciones CQRF*: Navegación interactiva estación por estación con fichas técnicas desglosadas por las 4 preguntas de la matriz CQRF, perlas evolutivas y botones de simulación de fallo molecular.
  4. *Laboratorio de Casos de Análisis*: Tres casos basados en viñetas clínicas/biológicas de laboratorio (Splicing y beta-talasemia, estrés hiperosmolar y proteasoma, riboswitch bacteriano desregulado) con pistas escalonadas, hipótesis estudiantil y diagnóstico formativo.
  5. *Exportador de Guía*: Panel de texto Markdown estructurado con botones de copia al portapapeles y descarga de archivo `.md`.

- **Visual Identity & Theme**:
  - *Aesthetic Direction*: *Dark Laboratory* de investigación biomolecular de alta fidelidad. Fondo obsidiana (`#07090E` / `#0D1117`), paneles técnicos en pizarra grafito (`#111827` / `#161B22`) con bordes capilares limpios de 1px (`#1F2937`).
  - *Color Palette & Mood*:
    - Fondo dominante: Pizarra obsidiana (`#0B0F17`, 60%).
    - Superficies estructuradas: Paneles y tarjetas analíticas (`#111827`, 30%).
    - Acentos moleculares (10%):
      - Cian bioeléctrico (`#06B6D4`): Transcripción, ARN y arquitectura molecular.
      - Esmeralda fluorescente (`#10B981`): Control de calidad superado y estado nominal.
      - Ámbar de vigilancia (`#F59E0B`): Puestos de control restrictivos, NMD, arresto traduccional.
      - Carmesí reactivo (`#EF4444`): Patología molecular, degradación proteica y fallo de peaje.
      - Púrpura ribosómico (`#A855F7`): Maquinaria de traducción y destino proteico.
  - *Typography & Hierarchy*:
    - Encabezados: `Plus Jakarta Sans` en pesos 600 y 700 con interletrado técnico sutil.
    - Cuerpo de texto: `DM Sans` con interlineado generoso (1.6) y contraste nítido accesible (WCAG AA).
    - Notación y claves: Monoespaciado tabular (`font-mono tabular-nums`) para secuencias, constantes y etiquetas moleculares.
  - *Component Styling & Layout*:
    - Barra superior de 3 zonas con marca universitaria, navegación limpia sin botones tipo píldora estáticos y botón de exportación rápida.
    - Metadatos presentados con separadores tipográficos limpios (`·` o `/`) sin cápsulas plásticas genéricas.
    - Matriz CQRF organizada en cuadrículas de 4 bloques técnicos claramente diferenciados por icono de función y rol biológico.

- **Interactive Feedback & Motion**:
  - Transiciones suaves entre estaciones de peaje ($\le 180\text{ms}$) utilizando aceleración por hardware (`opacity`, `transform`).
  - Indicadores de progreso del recorrido en la ruta de obstáculos.
  - Despliegue progresivo de pistas diagnósticas con confirmación de deducción interactiva.

---

### 3. Key Product Decisions & Trade-Offs

- **Decision 1: Integración Completa de Contenido Pedagógico vs. Vistas Fraccionadas**
  - *Chosen Approach*: La aplicación albergará todo el corpus conceptual riguroso redactado al máximo nivel universitario en memoria reactiva estructurada, permitiendo tanto la navegación interactiva estación por estación como la lectura continua y la exportación completa a Markdown.
  - *Why*: Permite que el estudiante alterne libremente entre el modo explorador interactivo y el modo de estudio formal tipo manual de cátedra sin perder el contexto didáctico.
  - *Alternatives Considered*: Reducir el texto a resúmenes breves. Se descartó porque el usuario solicitó específicamente el contenido universitario completo de la guía de trabajo.

- **Decision 2: Motor de Resolución de Casos con Pistas Escalonadas**
  - *Chosen Approach*: Implementar un evaluador diagnóstico interactivo para los 3 casos clínicos/biológicos con opciones de hipótesis, deducción de estación diana, calificación de fallo (Cantidad vs. Calidad) y retroalimentación pedagógica gradual.
  - *Why*: Estimula el razonamiento inductivo y la aplicación clínica de la biología molecular sin frustrar al estudiante.
  - *Alternatives Considered*: Preguntas de opción múltiple con respuesta inmediata sí/no. Se descartó por ser memorística y contraria a la pedagogía de obstáculos moleculares.

- **Decision 3: Exportador Markdown en Tiempo Real**
  - *Chosen Approach*: Generador de Markdown sin dependencias externas pesadas, con sintaxis limpia de encabezados, listas y tablas, provisto de copia en 1 clic y descarga de archivo `.md`.
  - *Why*: Asegura compatibilidad universal inmediata con plataformas académicas como Moodle, Canvas, Obsidian, Typora y generadores de PDF como Pandoc.

---

### 4. Technical Architecture & Data Strategy *(Technical Reference)*

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       Top Navigation Bar (3 Zones)                          │
│  [Biología Molecular Cátedra]  —  [Paradigma · Rutas · Casos · Guía]  —  [Exportar]│
└─────────────────────────────────────────────────────────────────────────────┘
                                       │
         ┌─────────────────────────────┴─────────────────────────────┐
         ▼                                                           ▼
┌───────────────────────────────────┐       ┌─────────────────────────────────┐
│     Route Selector & Context      │       │     Interactive Workspace       │
│  • Eucariota (Heterocromatina)    │       │  • Visor de Estación CQRF       │
│  • Procariota (Acoplamiento)      │  ───► │  • Diagnóstico de Casos         │
│  • Destino Proteico Convergente   │       │  • Lector Completo / Markdown   │
└───────────────────────────────────┘       └─────────────────────────────────┘
         │                                                           ▲
         │                                                           │
         ▼                                                           │
┌────────────────────────────────────────────────────────────────────┴────────┐
│                        Pedagogical State Engine                             │
│  • Current Station Index & Bifurcation Path                                 │
│  • CQRF Matrix Data Store (Eukaryote, Prokaryote, Protein Fate)             │
│  • Diagnostic Case State (Hypothesis, Revealed Hints, Submission Result)    │
│  • Markdown Generation Engine & Clipboard/File Handlers                     │
└─────────────────────────────────────────────────────────────────────────────┘
```

- **Data Model & State**:
  - `StationData`: Objeto tipado con id, número de estación, título, subtítulo, ruta (`eukaryote` | `prokaryote` | `common`), proceso esencial (`queOcurre`), actores (`quienParticipa`), punto de control (`queRegula`), patología/fallo (`quePasaSiFalla`), clasificación de fallo (`cantidad` vs `calidad`), y perla mecanicista.
  - `DiagnosticCase`: Objeto con id, título clínico, viñeta/anamnesis molecular, datos de laboratorio (Northern blot, Western blot, RT-PCR, polisomas), pistas escalonadas (3 niveles), estación culpable correcta, naturaleza del fallo y explicación de la cátedra.
  - `AppMode`: Control de pestaña activa (`paradigma` | `rutas` | `casos` | `markdown`).

- **Interactive Component & State Mapping**:
  - `ParadigmIntroView`: Explica el modelo del peaje, la comparativa interactiva frente al interruptor ON/OFF clásico, y la tabla de discriminación de fallos de Cantidad vs. Calidad.
  - `TollStationExplorer`: Despliega el camino de peajes con navegación lineal o directa, fichas CQRF con diseño técnico, tarjetas de actores moleculares con sus roles exactos y simulación de fallos celulares.
  - `CaseSolverWorkbench`: Presenta los 3 casos biológicos detallados con simulador de informe de laboratorio, revelador de pistas progresivas, selector de estación y análisis post-resolución.
  - `MarkdownExportModal / View`: Renderiza la guía en Markdown completo listo para copiar o descargar.
