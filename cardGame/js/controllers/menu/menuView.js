import { View } from "../view.js";

export class MenuView extends View {//por aca se hace la conexion al archivo View
    constructor(ToMenuController, PcontentContainer) {
        super(ToMenuController, PcontentContainer);
        this.btnContainer.className = 'menuView';//aqui le damos estilo a container donde van los botones
        // console.log(ToMenuController);
        // console.log(PcontentContainer);


        // var title = document.createElement('p');
        // title.innerHTML = 'Menu';
        // this.container.appendChild(title);

        var loginBtn = document.createElement('div');
        this.btnContainer.appendChild(loginBtn);
        loginBtn.innerHTML = 'Login';
        loginBtn.className = 'game-Button';

        var playBtn = document.createElement('div');
        this.btnContainer.appendChild(playBtn);
        playBtn.innerHTML = 'Play';
        playBtn.className = 'game-Button';

        var scoresBtn = document.createElement('div');
        this.btnContainer.appendChild(scoresBtn);
        scoresBtn.innerHTML = 'Scores';
        scoresBtn.className = 'game-Button';

        var difficultyBtn = document.createElement('div');
        this.btnContainer.appendChild(difficultyBtn);
        difficultyBtn.innerHTML = 'Difficulty';
        difficultyBtn.className = 'game-Button';

        var themesBtn = document.createElement('div');
        this.btnContainer.appendChild(themesBtn);
        themesBtn.innerHTML = 'Themes';
        themesBtn.className = 'game-Button';

        var creditsBtn = document.createElement('div');
        this.btnContainer.appendChild(creditsBtn);
        creditsBtn.innerHTML = 'Credits';
        creditsBtn.className = 'game-Button';




    }
} 