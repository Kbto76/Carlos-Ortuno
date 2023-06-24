import { View } from "../view.js";

export class MenuView extends View {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'menuView';

        // var title = document.createElement('p');
        // title.innerHTML = 'Menu';
        // this.container.appendChild(title);

        var loginBtn = document.createElement('div');
        this.container.appendChild(loginBtn);
        loginBtn.innerHTML = 'Login';
        loginBtn.className = 'game-Button';

        var playBtn = document.createElement('div');
        this.container.appendChild(playBtn);
        playBtn.innerHTML = 'Play';
        playBtn.className = 'game-Button';

        var scoresBtn = document.createElement('div');
        this.container.appendChild(scoresBtn);
        scoresBtn.innerHTML = 'Scores';
        scoresBtn.className = 'game-Button';

        var difficultyBtn = document.createElement('div');
        this.container.appendChild(difficultyBtn);
        difficultyBtn.innerHTML = 'Difficulty';
        difficultyBtn.className = 'game-Button';

        var themesBtn = document.createElement('div');
        this.container.appendChild(themesBtn);
        themesBtn.innerHTML = 'Themes';
        themesBtn.className = 'game-Button';

        var creditsBtn = document.createElement('div');
        this.container.appendChild(creditsBtn);
        creditsBtn.innerHTML = 'Credits';
        creditsBtn.className = 'game-Button';




    }
} 