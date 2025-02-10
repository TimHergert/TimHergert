"use strict";
var FarmL10;
(function (FarmL10) {
    class animal {
        species;
        name;
        sound;
        foodTypes;
        foodAmount;
        hasSung;
        hasEaten;
        constructor(species, name, sound, foodTypes, foodAmount) {
            this.species = species;
            this.name = name;
            this.sound = sound;
            this.foodTypes = foodTypes;
            this.foodAmount = foodAmount;
            this.hasSung = false;
            this.hasEaten = false;
        }
        sing() {
            this.hasSung = true;
            return `${this.name} the ${this.species} sings: Old MacDonald had a farm, E-I-E-I-O, and on that farm he had a ${this.species}, E-I-E-I-0, with a ${this.sound} here, and a ${this.sound} there... `;
        }
        eat(foodType, avaibleFood) {
            if (!this.foodTypes.includes(foodType)) {
                return `${this.name} the ${this.species} doesn't eat ${foodType}.`;
            }
            if (avaibleFood < this.foodAmount) {
                return `${foodType} for ${this.name}. Needs ${this.foodAmount}g but only ${avaibleFood}g aviable.`;
            }
            this.hasEaten = true;
            return `${this.name} the ${this.species} is eating ${this.foodAmount}g of ${foodType}.`;
        }
        doSpecialAction() { }
    }
    FarmL10.animal = animal;
})(FarmL10 || (FarmL10 = {}));
//# sourceMappingURL=animal.js.map