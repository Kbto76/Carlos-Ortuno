import { Controller } from "../controller.js";
import { MenuView } from "./menuview.js";

export class MenuController extends Controller {
    constructor(toGameManager, PcontentContainer) {
        super(toGameManager)
        this.view = new MenuView(this, PcontentContainer);
    }

    goto(state) {
        this.gameManager.goto(state);
        console.log(state);
    }

}



