import { Controller } from "../controller.js";
import { ScoresService } from "./scoresservice.js";
import { ScoresView } from "./scoresview.js";

export class ScoresController extends Controller {
    constructor(toGameManager, PcontentContainer) {
        super(toGameManager)
        this.view = new ScoresView(this, PcontentContainer);
        this.service = new ScoresService(this);
        this.service.getScores();
        this.scores = [];
    }


    showScores(scores) {
        this.scores = scores;
        this.view.showScores(this.scores);
    }
}




