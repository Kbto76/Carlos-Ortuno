import { CREDITS_STATE, DIFFICULTY_STATE, LOGIN_STATE, PLAY_STATE, SCORES_STATE, THEMES_STATE } from "../../libs/constants.js";
import { createDiv, createP, } from "../../libs/html.js";
import { View } from "../view.js";

export class MenuView extends View {
    constructor(ToMenuController, PcontentContainer) {
        super(ToMenuController, PcontentContainer);
        this.btnContainer.className = 'menuView';
        var loginBtn = createDiv({ innerHTML: 'Login', className: 'game-Button', onclick: this.onButtonClick.bind(this, LOGIN_STATE) }, this.btnContainer);
        var playBtn = createDiv({ innerHTML: 'Play', className: 'game-Button', onclick: this.onButtonClick.bind(this, PLAY_STATE) }, this.btnContainer);
        var scoresBtn = createDiv({ innerHTML: 'Scores', className: 'game-Button', onclick: this.onButtonClick.bind(this, SCORES_STATE) }, this.btnContainer);
        var difficultyBtn = createDiv({ innerHTML: 'Difficulty', className: 'game-Button', onclick: this.onButtonClick.bind(this, DIFFICULTY_STATE) }, this.btnContainer);
        var themesBtn = createDiv({ innerHTML: 'Themes', className: 'game-Button', onclick: this.onButtonClick.bind(this, THEMES_STATE) }, this.btnContainer);
        var creditsBtn = createDiv({ innerHTML: 'Credits', className: 'game-Button', onclick: this.onButtonClick.bind(this, CREDITS_STATE) }, this.btnContainer);
    }

    onButtonClick(state) {
        var event = new CustomEvent('home-button-click', {
            detail: {
                state: state
            },
            bubbles: true,
            cancelable: true,
            composed: false,
        })
        this.contentContainer.dispatchEvent(event);
    }
} 