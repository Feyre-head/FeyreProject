//Typed + Tradução (en pt)

// Objeto com as traduções para cada idioma disponível
const translations = {
  pt: {
    mensagem: ['Desenvolvedora FullStack', 'Estudante de ADS', 'Aprendendo Java'], // Texto em português
  },
  en: {
    mensagem: ['Fullstack Developer', 'Software Development student', 'Learning Java'], // Texto em inglês
  }
};

// Variável que irá guardar a instância do Typed.js para poder destruir e recriar conforme o idioma
let typedInstance = null;

// Função principal que troca o idioma do site
function setLanguage(lang) {
  // Define o atributo lang do <html>, útil para acessibilidade e SEO
  document.documentElement.lang = lang;

  // Seleciona todos os elementos HTML que têm o atributo "data-i18n"
  const elements = document.querySelectorAll("[data-i18n]");

  // Para cada elemento encontrado, executa a função abaixo
  elements.forEach(el => {

    // Captura o valor do atributo data-i18n (ex: "mensagem")
    const key = el.getAttribute("data-i18n");

    // Evita modificar o elemento com data-i18n="mensagem", pois o conteúdo será controlado via Typed.js
    if (key === 'mensagem') return;

    // Verifica se existe tradução para essa chave no idioma selecionado
    if (translations[lang][key]) {
      // Aplica a classe de fade-out para iniciar a transição
      el.classList.add("fade-out");

      // Aguarda o tempo da transição (300ms) antes de trocar o conteúdo
      setTimeout(() => {
        // Atualiza o conteúdo do texto traduzido
        el.textContent = translations[lang][key];

        // Remove a classe de fade-out
        el.classList.remove("fade-out");

        // Aplica a classe de fade-in para mostrar a nova tradução suavemente
        el.classList.add("fade-in");

        // Remove a classe de fade-in depois que a transição terminar
        setTimeout(() => el.classList.remove("fade-in"), 300);
      }, 300); // Esse tempo deve coincidir com a transição definida no CSS
    }
  });

  // Se já existe uma instância do Typed.js rodando, ela é destruída antes de criar uma nova
  if (typedInstance) typedInstance.destroy();

  // Cria uma nova instância do Typed.js no elemento com data-i18n="mensagem"
  typedInstance = new Typed('[data-i18n="mensagem"]', {
    strings: translations[lang].mensagem, // A string traduzida que será "digitada"
    typeSpeed: 80, // Velocidade da digitação (ms por caractere)
    backSpeed: 60, // Velocidade de apagar o texto (ms por caractere)
    loop: true, // Se verdadeiro, repete o efeito infinitamente
    smartBackspace: true // Apaga apenas o necessário ao mudar para o próximo texto (útil com múltiplas strings)
  });
}

setLanguage('pt')
