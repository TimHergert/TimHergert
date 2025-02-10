"use strict";
var FarmL10;
(function (FarmL10) {
    class Chicken extends FarmL10.animal {
        constructor(species, name, sound, foodTypes, foodAmount) {
            super(species, name, sound, foodTypes, foodAmount);
        }
        doSpecialAction() {
            return "I lay eggs";
        }
    }
    FarmL10.Chicken = Chicken;
})(FarmL10 || (FarmL10 = {}));
//# sourceMappingURL=chicken.js.map