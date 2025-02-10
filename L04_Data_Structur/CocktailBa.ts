namespace L04_Data_Structur{
    window.addEventListener("load,"handleload);

    function handleload(_event: Event): void {
        console.log("Init");

        let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div#form");
        let slider: HTMLInputElement = <HTMLInputElement>document.querySelector("input#amount");

        form.addEventListener("change", handleChange);
        slider.addEventListener("input",displayAmount);

        displayOrder();
    }
    function handleChange(_event: Event): void {
        displayOrder();
    }
    function displayOrder(): void {
        // let inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
        // console.log(inputs);
        let price: number = 0;
        let order: HTMLDivElement = <HTMLDivElement>document.querySelector("div#order")
        order.innerHTML = "";


        let formData: FormData = new FormData(<HTMLFormElement>document.querySelector("form"));

        console.group("Order");
        for (let entry of formData) {
            console.log(entry);
            let selector: string = "[value='" + entry[1] + "']"; // "[name='" + entry[0] + " '][value='" + entry]
        }
    }
}