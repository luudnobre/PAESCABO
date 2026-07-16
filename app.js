/* =========================================================
   PAES CABO — CONFIGURAÇÕES EDITÁVEIS
   Edite somente este bloco para atualizar conteúdo e links.
   ========================================================= */

const CONFIG = {
  church: {
    name: "PAES CABO",
    address: "PAES CABO — localização oficial no Google Maps",
    reference: "Cabo de Santo Agostinho — Pernambuco",
    officeHours: "Consulte a liderança da igreja",
    phone: "Contato disponível com a liderança",
    mapsSearchUrl:
      "https://maps.app.goo.gl/8GGxh6oNyCFhxudCA",
    mapEmbedUrl:
      "https://www.google.com/maps?q=-8.2918611,-35.0263163&z=17&output=embed",
  },

  /*
   * Use a URL de incorporação do Google Forms:
   * Google Forms > Enviar > ícone <> > copie apenas o conteúdo de src="..."
   *
   * Exemplo:
   * https://docs.google.com/forms/d/e/1FAIpQL.../viewform?embedded=true
   */
  forms: {
    visitor:
      "https://docs.google.com/forms/d/e/1FAIpQLSeQRJdDLYY9fcT-3EOI0GTCYxjVh83BA5huZM6auueLg-Kpiw/viewform?embedded=true",
    baptism:
      "https://docs.google.com/forms/d/e/1FAIpQLSdJkaAsxmmcHlAq8kaMxlDzHYIITEKxg5RhuPUPvW0w7-06Yw/viewform?embedded=true",
    prayer:
      "https://docs.google.com/forms/d/e/SEU_ID_FORM_ORACAO/viewform?embedded=true",
    serve:
      "https://docs.google.com/forms/d/e/SEU_ID_FORM_SERVIR/viewform?embedded=true",
  },

  /*
   * Cultos recorrentes. O sistema calcula automaticamente o próximo horário.
   * dayOfWeek: 0 = domingo, 1 = segunda, ... 6 = sábado.
   */
  weeklyServices: [
    {
      dayOfWeek: 0,
      hour: 18,
      minute: 0,
      label: "Culto de Celebração",
      theme: "Culto de Celebração PAES CABO",
      preacher: "Liderança PAES CABO",
    },
  ],

  notices: [
    {
      title: "Mercado Solidário",
      date: "Esta semana",
      description:
        "Participe desta ação de cuidado e solidariedade promovida pela PAES CABO.",
    },
    {
      title: "Células",
      date: "Durante a semana",
      description:
        "Encontre uma célula perto de você e fale diretamente com a liderança pelo WhatsApp.",
    },
  ],

  baptism: {
    title: "Batismo e Confirmação PAES CABO",
    date: "26 de julho de 2026",
    deadline: "Inscrições abertas",
    requirements: "Preencher o formulário e aguardar a orientação da liderança",
  },

  about: {
    description:
      "A PAES CABO existe para conduzir pessoas a uma vida de relacionamento com Deus, comunhão verdadeira e serviço com propósito. Somos uma igreja que acolhe, discipula e envia.",
    mission:
      "Alcançar pessoas, formar discípulos de Jesus e servir nossa cidade com amor, verdade e excelência.",
    vision:
      "Ser uma igreja saudável, relevante e multiplicadora, presente nas casas e comprometida com a transformação de vidas.",
    values:
      "Cristo no centro, Bíblia como fundamento, comunhão, cuidado, generosidade, serviço, integridade e missão.",
    timeline: [
      {
        year: "Origem",
        text: "Uma comunidade nasceu com o desejo de anunciar o evangelho e cuidar de pessoas.",
      },
      {
        year: "Crescimento",
        text: "A igreja avançou por meio de cultos, discipulado, células e serviço à cidade.",
      },
      {
        year: "Hoje",
        text: "Seguimos construindo uma igreja acessível, conectada e comprometida com o propósito de Deus.",
      },
    ],
  },

  verses: [
    {
      text: "Este é o dia que o Senhor fez; regozijemo-nos e alegremo-nos nele.",
      reference: "Salmos 118:24",
    },
    {
      text: "Confia no Senhor de todo o teu coração e não te estribes no teu próprio entendimento.",
      reference: "Provérbios 3:5",
    },
    {
      text: "Tudo posso naquele que me fortalece.",
      reference: "Filipenses 4:13",
    },
    {
      text: "Alegrai-vos na esperança, sede pacientes na tribulação, perseverai na oração.",
      reference: "Romanos 12:12",
    },
    {
      text: "O Senhor é o meu pastor; nada me faltará.",
      reference: "Salmos 23:1",
    },
    {
      text: "Buscai primeiro o Reino de Deus e a sua justiça.",
      reference: "Mateus 6:33",
    },
    {
      text: "Eu e a minha casa serviremos ao Senhor.",
      reference: "Josué 24:15",
    },
  ],
};

/* =========================================================
   BASE FIXA DE CÉLULAS
   Para adicionar uma célula, copie um objeto e altere os dados.
   Telefones devem conter somente números, com DDI 55.
   ========================================================= */

const CELLS = [
  {
    neighborhood: "Ponte dos Carvalhos",
    name: "Célula Ponte dos Carvalhos",
    type: "Célula geral",
    day: "Consulte a liderança",
    time: "Horário a confirmar",
    address: "Ponte dos Carvalhos",
    leaders: [
      { name: "Laís", phone: "5581988425568" },
      { name: "Victor", phone: "5581987473442" },
    ],
  },
  {
    neighborhood: "Garapu",
    name: "Célula Garapu",
    type: "Célula geral",
    day: "Consulte a liderança",
    time: "Horário a confirmar",
    address: "Garapu",
    leaders: [{ name: "Paulo", phone: "5581988760343" }],
  },
  {
    neighborhood: "Santo Inácio",
    name: "Célula Santo Inácio",
    type: "Célula geral",
    day: "Consulte a liderança",
    time: "Horário a confirmar",
    address: "Santo Inácio",
    leaders: [
      { name: "Cleide", phone: "5581985726157" },
      { name: "Letycia", phone: "5581983514334" },
      { name: "Mário", phone: "5581996915654" },
    ],
  },
  {
    neighborhood: "COHAB",
    name: "Célula COHAB",
    type: "Célula geral",
    day: "Consulte a liderança",
    time: "Horário a confirmar",
    address: "COHAB",
    leaders: [
      { name: "Hilma", phone: "5581997411142" },
      { name: "Sirleide", phone: "5581995233194" },
      { name: "Dani", phone: "5581996660114" },
      { name: "Eliane", phone: "5581987259718" },
    ],
  },
  {
    neighborhood: "Vila Roca",
    name: "Célula Vila Roca",
    type: "Célula geral",
    day: "Consulte a liderança",
    time: "Horário a confirmar",
    address: "Vila Roca",
    leaders: [{ name: "Wanda", phone: "5581995965367" }],
  },
  {
    neighborhood: "Vila Social Contra Mucambo",
    name: "Célula de Casais",
    type: "Casais",
    day: "Consulte a liderança",
    time: "Horário a confirmar",
    address: "Vila Social Contra Mucambo",
    leaders: [{ name: "Ângelo e Jaque", phone: "5581996482639" }],
  },
];

/* =========================================================
   ARMAZENAMENTO LOCAL
   IMPORTANTE:
   localStorage NÃO é banco de dados, NÃO autentica o usuário
   e NÃO compartilha informações entre aparelhos ou lideranças.
   Os dados abaixo existem somente neste navegador/aparelho.
   ========================================================= */

const STORAGE_KEYS = {
  profile: "paes_cabo_profile_v1",
  visitorRegistered: "paes_cabo_visitor_registered_v1",
  baptismSubmitted: "paes_cabo_baptism_submitted_v1",
  attendance: "paes_cabo_attendance_v1",
  cellPromptAnswered: "paes_cabo_cell_prompt_answered_v1",
  prayerSubmitted: "paes_cabo_prayer_submitted_v1",
  serveSubmitted: "paes_cabo_serve_submitted_v1",
};

const state = {
  profile: null,
  nextService: null,
  activeFormType: null,
  toastTimer: null,
};

/* =========================================================
   HELPERS
   ========================================================= */

const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) =>
  Array.from(parent.querySelectorAll(selector));

function safeJSONParse(value, fallback = null) {
  try {
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function normalizeText(value = "") {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function formatPhone(phone = "") {
  const digits = phone.replace(/\D/g, "").slice(-11);
  if (digits.length !== 11) return phone;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function firstName(name = "") {
  return name.trim().split(/\s+/)[0] || "Visitante";
}

function capitalize(value = "") {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("is-visible");

  window.clearTimeout(state.toastTimer);
  state.toastTimer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 3300);
}

function setProgress(stepNumber) {
  const indicators = $$(".quiz-progress span");
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle("is-active", index === stepNumber - 1);
  });
}

function showQuizStep(stepId, progress = 1) {
  $$(".quiz-step").forEach((step) => step.classList.remove("is-active"));
  const target = document.getElementById(stepId);
  if (target) target.classList.add("is-active");
  setProgress(progress);
}

function isPlaceholderUrl(url = "") {
  return !url || url.includes("SEU_ID");
}

function getLocalProfile() {
  return safeJSONParse(localStorage.getItem(STORAGE_KEYS.profile));
}

function saveLocalProfile(profile) {
  localStorage.setItem(STORAGE_KEYS.profile, JSON.stringify(profile));
  state.profile = profile;
}

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Bom dia";
  if (hour < 18) return "Boa tarde";
  return "Boa noite";
}

function formatFullDate(date) {
  return new Intl.DateTimeFormat("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);
}

function formatShortDate(date) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "short",
  })
    .format(date)
    .replace(".", "");
}

function formatServiceDate(date) {
  return capitalize(
    new Intl.DateTimeFormat("pt-BR", {
      weekday: "long",
      day: "2-digit",
      month: "long",
    }).format(date)
  );
}

function formatTime(date) {
  return new Intl.DateTimeFormat("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function dateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  return `${year}-${month}-${day}T${hour}:${minute}`;
}

function getNextService() {
  const now = new Date();

  const candidates = CONFIG.weeklyServices.map((service) => {
    const candidate = new Date(now);
    candidate.setSeconds(0, 0);

    let daysAhead = (service.dayOfWeek - now.getDay() + 7) % 7;
    candidate.setDate(now.getDate() + daysAhead);
    candidate.setHours(service.hour, service.minute, 0, 0);

    if (candidate <= now) {
      candidate.setDate(candidate.getDate() + 7);
    }

    return { ...service, date: candidate };
  });

  return candidates.sort((a, b) => a.date - b.date)[0];
}

function buildCountdown(serviceDate) {
  const now = new Date();
  const diff = serviceDate - now;

  if (diff <= 0) return "O culto está começando!";

  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days >= 2) return `Culto em ${days} dias`;
  if (days === 1) return "Culto amanhã";
  if (hours >= 2) return `Culto hoje, em ${hours} horas`;
  if (hours === 1) return "Culto em aproximadamente 1 hora";
  return `Culto em ${Math.max(minutes, 1)} minutos`;
}

function isBirthdayToday(birthDate) {
  if (!birthDate) return false;

  const parts = birthDate.split("-").map(Number);
  if (parts.length !== 3) return false;

  const [, month, day] = parts;
  const today = new Date();
  return today.getMonth() + 1 === month && today.getDate() === day;
}

function getWhatsAppLink(phone, leaderName, cellName) {
  const message = encodeURIComponent(
    `Olá, ${leaderName}! Encontrei a ${cellName} pelo sistema da PAES CABO e gostaria de saber mais informações.`
  );
  return `https://wa.me/${phone}?text=${message}`;
}

/* =========================================================
   INICIALIZAÇÃO
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  bindEvents();
  populateStaticContent();

  const savedProfile = getLocalProfile();

  if (savedProfile?.name && savedProfile?.type) {
    state.profile = savedProfile;
    openDashboard();
  } else {
    $("#onboarding").hidden = false;
    $("#dashboard").hidden = true;
    showQuizStep("step-role", 1);
  }
});

function bindEvents() {
  $$("[data-role-choice]").forEach((button) => {
    button.addEventListener("click", () => {
      const choice = button.dataset.roleChoice;

      if (choice === "member") {
        showQuizStep("step-member", 2);
        window.setTimeout(() => $("#member-name")?.focus(), 100);
      } else {
        showQuizStep("step-visitor", 2);
        window.setTimeout(() => $("#visitor-name")?.focus(), 100);
      }
    });
  });

  $$("[data-back-to]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.dataset.backTo;
      showQuizStep(target, target === "step-role" ? 1 : 2);
    });
  });

  $("#member-form").addEventListener("submit", handleMemberSubmit);
  $("#open-visitor-form").addEventListener("click", openVisitorFormStep);
  $("#visitor-form-complete").addEventListener("click", completeVisitorRegistration);
  $("#visitor-already-registered").addEventListener("click", continueAsReturningVisitor);

  $$("[data-tab]").forEach((button) => {
    button.addEventListener("click", () => activateTab(button.dataset.tab));
  });

  $$("[data-tab-jump]").forEach((button) => {
    button.addEventListener("click", () => activateTab(button.dataset.tabJump));
  });

  $("#confirm-attendance").addEventListener("click", confirmAttendance);
  $("#cell-search").addEventListener("input", renderCells);

  $("#baptism-action").addEventListener("click", () => openFormModal("baptism"));

  $$("[data-form-action]").forEach((button) => {
    button.addEventListener("click", () => openFormModal(button.dataset.formAction));
  });

  $$("[data-close-modal]").forEach((button) => {
    button.addEventListener("click", () => closeModal(button.dataset.closeModal));
  });

  $$(".modal-backdrop").forEach((backdrop) => {
    backdrop.addEventListener("click", (event) => {
      if (event.target === backdrop) {
        closeModal(backdrop.id);
      }
    });
  });

  $("#already-in-cell").addEventListener("click", () => {
    localStorage.setItem(STORAGE_KEYS.cellPromptAnswered, "yes");
    closeModal("cell-question-modal");
    showToast("Que bom! Continue crescendo em comunhão.");
  });

  $("#find-cell-now").addEventListener("click", () => {
    localStorage.setItem(STORAGE_KEYS.cellPromptAnswered, "no");
    closeModal("cell-question-modal");
    activateTab("celulas");
    window.setTimeout(() => $("#cell-search")?.focus(), 220);
  });

  $("#generic-form-complete").addEventListener("click", completeGenericForm);

  $("#switch-profile").addEventListener("click", resetProfile);

  $("#open-chat").addEventListener("click", () => {
    $("#chat-widget").hidden = false;
    window.setTimeout(() => $("#chat-input")?.focus(), 100);
  });

  $("#close-chat").addEventListener("click", () => {
    $("#chat-widget").hidden = true;
  });

  $("#chat-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = $("#chat-input");
    const question = input.value.trim();
    if (!question) return;

    askChat(question);
    input.value = "";
  });

  $$("[data-chat-question]").forEach((button) => {
    button.addEventListener("click", () => askChat(button.dataset.chatQuestion));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      $$(".modal-backdrop").forEach((modal) => {
        if (!modal.hidden) closeModal(modal.id);
      });
      $("#chat-widget").hidden = true;
    }
  });
}

/* =========================================================
   ONBOARDING
   ========================================================= */

function handleMemberSubmit(event) {
  event.preventDefault();

  const name = $("#member-name").value.trim();
  const phone = $("#member-phone").value.replace(/\D/g, "");
  const birthDate = $("#member-birth").value;

  if (name.length < 2) {
    showToast("Digite um nome válido.");
    return;
  }

  if (phone.length < 10) {
    showToast("Digite um WhatsApp válido com DDD.");
    return;
  }

  const profile = {
    name,
    phone,
    birthDate,
    type: "member",
    firstAccessAt: new Date().toISOString(),
  };

  saveLocalProfile(profile);
  openDashboard();
}

function openVisitorFormStep() {
  const localName = $("#visitor-name").value.trim();
  sessionStorage.setItem("paes_temp_visitor_name", localName || "Visitante");

  const url = CONFIG.forms.visitor;
  const frame = $("#visitor-form-frame");
  const placeholder = $("#visitor-form-placeholder");

  showQuizStep("step-visitor-form", 3);

  if (isPlaceholderUrl(url)) {
    frame.classList.remove("is-visible");
    frame.removeAttribute("src");
    placeholder.hidden = false;
  } else {
    placeholder.hidden = true;
    frame.src = url;
    frame.classList.add("is-visible");
  }
}

function completeVisitorRegistration() {
  const name =
    sessionStorage.getItem("paes_temp_visitor_name") ||
    $("#visitor-name").value.trim() ||
    "Visitante";

  const profile = {
    name,
    phone: "",
    birthDate: "",
    type: "visitor",
    firstAccessAt: new Date().toISOString(),
  };

  localStorage.setItem(STORAGE_KEYS.visitorRegistered, "true");
  saveLocalProfile(profile);
  openDashboard();
}

function continueAsReturningVisitor() {
  const name = $("#visitor-name").value.trim() || "Visitante";

  const profile = {
    name,
    phone: "",
    birthDate: "",
    type: "visitor",
    firstAccessAt: new Date().toISOString(),
  };

  localStorage.setItem(STORAGE_KEYS.visitorRegistered, "true");
  saveLocalProfile(profile);
  openDashboard();
}

/* =========================================================
   DASHBOARD
   ========================================================= */

function openDashboard() {
  $("#onboarding").hidden = true;
  $("#dashboard").hidden = false;

  state.nextService = getNextService();

  populateProfile();
  populateService();
  populateNotices();
  populateVerse();
  populateBirthday();
  renderCells();
  updateAttendanceUI();
  updateBaptismUI();
  activateTab("culto");

  window.scrollTo({ top: 0, behavior: "auto" });

  if (!localStorage.getItem(STORAGE_KEYS.cellPromptAnswered)) {
    window.setTimeout(() => {
      $("#cell-question-modal").hidden = false;
    }, 800);
  }

  window.clearInterval(window.__paesCountdownTimer);
  window.__paesCountdownTimer = window.setInterval(() => {
    if (state.nextService) {
      $("#service-countdown").textContent = buildCountdown(state.nextService.date);
    }
  }, 60000);
}

function populateProfile() {
  const profile = state.profile || getLocalProfile();
  if (!profile) return;

  const name = firstName(profile.name);
  const typeLabel = profile.type === "member" ? "Membro PAES" : "Visitante";

  $("#greeting").textContent = `${getGreeting()}, ${name}!`;
  $("#profile-subtitle").textContent =
    profile.type === "member"
      ? "Que bom ter você conectado à nossa comunidade."
      : "Sinta-se em casa. Preparamos este espaço para você.";
  $("#profile-name").textContent = name;
  $("#profile-type").textContent = typeLabel;
  $("#profile-initial").textContent = name.charAt(0).toUpperCase();
  $("#current-date").textContent = formatFullDate(new Date());

  const attendanceButton = $("#confirm-attendance");
  const attendanceSummary = $("#attendance-summary");

  if (profile.type !== "member") {
    attendanceButton.hidden = true;
    attendanceSummary.textContent =
      "A confirmação de presença fica disponível para perfis de membros.";
  } else {
    attendanceButton.hidden = false;
  }
}

function populateService() {
  const service = state.nextService || getNextService();
  state.nextService = service;

  $("#service-countdown").textContent = buildCountdown(service.date);
  $("#service-summary").textContent =
    `${service.label} • ${formatServiceDate(service.date)} às ${formatTime(service.date)}`;
  $("#service-status").textContent =
    service.date.toDateString() === new Date().toDateString()
      ? "É hoje"
      : "Próximo encontro";

  $("#culto-theme").textContent = service.theme;
  $("#culto-date").textContent = formatServiceDate(service.date);
  $("#culto-time").textContent = formatTime(service.date);
  $("#culto-preacher").textContent = service.preacher;
  $("#culto-date-badge").textContent = formatShortDate(service.date);
}

function populateNotices() {
  const container = $("#notices-list");
  container.innerHTML = CONFIG.notices
    .map(
      (notice) => `
        <article class="notice-item">
          <div class="notice-date">${notice.date}</div>
          <div>
            <strong>${notice.title}</strong>
            <small>${notice.description}</small>
          </div>
        </article>
      `
    )
    .join("");
}

function populateVerse() {
  const verse = CONFIG.verses[new Date().getDay()];
  $("#sidebar-verse-text").textContent = `“${verse.text}”`;
  $("#sidebar-verse-reference").textContent = verse.reference;
}

function populateBirthday() {
  const birthDate = state.profile?.birthDate;
  $("#birthday-banner").hidden = !isBirthdayToday(birthDate);
}

function populateStaticContent() {
  $("#baptism-title").textContent = CONFIG.baptism.title;
  $("#baptism-date").textContent = CONFIG.baptism.date;
  $("#baptism-deadline").textContent = CONFIG.baptism.deadline;
  $("#baptism-requirements").textContent = CONFIG.baptism.requirements;

  $("#church-address").textContent = CONFIG.church.address;
  $("#church-reference").textContent = CONFIG.church.reference;
  $("#office-hours").textContent = CONFIG.church.officeHours;
  $("#church-phone").textContent = CONFIG.church.phone;
  $("#maps-link").href = CONFIG.church.mapsSearchUrl;
  $("#map-frame").src = CONFIG.church.mapEmbedUrl;

  $("#about-description").textContent = CONFIG.about.description;
  $("#mission-text").textContent = CONFIG.about.mission;
  $("#vision-text").textContent = CONFIG.about.vision;
  $("#values-text").textContent = CONFIG.about.values;

  $("#timeline-list").innerHTML = CONFIG.about.timeline
    .map(
      (item) => `
        <div class="timeline-item">
          <strong>${item.year}</strong>
          <p>${item.text}</p>
        </div>
      `
    )
    .join("");
}

function activateTab(tabName) {
  $$(".tab-panel").forEach((panel) => {
    panel.classList.toggle("is-active", panel.id === `tab-${tabName}`);
  });

  $$("[data-tab]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.tab === tabName);
  });

  if (window.innerWidth <= 760) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

/* =========================================================
   PRESENÇA LOCAL
   O clique é uma autodeclaração pessoal; não comprova presença
   nem envia dados para a igreja.
   ========================================================= */

function getAttendanceRecords() {
  return safeJSONParse(localStorage.getItem(STORAGE_KEYS.attendance), []);
}

function confirmAttendance() {
  if (state.profile?.type !== "member") return;

  const serviceId = dateKey(state.nextService.date);
  const records = getAttendanceRecords();

  if (records.includes(serviceId)) {
    showToast("Sua presença já foi marcada para este culto.");
    return;
  }

  records.push(serviceId);
  localStorage.setItem(STORAGE_KEYS.attendance, JSON.stringify(records));
  updateAttendanceUI();
  showToast("Presença marcada neste aparelho.");
}

function updateAttendanceUI() {
  const button = $("#confirm-attendance");
  const summary = $("#attendance-summary");

  if (state.profile?.type !== "member") return;

  const records = getAttendanceRecords();
  const serviceId = state.nextService ? dateKey(state.nextService.date) : "";
  const alreadyConfirmed = records.includes(serviceId);

  const now = new Date();
  const monthlyCount = records.filter((record) => {
    const date = new Date(record);
    return (
      date.getMonth() === now.getMonth() &&
      date.getFullYear() === now.getFullYear()
    );
  }).length;

  button.disabled = alreadyConfirmed;
  button.innerHTML = alreadyConfirmed
    ? "Presença já marcada <span>✓</span>"
    : "Confirmar presença <span>✓</span>";

  summary.textContent =
    monthlyCount === 0
      ? "Você ainda não marcou presença em cultos neste mês."
      : `Você marcou presença ${monthlyCount} ${monthlyCount === 1 ? "vez" : "vezes"} neste mês.`;
}

/* =========================================================
   CÉLULAS
   ========================================================= */

function renderCells() {
  const query = normalizeText($("#cell-search")?.value || "");

  const filtered = CELLS.filter((cell) => {
    const searchable = normalizeText(
      [
        cell.neighborhood,
        cell.name,
        cell.type,
        cell.address,
        ...cell.leaders.map((leader) => leader.name),
      ].join(" ")
    );

    return searchable.includes(query);
  });

  const container = $("#cells-grid");
  const empty = $("#cells-empty");
  const count = $("#cells-result-count");

  if (!container || !empty || !count) return;

  count.textContent = `${filtered.length} ${filtered.length === 1 ? "célula encontrada" : "células encontradas"}`;
  empty.hidden = filtered.length > 0;
  container.innerHTML = filtered
    .map(
      (cell) => `
        <article class="cell-card">
          <div class="cell-card-header">
            <div>
              <span class="card-kicker">${cell.neighborhood}</span>
              <h3>${cell.name}</h3>
            </div>
            <span class="cell-type-badge">${cell.type}</span>
          </div>

          <div class="cell-meta">
            <p><span>◷</span> ${cell.day} • ${cell.time}</p>
            <p><span>⌖</span> ${cell.address}</p>
          </div>

          <div class="cell-leaders">
            ${cell.leaders
              .map(
                (leader) => `
                  <a
                    class="whatsapp-link"
                    href="${getWhatsAppLink(leader.phone, leader.name, cell.name)}"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Falar com ${leader.name} pelo WhatsApp"
                  >
                    <span>${leader.name}</span>
                    <small>WhatsApp ↗</small>
                  </a>
                `
              )
              .join("")}
          </div>
        </article>
      `
    )
    .join("");
}

/* =========================================================
   GOOGLE FORMS
   ========================================================= */

const FORM_METADATA = {
  baptism: {
    eyebrow: "Inscrição",
    title: "Quero me batizar",
    storageKey: STORAGE_KEYS.baptismSubmitted,
    configKey: "baptism",
    placeholder:
      "Substitua CONFIG.forms.baptism no app.js pela URL de incorporação do Google Forms de batismo.",
  },
  prayer: {
    eyebrow: "Cuidado pastoral",
    title: "Pedido de oração",
    storageKey: STORAGE_KEYS.prayerSubmitted,
    configKey: "prayer",
    placeholder:
      "Substitua CONFIG.forms.prayer no app.js pela URL do formulário de pedido de oração.",
  },
  serve: {
    eyebrow: "Voluntariado",
    title: "Quero servir",
    storageKey: STORAGE_KEYS.serveSubmitted,
    configKey: "serve",
    placeholder:
      "Substitua CONFIG.forms.serve no app.js pela URL do formulário de voluntariado.",
  },
};

function openFormModal(type) {
  const meta = FORM_METADATA[type];
  if (!meta) return;

  state.activeFormType = type;

  const url = CONFIG.forms[meta.configKey];
  const frame = $("#generic-form-frame");
  const placeholder = $("#generic-form-placeholder");

  $("#form-modal-eyebrow").textContent = meta.eyebrow;
  $("#form-modal-title").textContent = meta.title;
  $("#generic-form-placeholder-text").textContent = meta.placeholder;

  if (isPlaceholderUrl(url)) {
    frame.classList.remove("is-visible");
    frame.removeAttribute("src");
    placeholder.hidden = false;
  } else {
    placeholder.hidden = true;
    frame.src = url;
    frame.classList.add("is-visible");
  }

  $("#form-modal").hidden = false;
}

function completeGenericForm() {
  const type = state.activeFormType;
  const meta = FORM_METADATA[type];
  if (!meta) return;

  localStorage.setItem(meta.storageKey, "true");
  closeModal("form-modal");

  if (type === "baptism") {
    updateBaptismUI();
    showToast("Inscrição marcada neste aparelho.");
  } else if (type === "prayer") {
    showToast("Pedido marcado como preenchido. Estamos com você em oração.");
  } else {
    showToast("Interesse em servir marcado neste aparelho.");
  }
}

function updateBaptismUI() {
  const submitted =
    localStorage.getItem(STORAGE_KEYS.baptismSubmitted) === "true";

  $("#baptism-action").hidden = submitted;
  $("#baptism-success").hidden = !submitted;
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.hidden = true;

  if (id === "form-modal") {
    $("#generic-form-frame").removeAttribute("src");
    state.activeFormType = null;
  }
}

/* =========================================================
   CHATBOT DE FAQ LOCAL
   Este assistente usa palavras-chave e respostas programadas.
   Não envia mensagens para nenhuma IA ou serviço externo.
   ========================================================= */

function askChat(question) {
  appendChatMessage(question, "user");

  window.setTimeout(() => {
    const answer = getChatAnswer(question);
    appendChatMessage(answer, "bot");
  }, 260);
}

function appendChatMessage(message, sender) {
  const container = $("#chat-messages");
  const bubble = document.createElement("div");
  bubble.className = `chat-bubble ${sender}`;
  bubble.textContent = message;
  container.appendChild(bubble);
  container.scrollTop = container.scrollHeight;
}

function getChatAnswer(question) {
  const normalized = normalizeText(question);
  const service = state.nextService || getNextService();

  if (
    normalized.includes("culto") ||
    normalized.includes("horario") ||
    normalized.includes("pregacao")
  ) {
    return `O próximo encontro é ${service.label}, ${formatServiceDate(service.date)} às ${formatTime(service.date)}. O tema será “${service.theme}”.`;
  }

  if (
    normalized.includes("celula") ||
    normalized.includes("bairro") ||
    normalized.includes("grupo")
  ) {
    activateTab("celulas");
    return "Abri a área de células para você. Pesquise pelo seu bairro e toque no WhatsApp da liderança.";
  }

  if (
    normalized.includes("batismo") ||
    normalized.includes("batizar")
  ) {
    activateTab("batismos");
    return `A próxima turma está com a informação: ${CONFIG.baptism.date}. Na aba Batismos você pode ler os requisitos e abrir a inscrição.`;
  }

  if (
    normalized.includes("local") ||
    normalized.includes("endereco") ||
    normalized.includes("chegar") ||
    normalized.includes("mapa")
  ) {
    activateTab("localizacao");
    return `A localização configurada é: ${CONFIG.church.address}. A aba Localização tem o mapa e o botão para abrir a rota.`;
  }

  if (
    normalized.includes("primeira") ||
    normalized.includes("visita") ||
    normalized.includes("visitante")
  ) {
    return "Você será muito bem-vindo(a). Chegue alguns minutos antes e procure nossa equipe de recepção para receber orientação.";
  }

  if (
    normalized.includes("oracao") ||
    normalized.includes("orar")
  ) {
    return "Na área de Culto, toque em “Pedido de oração” para abrir o formulário de cuidado pastoral.";
  }

  if (
    normalized.includes("servir") ||
    normalized.includes("voluntario") ||
    normalized.includes("ministerio")
  ) {
    return "Na área de Culto, toque em “Quero servir” para registrar seu interesse em participar de uma equipe.";
  }

  return "Posso ajudar com culto, batismo, células, localização, primeira visita, pedido de oração ou voluntariado.";
}

/* =========================================================
   REDEFINIR PERFIL
   ========================================================= */

function resetProfile() {
  const confirmed = window.confirm(
    "Deseja apagar o perfil salvo neste aparelho e voltar à tela inicial?"
  );

  if (!confirmed) return;

  Object.values(STORAGE_KEYS).forEach((key) => localStorage.removeItem(key));
  sessionStorage.removeItem("paes_temp_visitor_name");
  window.location.reload();
}
