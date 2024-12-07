// Szene erstellen
const scene = document.getElementById('scene');

// SVG erstellen
const svg = document.createElementNS(svgNS, "svg");
svg.setAttribute("viewBox", "0 0 100 150");
svg.setAttribute("width", "100%");
svg.setAttribute("height", "auto");

// Himmel
const sky = document.createElementNS(svgNS, "rect");
sky.setAttribute("width", "100%");
sky.setAttribute("height", "100%");
sky.setAttribute("fill", "skyblue");
svg.appendChild(sky);

// Sonne
const sun = document.createElementNS(svgNS, "circle");
sun.setAttribute("cx", "80");
sun.setAttribute("cy", "20");
sun.setAttribute("r", "10");
sun.setAttribute("fill", "yellow");
svg.appendChild(sun);

// Wolken
const clouds = [
  { cx: 40, cy: 20, rx: 10, ry: 5 },
  { cx: 45, cy: 18, rx: 12, ry: 6 },
  { cx: 50, cy: 20, rx: 10, ry: 5 }
];
clouds.forEach(cloud => {
  const ellipse = document.createElementNS(svgNS, "ellipse");
  ellipse.setAttribute("cx", cloud.cx);
  ellipse.setAttribute("cy", cloud.cy);
  ellipse.setAttribute("rx", cloud.rx);
  ellipse.setAttribute("ry", cloud.ry);
  ellipse.setAttribute("fill", "white");
  svg.appendChild(ellipse);
});

// Berge
const mountains = [
  "0,100 30,50 60,100",
  "50,100 80,60 100,100"
];
mountains.forEach(points => {
  const mountain = document.createElementNS(svgNS, "polygon");
  mountain.setAttribute("points", points);
  mountain.setAttribute("fill", "gray");
  svg.appendChild(mountain);
});

// Bäume
const trees = [
  { x1: 20, y1: 100, x2: 25, y2: 80, x3: 30, y3: 100 },
  { x1: 70, y1: 100, x2: 75, y2: 85, x3: 80, y3: 100 }
];
trees.forEach(tree => {
  const triangle = document.createElementNS(svgNS, "polygon");
  triangle.setAttribute(
    "points",
    `${tree.x1},${tree.y1} ${tree.x2},${tree.y2} ${tree.x3},${tree.y3}`
  );
  triangle.setAttribute("fill", "green");
  svg.appendChild(triangle);
});

// Schneemann
const snowman = [
  { cx: 50, cy: 120, r: 8 },
  { cx: 50, cy: 110, r: 6 },
  { cx: 50, cy: 102, r: 4 }
];
snowman.forEach(circle => {
  const snowball = document.createElementNS(svgNS, "circle");
  snowball.setAttribute("cx", circle.cx);
  snowball.setAttribute("cy", circle.cy);
  snowball.setAttribute("r", circle.r);
  snowball.setAttribute("fill", "white");
  svg.appendChild(snowball);
});

// Schneemann Gesicht
const eyes = [
  { cx: 48, cy: 102, r: 0.5 },
  { cx: 52, cy: 102, r: 0.5 }
];
eyes.forEach(eye => {
  const eyeCircle = document.createElementNS(svgNS, "circle");
  eyeCircle.setAttribute("cx", eye.cx);
  eyeCircle.setAttribute("cy", eye.cy);
  eyeCircle.setAttribute("r", eye.r);
  eyeCircle.setAttribute("fill", "black");
  svg.appendChild(eyeCircle);
});
const mouth = document.createElementNS(svgNS, "path");
mouth.setAttribute("d", "M49 105 L51 105");
mouth.setAttribute("stroke", "black");
mouth.setAttribute("stroke-width", "0.5");
svg.appendChild(mouth);

// Vogelhäuschen
const houseBase = document.createElementNS(svgNS, "rect");
houseBase.setAttribute("x", "30");
houseBase.setAttribute("y", "90");
houseBase.setAttribute("width", "10");
houseBase.setAttribute("height", "8");
houseBase.setAttribute("fill", "brown");
svg.appendChild(houseBase);

const houseRoof = document.createElementNS(svgNS, "rect");
houseRoof.setAttribute("x", "33");
houseRoof.setAttribute("y", "88");
houseRoof.setAttribute("width", "4");
houseRoof.setAttribute("height", "2");
houseRoof.setAttribute("fill", "black");
svg.appendChild(houseRoof);

// Vögel
const birds = [
  { cx: 32, cy: 94, r: 0.5, color: "red" },
  { cx: 20, cy: 110, r: 0.5, color: "blue" },
  { cx: 40, cy: 105, r: 0.5, color: "yellow" }
];
birds.forEach(bird => {
  const birdCircle = document.createElementNS(svgNS, "circle");
  birdCircle.setAttribute("cx", bird.cx);
  birdCircle.setAttribute("cy", bird.cy);
  birdCircle.setAttribute("r", bird.r);
  birdCircle.setAttribute("fill", bird.color);
  svg.appendChild(birdCircle);
});

// Schneeflocken
for (let i = 0; i < 20; i++) {
  const snowflake = document.createElementNS(svgNS, "circle");
  snowflake.setAttribute("cx", Math.random() * 100);
  snowflake.setAttribute("cy", Math.random() * 150);
  snowflake.setAttribute("r", "0.3");
  snowflake.setAttribute("fill", "white");
  svg.appendChild(snowflake);
}

// SVG zur Szene hinzufügen
scene.appendChild(svg);
