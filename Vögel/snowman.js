"use strict";
var Aufgabe_10;
(function (Aufgabe_10) {
    class Snowman {
        draw() {
            Aufgabe_10.crc2.fillStyle = "white";
            Aufgabe_10.crc2.beginPath();
            Aufgabe_10.crc2.arc(200, 800, 100, 0, Math.PI * 2);
            Aufgabe_10.crc2.fill();
            Aufgabe_10.crc2.beginPath();
            Aufgabe_10.crc2.arc(200, 650, 80, 0, Math.PI * 2);
            Aufgabe_10.crc2.fill();
            Aufgabe_10.crc2.beginPath();
            Aufgabe_10.crc2.arc(200, 520, 60, 0, Math.PI * 2);
            Aufgabe_10.crc2.fill();
            Aufgabe_10.crc2.fillStyle = "black";
            Aufgabe_10.crc2.beginPath();
            Aufgabe_10.crc2.arc(180, 490, 10, 0, Math.PI * 2);
            Aufgabe_10.crc2.fill();
            Aufgabe_10.crc2.beginPath();
            Aufgabe_10.crc2.arc(230, 490, 10, 0, Math.PI * 2);
            Aufgabe_10.crc2.fill();
            Aufgabe_10.crc2.fillStyle = "orange";
            Aufgabe_10.crc2.beginPath();
            Aufgabe_10.crc2.moveTo(200, 500);
            Aufgabe_10.crc2.lineTo(200, 520);
            Aufgabe_10.crc2.lineTo(340, 530);
            Aufgabe_10.crc2.closePath();
            Aufgabe_10.crc2.fill();
            Aufgabe_10.crc2.fillStyle = "brown";
            Aufgabe_10.crc2.beginPath();
            Aufgabe_10.crc2.arc(200, 610, 10, 0, Math.PI * 2);
            Aufgabe_10.crc2.fill();
            Aufgabe_10.crc2.beginPath();
            Aufgabe_10.crc2.arc(200, 650, 10, 0, Math.PI * 2);
            Aufgabe_10.crc2.fill();
            Aufgabe_10.crc2.beginPath();
            Aufgabe_10.crc2.arc(200, 690, 10, 0, Math.PI * 2);
            Aufgabe_10.crc2.fill();
            Aufgabe_10.crc2.beginPath();
            Aufgabe_10.crc2.arc(200, 760, 10, 0, Math.PI * 2);
            Aufgabe_10.crc2.fill();
            Aufgabe_10.crc2.beginPath();
            Aufgabe_10.crc2.arc(200, 800, 10, 0, Math.PI * 2);
            Aufgabe_10.crc2.fill();
            Aufgabe_10.crc2.strokeStyle = "brown";
            Aufgabe_10.crc2.lineWidth = 5;
            Aufgabe_10.crc2.beginPath();
            Aufgabe_10.crc2.moveTo(120, 650);
            Aufgabe_10.crc2.lineTo(20, 600);
            Aufgabe_10.crc2.stroke();
            Aufgabe_10.crc2.beginPath();
            Aufgabe_10.crc2.moveTo(280, 650);
            Aufgabe_10.crc2.lineTo(380, 600);
            Aufgabe_10.crc2.stroke();
        }
    }
    Aufgabe_10.Snowman = Snowman;
})(Aufgabe_10 || (Aufgabe_10 = {}));
//# sourceMappingURL=snowman.js.map