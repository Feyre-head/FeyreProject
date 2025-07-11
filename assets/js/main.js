document.addEventListener("DOMContentLoaded", () => {
  // TODO: Coloque aqui todo o código Matter.js
});


tsParticles.load("tsparticles", {
      fullScreen: { enable: false },
      background: { color: "#000" },
      particles: {
        number: { value: 100 },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 1, random: true },
        size: { value: 2, random: true },
        move: { enable: true, speed: 0.5 },
        twinkle: {
          particles: {
            enable: true,
            frequency: 0.05,
            color: { value: "#ffffff" }
          }
        }
      }
    });