
import { ControllerView } from "../controllerview.js";
import { ScoreView } from "./scoreview.js";

export class ScoresView extends ControllerView {
    constructor(ToMenuController, PcontentContainer) {
        super(ToMenuController, PcontentContainer);
        this.btnContainer.className = 'scoresView';
    }

    showScores(scores) {
        scores.forEach(score => {
            var scoreView = new ScoreView(this.btnContainer, score);
        });
    }
}

