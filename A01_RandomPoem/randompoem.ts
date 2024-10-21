console.log("Expecto Patronum");
namespace RandomPoem {
    let subjects: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let predicate: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objects: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    console.log({ subjects, predicate, objects })
    for (let i = subjects.length; i >= 1; i--) {
        let Ergebniss: string = getVerse(subjects, predicate, objects)
        console.log(Ergebniss, i)
    }
    function getVerse(_subjects: string[], _predicate: string[], _objects: string[]): string {
        let verse: string = "";
       let subjectnumber: number = Math.floor(Math.random()*_subjects.length);
       let subjectresult: number = Math.floor(Math.random()*_subjects.length);
       let predicatenumber: number = Math.floor(Math.random()*_predicate.length);
       let predicateresult: number = Math.floor(Math.random()*_predicate.length);
       let objectnumber: number = Math.floor(Math.random()*_objects.length);
       let objectresult: number = Math.floor(Math.random()*_objects.length);
        return "alohomora"

    }
}
