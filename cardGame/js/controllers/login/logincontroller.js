import { Controller } from "../controller.js";//
import { LoginView } from "./loginView.js";

export class LoginController extends Controller {
    constructor(toGameManager, PcontentContainer) {
        super(toGameManager)
        this.view = new LoginView(this, PcontentContainer);
    }

}



