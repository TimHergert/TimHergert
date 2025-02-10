"use strict";
var Aufgabe_10;
(function (Aufgabe_10) {
    class Moveable {
        x;
        y;
        move() {
            if (this.x > Aufgabe_10.canvas.width) {
                this.x = 0;
            }
            if (this.y > Aufgabe_10.canvas.height) {
                this.y = 0;
            }
        }
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        draw() { }
    }
    Aufgabe_10.Moveable = Moveable;
})(Aufgabe_10 || (Aufgabe_10 = {}));
//# sourceMappingURL=superclass.js.map