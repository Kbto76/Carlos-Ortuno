import { createP } from "../../libs/html.js";
import { ControllerView } from "../controllerView.js";

export class CreditsView extends ControllerView {
    constructor(ToMenuController, PcontentContainer) {
        super(ToMenuController, PcontentContainer);
        this.btnContainer.className = 'creditsView';
        var loginBtn = document.createElement('div');
        this.btnContainer.appendChild(loginBtn);
        loginBtn.innerHTML = 'Echo por: carlos Ortuño. <br> Agosto 2023. <br>Cenfotec';
        // loginBtn.className = 'game-Button';
        // // createP({ innerHTML: 'Echo por: carlos Ortuño. Agosto 2023. Universidad cenfotec', className: 'game-Button' }, this.btnContainer)
    }
} 