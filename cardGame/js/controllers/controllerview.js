import { createDiv } from "../libs/html.js";
import { View } from "../views/view.js";

export class ControllerView extends View {
    constructor(controller, parent) {
        super(parent)
        this.controller = controller;
        this.fadeContainer = createDiv({ className: 'ControllerView-fadeContainer' }, this.container)
        this.btnContainer = createDiv({ className: 'ControllerView-container' }, this.container);
        this.btnContainer.style.transform = `translateX(${window.innerWidth}px)`;
        this.show();
    }

    delete() {
        this.parent.removeChild(this.container);
    }

    show() {
        gsap.to(this.fadeContainer, { opacity: 0.5, duration: 1 });
        gsap.to(this.btnContainer, { x: 0, duration: 0.70, ease: "expo.out" });

    }

    hide(state) {
        gsap.to(this.fadeContainer, { opacity: 0.5, duration: 0.5, });
        this.fadeContainer.classList.add('hidden');
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
        window.dispatchEvent(event);
    }
}