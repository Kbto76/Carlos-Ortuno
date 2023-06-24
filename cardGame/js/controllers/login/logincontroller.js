import { Controller } from "../controller.js";//
import { LoginView } from "./loginView.js";

export class LoginController extends Controller {//relacion de Herencia de MenuController con controller
    constructor(toGameManager, PcontentContainer) {//contentContainer manda la data a al menu que se ve enla pantalla
        super(toGameManager)
        this.view = new LoginView(this, PcontentContainer);//relacion de composicion de MenuController con MenuView         
    }

}



