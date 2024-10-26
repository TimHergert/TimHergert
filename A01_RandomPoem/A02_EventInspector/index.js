"use strict";
var L02_EventInspector;
(function (L02_EventInspector) {
    console.log("Start");
    let chosenCharacter;
    window.addEventListener("load", handleLoad);
    function handleLoad(event) {
        let div = document.querySelector("div0");
        div.addEventListener("click", install, mouse);
        document.addEventListener("keyup", choosedocument);
    }
    function setInfoBox(_event) {
        //  console.log(_event);
        let x, _event, offsetX;
        let y = _event.offsetY;
        let div = _event.target;
        let document = document.createElement("span");
    }
})(L02_EventInspector || (L02_EventInspector = {}));
//# sourceMappingURL=index.js.map