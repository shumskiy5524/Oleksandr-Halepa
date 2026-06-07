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
    aboutNav: "About",
    skillsNav: "Skills",
    projectsNav: "Projects",
    contactNav: "Contact",

    position: "Full-Stack Developer",

    heroText: "Looking for a developer for your project? Let's Work Together.",

    projectsBtn: "View Projects",
    contactBtn: "Contact Me",

    aboutTitle: "About Me",

    aboutText:
      "I am a Full-Stack Developer focused on building modern, responsive and user-friendly web applications. I work with HTML, CSS, JavaScript and continuously improve my backend skills to create complete digital products. I enjoy turning ideas into clean, functional and practical interfaces that deliver real value to users and businesses.",

    skillsTitle: "Skills",

    projectsTitle: "Projects",

    futureProject: "New project is coming",

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
    aboutNav: "Про мене",
    skillsNav: "Навички",
    projectsNav: "Проєкти",
    contactNav: "Контакти",

    position: "Full-Stack Developer",

    heroText: "Шукаєте розробника для свого проєкту? Давайте працювати разом.",

    projectsBtn: "Мої проєкти",
    contactBtn: "Зв'язатися",

    aboutTitle: "Про мене",

    aboutText:
      "Я Full-Stack Developer, зосереджений на створенні сучасних, адаптивних та зручних вебзастосунків. Працюю з HTML, CSS, JavaScript і постійно покращую backend навички для створення повноцінних цифрових продуктів. Мені подобається перетворювати ідеї на зрозумілі, функціональні та практичні інтерфейси.",

    skillsTitle: "Навички",

    projectsTitle: "Проєкти",

    futureProject: "Новий проєкт скоро з'явиться",

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
    aboutNav: "O mnie",
    skillsNav: "Umiejętności",
    projectsNav: "Projekty",
    contactNav: "Kontakt",

    position: "Full-Stack Developer",

    heroText: "Szukasz developera do swojego projektu? Pracujmy razem.",

    projectsBtn: "Zobacz projekty",
    contactBtn: "Kontakt",

    aboutTitle: "O mnie",

    aboutText:
      "Jestem Full-Stack Developerem skupionym na tworzeniu nowoczesnych, responsywnych i przyjaznych dla użytkownika aplikacji webowych. Pracuję z HTML, CSS i JavaScript oraz stale rozwijam umiejętności backendowe, aby tworzyć kompletne produkty cyfrowe.",

    skillsTitle: "Umiejętności",

    projectsTitle: "Projekty",

    futureProject: "Nowy projekt już wkrótce",

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
