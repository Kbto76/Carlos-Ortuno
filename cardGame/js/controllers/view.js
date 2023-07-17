import { createDiv } from "../libs/html.js";

export class View {
    constructor(controller, parent) {
        this.controller = controller;
        this.contentContainer = parent;
        this.emptyContainer = createDiv({ className: 'empty' }, this.contentContainer);
        this.fadeContainer = createDiv({ className: 'fade' }, this.emptyContainer)
        this.btnContainer = createDiv({}, this.emptyContainer);
        this.btnContainer.style.transform = `translateX(${window.innerWidth}px)`;
        //this.callback = null;
        this.show();
    }

    delete() {
        this.emptyContainer.removeChild(this.btnContainer);
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
        this.emptyContainer.dispatchEvent(event);
    }
}