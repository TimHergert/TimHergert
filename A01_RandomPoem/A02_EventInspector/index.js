"use strict";
var L02_EventInspector;
(function (L02_EventInspector) {
    console.log("Start");
    let chosenCharacter;
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        let div = document.querySelector("div0");
        div.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
    }
    function setInfoBox(_event) {
        //  console.log(_event);
        let x = _event.offsetX;
        let y = _event.offsetY;
        let div = _event.target;
        let doc = document.createElement("span");
    }
    function logInfo(_event) {
        console.log(_event.target);
        console.log(_event.type);
        console.log(_event.currentTarget);
    }
    document.getElementById("myButton").dispatchEvent;
    function customEvent(_eventEvent) {
        // Löst das benutzerdefinerite Event am Button Element aus
        console.log(_customEvent);
        HTMLButtonElement;
        {
            new ();
            HTMLButtonElement;
            prototype: HTMLButtonElement;
        }
        _eventEvent.target;
    }
})(L02_EventInspector || (L02_EventInspector = {}));
//# sourceMappingURL=index.js.map