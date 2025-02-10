"use strict";
var L10_AsteroidsInheritance;
(function (L10_AsteroidsInheritance) {
    class Asteroid extends L10_AsteroidsInheritance.Moveable {
        position;
        veloctiy;
        type;
        size;
        constructor(_size, _position) {
            console.log("Asteroid constructor");
            super(_position);
            if (_position)
                this.position = _position.copy();
            else
                this.position = new L10_AsteroidsInheritance.Vector(0, 0);
            this.veloctiy = new L10_AsteroidsInheritance.Vector(0, 0);
            this.veloctiy.random(100, 200);
            this.type = Math.floor(Math.random() * 4);
            this.size = _size;
        }
    }
    L10_AsteroidsInheritance.Asteroid = Asteroid;
})(L10_AsteroidsInheritance || (L10_AsteroidsInheritance = {}));
//# sourceMappingURL=Asteroid.js.map