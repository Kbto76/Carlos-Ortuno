import { DIFFICULTY_HIGH, DIFFICULTY_LOW, DIFFICULTY_MEDIUM } from "../../libs/constants.js";
import { createDiv } from "../../libs/html.js";
import { View } from "../view.js";

export class DifficultyView extends View {
    constructor(ToMenuController, PcontentContainer) {
        super(ToMenuController, PcontentContainer);
        this.btnContainer.className = 'difficultyView';

        createDiv({ innerHTML: 'LOW', className: 'game-Button', onclick: this.onButtonClick.bind(this, DIFFICULTY_LOW) }, this.btnContainer);
        createDiv({ innerHTML: 'MEDIUM', className: 'game-Button', onclick: this.onButtonClick.bind(this, DIFFICULTY_MEDIUM) }, this.btnContainer);
        createDiv({ innerHTML: 'HIGH', className: 'game-Button', onclick: this.onButtonClick.bind(this, DIFFICULTY_HIGH) }, this.btnContainer);
    }
    onButtonClick(difficulty) {
        var event = new CustomEvent('save-difficulty', {
            detail: {
                difficulty: difficulty,
            },
            bubbles: true,
            cancelable: true,
            composed: false,
        })
        this.contentContainer.dispatchEvent(event);
    }

} 