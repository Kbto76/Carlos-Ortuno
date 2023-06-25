import { View } from "../view.js";

export class ThemesView extends View {//por aca se hace la conexion al archivo View
    constructor(ToMenuController, PcontentContainer) {
        super(ToMenuController, PcontentContainer);
        this.btnContainer.className = 'themesView';//aqui le damos estilo a container donde van los botones     
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