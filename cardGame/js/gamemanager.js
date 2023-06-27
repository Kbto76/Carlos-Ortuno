import { MenuController } from "./controllers/menu/menuController.js";
import { LoginController } from "./controllers/login/logincontroller.js";
import { PlayController } from "./controllers/play/playcontroller.js";
import { ScoresController } from "./controllers/scores/scorescontroller.js";
import { DifficultyController } from "./controllers/difficulty/difficultycontroller.js";
import { ThemesController } from "./controllers/themes/themescontroller.js";
import { CreditsController } from "./controllers/credits/creditscontroller.js";



export class GameManager {
    constructor() {
        var navigationContainer = document.getElementById('navigationContainer');
        this.backBtn = document.getElementById('nav-back-btn');
        this.navTitle = document.getElementById('nav-title');
        var contentContainer = document.getElementById('contentContainer');
        //this.menuController = new MenuController(this, contentContainer);//relacion de composicion/GameManager crea un nuevo MenuController        
        //this.loginController = new LoginController(this, contentContainer);
        //this.playController = new PlayController(this, contentContainer);
        //this.scoresController = new ScoresController(this, contentContainer);
        //this.difficultyController = new DifficultyController(this, contentContainer);
        //this.themesController = new ThemesController(this, contentContainer);
        //this.creditsController = new CreditsController(this, contentContainer);
        this.goto(2);

    }

    goto(controllerID) {
        switch (controllerID) {
            case 1:
                this.navTitle.innerHTML = 'MENU';
                this.menuController = new MenuController(this, contentContainer);
                break;
            case 2:
                this.navTitle.innerHTML = 'LOGIN';
                this.loginController = new LoginController(this, contentContainer);
                break;
            case 3:
                this.navTitle.innerHTML = 'PLAY';
                this.playController = new PlayController(this, contentContainer);
                break;
            case 4:
                this.navTitle.innerHTML = 'SCORES';
                this.scoresController = new ScoresController(this, contentContainer);
                break;
            case 5:
                this.navTitle.innerHTML = 'DIFFICULTY';
                this.difficultyController = new DifficultyController(this, contentContainer);
                break;
            case 6:
                this.navTitle.innerHTML = 'THEMES';
                this.themesController = new ThemesController(this, contentContainer);
                break;
            case 7:
                this.navTitle.innerHTML = 'CREDITS';
                this.creditsController = new CreditsController(this, contentContainer);
                break;
        }
    }
}