
import { ControllerView } from "../controllerView.js";
import { ScoreView } from "./scoreView.js";

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

