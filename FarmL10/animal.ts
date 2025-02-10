namespace FarmL10 {


    export class animal {
        species: string;
        name: string;
        sound: string;
        foodTypes: string[];
        foodAmount: number;
        hasSung: boolean;
        hasEaten: boolean;

        constructor(species: string, name: string, sound: string, foodTypes: string[], foodAmount: number) {
            this.species = species;
            this.name = name;
            this.sound = sound;
            this.foodTypes = foodTypes;
            this.foodAmount = foodAmount;
            this.hasSung = false;
            this.hasEaten = false;
        }

        sing(): string {
            this.hasSung = true;
            return `${this.name} the ${this.species} sings: Old MacDonald had a farm, E-I-E-I-O, and on that farm he had a ${this.species}, E-I-E-I-0, with a ${this.sound} here, and a ${this.sound} there... `;
        }
        
        eat(foodType: string, avaibleFood: number): string {

            if (!this.foodTypes.includes(foodType)) {
                return `${this.name} the ${this.species} doesn't eat ${foodType}.`;
            }
            if (avaibleFood < this.foodAmount) {
                return `${foodType} for ${this.name}. Needs ${this.foodAmount}g but only ${avaibleFood}g aviable.`;
            }
            this.hasEaten = true;
            return `${this.name} the ${this.species} is eating ${this.foodAmount}g of ${foodType}.`;
        }
        doSpecialAction(): void{}
    }
}
    
