import { createDiv } from "../libs/html.js";

export class ControllerView {
    constructor(controller, parent) {
        this.controller = controller;
        this.contentContainer = parent;
        this.container = createDiv({ className: 'empty' }, this.contentContainer);
        this.fadeContainer = createDiv({ className: 'ControllerView-fadeContainer' }, this.container)
        this.btnContainer = createDiv({ className: 'ControllerView-container' }, this.container);
        this.btnContainer.style.transform = `translateX(${window.innerWidth}px)`;
        //this.callback = null;
        this.show();
    }

    delete() {
        this.container.removeChild(this.btnContainer);
    }

    show() {
        gsap.to(this.fadeContainer, { opacity: 0.5, duration: 1 });
        gsap.to(this.btnContainer, { x: 0, duration: 0.75, ease: "expo.out" });

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
        this.container.dispatchEvent(event);
    }
}