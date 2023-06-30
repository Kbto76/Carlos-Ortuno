import { createDiv } from "../libs/html.js";

export class View {
    constructor(controller, parent) {
        this.controller = controller; //por e lmomento no se usa
        this.contentContainer = parent;//view.js recoje la informacion desde menuView.js PcontentContainerm construye el boton delmenu y lo devuelve por el mismo PcontentContainer 
        this.btnContainer = createDiv({}, this.contentContainer);
        // this.btnContainer = document.createElement('div');
        // this.contentContainer.appendChild(this.btnContainer);
        this.btnContainer.style.transform = `translateX(${window.innerWidth}px)`;
        this.callback = null;
        this.show();
    }

    delete() {
        this.contentContainer.removeChild(this.btnContainer);
    }

    show() {
        gsap.to(this.btnContainer, { x: 0, duration: 0.75, ease: "expo.out" });
    }

    hide(callback, state) {
        this.callback = callback;
        gsap.to(this.btnContainer, { x: window.innerWidth, duration: 0.75, ease: "expo.in", onComplete: this.hideComplete.bind(this, state) });
    }

    hideComplete(state) {
        this.callback(state);

    }
}