document.addEventListener("DOMContentLoaded", () => {
  const {
    Engine,
    Render,
    Runner,
    World,
    Bodies,
    Body,
    Events,
    Mouse,
    MouseConstraint,
  } = Matter;

  // Criação do motor
  const engine = Engine.create();
  const world = engine.world;
  const runner = Runner.create();
  Runner.run(runner, engine);

  // Pegamos o elemento HTML
  const el = document.getElementById("titulo");

  // Cria o corpo físico (mesma largura/altura visual do elemento)
  const corpo = Bodies.rectangle(200, 100, 100, 100, {
    restitution: 0.5,
    friction: 0.1,
  });

  World.add(world, corpo);

  // Cria o "chão" exatamente na parte inferior da tela
  const ground = Bodies.rectangle(
    window.innerWidth / 2,
    window.innerHeight - 40, // ⬅️ Fica dentro da tela!
    window.innerWidth,
    80,
    {
      isStatic: true,
    }
  );
  World.add(world, ground);

  // Adiciona controle do mouse
  const mouse = Mouse.create(document.body);
  const mouseConstraint = MouseConstraint.create(engine, {
    mouse,
    constraint: {
      stiffness: 0.2,
      render: { visible: false },
    },
  });
  World.add(world, mouseConstraint);

  // Atualiza posição visual do elemento
  Events.on(engine, "afterUpdate", () => {
    el.style.transform = `translate(${corpo.position.x - 50}px, ${
      corpo.position.y - 50
    }px) rotate(${corpo.angle}rad)`;
  });

  // Responsividade: reposiciona o chão corretamente
  window.addEventListener("resize", () => {
    Body.setPosition(ground, {
      x: window.innerWidth / 2,
      y: window.innerHeight - 40,
    });

    Body.setVertices(
      ground,
      Matter.Vertices.fromPath(
        `0 0 ${window.innerWidth} 0 ${window.innerWidth} 80 0 80`
      )
    );
  });
});
