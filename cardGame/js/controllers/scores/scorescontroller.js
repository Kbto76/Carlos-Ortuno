import { Controller } from "../controller.js";//
import { ScoresView } from "./scoresview.js";

export class ScoresController extends Controller {//relacion de Herencia de MenuController con controller
    constructor(toGameManager, PcontentContainer) {//contentContainer manda la data a al menu que se ve enla pantalla
        super(toGameManager)
        this.view = new ScoresView(this, PcontentContainer);//relacion de composicion de MenuController con MenuView         
    }

}



