import { Controller } from "../controller.js";//
import { CreditsView } from "./creditsView.js";

export class CreditsController extends Controller {
    constructor(toGameManager, PcontentContainer) {
        super(toGameManager)
        this.view = new CreditsView(this, PcontentContainer);
    }

}



