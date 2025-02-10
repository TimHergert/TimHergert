"use strict";
var Aufgabe_10;
(function (Aufgabe_10) {
    class Snowflake extends Aufgabe_10.Moveable {
        draw() {
            Aufgabe_10.crc2.fillStyle = "white";
            Aufgabe_10.crc2.beginPath();
            Aufgabe_10.crc2.arc(this.x, this.y, 5, 0, Math.PI * 2);
            Aufgabe_10.crc2.fill();
        }
        move() {
            super.move();
            this.y += 0.3;
        }
        constructor(_x, _y) {
            super(_x, _y);
        }
    }
    Aufgabe_10.Snowflake = Snowflake;
})(Aufgabe_10 || (Aufgabe_10 = {}));
//# sourceMappingURL=snowflake.js.map