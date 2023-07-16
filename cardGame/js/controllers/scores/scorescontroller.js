import { Controller } from "../controller.js";
import { ScoresView } from "./scoresview.js";

export class ScoresController extends Controller {
    constructor(toGameManager, PcontentContainer) {
        super(toGameManager)
        this.view = new ScoresView(this, PcontentContainer);
    }

}



