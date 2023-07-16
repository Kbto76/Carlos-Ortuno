import { createDiv } from "../libs/html.js";

export class View {
    constructor(controller, parent) {
        this.controller = controller;
        this.contentContainer = parent;
        this.btnContainer = createDiv({}, this.contentContainer);
        this.btnContainer.style.transform = `translateX(${window.innerWidth}px)`;
        //this.callback = null;
        this.show();
    }

    delete() {
        this.contentContainer.removeChild(this.btnContainer);
    }

    show() {
        gsap.to(this.btnContainer, { x: 0, duration: 0.75, ease: "expo.out" });
    }

    hide(state) {
        //this.callback = callback;
        gsap.to(this.btnContainer, { x: window.innerWidth, duration: 0.75, ease: "expo.in", onComplete: this.hideComplete.bind(this, state) });
    }

    hideComplete(state) {
        var event = new CustomEvent('hide-complete', {
            detail: {
                state: state
            },
            bubbles: true,
            cancelable: true,
            composed: false,
        })
        //this.callback(state);
        this.contentContainer.dispatchEvent(event);
    }
}