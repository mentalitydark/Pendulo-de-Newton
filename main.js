const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Composites = Matter.Composites;


const engine = Engine.create();

const render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: 1200,
        showVelocity: true,
        wireframes: true
    }
});

let mouse = Matter.Mouse.create(render.canvas)
const PenduloUm = Composites.newtonsCradle(100, 100, 4, 30, 100);
const PenduloDois = Composites.newtonsCradle(500, 100, 6, 20, 70);
const PenduloTres = Composites.newtonsCradle(150, 400, 10, 30, 150)

;
const mouseCoonstraint = Matter.MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
        render: {visible: false}
    }
})
render.mouse = mouse;

// add all of the bodies to the world
World.add(engine.world, [PenduloUm, PenduloDois,PenduloTres, mouseCoonstraint]);

// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);