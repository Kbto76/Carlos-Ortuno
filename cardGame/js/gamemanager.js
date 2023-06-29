import { MenuController } from "./controllers/menu/menuController.js";
import { LoginController } from "./controllers/login/logincontroller.js";
import { PlayController } from "./controllers/play/playcontroller.js";
import { ScoresController } from "./controllers/scores/scorescontroller.js";
import { DifficultyController } from "./controllers/difficulty/difficultycontroller.js";
import { ThemesController } from "./controllers/themes/themescontroller.js";
import { CreditsController } from "./controllers/credits/creditscontroller.js";
import { CREDITS_STATE, DIFFICULTY_STATE, LOGIN_STATE, MENU_STATE, PLAY_STATE, SCORES_STATE, THEMES_STATE } from "./libs/constants.js";



export class GameManager {
    constructor() {
        this.navigationContainer = document.getElementById('navigationContainer');
        this.backBtn = document.getElementById('nav-back-btn');
        this.navTitle = document.getElementById('nav-title');
        this.contentContainer = document.getElementById('contentContainer');
        //this.menuController = new MenuController(this, contentContainer);//relacion de composicion/GameManager crea un nuevo MenuController        
        //this.loginController = new LoginController(this, contentContainer);
        //this.playController = new PlayController(this, contentContainer);
        //this.scoresController = new ScoresController(this, contentContainer);
        //this.difficultyController = new DifficultyController(this, contentContainer);
        //this.themesController = new ThemesController(this, contentContainer);
        //this.creditsController = new CreditsController(this, contentContainer);
        this.goto(MENU_STATE);

    }


    goto(state) {

        switch (state) {
            case MENU_STATE:
                this.backBtn.style.display = "none";
                this.navTitle.innerHTML = 'MENU';
                this.menuController = new MenuController(this, this.contentContainer);
                break;
            case LOGIN_STATE:
                this.navTitle.innerHTML = 'LOGIN';
                this.loginController = new LoginController(this, this.contentContainer);
                break;
            case PLAY_STATE:
                this.navTitle.innerHTML = 'PLAY';
                this.playController = new PlayController(this, this.contentContainer);
                break;
            case SCORES_STATE:
                this.navTitle.innerHTML = 'SCORES';
                this.scoresController = new ScoresController(this, this.contentContainer);
                break;
            case DIFFICULTY_STATE:
                this.navTitle.innerHTML = 'DIFFICULTY';
                this.difficultyController = new DifficultyController(this, this.contentContainer);
                break;
            case THEMES_STATE:
                this.navTitle.innerHTML = 'THEMES';
                this.themesController = new ThemesController(this, this.contentContainer);
                break;
            case CREDITS_STATE:
                this.navTitle.innerHTML = 'CREDITS';
                this.creditsController = new CreditsController(this, this.contentContainer);
                break;
        }
    }
}