"use strict";
var L04_Data_Structur;
(function (L04_Data_Structur) {
    window.addEventListener("load,", handleload);
    function handleload(_event) {
        console.log("Init");
        let form = document.querySelector("div#form");
        let slider = document.querySelector("input#amount");
        form.addEventListener("change", handleChange);
        slider.addEventListener("input", displayAmount);
        displayOrder();
    }
    function handleChange(_event) {
        displayOrder();
    }
    function displayOrder() {
        // let inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
        // console.log(inputs);
        let price = 0;
        let order = document.querySelector("div#order");
        order.innerHTML = "";
        let formData = new FormData(document.querySelector("form"));
        console.group("Order");
        for (let entry of formData) {
            console.log(entry);
            let selector = "[value='" + entry[1] + "']"; // "[name='" + entry[0] + " '][value='" + entry]
        }
    }
})(L04_Data_Structur || (L04_Data_Structur = {}));
//# sourceMappingURL=CocktailBa.js.map