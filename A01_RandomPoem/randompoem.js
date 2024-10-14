"use strict";
console.log("Expecto Patronum");
var RandomPoem;
(function (RandomPoem) {
    let subjekte = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let prädikate = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objekte = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    console.log({ subjekte, prädikate, objekte });
    for (let i = subjekte.length; i >= 1; i--) {
        let Ergebniss = getVerse([], [], []);
        console.log(Ergebniss, i);
    }
    function getVerse(_subjekte, _prädikate, _objkete) {
        return "alohomora";
    }
})(RandomPoem || (RandomPoem = {}));
//# sourceMappingURL=randompoem.js.map