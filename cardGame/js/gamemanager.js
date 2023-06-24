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
        var backBtn = document.getElementById('nav-back-btn');
        var navTitle = document.getElementById('nav-title');
        var contentContainer = document.getElementById('contentContainer');
        //this.menuController = new MenuController(this, contentContainer);//relacion de composicion/GameManager crea un nuevo MenuController        
        //this.loginController = new LoginController(this, contentContainer);
        //this.playController = new PlayController(this, contentContainer);
        //this.scoresController = new ScoresController(this, contentContainer);
        //this.difficultyController = new DifficultyController(this, contentContainer);
        //this.themesController = new ThemesController(this, contentContainer);
        //this.creditsController = new CreditsController(this, contentContainer);
        this.goto(1);
    }

    goto(controllerID) {
        switch (controllerID) {
            case 1:
                this.menuController = new MenuController(this, contentContainer);
                break;
            case 2:
                this.loginController = new LoginController(this, contentContainer);
                break;
            case 3:
                this.playController = new PlayController(this, contentContainer);
                break;
            case 4:
                this.scoresController = new ScoresController(this, contentContainer);
                break;
            case 5:
                this.difficultyController = new DifficultyController(this, contentContainer);
                break;
            case 6:
                this.themesController = new ThemesController(this, contentContainer);
                break;
            case 7:
                this.creditsController = new CreditsController(this, contentContainer);
                break;
        }
    }
}