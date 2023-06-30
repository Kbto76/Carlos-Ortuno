import { View } from "../view.js";

export class LoginView extends View {//por aca se hace la conexion al archivo View
    constructor(ToMenuController, PcontentContainer) {
        super(ToMenuController, PcontentContainer);
        this.btnContainer.className = 'loginView';//aqui le damos estilo a container donde van los botones 

        var loginTxt = document.createElement('p');
        var textBox = document.createElement('input');
        this.btnContainer.appendChild(loginTxt);
        this.btnContainer.appendChild(textBox);
        loginTxt.innerHTML = 'Enter Username to play';
        loginTxt.className = 'login-txt';
        textBox.className = 'login-box-txt';

        var loginBtn = document.createElement('div');
        this.btnContainer.appendChild(loginBtn);
        loginBtn.innerHTML = 'OK';
        loginBtn.className = 'OK-Button';

        //this.btnContainer.style.transform = 'translateX(300px)';


    }
} 