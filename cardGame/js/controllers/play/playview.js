import { View } from "../view.js";

export class PlayView extends View {
    constructor(ToMenuController, PcontentContainer) {
        super(ToMenuController, PcontentContainer);
        this.btnContainer.className = 'playView';

    }

    showCards(cards) {
        console.log(cards);
    }
} 