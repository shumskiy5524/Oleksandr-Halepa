const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});

const translations = {
  en: {
    skillsNav: "Skills",
    projectsNav: "Projects",
    contactNav: "Contact",

    position: "Full-Stack Developer",

    heroText: "Looking for a developer for your project? Let's Work Together.",

    aboutTitle: "About Me",

    aboutText:
      "I am a Full-Stack Developer building modern web applications using React, JavaScript, TypeScript, Node.js, Express, and MongoDB. " +
      "I focus on creating fast, scalable, and user-friendly interfaces with clean code and solid architecture. " +
      "I enjoy turning complex problems into simple, functional, and reliable solutions that work in real production environments.",
    skillsTitle: "Skills",

    projectsTitle: "Projects",

    futureProject: "New project is coming",
    project1_desc: "Team project — worked on forms and UI.",
    project2_desc: "Team project — implemented forms and frontend logic.",
    viewProjectBtn: "View Website",

    helpTitle: "How I Can Help",

    help1: "Landing Pages",
    help2: "React Development",
    help3: "Responsive Websites",
    help4: "REST API Integration",
    help5: "Fullstack Apps",
    help6: "UI Improvements",

    ctaTitle: "Looking for a developer for your project?",
    ctaBtn: "Let's Work Together",

    contactTitle: "Contact",
  },

  ua: {
    skillsNav: "Навички",
    projectsNav: "Проєкти",
    contactNav: "Контакти",

    position: "Full-Stack Developer",

    heroText: "Шукаєте розробника для свого проєкту? Давайте працювати разом.",

    aboutTitle: "Про мене",

    aboutText:
      "Я Full-Stack Developer, який створює сучасні вебзастосунки з використанням React, JavaScript, TypeScript, Node.js, Express і MongoDB. " +
      "Працюю над створенням швидких, масштабованих та зручних інтерфейсів із чистим кодом та продуманою архітектурою. " +
      "Мені подобається перетворювати складні задачі на прості, функціональні та надійні рішення, які працюють у реальних проєктах.",

    skillsTitle: "Навички",

    projectsTitle: "Проєкти",

    futureProject: "Новий проєкт скоро з'явиться",
    project1_desc: "Командний проєкт — робота з формами та UI.",
    project2_desc: "Командний проєкт — реалізація форм та логіки фронтенду.",
    viewProjectBtn: "Переглянути сайт",

    helpTitle: "Чим я можу допомогти",

    help1: "Лендінг сторінки",
    help2: "React розробка",
    help3: "Адаптивні сайти",
    help4: "Інтеграція REST API",
    help5: "Fullstack застосунки",
    help6: "Покращення UI",

    ctaTitle: "Потрібен розробник для вашого проєкту?",
    ctaBtn: "Працюймо разом",

    contactTitle: "Контакти",
  },

  pl: {
    skillsNav: "Umiejętności",
    projectsNav: "Projekty",
    contactNav: "Kontakt",

    position: "Full-Stack Developer",

    heroText: "Szukasz developera do swojego projektu? Pracujmy razem.",

    aboutTitle: "O mnie",

    aboutText:
      "Jestem Full-Stack Developerem tworzącym nowoczesne aplikacje webowe z użyciem React, JavaScript, TypeScript, Node.js, Express i MongoDB. " +
      "Skupiam się na budowaniu szybkich, skalowalnych i przyjaznych dla użytkownika interfejsów z czystym kodem i dobrą architekturą. " +
      "Lubię zamieniać złożone problemy w proste, funkcjonalne i stabilne rozwiązania działające w realnych projektach.",
    skillsTitle: "Umiejętności",

    projectsTitle: "Projekty",

    futureProject: "Nowy projekt już wkrótce",
    project1_desc: "Projekt zespołowy — praca z formularzami i UI.",
    project2_desc:
      "Projekt zespołowy — implementacja formularzy i logiki frontend.",
    viewProjectBtn: "Zobacz stronę",
    helpTitle: "Jak mogę pomóc",

    help1: "Landing Pages",
    help2: "React Development",
    help3: "Responsywne strony",
    help4: "Integracja REST API",
    help5: "Aplikacje Fullstack",
    help6: "Ulepszenia UI",

    ctaTitle: "Szukasz developera do swojego projektu?",
    ctaBtn: "Pracujmy razem",

    contactTitle: "Kontakt",
  },
};

const languageButtons = document.querySelectorAll(".lang-btn");

function setLanguage(language) {
  localStorage.setItem("selectedLanguage", language);

  document.querySelectorAll("[data-lang]").forEach((element) => {
    const key = element.getAttribute("data-lang");

    if (translations[language][key]) {
      element.textContent = translations[language][key];
    }
  });

  languageButtons.forEach((btn) => {
    btn.classList.remove("active");
  });

  document
    .querySelector(`[data-language="${language}"]`)
    .classList.add("active");

  document.documentElement.lang = language;
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const language = button.dataset.language;
    setLanguage(language);
  });
});

const savedLanguage = localStorage.getItem("selectedLanguage") || "en";

setLanguage(savedLanguage);
