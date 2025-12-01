import { questions } from "./data/questions.js";

/* ===========================
   2. ESTADO POR PERFIL
   ===========================*/

const STORAGE_KEY = "mir_profiles_state_v1";
const PROFILE_NAMES = ["Usuario 1", "Usuario 2"];

let appState = null;
let activeProfileName = PROFILE_NAMES[0];

function createEmptyProfileState() {
  return {
    perQuestion: questions.map(() => ({ streak: 0, mastered: false })),
    queue: questions.map((_, idx) => idx),
    currentIndex: null,
    stats: {
      answeredCount: 0,
      correctCount: 0,
      masteredCount: 0
    }
  };
}

function loadAppState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      const profiles = {};
      PROFILE_NAMES.forEach(name => {
        profiles[name] = createEmptyProfileState();
      });
      appState = {
        activeProfile: PROFILE_NAMES[0],
        profiles
      };
      saveAppState();
    } else {
      appState = JSON.parse(raw);
      PROFILE_NAMES.forEach(name => {
        if (!appState.profiles[name]) {
          appState.profiles[name] = createEmptyProfileState();
        }
      });
    }
    activeProfileName = appState.activeProfile || PROFILE_NAMES[0];
  } catch (e) {
    console.error("Error cargando estado, reiniciando:", e);
    const profiles = {};
    PROFILE_NAMES.forEach(name => {
      profiles[name] = createEmptyProfileState();
    });
    appState = {
      activeProfile: PROFILE_NAMES[0],
      profiles
    };
    activeProfileName = PROFILE_NAMES[0];
    saveAppState();
  }
}

function saveAppState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
}

function getActiveProfileState() {
  return appState.profiles[activeProfileName];
}

/* ===========================
   3. ELEMENTOS DOM
   ===========================*/
const profileSelectEl = document.getElementById("profile-select");
const statsEl = document.getElementById("stats");
const progressLabelEl = document.getElementById("progress-label");
const progressPercentEl = document.getElementById("progress-percent");
const progressFillEl = document.getElementById("progress-fill");
const questionTagEl = document.getElementById("question-tag");
const questionIdEl = document.getElementById("question-id");
const questionTextEl = document.getElementById("question-text");
const optionsEl = document.getElementById("options");
const feedbackContainerEl = document.getElementById("feedback-container");
const nextBtnEl = document.getElementById("next-btn");
const resetBtnEl = document.getElementById("reset-btn");

const areaFilterEl = document.getElementById("area-filter");
const applyFilterBtnEl = document.getElementById("apply-filter-btn");
const quickSessionBtnEl = document.getElementById("quick-session-btn");

/* ===========================
   4. RENDERIZADO
   ===========================*/

function renderStats() {
  const prof = getActiveProfileState();
  const { answeredCount, correctCount } = prof.stats;
  const pct = answeredCount ? Math.round((correctCount / answeredCount) * 100) : 0;
  statsEl.innerHTML = `
    <div class="chip"><strong>${answeredCount}</strong> contestadas</div>
    <div class="chip success"><strong>${correctCount}</strong> aciertos</div>
    <div class="chip">${pct}% acierto</div>
  `;
}

function renderProgress() {
  const prof = getActiveProfileState();
  const total = questions.length;
  const mastered = prof.stats.masteredCount;
  const pct = total ? Math.round((mastered / total) * 100) : 0;
  progressLabelEl.textContent = `Dominadas ${mastered} de ${total}`;
  progressPercentEl.textContent = `${pct}% dominadas`;
  progressFillEl.style.width = pct + "%";
}

function showFinished() {
  questionTagEl.textContent = "Sesión completada 🎉";
  questionIdEl.textContent = "";
  questionTextEl.textContent =
    "Este perfil ya completó la sesión actual. Elige «Sesión por área», «Sesión rápida (10)» o pulsa «Reiniciar sesión completa».";
  optionsEl.innerHTML = "";
  feedbackContainerEl.innerHTML = "";
  nextBtnEl.disabled = true;
}

function shuffleArray(arr) {
  const copy = arr.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/**
 * Construye una cola nueva para la sesión actual.
 * - Respeta el filtro de área si respectFilter = true.
 * - limit deja la sesión en N preguntas (para sesión rápida).
 * - Prioriza preguntas NO dominadas, luego dominadas.
 */
function buildSessionQueue(profile, { respectFilter = true, limit = null } = {}) {
  const areaValue = respectFilter ? areaFilterEl.value : "all";
  let indices = questions
    .map((q, idx) => ({ q, idx }))
    .filter(obj => areaValue === "all" || obj.q.area === areaValue)
    .map(obj => obj.idx);

  if (indices.length === 0) return [];

  const notMastered = indices.filter(i => !profile.perQuestion[i].mastered);
  const mastered = indices.filter(i => profile.perQuestion[i].mastered);

  let ordered = shuffleArray([...notMastered, ...mastered]);

  if (limit && ordered.length > limit) {
    ordered = ordered.slice(0, limit);
  }
  return ordered;
}

function pickNextFromQueue() {
  const prof = getActiveProfileState();
  if (prof.queue.length === 0) {
    prof.currentIndex = null;
    saveAppState();
    showFinished();
    renderStats();
    renderProgress();
    return;
  }
  prof.currentIndex = prof.queue.shift();
  saveAppState();
  renderQuestionCard();
}

function renderQuestionCard() {
  const prof = getActiveProfileState();
  const idx = prof.currentIndex;
  if (idx === null || idx === undefined) {
    pickNextFromQueue();
    return;
  }

  const q = questions[idx];
  feedbackContainerEl.innerHTML = "";

  questionTagEl.textContent = q.area;
  questionIdEl.textContent = q.id;
  questionTextEl.textContent = q.enunciado;

  optionsEl.innerHTML = "";
  const letras = ["A", "B", "C", "D", "E", "F"];

  q.opciones.forEach((op, i) => {
    const btn = document.createElement("button");
    btn.className = "option-button";
    btn.dataset.index = i;
    btn.innerHTML = `<div class="option-letter">${letras[i] || "?"}</div>${op}`;
    btn.onclick = () => handleAnswer(i);
    optionsEl.appendChild(btn);
  });

  renderStats();
  renderProgress();
  nextBtnEl.disabled = true;
}

/* ===========================
   5. LÓGICA TIPO ANKI
   ===========================*/

let hasAnswered = false;

function handleAnswer(i) {
  const prof = getActiveProfileState();
  const idx = prof.currentIndex;
  if (idx === null || idx === undefined || hasAnswered) return;
  hasAnswered = true;

  const q = questions[idx];
  const perQ = prof.perQuestion[idx];
  const correct = q.indiceCorrecto;

  const btns = optionsEl.querySelectorAll(".option-button");
  btns.forEach(b => {
    b.disabled = true;
    b.classList.add("disabled");
    const indexBtn = Number(b.dataset.index);
    if (indexBtn === correct) b.classList.add("correct");
    if (indexBtn === i && i !== correct) b.classList.add("incorrect");
  });

  prof.stats.answeredCount++;

  let extraMsg = "";

  if (i === correct) {
    prof.stats.correctCount++;
    perQ.streak++;

    if (!perQ.mastered && perQ.streak >= 2) {
      perQ.mastered = true;
      prof.stats.masteredCount++;
      extraMsg =
        "<br><em>Has acertado esta pregunta dos veces. La consideramos dominada y dejará de salir en sesiones centradas en no dominadas.</em>";
    } else if (!perQ.mastered) {
      prof.queue.push(idx);
      extraMsg =
        "<br><em>La verás otra vez más adelante para consolidarla.</em>";
    }
  } else {
    perQ.streak = 0;
    if (perQ.mastered) {
      perQ.mastered = false;
      prof.stats.masteredCount = Math.max(0, prof.stats.masteredCount - 1);
    }

    if (prof.queue.length <= 2) {
      prof.queue.unshift(idx);
    } else {
      prof.queue.splice(2, 0, idx);
    }

    extraMsg =
      "<br><em>Fallaste esta tarjeta. Se repetirá pronto para que puedas fijarla.</em>";
  }

  feedbackContainerEl.innerHTML = `
    <div class="feedback ${i === correct ? "correct" : "incorrect"}">
      <strong>${i === correct ? "Correcto" : "Incorrecto"}</strong><br>
      ${q.explicacion || ""}${extraMsg}
    </div>
  `;

  saveAppState();
  renderStats();
  renderProgress();
  nextBtnEl.disabled = false;
}

/* ===========================
   6. EVENTOS
   ===========================*/

nextBtnEl.onclick = () => {
  if (!hasAnswered) return;
  hasAnswered = false;
  pickNextFromQueue();
};

resetBtnEl.onclick = () => {
  const prof = getActiveProfileState();
  const newState = createEmptyProfileState();
  appState.profiles[activeProfileName] = newState;
  hasAnswered = false;
  saveAppState();
  pickNextFromQueue();
};

profileSelectEl.onchange = () => {
  activeProfileName = profileSelectEl.value;
  appState.activeProfile = activeProfileName;
  saveAppState();
  hasAnswered = false;

  const prof = getActiveProfileState();
  if (prof.currentIndex === null && prof.queue.length === 0) {
    showFinished();
    renderStats();
    renderProgress();
  } else {
    if (prof.currentIndex === null) {
      pickNextFromQueue();
    } else {
      renderQuestionCard();
    }
  }
};

// Nueva sesión por área (usa filtro + prioriza no dominadas)
applyFilterBtnEl.onclick = () => {
  const prof = getActiveProfileState();
  prof.queue = buildSessionQueue(prof, { respectFilter: true, limit: null });
  prof.currentIndex = null;
  hasAnswered = false;
  saveAppState();
  if (prof.queue.length === 0) {
    showFinished();
  } else {
    pickNextFromQueue();
  }
};

// Sesión rápida de 10 preguntas, respetando el área seleccionada
quickSessionBtnEl.onclick = () => {
  const prof = getActiveProfileState();
  prof.queue = buildSessionQueue(prof, { respectFilter: true, limit: 10 });
  prof.currentIndex = null;
  hasAnswered = false;
  saveAppState();
  if (prof.queue.length === 0) {
    showFinished();
  } else {
    pickNextFromQueue();
  }
};

/* ===========================
   7. INICIO
   ===========================*/

function initAreaFilter() {
  const areas = Array.from(new Set(questions.map(q => q.area)));
  areaFilterEl.innerHTML =
    '<option value="all">Todas las áreas</option>' +
    areas.map(a => `<option value="${a}">${a}</option>`).join("");
}

function init() {
  loadAppState();
  initAreaFilter();

  profileSelectEl.value = activeProfileName;

  const prof = getActiveProfileState();
  if (prof.currentIndex === null && prof.queue.length === 0) {
    showFinished();
    renderStats();
    renderProgress();
  } else if (prof.currentIndex === null) {
    pickNextFromQueue();
  } else {
    renderQuestionCard();
  }
}

let hasAnsweredInit = false;
let hasAnsweredClickGuard = false;

init();
