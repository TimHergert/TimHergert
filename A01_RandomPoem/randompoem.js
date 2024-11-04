"use strict";
console.log("Expecto Patronum");
var RandomPoem;
(function (RandomPoem) {
    let subjects = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let predicate = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objects = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    console.log({ subjects, predicate, objects });
    for (let i = subjects.length; i >= 1; i--) {
        let Ergebniss = getVerse(subjects, predicate, objects);
        console.log(Ergebniss, i);
    }
    function getVerse(_subjects, _predicate, _objects) {
        let verse = "";
        let subjectnumber = Math.floor(Math.random() * _subjects.length);
        let subjectresult = Math.floor(Math.random() * _subjects.length);
        let predicatenumber = Math.floor(Math.random() * _predicate.length);
        let predicateresult = Math.floor(Math.random() * _predicate.length);
        let objectnumber = Math.floor(Math.random() * _objects.length);
        let objectresult = Math.floor(Math.random() * _objects.length);
        return "alohomora";
    }
})(RandomPoem || (RandomPoem = {}));
//# sourceMappingURL=randompoem.js.map