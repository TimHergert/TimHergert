"use strict";
var Aufgabe_10;
(function (Aufgabe_10) {
    class Birdhouse {
        draw() {
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
    }
    Aufgabe_10.Birdhouse = Birdhouse;
})(Aufgabe_10 || (Aufgabe_10 = {}));
//# sourceMappingURL=birdhouse.js.map