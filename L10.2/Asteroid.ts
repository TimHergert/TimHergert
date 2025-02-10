namespace L10_AsteroidsInheritance {
    export class Asteroid extends Moveable {
        position: Vector; 
        veloctiy: Vector; 
        type: number;
        size: number; 

        constructor(_size: number, _position?: Vector) {
            console.log("Asteroid constructor");

            super(_position);

            if (_position)
                this.position = _position.copy();
            else
            this.position = new Vector(0, 0);

            this.veloctiy = new Vector(0, 0);
            this.veloctiy.random(100, 200); 

            this.type = Math.floor(Math.random() * 4);
            this.size =_size; 
        }

    }
}