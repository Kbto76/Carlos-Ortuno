import { Controller } from "../controller.js";//
import { CreditsView } from "./creditsview.js";

export class CreditsController extends Controller {//relacion de Herencia de MenuController con controller
    constructor(toGameManager, PcontentContainer) {//contentContainer manda la data a al menu que se ve enla pantalla
        super(toGameManager)
        this.view = new CreditsView(this, PcontentContainer);//relacion de composicion de MenuController con MenuView         
    }

}


