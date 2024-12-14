"use strict";
var farm;
(function (farm) {
    window.addEventListener("load", handleLoad);
    let asteroids = [];
    function handleLoad(_event) {
        console.log("FarmSimulation");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        farm.crc2 = canvas.getContext("2d");
        farm.crc2.fillStyle = "green";
        farm.crc2.strokeStyle = "blue";
        farm.createPaths();
        console.log("farm paths: ", farm.farmPaths);
        createAsteroids(5);
        
        
        canvas.addEventListener("mouseup", eatgrass);
        // canvas.addEventListener("keypress", handleKeypress);
        // canvas.addEventListener("mousemove", setHeading);
        window.setInterval(update, 20);
    }
    function eatgrass(_event) {
        console.log("eat grass");
        let hotspot = new farm.Vector(_event.clientX - farm.canvas.offsetLeft, _event.clientY - farm.crc2.canvas.offsetTop);
        let animaleat = getanimaleat(hotspot);
        console.log(asteroidHit);
        if (asteroidHit)
            breakAsteroid(asteroidHit);
    }
    function getanimaleat(_hotspot) {
        for (let asteroid of asteroids) {
            if (asteroid.isHit(_hotspot))
                return asteroid;
        }
        return null;
    }
    function breakAsteroid(_asteroid) {
        if (_asteroid.size > 0.3) {
            for (let i = 0; i < 2; i++) {
                let fragment = new L09_Asteroids.Asteroid(_asteroid.size / 2, _asteroid.position);
                fragment.velocity.add(_asteroid.velocity);
                asteroids.push(fragment);
            }
        }   
        let index = asteroids.indexOf(_asteroid);
        asteroids.splice(index, 1);
    }
    function createAsteroids(_nAsteroids) {
        console.log("Create asteroids");
        for (let i = 0; i < _nAsteroids; i++) {
            let asteroid = new L09_Asteroids.Asteroid(1.0);
            asteroids.push(asteroid);
        }
    }
    function update() {
        console.log("Update");
        L09_Asteroids.crc2.fillRect(0, 0, cow.crc2.canvas.width, cow.crc2.canvas.height);
        for (let cow of animals) {
            cow.move(1 / 50);
            cow.draw();
        }
        
        // handleCollisions();
    }
})(farm || (farm = {}));
//# sourceMappingURL=Main.js.map