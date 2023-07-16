import { View } from "../view.js";

export class ThemesView extends View {
    constructor(ToMenuController, PcontentContainer) {
        super(ToMenuController, PcontentContainer);
        this.btnContainer.className = 'themesView';
        var loginBtn = document.createElement('div');
        this.btnContainer.appendChild(loginBtn);
        loginBtn.innerHTML = 'FOOD';
        loginBtn.className = 'game-Button';

        var loginBtn = document.createElement('div');
        this.btnContainer.appendChild(loginBtn);
        loginBtn.innerHTML = 'FACES';
        loginBtn.className = 'game-Button';

        var loginBtn = document.createElement('div');
        this.btnContainer.appendChild(loginBtn);
        loginBtn.innerHTML = 'FLAGS';
        loginBtn.className = 'game-Button';
    }
} 