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

    position: "Frontend / Fullstack Developer",

    heroText: "Building modern, responsive and user-friendly web applications.",

    projectsBtn: "View Projects",
    contactBtn: "Contact Me",

    aboutTitle: "About Me",

    aboutText:
      "Originally from Zaporizhzhia, Ukraine, currently living in Poznań, Poland. I specialize in frontend and fullstack development using React, JavaScript, Node.js, REST API and MongoDB. I create modern, responsive and user-friendly web applications.",

    skillsTitle: "Skills",

    projectsTitle: "Projects",

    futureProject: "New project is coming",

    helpTitle: "How I Can Help",

    ctaTitle: "Looking for a developer for your project?",

    ctaBtn: "Let's Work Together",

    contactTitle: "Contact",
  },

  ua: {
    aboutNav: "Про мене",
    skillsNav: "Навички",
    projectsNav: "Проєкти",
    contactNav: "Контакти",

    position: "Frontend / Fullstack Developer",

    heroText: "Створюю сучасні, адаптивні та зручні вебзастосунки.",

    projectsBtn: "Мої проєкти",
    contactBtn: "Зв'язатися",

    aboutTitle: "Про мене",

    aboutText:
      "Родом із Запоріжжя, Україна. Зараз проживаю в Познані, Польща. Спеціалізуюсь на frontend та fullstack розробці з використанням React, JavaScript, Node.js, REST API та MongoDB. Створюю сучасні та адаптивні вебзастосунки.",

    skillsTitle: "Навички",

    projectsTitle: "Проєкти",

    futureProject: "Новий проєкт скоро з'явиться",

    helpTitle: "Чим я можу допомогти",

    ctaTitle: "Потрібен розробник для вашого проєкту?",

    ctaBtn: "Працюймо разом",

    contactTitle: "Контакти",
  },

  pl: {
    aboutNav: "O mnie",
    skillsNav: "Umiejętności",
    projectsNav: "Projekty",
    contactNav: "Kontakt",

    position: "Frontend / Fullstack Developer",

    heroText:
      "Tworzę nowoczesne, responsywne i przyjazne dla użytkownika aplikacje webowe.",

    projectsBtn: "Zobacz projekty",
    contactBtn: "Kontakt",

    aboutTitle: "O mnie",

    aboutText:
      "Pochodzę z Zaporoża na Ukrainie, obecnie mieszkam w Poznaniu, Polska. Specjalizuję się w frontend oraz fullstack development z wykorzystaniem React, JavaScript, Node.js, REST API i MongoDB. Tworzę nowoczesne oraz responsywne aplikacje webowe.",

    skillsTitle: "Umiejętności",

    projectsTitle: "Projekty",

    futureProject: "Nowy projekt już wkrótce",

    helpTitle: "Jak mogę pomóc",

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
