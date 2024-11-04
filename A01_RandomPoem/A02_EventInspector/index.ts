namespace L02_EventInspector {
    console.log("Start");
    let chosenCharacter: string;
    window.addEventListener("load", handleLoad);

    function handleLoad(): void {
        let div: HTMLElement = <HTMLElement>document.querySelector("div0");
        div.addEventListener("click", logInfo);
        document.addEventListener("keyup",logInfo);

    }
    function setInfoBox(_event: MouseEvent): void {
        //  console.log(_event);
        let x: number = _event.offsetX;
        let y: number = _event.offsetY;

        let div: HTMLElement = <HTMLElement>_event.target;
        let doc: HTMLSpanElement = document.createElement("span");

    }
    function logInfo(_event: Event): void{
        console.log(_event.target);
        console.log(_event.type);
        console.log(_event.currentTarget);
        
    }
    document.getElementById("myButton").dispatchEvent;
    function customEvent(_eventEvent): void {
        // Löst das benutzerdefinerite Event am Button Element aus
        console.log(_customEvent);
        HTMLButtonElement{
            new(): HTMLButtonElement;
            prototype: HTMLButtonElement;
        }=<HTMLButtonElement>_eventEvent.target;



    }
}