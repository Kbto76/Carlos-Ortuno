import { createDiv } from "../libs/html.js";

export class View {
    constructor(parent) {
        this.contentContainer = parent;
        this.container = createDiv({ className: 'empty' }, this.contentContainer);
    }
}