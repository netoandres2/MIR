export const baseQuestions = [
  {
    id: "MIR-2023-001",
    area: "Cardiología",
    enunciado:
      "Varón de 65 años con dolor torácico opresivo de 40 minutos. TA 90/60, FC 50. ECG con elevación del ST en II, III y aVF. ¿Conducta inicial?",
    opciones: [
      "Nitroglicerina sublingual",
      "Dopamina y valorar marcapasos",
      "Betabloqueantes IV",
      "Esperar y repetir ECG"
    ],
    indiceCorrecto: 1,
    explicacion:
      "Infarto inferior con bradicardia e hipotensión. La nitroglicerina está contraindicada. Se debe estabilizar con dopamina y valorar marcapasos."
  },
  {
    id: "MIR-2023-002",
    area: "Nefrología",
    enunciado:
      "Paciente con insuficiencia renal aguda y potasio sérico de 6,8 mEq/L con ECG normal. ¿Cuál es el tratamiento inicial?",
    opciones: [
      "Resinas de intercambio",
      "Suero glucosado con insulina",
      "Furosemida IV",
      "Hemodiálisis inmediata"
    ],
    indiceCorrecto: 1,
    explicacion:
      "El manejo inicial de la hiperpotasemia grave es insulina + glucosa, que desplaza el potasio al interior celular."
  },
  {
    id: "MIR-2023-003",
    area: "Digestivo",
    enunciado:
      "Varón de 52 años con hematemesis y melena. TA 85/50. FC 118. ¿Cuál es la primera medida?",
    opciones: [
      "Endoscopia urgente",
      "Reposición con cristaloides",
      "Iniciar omeprazol IV",
      "Somatostatina"
    ],
    indiceCorrecto: 1,
    explicacion: "En hemorragia digestiva alta la reanimación hemodinámica es prioritaria."
  },
  {
    id: "MIR-2023-004",
    area: "Neumología",
    enunciado:
      "Paciente con disnea súbita, taquipnea, dolor pleurítico y saturación 85%. ¿Cuál es el diagnóstico más probable?",
    opciones: [
      "Neumotórax espontáneo",
      "Tromboembolismo pulmonar",
      "Neumonía",
      "Asma"
    ],
    indiceCorrecto: 1,
    explicacion: "Clínica típica de TEP agudo de aparición súbita."
  },
  {
    id: "MIR-2023-005",
    area: "Endocrinología",
    enunciado:
      "Paciente diabético en tratamiento con metformina presenta dolor abdominal, hiperamilasemia y amilasa normal. Diagnóstico probable:",
    opciones: [
      "Cetoacidosis diabética",
      "Pancreatitis inducida por metformina",
      "Acidosis láctica",
      "Colecistitis"
    ],
    indiceCorrecto: 2,
    explicacion: "Metformina puede causar acidosis láctica, cuadro con dolor abdominal y anión gap elevado."
  },
  {
    id: "MIR-2023-006",
    area: "Neurología",
    enunciado:
      "Paciente con hemiparesia izquierda, desviación de la mirada y afasia súbita. ¿Qué hacer primero?",
    opciones: [
      "TC craneal sin contraste",
      "Trombolisis inmediata",
      "Aspirina",
      "RMN difusional"
    ],
    indiceCorrecto: 0,
    explicacion: "Toda sospecha de ictus requiere TC urgente para descartar hemorragia."
  },
  {
    id: "MIR-2023-007",
    area: "Trauma",
    enunciado:
      "Accidente de tráfico. TA 70/40. FC 130. Llenado capilar > 4 s. ¿Qué tipo de shock es más probable?",
    opciones: [
      "Cardiogénico",
      "Séptico",
      "Hipovolémico hemorrágico",
      "Neurogénico"
    ],
    indiceCorrecto: 2,
    explicacion: "El shock traumático más frecuente es el hipovolémico por hemorragia."
  },
  {
    id: "MIR-2023-008",
    area: "Ginecología",
    enunciado:
      "Gestante de 32 semanas con cefalea, epigastralgia y TA 165/110. Orina con proteinuria ++. Diagnóstico:",
    opciones: [
      "Preeclampsia grave",
      "Eclampsia",
      "Síndrome HELLP",
      "Hipertensión gestacional"
    ],
    indiceCorrecto: 0,
    explicacion: "TA severa + síntomas neurológicos o epigastralgia = preeclampsia grave."
  },
  {
    id: "MIR-2023-009",
    area: "Psiquiatría",
    enunciado:
      "Paciente con alucinaciones auditivas, lenguaje desorganizado y delirios desde hace 2 meses. ¿Diagnóstico?",
    opciones: [
      "Trastorno esquizofreniforme",
      "Trastorno esquizoafectivo",
      "Esquizofrenia",
      "Trastorno delirante"
    ],
    indiceCorrecto: 0,
    explicacion:
      "La duración de 1 a 6 meses es compatible con esquizofreniforme; >6 meses sería esquizofrenia."
  },
  {
    id: "MIR-2023-010",
    area: "Pediatría",
    enunciado:
      "Lactante de 10 meses con tiraje, sibilancias y saturación del 90%. ¿Diagnóstico probable?",
    opciones: [
      "Bronquiolitis",
      "Asma",
      "Neumonía",
      "Laringitis"
    ],
    indiceCorrecto: 0,
    explicacion: "Bronquiolitis: primer episodio de sibilancias en <2 años."
  },
  {
    id: "MIR-2023-011",
    area: "Infecciosas",
    enunciado:
      "Paciente VIH con CD4 = 90 células. Fiebre, tos seca, disnea progresiva. ¿Diagnóstico más probable?",
    opciones: [
      "Tuberculosis",
      "Pneumocystis jirovecii",
      "Influenza",
      "Aspiración"
    ],
    indiceCorrecto: 1,
    explicacion:
      "CD4 < 200 + disnea progresiva + tos seca → sospecha alta de Pneumocystis."
  },
  {
    id: "MIR-2023-012",
    area: "Reumatología",
    enunciado:
      "Mujer con dolor y rigidez matutina > 1 hora. Afectación simétrica de manos y anti-CCP positivos. Diagnóstico:",
    opciones: [
      "Artrosis",
      "Artritis reumatoide",
      "Gota",
      "Lupus"
    ],
    indiceCorrecto: 1,
    explicacion:
      "Anti-CCP es muy específico de artritis reumatoide."
  },
  {
    id: "MIR-2023-013",
    area: "Hematología",
    enunciado:
      "Paciente con anemia macrocítica, glositis y parestesias. ¿Cuál es la causa más probable?",
    opciones: [
      "Déficit de hierro",
      "Déficit de B12",
      "Hemólisis",
      "Anemia normocítica"
    ],
    indiceCorrecto: 1,
    explicacion:
      "La combinación de anemia macrocítica + síntomas neurológicos es típica del déficit de vitamina B12."
  },
  {
    id: "MIR-2023-014",
    area: "Dermatología",
    enunciado:
      "Placas eritematodescamativas en codos y rodillas, signo de Auspitz. Diagnóstico:",
    opciones: [
      "Dermatitis atópica",
      "Psoriasis",
      "Tiña corporis",
      "Pitiriasis rosada"
    ],
    indiceCorrecto: 1,
    explicacion: "El signo de Auspitz es patognomónico de psoriasis."
  },
  {
    id: "MIR-2023-015",
    area: "Ortopedia",
    enunciado:
      "Dolor en la cara lateral de la cadera, empeora al acostarse sobre ese lado. Diagnóstico probable:",
    opciones: [
      "Coxartrosis",
      "Tendinopatía del glúteo medio (bursitis trocantérica)",
      "Lumbociatalgia",
      "Fractura oculta"
    ],
    indiceCorrecto: 1,
    explicacion:
      "La bursitis trocantérica da dolor lateral que empeora al acostarse del lado afectado."
  },
  {
    id: "MIR-2023-016",
    area: "Cardiología",
    enunciado:
      "Soplo sistólico que aumenta con Valsalva y disminuye con la maniobra de cuclillas. ¿Diagnóstico?",
    opciones: ["Estenosis aórtica", "Miocardiopatía hipertrófica", "CIV", "Insuficiencia mitral"],
    indiceCorrecto: 1,
    explicacion:
      "La miocardiopatía hipertrófica se intensifica con Valsalva."
  },
  {
    id: "MIR-2023-017",
    area: "Gastroenterología",
    enunciado:
      "Diarrea crónica, dermatitis herpetiforme y anemia ferropénica. Diagnóstico:",
    opciones: ["Colitis ulcerosa", "Enfermedad celíaca", "Síndrome de intestino irritable", "Enfermedad de Crohn"],
    indiceCorrecto: 1,
    explicacion:
      "La dermatitis herpetiforme es característica de la enfermedad celíaca."
  },
  {
    id: "MIR-2023-018",
    area: "Endocrinología",
    enunciado:
      "Hiponatremia + hiperkalemia + hipotensión. Diagnóstico:",
    opciones: [
      "Síndrome de Cushing",
      "Insuficiencia suprarrenal primaria",
      "Hipotiroidismo",
      "SIADH"
    ],
    indiceCorrecto: 1,
    explicacion:
      "La pérdida de aldosterona → hiperpotasemia + hiponatremia + hipotensión."
  },
  {
    id: "MIR-2023-019",
    area: "Reumatología",
    enunciado:
      "Cristales con forma de aguja y birrefringencia negativa. Diagnóstico:",
    opciones: ["Gota", "Pseudogota", "Artritis reumatoide", "Artritis séptica"],
    indiceCorrecto: 0,
    explicacion: "Birrefringencia negativa = cristales de urato monosódico (gota)."
  },
  {
    id: "MIR-2023-020",
    area: "Oncología",
    enunciado:
      "Tos, hemoptisis, pérdida de peso y una masa apical con síndrome de Horner. Diagnóstico:",
    opciones: ["Cáncer escamoso", "Tumor de Pancoast", "Adenocarcinoma", "Microcítico"],
    indiceCorrecto: 1,
    explicacion:
      "La masa apical con Horner es típica del tumor de Pancoast."
  },
  {
    id: "MIR-2023-021",
    area: "Pediatría",
    enunciado:
      "Niño con exantema maculopapular, tos, conjuntivitis y manchas de Koplik. Diagnóstico:",
    opciones: ["Sarampión", "Rubeola", "Escarlatina", "Eritema infeccioso"],
    indiceCorrecto: 0,
    explicacion: "Las manchas de Koplik son patognomónicas de sarampión."
  },
  {
    id: "MIR-2023-022",
    area: "Cirugía",
    enunciado:
      "Dolor en fosa ilíaca derecha, fiebre, Blumberg positivo. Diagnóstico más probable:",
    opciones: ["Apendicitis aguda", "Diverticulitis", "Colecistitis", "Pancreatitis"],
    indiceCorrecto: 0,
    explicacion: "Clínica típica de apendicitis aguda."
  },
  {
    id: "MIR-2023-023",
    area: "Hematología",
    enunciado:
      "Paciente con Hb baja, LDH elevada y esquistocitos en frotis. Diagnóstico:",
    opciones: ["Anemia ferropénica", "Anemia hemolítica microangiopática", "Aplasia medular", "Talasemia"],
    indiceCorrecto: 1,
    explicacion: "Los esquistocitos indican hemólisis intravascular microangiopática."
  },
  {
    id: "MIR-2023-024",
    area: "Infecciosas",
    enunciado:
      "Heridas necróticas, dolor desproporcionado y crepitación. Diagnóstico más probable:",
    opciones: [
      "Celulitis simple",
      "Fascitis necrotizante",
      "Erisipela",
      "Absceso cutáneo"
    ],
    indiceCorrecto: 1,
    explicacion:
      "Dolor desproporcionado + necrosis + crepitación = fascitis necrotizante."
  },
  {
    id: "MIR-2023-025",
    area: "Urgencias",
    enunciado:
      "Paciente en urgencias con Glasgow 6, respiración irregular y anisocoria. ¿Cuál es el manejo inmediato?",
    opciones: [
      "Tomografía antes de intubar",
      "Intubar de inmediato",
      "Administrar manitol y observar",
      "Nada, esperar"
    ],
    indiceCorrecto: 1,
    explicacion:
      "Glasgow ≤ 8 requiere intubación inmediata para proteger la vía aérea."
  }
];
