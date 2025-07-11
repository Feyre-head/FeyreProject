const translations = {
  pt: {
    mensagem: 'Desenvolvedora FullStack',
  },
  en: {
    mensagem: 'Fullstack Developer',
  }
};

function setLanguage(lang) {
  document.documentElement.lang = lang;

  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");

    if (translations[lang][key]) {
      // Adiciona classe de fade-out
      el.classList.add("fade-out");

      // Espera o tempo da animação, então troca o texto e faz fade-in
      setTimeout(() => {
        el.textContent = translations[lang][key];
        el.classList.remove("fade-out");
        el.classList.add("fade-in");

        // Remove o fade-in depois da transição
        setTimeout(() => el.classList.remove("fade-in"), 300);
      }, 300); // tempo igual ao do transition no CSS
    }
  });
}
