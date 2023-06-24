import { Controller } from "../controller.js";//
import { PlayView } from "./playview.js";

export class PlayController extends Controller {//relacion de Herencia de MenuController con controller
    constructor(toGameManager, PcontentContainer) {//contentContainer manda la data a al menu que se ve enla pantalla
        super(toGameManager)
        this.view = new PlayView(this, PcontentContainer);//relacion de composicion de MenuController con MenuView         
    }

}



