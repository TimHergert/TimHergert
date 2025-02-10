"use strict";
var Aufgabe_10;
(function (Aufgabe_10) {
    window.addEventListener("load", handleLoad);
    let background;
    let moveables = [];
    let snowman;
    let birdhouse;
    function handleLoad(_event) {
        Aufgabe_10.canvas = document.querySelector("canvas");
        if (!Aufgabe_10.canvas)
            return;
        Aufgabe_10.crc2 = Aufgabe_10.canvas.getContext("2d");
        Aufgabe_10.canvas.width = window.innerWidth;
        Aufgabe_10.canvas.height = window.innerHeight;
        background = Aufgabe_10.crc2.getImageData(0, 0, Aufgabe_10.canvas.width, Aufgabe_10.canvas.height);
        drawSky();
        drawSun();
        drawMountain(0, 1000, 1000, 1000, 500, 100, "#A9A9A9");
        drawMountain(500, 1000, 1200, 100, 2000, 1000, "#808080");
        drawTree(400, 500);
        drawTree(600, 620);
        drawTree(900, 700);
        drawTree(1200, 600);
        drawTree(1500, 760);
        background = Aufgabe_10.crc2.getImageData(0, 0, Aufgabe_10.canvas.width, Aufgabe_10.canvas.height);
        moveables.push(new Aufgabe_10.Cloud(600, 200));
        moveables.push(new Aufgabe_10.Cloud(1300, 300));
        new Aufgabe_10.Birdhouse();
        new Aufgabe_10.Snowman();
        moveables.push(new Aufgabe_10.Bird(700, 600));
        moveables.push(new Aufgabe_10.Bird(800, 350));
        moveables.push(new Aufgabe_10.Bird(1200, 750));
        moveables.push(new Aufgabe_10.Bird(300, 580));
        moveables.push(new Aufgabe_10.Bird(1400, 450));
        snowman = new Aufgabe_10.Snowman();
        birdhouse = new Aufgabe_10.Birdhouse();
        for (let i = 0; i < 30; i++) {
            moveables.push(new Aufgabe_10.Snowflake(Math.random() * Aufgabe_10.canvas.width, Math.random() * Aufgabe_10.canvas.height));
        }
        window.setInterval(function () {
            Aufgabe_10.crc2.putImageData(background, 0, 0);
            moveables.forEach(element => {
                element.draw();
                element.move();
            });
            snowman.draw();
            birdhouse.draw();
        }, 25);
    }
    function drawSky() {
        const gradient = Aufgabe_10.crc2.createLinearGradient(0, 0, 0, Aufgabe_10.canvas.height);
        gradient.addColorStop(0, "#87CEEB");
        gradient.addColorStop(1, "#f0f8ff");
        Aufgabe_10.crc2.fillStyle = gradient;
        Aufgabe_10.crc2.fillRect(0, 0, Aufgabe_10.canvas.width, Aufgabe_10.canvas.height);
    }
    function drawSun() {
        Aufgabe_10.crc2.beginPath();
        Aufgabe_10.crc2.arc(150, 150, 100, 0, Math.PI * 2);
        Aufgabe_10.crc2.fillStyle = "yellow";
        Aufgabe_10.crc2.globalAlpha = 0.8;
        Aufgabe_10.crc2.fill();
        Aufgabe_10.crc2.globalAlpha = 1;
    }
    function drawTree(x, y) {
        Aufgabe_10.crc2.fillStyle = "green";
        Aufgabe_10.crc2.beginPath();
        Aufgabe_10.crc2.moveTo(x, y);
        Aufgabe_10.crc2.lineTo(x + 25, y - 100);
        Aufgabe_10.crc2.lineTo(x + 50, y);
        Aufgabe_10.crc2.closePath();
        Aufgabe_10.crc2.fill();
    }
    function drawMountain(x1, y1, x2, y2, x3, y3, color) {
        Aufgabe_10.crc2.beginPath();
        Aufgabe_10.crc2.moveTo(x1, y1);
        Aufgabe_10.crc2.lineTo(x2, y2);
        Aufgabe_10.crc2.lineTo(x3, y3);
        Aufgabe_10.crc2.closePath();
        Aufgabe_10.crc2.fillStyle = color;
        Aufgabe_10.crc2.fill();
    }
    function drawBirdhouse() {
        Aufgabe_10.crc2.fillStyle = "#8B4513";
        Aufgabe_10.crc2.fillRect(700, 1400, 80, 120);
        Aufgabe_10.crc2.fillStyle = "#A0522D";
        Aufgabe_10.crc2.beginPath();
        Aufgabe_10.crc2.moveTo(750, 800);
        Aufgabe_10.crc2.lineTo(850, 730);
        Aufgabe_10.crc2.lineTo(950, 800);
        Aufgabe_10.crc2.closePath();
        Aufgabe_10.crc2.fill();
        Aufgabe_10.crc2.fillStyle = "black";
        Aufgabe_10.crc2.beginPath();
        Aufgabe_10.crc2.arc(850, 770, 25, 0, Math.PI * 2);
        Aufgabe_10.crc2.fill();
        Aufgabe_10.crc2.strokeStyle = "brown";
        Aufgabe_10.crc2.lineWidth = 5;
        Aufgabe_10.crc2.beginPath();
        Aufgabe_10.crc2.moveTo(845, 800);
        Aufgabe_10.crc2.lineTo(820, 900);
        Aufgabe_10.crc2.stroke();
        Aufgabe_10.crc2.beginPath();
        Aufgabe_10.crc2.moveTo(855, 800);
        Aufgabe_10.crc2.lineTo(890, 900);
        Aufgabe_10.crc2.stroke();
    }
})(Aufgabe_10 || (Aufgabe_10 = {}));
//# sourceMappingURL=v%C3%B6gel.js.map