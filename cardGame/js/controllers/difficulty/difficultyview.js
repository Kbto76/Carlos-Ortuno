import { View } from "../view.js";

export class DifficultyView extends View {
    constructor(ToMenuController, PcontentContainer) {
        super(ToMenuController, PcontentContainer);
        this.btnContainer.className = 'difficultyView';
        var loginBtn = document.createElement('div');
        this.btnContainer.appendChild(loginBtn);
        loginBtn.innerHTML = 'LOW';
        loginBtn.className = 'game-Button';

        var loginBtn = document.createElement('div');
        this.btnContainer.appendChild(loginBtn);
        loginBtn.innerHTML = 'MDIUM';
        loginBtn.className = 'game-Button';

        var loginBtn = document.createElement('div');
        this.btnContainer.appendChild(loginBtn);
        loginBtn.innerHTML = 'HIGH';
        loginBtn.className = 'game-Button';
    }



} 