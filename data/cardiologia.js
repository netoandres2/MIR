export const preguntasCardiologia = [
  // Tema 1. Anatomía y fisiología cardiaca — MIR 2024, 32
  {
    id: "CARDIO_2024_32",
    asignatura: "Cardiología",
    anioMir: 2024,
    numeroMir: 32,
    tema: "Anatomía y fisiología cardiaca",
    pregunta:
      "En relación con el potencial de acción de las células cardiacas, ¿cuál de las siguientes afirmaciones es correcta?",
    opciones: [
      "Las células automáticas presentan un potencial de acción lento y su fase de despolarización depende sobre todo del calcio.",
      "El potencial de reposo de las células automáticas es más negativo que el de los miocitos ventriculares.",
      "Las células automáticas poseen canales rápidos de sodio similares a los del miocardio de trabajo.",
      "Los canales If se sitúan principalmente en las células del miocardio ventricular."
    ],
    respuestaCorrecta: 0,
    explicacion:
      "En las células marcapasos del nodo sinusal la fase 0 del potencial de acción depende de la entrada de calcio, lo que hace que la despolarización sea más lenta. Su potencial de reposo es menos negativo y la despolarización diastólica espontánea se debe a los canales If. No tienen los canales rápidos de sodio típicos del miocardio ventricular.",
    imagenPregunta: null,
    imagenExplicacion: null,
    dificultad: "alta",
    vecesVista: 0,
    vecesAcertada: 0,
    ultimaVezVista: null
  },

  // Tema 1. Fisiología vascular — MIR 2021, 28
  {
    id: "CARDIO_2021_28",
    asignatura: "Cardiología",
    anioMir: 2021,
    numeroMir: 28,
    tema: "Hemodinámica: presión, flujo y resistencia",
    pregunta:
      "Respecto a la relación entre presión, flujo y resistencia en el sistema vascular, señale la afirmación INCORRECTA.",
    opciones: [
      "La resistencia es directamente proporcional a la diferencia de presión e inversamente proporcional al flujo.",
      "En el flujo laminar, la sangre circula más rápido en el centro del vaso que junto a la pared.",
      "Pequeños cambios en el diámetro de un vaso producen cambios importantes en su conductancia.",
      "Añadir vasos en paralelo a un circuito aumenta la resistencia vascular total."
    ],
    respuestaCorrecta: 3,
    explicacion:
      "La resistencia se calcula como presión dividida por flujo. Cuando se añaden vasos en paralelo, el área total disponible para el flujo aumenta y la resistencia global disminuye, por lo que la afirmación que dice que aumenta es falsa. En flujo laminar la velocidad central es mayor que en la periferia y pequeños cambios en el radio modifican mucho la resistencia y la conductancia.",
    imagenPregunta: null,
    imagenExplicacion: null,
    dificultad: "alta",
    vecesVista: 0,
    vecesAcertada: 0,
    ultimaVezVista: null
  },

  // Tema 1. Flujo coronario — MIR 2020, 42
  {
    id: "CARDIO_2020_42",
    asignatura: "Cardiología",
    anioMir: 2020,
    numeroMir: 42,
    tema: "Flujo coronario",
    pregunta:
      "En relación con el control del flujo coronario, señale la opción FALSA.",
    opciones: [
      "Un aumento de la fuerza de contracción del ventrículo favorece un incremento del flujo coronario.",
      "Si el miocardio tiene muy poco oxígeno disponible, aumenta la liberación de adenosina localmente.",
      "La estimulación simpática coronaria puede producir tanto vasodilatación como vasoconstricción.",
      "La activación parasimpática coronaria ejerce de forma directa un efecto vasodilatador mantenido sobre las arterias coronarias."
    ],
    respuestaCorrecta: 3,
    explicacion:
      "El tono coronario se regula por factores metabólicos (hipoxia y adenosina producen vasodilatación) y por el sistema nervioso autónomo. La activación simpática puede dar vasoconstricción o vasodilatación según los receptores implicados. El parasimpático no tiene un efecto vasodilatador directo relevante sobre las coronarias; su papel es mucho menor que el simpático, por lo que la opción que afirma una vasodilatación directa mantenida es falsa.",
    imagenPregunta: null,
    imagenExplicacion: null,
    dificultad: "media",
    vecesVista: 0,
    vecesAcertada: 0,
    ultimaVezVista: null
  },

  // Tema 1. Ciclo cardiaco — MIR 2019, 46
  {
    id: "CARDIO_2019_46",
    asignatura: "Cardiología",
    anioMir: 2019,
    numeroMir: 46,
    tema: "Ciclo cardiaco",
    pregunta:
      "Cuando aumenta la frecuencia cardiaca, ¿qué fase del ciclo se acorta proporcionalmente más?",
    opciones: [
      "La sístole auricular.",
      "La sístole isovolumétrica ventricular.",
      "La fase de llenado rápido ventricular.",
      "La fase de llenado lento o diástasis."
    ],
    respuestaCorrecta: 3,
    explicacion:
      "Al subir la frecuencia cardiaca, la sístole se acorta poco y la mayor reducción ocurre en la diástole. Dentro de la diástole, la porción que más se acorta es la diástasis, que es el llenado lento. El llenado rápido inicial y la contracción auricular al final modifican menos su duración.",
    imagenPregunta: null,
    imagenExplicacion: null,
    dificultad: "media",
    vecesVista: 0,
    vecesAcertada: 0,
    ultimaVezVista: null
  },

  // Tema 2. Semiología cardiovascular — MIR 2021, 136
  {
    id: "CARDIO_2021_136",
    asignatura: "Cardiología",
    anioMir: 2021,
    numeroMir: 136,
    tema: "Exploración física cardiovascular",
    pregunta:
      "Entre las maniobras clásicas de exploración cardiaca, ¿cuál tiene menor rentabilidad diagnóstica en la práctica clínica?",
    opciones: [
      "La inspección del área precordial.",
      "La palpación del precordio.",
      "La percusión cardiaca.",
      "La auscultación cardiaca."
    ],
    respuestaCorrecta: 2,
    explicacion:
      "La auscultación, la inspección y la palpación aportan información útil sobre valvulopatías, cardiopatías estructurales y crecimiento de cavidades. La percusión cardiaca, en cambio, apenas añade datos relevantes con las técnicas actuales de imagen, por lo que es la menos rentable.",
    imagenPregunta: null,
    imagenExplicacion: null,
    dificultad: "baja",
    vecesVista: 0,
    vecesAcertada: 0,
    ultimaVezVista: null
  },

  // Tema 2. Pulso yugular — MIR 2017, 64
  {
    id: "CARDIO_2017_64",
    asignatura: "Cardiología",
    anioMir: 2017,
    numeroMir: 64,
    tema: "Pulso venoso yugular",
    pregunta:
      "¿En cuál de las siguientes situaciones puede observarse ausencia de pulso venoso yugular a pesar de una presión venosa elevada?",
    opciones: [
      "Pericarditis constrictiva.",
      "Síndrome de vena cava superior.",
      "Insuficiencia tricuspídea.",
      "Insuficiencia cardiaca derecha."
    ],
    respuestaCorrecta: 1,
    explicacion:
      "En el síndrome de vena cava superior existe una obstrucción al retorno venoso hacia la aurícula derecha, de modo que las yugulares se desconectan hemodinámicamente de la cámara cardiaca y no transmiten la onda de pulso. En el resto de entidades la conexión se mantiene y el pulso venoso es visible si el nivel de la columna lo permite.",
    imagenPregunta: null,
    imagenExplicacion: null,
    dificultad: "media",
    vecesVista: 0,
    vecesAcertada: 0,
    ultimaVezVista: null
  },

  // Tema 2. Tercer ruido — MIR 2014, 73
  {
    id: "CARDIO_2014_73",
    asignatura: "Cardiología",
    anioMir: 2014,
    numeroMir: 73,
    tema: "Ruidos cardiacos",
    pregunta:
      "En relación con el tercer ruido cardiaco (R3), señale la afirmación FALSA.",
    opciones: [
      "Es un sonido de baja frecuencia.",
      "Puede aparecer cuando se incrementa el volumen o la velocidad de llenado ventricular.",
      "Se produce al final de la diástole, coincidiendo con la contracción auricular.",
      "Puede encontrarse en insuficiencia mitral grave y en estados de gasto elevado."
    ],
    respuestaCorrecta: 2,
    explicacion:
      "El tercer ruido es un ruido diastólico de baja frecuencia que aparece al inicio de la diástole, durante el llenado rápido ventricular. Puede ser fisiológico en niños o situaciones hiperdinámicas, y patológico en insuficiencia cardiaca o insuficiencia mitral severa. El que aparece al final de la diástole, coincidiendo con la contracción auricular, es el cuarto ruido.",
    imagenPregunta: null,
    imagenExplicacion: null,
    dificultad: "media",
    vecesVista: 0,
    vecesAcertada: 0,
    ultimaVezVista: null
  },

  // Tema 3. Fármacos en cardiología — Ivabradina, MIR 2023, 55
  {
    id: "CARDIO_2023_55",
    asignatura: "Cardiología",
    anioMir: 2023,
    numeroMir: 55,
    tema: "Fármacos: ivabradina",
    pregunta:
      "¿Cuál es el mecanismo por el que la ivabradina reduce la frecuencia cardiaca a nivel del nodo sinusal?",
    opciones: [
      "Aumenta corrientes de salida de potasio y acelera la repolarización.",
      "Bloquea de forma directa los receptores beta-1 adrenérgicos.",
      "Inhibe la corriente marcapasos If responsable de la despolarización diastólica espontánea.",
      "Activa receptores muscarínicos M2 aumentando el tono vagal."
    ],
    respuestaCorrecta: 2,
    explicacion:
      "La ivabradina bloquea selectivamente la corriente If de los canales del nodo sinusal. Al disminuir esta corriente, se enlentece la despolarización diastólica espontánea de las células marcapasos y baja la frecuencia cardiaca sin actuar sobre la contractilidad ni la conducción auriculoventricular.",
    imagenPregunta: null,
    imagenExplicacion: null,
    dificultad: "baja",
    vecesVista: 0,
    vecesAcertada: 0,
    ultimaVezVista: null
  }
];
