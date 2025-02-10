"use strict";
var FarmL10;
(function (FarmL10) {
    class Dog extends FarmL10.animal {
        constructor(species, name, sound, foodTypes, foodAmount) {
            super(species, name, sound, foodTypes, foodAmount);
        }
        doSpecialAction() {
            return "I lick bones";
        }
    }
    FarmL10.Dog = Dog;
})(FarmL10 || (FarmL10 = {}));
//# sourceMappingURL=dog.js.map