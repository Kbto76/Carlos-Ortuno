import { Controller } from "../controller.js";//
import { ThemesView } from "./themesview.js";

export class ThemesController extends Controller {//relacion de Herencia de MenuController con controller
    constructor(toGameManager, PcontentContainer) {//contentContainer manda la data a al menu que se ve enla pantalla
        super(toGameManager)
        this.view = new ThemesView(this, PcontentContainer);//relacion de composicion de MenuController con MenuView         
    }
}



