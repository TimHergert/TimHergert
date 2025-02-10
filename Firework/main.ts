namespace Firework {

    window.addEventListener("load", handleLoad);
    const canvas = document.getElementById('Simulation') as HTMLCanvasElement;
    const Firework = new Firework(Canvas);



    canvas.addEventListener('click', (event: MouseEvent) => {
        const rect = canvas.getBoundingClientRect;
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.prototype; 


        const config = getFireworkConfig();
        Firework.createExplosion(x, y, config);
    });

    export let crc2: CanvasRenderingContext2D;

    let fireworks: Firework[] = [];

    function handleLoad(_event: Event): void {
        console.log("")
    }
}