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
        createP({ innerHTML: 'SCORE', className: 'scoreView-value-title' }, scoreContainer);
        createP({ innerHTML: this.score.score, className: 'scoreView-value-description' }, scoreContainer);
        createP({ innerHTML: 'CLICKS', className: 'scoreView-value-title' }, clicksContainer);
        createP({ innerHTML: this.score.clicks, className: 'scoreView-value-description' }, clicksContainer);
        createP({ innerHTML: 'TIME', className: 'scoreView-value-title' }, timeContainer);
        createP({ innerHTML: this.score.time, className: 'scoreView-value-description' }, timeContainer);


    }
}