import { createDiv } from "../libs/html.js";
import { View } from "./view.js";

export class CardView extends View {
    constructor(parent, card) {
        super(parent);
        this.card = card;
        this.container.className = 'cardView-container';
        createDiv({ innerHTML: card.icon, className: 'cardView cardView-hidden' }, this.container);
    }
}