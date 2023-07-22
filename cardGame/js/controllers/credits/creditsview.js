import { ControllerView } from "../controllerview.js";

export class CreditsView extends ControllerView {
    constructor(ToMenuController, PcontentContainer) {
        super(ToMenuController, PcontentContainer);
        this.btnContainer.className = 'creditsView';
        var loginBtn = document.createElement('div');
        this.btnContainer.appendChild(loginBtn);
        loginBtn.innerHTML = 'Credits';
        loginBtn.className = 'game-Button';
    }
} 