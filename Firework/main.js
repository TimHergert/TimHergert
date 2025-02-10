"use strict";
var Firework;
(function (Firework_1) {
    window.addEventListener("load", handleLoad);
    const canvas = document.getElementById('Simulation');
    const Firework = new Firework(Canvas);
    canvas.addEventListener('click', (event) => {
        const rect = canvas.getBoundingClientRect;
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.prototype;
        const config = getFireworkConfig();
        Firework.createExplosion(x, y, config);
    });
    let fireworks = [];
    function handleLoad(_event) {
        console.log("");
    }
})(Firework || (Firework = {}));
//# sourceMappingURL=main.js.map