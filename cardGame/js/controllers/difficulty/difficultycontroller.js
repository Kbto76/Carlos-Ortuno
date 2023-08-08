import { Controller } from "../controller.js";//
import { DifficultyView } from "./difficultyView.js";

export class DifficultyController extends Controller {
    constructor(toGameManager, PcontentContainer) {
        super(toGameManager)
        this.view = new DifficultyView(this, PcontentContainer);
    }

}



