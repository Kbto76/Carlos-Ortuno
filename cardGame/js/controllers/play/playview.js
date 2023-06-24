import { View } from "../view.js";

export class PlayView extends View {//por aca se hace la conexion al archivo View
    constructor(ToMenuController, PcontentContainer) {
        super(ToMenuController, PcontentContainer);
        this.btnContainer.className = 'playView';//aqui le damos estilo a container donde van los botones

        var loginBtn = document.createElement('div');
        this.btnContainer.appendChild(loginBtn);
        loginBtn.innerHTML = 'Play';
        loginBtn.className = 'game-Button';
    }
} 