import { createDiv, createInput, createP } from "../../libs/html.js";
import { ControllerView } from "../controllerView.js";

export class LoginView extends ControllerView {
    constructor(ToMenuController, PcontentContainer) {
        super(ToMenuController, PcontentContainer);
        this.btnContainer.className = 'loginView';
        var loginTxt2 = createP({ innerHTML: 'Enter Username to play', className: 'login-txt' }, this.btnContainer);
        this.usernameIn = createInput({ placeholder: 'Username', className: 'loginview-usernameIn' }, this.btnContainer);
        this.okBtn = createDiv({ innerHTML: 'OK', className: 'OK-Button', onclick: this.onOkBtn.bind(this) }, this.btnContainer);
    }
    onOkBtn() {
        var username = this.usernameIn.value;

        if (username !== '') {
            var event = new CustomEvent('username-entered', {
                detail: {
                    username: username,
                },
                bubbles: true,
                cancelable: true,
                composed: true,
            });
            window.dispatchEvent(event);
        } else {

        }
    }
} 