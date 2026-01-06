document.addEventListener("DOMContentLoaded", () => {
  // Configurações do Observador
  const options = {
    root: null, // Usa a viewport (janela do navegador)
    rootMargin: "0px",
    threshold: 0.2, // A animação dispara quando 20% do elemento estiver visível
  };

  // Função que é chamada toda vez que o scroll acontece
  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      // SE estiver aparecendo na tela (Descendo ou Subindo e entrando)
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
      // SE sair da tela (Subindo ou Descendo e saindo)
      else {
        // Remove a classe para que ele fique invisível novamente
        // Isso cria o efeito de "desaparecer no scroll up/down"
        entry.target.classList.remove("is-visible");
      }
    });
  };

  // Cria o observador
  const observer = new IntersectionObserver(observerCallback, options);

  // Seleciona todos os elementos que devem ser animados
  const scrollElements = document.querySelectorAll(".scroll-trigger");

  // Manda o observador vigiar cada um deles
  scrollElements.forEach((el) => {
    observer.observe(el);
  });
});
