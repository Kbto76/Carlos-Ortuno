import { Controller } from "../controller.js";
import { ThemesView } from "./themesView.js";

export class ThemesController extends Controller {
    constructor(toGameManager, PcontentContainer) {
        super(toGameManager)
        this.view = new ThemesView(this, PcontentContainer);
    }

}



