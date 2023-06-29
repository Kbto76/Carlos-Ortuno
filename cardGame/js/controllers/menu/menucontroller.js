import { Controller } from "../controller.js";//
import { MenuView } from "./menuview.js";

export class MenuController extends Controller {//relacion de Herencia de MenuController con controller
    constructor(toGameManager, PcontentContainer) {//contentContainer manda la data a al menu que se ve enla pantalla
        super(toGameManager)
        this.view = new MenuView(this, PcontentContainer);//relacion de composicion de MenuController con MenuView         
    }

    goto(state) {
        this.gameManager.goto(state);
        console.log(state);
    }

}



