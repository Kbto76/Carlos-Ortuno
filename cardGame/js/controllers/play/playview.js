import { View } from "../view.js";

export class PlayView extends View {
    constructor(ToMenuController, PcontentContainer) {
        super(ToMenuController, PcontentContainer);
        this.btnContainer.className = 'playView';
        var hudCounter = document.createElement('div');
        var clicks = document.createElement('p');
        var timer = document.createElement('p');
        var resetBtn = document.createElement('div');
        this.btnContainer.appendChild(hudCounter);
        clicks.innerHTML = 'clikcs: 20';
        timer.innerHTML = 'Timer: 59min';
        resetBtn.innerHTML = 'reset';
        hudCounter.classList = 'hud-counter';
        hudCounter.appendChild(clicks);
        hudCounter.appendChild(timer);
        hudCounter.appendChild(resetBtn);
        resetBtn.classList = 'reset-btn';
        var picture = document.createElement('img');
        picture.src = "picture.png";
        var pictureSpot = document.createElement('div');
        this.btnContainer.appendChild(pictureSpot);
        pictureSpot.appendChild(picture);
        picture.classList = 'picture';





    }
} 