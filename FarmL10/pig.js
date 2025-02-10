"use strict";
var FarmL10;
(function (FarmL10) {
    class Pig extends FarmL10.animal {
        constructor(species, name, sound, foodTypes, foodAmount) {
            super(species, name, sound, foodTypes, foodAmount);
        }
        doSpecialAction() {
            return "I wash myself";
        }
    }
    FarmL10.Pig = Pig;
})(FarmL10 || (FarmL10 = {}));
//# sourceMappingURL=pig.js.map