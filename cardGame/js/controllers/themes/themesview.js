import { THEME_ANIMALS, THEME_FACES, THEME_FOOD } from "../../libs/constants.js";
import { createDiv } from "../../libs/html.js";
import { ControllerView } from "../controllerView.js";

export class ThemesView extends ControllerView {
    constructor(ToMenuController, PcontentContainer) {
        super(ToMenuController, PcontentContainer);
        this.btnContainer.className = 'themesView';

        createDiv({ innerHTML: 'FOOD', className: 'game-Button', onclick: this.onButtonClick.bind(this, THEME_FOOD) }, this.btnContainer);
        createDiv({ innerHTML: 'FACES', className: 'game-Button', onclick: this.onButtonClick.bind(this, THEME_FACES) }, this.btnContainer);
        createDiv({ innerHTML: 'ANIMALS', className: 'game-Button', onclick: this.onButtonClick.bind(this, THEME_ANIMALS) }, this.btnContainer);
    }
    onButtonClick(theme) {
        var event = new CustomEvent('save-theme', {
            detail: {
                theme: theme,
            },
            bubbles: true,
            cancelable: true,
            composed: false,
        })
        window.dispatchEvent(event);
    }

} 