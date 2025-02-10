namespace FarmL10 {

    export class Pig extends animal {
        constructor(species: string, name: string, sound: string, foodTypes: string[], foodAmount: number) {
            super(species, name, sound, foodTypes, foodAmount)
        }
        doSpecialAction(): string {
            return "I wash myself"
        }
            
        }
    }
