"use strict";
var L10_OldMacDonals;
(function (L10_OldMacDonals) {
    class horse extends L10_OldMacDonals.Animal {
        constructor(species, name, sound, foodTypes, foodAmount) {
            super(species, name, sound, foodTypes, foodAmount);
        }
        doSpecialAction() {
            return "I jump very high";
        }
    }
    L10_OldMacDonals.horse = horse;
})(L10_OldMacDonals || (L10_OldMacDonals = {}));
//# sourceMappingURL=horse.js.map