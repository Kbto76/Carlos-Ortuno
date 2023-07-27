import { createDiv } from "../libs/html.js";

export class View {
    constructor(parent) {
        this.parent = parent;
        this.container = createDiv({ className: 'empty' }, this.parent);
    }
}

