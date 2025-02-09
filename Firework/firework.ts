class Firework {
    x: number;
    y: number;
    size: number;
    color: string;


    constructor(x: number, y:number, size: number, color: string) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.particleCount = particleCount;
        this.explode();


    canvas.addEventListener("click", (event) => {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX -rect.left;
        const y = event.clientY - rect.top;
        const color = (document.getElementById("FireworkColor")as HTMLInputElement).value;
        const size = parseInt((document.getElementById("FireworkSize")as HTMLInputElement).value);

        fireworks.push(new Firework(x, y, size, color));
    });
 function.animate(): void {
    ctx?.clearRect(0, 0, canvas.width, canvas.height);
    Firework.forEach(fw => fw.update());
    Firework.forEach(fw => fw.draw(ctx!));
    requestAnimationFrame(animate);
 }
animate();
    }
}


