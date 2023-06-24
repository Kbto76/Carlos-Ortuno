import { Controller } from "../controller.js";//
import { DifficultyView } from "./difficultyview.js";

export class DifficultyController extends Controller {//relacion de Herencia de MenuController con controller
    constructor(toGameManager, PcontentContainer) {//contentContainer manda la data a al menu que se ve enla pantalla
        super(toGameManager)
        this.view = new DifficultyView(this, PcontentContainer);//relacion de composicion de MenuController con MenuView         
    }

}



