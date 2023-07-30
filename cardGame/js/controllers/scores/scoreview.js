import { createDiv, createP } from "../../libs/html.js";
import { View } from "../../views/view.js";

export class ScoreView extends View {
    constructor(parent, score) {
        super(parent);
        this.score = score;
        this.container.className = 'scoreView';
        var nameContainer = createDiv({ className: 'scoreView-nameContainer' }, this.container);
        var valuesContainer = createDiv({ className: 'scoreView-valuesContainer' }, this.container)

        var scoreContainer = createDiv({ className: 'scoreView-valueContainer' }, valuesContainer);
        var clicksContainer = createDiv({ className: 'scoreView-valueContainer' }, valuesContainer);
        var timeContainer = createDiv({ className: 'scoreView-valueContainer' }, valuesContainer);

        createP({ innerHTML: this.score.username }, nameContainer);
        createP({ innerHTML: 'SCORE' }, scoreContainer);
        createP({ innerHTML: this.score.score }, scoreContainer);
        createP({ innerHTML: 'CLICKS' }, clicksContainer);
        createP({ innerHTML: this.score.clicks }, clicksContainer);
        createP({ innerHTML: 'TIME' }, timeContainer);
        createP({ innerHTML: this.score.time }, timeContainer);
    }
}