class Firework {
    x: number;
    y: number;
    size: number;
    color: string;
    particleCount: number;
    explode: string;
    


    constructor(x: number, y:number, size: number, color: string) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.explode();


 
 function.animate(): void {
    ctx?.clearRect(0, 0, canvas.width, canvas.height);
    fireworks.forEach(fw => fw.update());
    fireworks.forEach(fw => fw.draw(ctx!));
    requestAnimationFrame(animate);
 }
animate();
    }
}


