"use strict";
var Aufgabe_10;
(function (Aufgabe_10) {
    class Bird extends Aufgabe_10.Moveable {
        draw() {
            Aufgabe_10.crc2.fillStyle = "brown";
            Aufgabe_10.crc2.beginPath();
            Aufgabe_10.crc2.arc(this.x, this.y, 30, 10, Math.PI * 2);
            Aufgabe_10.crc2.fill();
        }
        move() {
            super.move();
            this.x += 0.5;
            this.y += 0.5;
        }
        constructor(_x, _y) {
            super(_x, _y);
        }
    }
    Aufgabe_10.Bird = Bird;
})(Aufgabe_10 || (Aufgabe_10 = {}));
//# sourceMappingURL=birds.js.map