const TOTAL_CREDITS = 300; 
let approvedCredits = 0;

const courses = [
  // --- SEMESTRE 1 ---
  { code: "OBST1010", name: "Introducción a la Profesión Obstetricia", credits: 4, semester: 1, prereqs: [] },
  { code: "OBST1011", name: "Histobiología", credits: 6, semester: 1, prereqs: [] },
  { code: "ENFE1012", name: "Psicología Social y Antropológica", credits: 8, semester: 1, prereqs: [] },
  { code: "ESFU1001", name: "Estructura y Función", credits: 8, semester: 1, prereqs: [] },
  { code: "FIPL1300", name: "Pensamiento Lógico Matemático", credits: 4, semester: 1, prereqs: [] },
  { code: "FIGP1100", name: "Gestión Personal", credits: 4, semester: 1, prereqs: [] },

  // --- SEMESTRE 2 ---
  { code: "QUIM1006", name: "Química General y Bioquímica", credits: 8, semester: 2, prereqs: [] },
  { code: "OBST1021", name: "Microbiología y Parasitología", credits: 6, semester: 2, prereqs: [] },
  { code: "OBST1020", name: "Sistemas Corporales", credits: 6, semester: 2, prereqs: ["ESFU1001"] },
  { code: "GSPU1001", name: "Gestión y Salud Pública", credits: 4, semester: 2, prereqs: [] },
  { code: "FIEO1200", name: "Expresión Oral y Escritura", credits: 4, semester: 2, prereqs: [] },
  { code: "FIHB1400", name: "Herramientas y Métodos Científicos", credits: 4, semester: 2, prereqs: [] },

  // --- SEMESTRE 3 ---
  { code: "OBST1030", name: "Procesos Patológicos y Farmacológicos", credits: 6, semester: 3, prereqs: ["QUIM1006"] },
  { code: "OBST1031", name: "Embriología", credits: 4, semester: 3, prereqs: [] },
  { code: "OBST1032", name: "Procedimientos de Enfermería I", credits: 6, semester: 3, prereqs: ["OBST1020"] },
  { code: "OBST1033", name: "Anatomía Pélvica y Fetal", credits: 4, semester: 3, prereqs: [] },
  { code: "EPBI1001", name: "Epidemiología y Bioestadística", credits: 4, semester: 3, prereqs: [] },
  { code: "INGT1100", name: "Inglés I", credits: 4, semester: 3, prereqs: [] },

  // --- SEMESTRE 4 ---
  { code: "OBST1040", name: "Ginecología I", credits: 4, semester: 4, prereqs: [] },
  { code: "OBST1041", name: "Obstetricia Fisiológica", credits: 4, semester: 4, prereqs: [] },
  { code: "OBST1042", name: "Procedimientos de Enfermería II", credits: 6, semester: 4, prereqs: ["OBST1032"] },
  { code: "OBST1043", name: "Introducción al Trabajo Comunitario", credits: 4, semester: 4, prereqs: [] },
  { code: "FG1", name: "Formación General I", credits: 4, semester: 4, prereqs: [] },
  { code: "INGT1200", name: "Inglés II", credits: 4, semester: 4, prereqs: ["INGT1100"] },

  // --- SEMESTRE 5 ---
  { code: "OBST1050", name: "Ginecología II", credits: 6, semester: 5, prereqs: ["OBST1040"] },
  { code: "OBST1051", name: "Neonatología I", credits: 8, semester: 5, prereqs: ["OBST1042"] },
  { code: "OBST1052", name: "Liderazgo y Trabajo Comunitario", credits: 8, semester: 5, prereqs: ["OBST1043"] },
  { code: "FG2", name: "Formación General II", credits: 4, semester: 5, prereqs: [] },
  { code: "INGT1300", name: "Inglés III", credits: 4, semester: 5, prereqs: ["INGT1200"] },

  // --- SEMESTRE 6 ---
  { code: "OBST1060", name: "Sexualidad en el Ciclo Vital Humano", credits: 8, semester: 6, prereqs: [] },
  { code: "OBST1061", name: "Obstetricia Patológica", credits: 8, semester: 6, prereqs: ["OBST1041"] },
  { code: "OBST1062", name: "Neonatología II", credits: 6, semester: 6, prereqs: ["OBST1051"] },
  { code: "FG3", name: "Formación General III", credits: 4, semester: 6, prereqs: [] },
  { code: "INGT1400", name: "Inglés IV", credits: 4, semester: 6, prereqs: ["INGT1300"] },

  // --- SEMESTRE 7 ---
  { code: "OBST1070", name: "Método y Proyecto en Salud", credits: 5, semester: 7, prereqs: [] },
  { code: "OBST1071", name: "Medicina Reproductiva y Fertilidad", credits: 6, semester: 7, prereqs: [] },
  { code: "OBST1072", name: "Sonoembriología", credits: 8, semester: 7, prereqs: [] },
  { code: "OBST1073", name: "Informática Aplicada", credits: 3, semester: 7, prereqs: [] },
  { code: "OBST1074", name: "Medicinas Complementarias para la Mujer", credits: 4, semester: 7, prereqs: [] },
  { code: "FG4", name: "Formación General IV", credits: 4, semester: 7, prereqs: [] },

  // --- SEMESTRE 8 ---
  { code: "OBST1080", name: "Gestión de Calidad en Salud", credits: 6, semester: 8, prereqs: [] },
  { code: "OBST1081", name: "Bioética y Legislación", credits: 6, semester: 8, prereqs: [] },
  { code: "OBST1082", name: "Clínica de la Mujer y su Feto", credits: 6, semester: 8, prereqs: ["OBST1061"] },
  { code: "OBST1083", name: "Clínica del Recién Nacido", credits: 6, semester: 8, prereqs: ["OBST1062"] },
  { code: "OBST1084", name: "Ecografía Gineco-Obstétrica", credits: 6, semester: 8, prereqs: [] },

  // --- SEMESTRE 9 ---
  { code: "OBST1090", name: "Internado US", credits: 15, semester: 9, prereqs: ["OBST1084"] },
  { code: "OBST1091", name: "Internado Gineco-Obstétrico", credits: 15, semester: 9, prereqs: ["OBST1082"] },

  // --- SEMESTRE 10 ---
  { code: "OBST1100", name: "Proyecto Comunitario", credits: 15, semester: 10, prereqs: ["OBST1080"] },
  { code: "OBST1101", name: "Internado Neonatología", credits: 15, semester: 10, prereqs: ["OBST1083"] }
];

const container = document.getElementById("grid-container");

const semesters = [...new Set(courses.map(c => c.semester))];
semesters.forEach(sem => {
  const col = document.createElement("div");
  col.classList.add("semester-column");

  const title = document.createElement("div");
  title.className = "semester-title";
  title.textContent = `Semestre ${sem}`;
  col.appendChild(title);

  courses.filter(c => c.semester === sem).forEach(course => {
    const div = document.createElement("div");
    div.classList.add("course");
    div.dataset.code = course.code;
    div.dataset.credits = course.credits;
    div.innerHTML = `
      <span class="code">${course.code}</span>
      <span class="credits">${course.credits} SCT</span>
      ${course.name}
    `;

    if (course.prereqs.length > 0) {
      div.classList.add("locked");
    }

div.addEventListener("click", () => {
  if (div.classList.contains("locked")) return;

  div.classList.toggle("completed");

  const isApproved = div.classList.contains("completed");
  approvedCredits += isApproved ? course.credits : -course.credits;

  updateProgress();
  unlockCourses();
  saveProgress(); // 👈 esta línea guarda los cambios
});

    col.appendChild(div);
  });

  container.appendChild(col);
});

function unlockCourses() {
  courses.forEach(course => {
    if (course.prereqs.length === 0) return;

    const div = document.querySelector(`[data-code="${course.code}"]`);
    const allPassed = course.prereqs.every(code =>
      document.querySelector(`[data-code="${code}"]`)?.classList.contains("completed")
    );

    if (allPassed) {
      div.classList.remove("locked");
    } else {
      div.classList.add("locked");
    }
  });
}

function updateProgress() {
  document.getElementById("approvedCredits").textContent = approvedCredits;
  document.getElementById("percentageCredits").textContent = (
    (approvedCredits / TOTAL_CREDITS) * 100
  ).toFixed(1);
}
unlockCourses();

function saveProgress() {
  const passedCourses = Array.from(document.querySelectorAll(".course.completed"))
    .map(div => div.dataset.code);
  localStorage.setItem("passedCourses", JSON.stringify(passedCourses));
}

function loadProgress() {
  const saved = JSON.parse(localStorage.getItem("passedCourses")) || [];
  saved.forEach(code => {
    const div = document.querySelector(`[data-code="${code}"]`);
    if (div && !div.classList.contains("locked")) {
      div.classList.add("completed");
      approvedCredits += parseInt(div.dataset.credits);
    }
  });
  updateProgress();
  unlockCourses();
}

loadProgress(); 
