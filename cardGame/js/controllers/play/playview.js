import { createDiv } from "../../libs/html.js";
import { View } from "../view.js";

export class PlayView extends View {
    constructor(ToMenuController, PcontentContainer) {
        super(ToMenuController, PcontentContainer);
        this.btnContainer.className = 'playView';
        this.cardsContainer = createDiv({ className: 'playView-cardsContainer' }, this.btnContainer);


    }

    showCards(cards) {
        this.cardsContainer.innerHTML = '';
        console.log(cards);
        cards.forEach(card => {
            createDiv({ innerHTML: card.icon, className: 'card' }, this.cardsContainer);
        });
    }
} 