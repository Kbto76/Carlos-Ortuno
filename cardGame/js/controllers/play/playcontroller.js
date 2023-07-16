import { Controller } from "../controller.js";
import { PlayView } from "./playview.js";

export class PlayController extends Controller {
    constructor(toGameManager, PcontentContainer) {
        super(toGameManager)
        this.view = new PlayView(this, PcontentContainer);
    }

}



