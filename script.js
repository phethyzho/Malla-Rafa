const TOTAL_CREDITS = 300; // según el plan
let approvedCredits = 0;

const courses = [
  {
    code: "OBST1010",
    name: "Introducción a la Profesión Obstetricia",
    credits: 4,
    semester: 1,
    prereqs: []
  },
  {
    code: "OBST1011",
    name: "Histobiología",
    credits: 6,
    semester: 1,
    prereqs: []
  },
  {
    code: "ENFE1012",
    name: "Psicología Social y Antropológica",
    credits: 8,
    semester: 1,
    prereqs: []
  },
  {
    code: "ESFU1001",
    name: "Estructura y Función",
    credits: 8,
    semester: 1,
    prereqs: []
  },
  {
    code: "FIPL1300",
    name: "Pensamiento Lógico Matemático",
    credits: 4,
    semester: 1,
    prereqs: []
  },
  {
    code: "FIGP1100",
    name: "Gestión Personal",
    credits: 4,
    semester: 1,
    prereqs: []
  },
  {
    code: "OBST1020",
    name: "Sistemas Corporales",
    credits: 6,
    semester: 2,
    prereqs: ["ESFU1001"]
  },
  {
    code: "OBST1021",
    name: "Microbiología y Parasitología",
    credits: 6,
    semester: 2,
    prereqs: []
  },
  {
    code: "QUIM1006",
    name: "Química General y Bioquímica",
    credits: 8,
    semester: 2,
    prereqs: []
  }
  // Continúa agregando más ramos según el PDF...
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
