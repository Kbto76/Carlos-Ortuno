import { createDiv, createP } from "../../libs/html.js";
import { ControllerView } from "../controllerview.js";

export class PlayView extends ControllerView {
    constructor(ToMenuController, PcontentContainer) {
        super(ToMenuController, PcontentContainer);
        this.btnContainer.className = 'playView';
        this.hudcontainer = createDiv({ className: 'playView-hudcontainer' }, this.btnContainer);
        this.cardsContainer = createDiv({ className: 'playView-cardsContainer' }, this.btnContainer);

        this.clicksText = createP({ innerHTML: 'Clicks: 0', className: 'playView-text' }, this.hudcontainer);
        this.timerText = createP({ innerHTML: 'Time: 0', className: 'playView-text' }, this.hudcontainer);
        this.resetBtn = createDiv({ innerHTML: 'Reset', className: 'playView-resetBtn', onclick: this.onResetBtn.bind(this) }, this.hudcontainer);

    }

    showCards(cards) {
        this.cardsContainer.innerHTML = '';
        cards.forEach(card => {
            var container = createDiv({ className: 'card-container' }, this.cardsContainer);
            createDiv({ innerHTML: card.icon, className: 'card card-hidden' }, container);
        });
    }

    onResetBtn() {
        this.controller.resetGame();
    }

    updateHUD(clicks, time) {
        this.clicksText.innerHTML = `Clicks: ${clicks}`;
        this.timerText.innerHTML = `Time: ${time}`;
    }
} 