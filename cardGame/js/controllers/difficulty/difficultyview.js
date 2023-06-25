import { View } from "../view.js";

export class DifficultyView extends View {//por aca se hace la conexion al archivo View
    constructor(ToMenuController, PcontentContainer) {
        super(ToMenuController, PcontentContainer);
        this.btnContainer.className = 'difficultyView';//aqui le damos estilo a container donde van los botones     
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