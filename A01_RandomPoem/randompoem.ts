 console.log("Expecto Patronum");
namespace RandomPoem{
    let subjekte: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let prädikate: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objekte: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
console.log({subjekte, prädikate, objekte})
for (let i = subjekte.length; i >= 1; i --) {
    let Ergebniss: string = getVerse([],[],[])
    console.log(Ergebniss, i)
}
function getVerse(_subjekte: string[],_prädikate: string [], _objkete: string[]): string {
    return "alohomora"
}
}
