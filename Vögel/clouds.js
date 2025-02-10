"use strict";
var Aufgabe_10;
(function (Aufgabe_10) {
    class Cloud extends Aufgabe_10.Moveable {
        draw() {
            Aufgabe_10.crc2.beginPath();
            Aufgabe_10.crc2.ellipse(this.x, this.y, 200, 155, 0, 0, Math.PI * 2);
            Aufgabe_10.crc2.fillStyle = "white";
            Aufgabe_10.crc2.globalAlpha = 0.9;
            Aufgabe_10.crc2.fill();
            Aufgabe_10.crc2.globalAlpha = 1;
        }
        move() {
            super.move();
            this.x += 0.1;
        }
        constructor(_x, _y) {
            super(_x, _y);
        }
    }
    Aufgabe_10.Cloud = Cloud;
})(Aufgabe_10 || (Aufgabe_10 = {}));
//# sourceMappingURL=clouds.js.map