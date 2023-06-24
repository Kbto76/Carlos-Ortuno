import { Controller } from "../controller.js";
import { MenuView } from "./menuView.js";

export class MenuController extends Controller {//relacion de Herencia de MenuController con controller
    constructor(toGameManager, PcontentContainer) {//contentContainer manda la data a al menu que se ve enla pantalla
        super(toGameManager)
        this.view = new MenuView(this, PcontentContainer);//relacion de composicion de MenuController con MenuView         console.log(toGameManager);
        console.log(PcontentContainer);
    }

}



