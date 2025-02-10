"use strict";
class Firework {
    x;
    y;
    size;
    color;
    particleCount;
    explode;
    constructor(x, y, size, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.explode();
        function () { }
        animate();
        void {
            ctx, clearRect(, , canvas) { }, : .width, canvas, : .height,
            fireworks, : .forEach(fw => fw.update()),
            fireworks, : .forEach(fw => fw.draw(ctx))
        };
        animate();
    }
}
//# sourceMappingURL=firework.js.map