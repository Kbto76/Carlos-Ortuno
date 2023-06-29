import { createDiv } from "../libs/html.js";

export class View {
    constructor(controller, parent) {
        this.controller = controller; //por e lmomento no se usa
        this.contentContainer = parent;//view.js recoje la informacion desde menuView.js PcontentContainerm construye el boton delmenu y lo devuelve por el mismo PcontentContainer 
        this.btnContainer = createDiv({}, this.contentContainer);
        // this.btnContainer = document.createElement('div');
        // this.contentContainer.appendChild(this.btnContainer);
        this.show();
    }

    delete() {
        this.contentContainer.removeChild(this.btnContainer);
    }

    show() {
        gsap.to(this.btnContainer, { x: 0, duration: 5 });
    }

    hide() {

    }
}