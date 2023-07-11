import { MenuController } from "./controllers/menu/menucontroller.js";
import { LoginController } from "./controllers/login/logincontroller.js";
import { PlayController } from "./controllers/play/playcontroller.js";
import { ScoresController } from "./controllers/scores/scorescontroller.js";
import { DifficultyController } from "./controllers/difficulty/difficultycontroller.js";
import { ThemesController } from "./controllers/themes/themescontroller.js";
import { CreditsController } from "./controllers/credits/creditscontroller.js";
import { CREDITS_STATE, DIFFICULTY_STATE, LOGIN_STATE, MENU_STATE, PLAY_STATE, SCORES_STATE, THEMES_STATE } from "./libs/constants.js";



export class GameManager {
    constructor() {
        this.controller = null;
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
        this.backBtn.onclick = this.goto.bind(this, MENU_STATE);

        this.homeController = new MenuController(this, this.contentContainer);
        this.presenting(MENU_STATE);
        //console.log(gsap); 

        this.contentContainer.addEventListener('menu-button-click', (event) => {
            //console.dir(event.detail.state);
            this.presenting(event.detail.state)
        })

        this.contentContainer.addEventListener('hide-complete', (event) => {
            this.presenting(event.detail.state)
        })
    }

    presenting(state) {
        if (this.controller !== null) {
            this.controller.delete();
            this.controller = null;
        }

        this.backBtn.classList.remove('hidden');
        switch (state) {

            case MENU_STATE:
                this.backBtn.classList.add('hidden');
                this.navTitle.innerHTML = 'MENU';
                //this.controller = new MenuController(this, this.contentContainer);
                break;
            case LOGIN_STATE:
                this.navTitle.innerHTML = 'LOGIN';
                this.controller = new LoginController(this, this.contentContainer);
                break;
            case PLAY_STATE:
                this.navTitle.innerHTML = 'PLAY';
                this.controller = new PlayController(this, this.contentContainer);
                break;
            case SCORES_STATE:
                this.navTitle.innerHTML = 'SCORES';
                this.controller = new ScoresController(this, this.contentContainer);
                break;
            case DIFFICULTY_STATE:
                this.navTitle.innerHTML = 'DIFFICULTY';
                this.controller = new DifficultyController(this, this.contentContainer);
                break;
            case THEMES_STATE:
                this.navTitle.innerHTML = 'THEMES';
                this.controller = new ThemesController(this, this.contentContainer);
                break;
            case CREDITS_STATE:
                this.navTitle.innerHTML = 'CREDITS';
                this.controller = new CreditsController(this, this.contentContainer);
                break;
        }
    }

    goto(state) {

        if (this.controller !== null) {
            this.controller.hide(state);
        } else {
            this.presenting(state);
        }
    }
}