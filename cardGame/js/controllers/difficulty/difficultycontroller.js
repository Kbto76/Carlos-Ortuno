import { Controller } from "../controller.js";//
import { DifficultyView } from "./difficultyview.js";

export class DifficultyController extends Controller {
    constructor(toGameManager, PcontentContainer) {
        super(toGameManager)
        this.view = new DifficultyView(this, PcontentContainer);
    }

}



