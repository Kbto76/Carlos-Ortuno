import { MenuController } from "./controllers/menu/menucontroller.js";
import { LoginController } from "./controllers/login/logincontroller.js";
import { PlayController } from "./controllers/play/playcontroller.js";
import { ScoresController } from "./controllers/scores/scorescontroller.js";
import { DifficultyController } from "./controllers/difficulty/difficultycontroller.js";
import { ThemesController } from "./controllers/themes/themescontroller.js";
import { CreditsController } from "./controllers/credits/creditscontroller.js";
import { CREDITS_STATE, DIFFICULTY_MEDIUM, DIFFICULTY_STATE, LOGIN_STATE, MENU_STATE, PLAY_STATE, SCORES_STATE, THEMES_STATE, THEME_FOOD } from "./libs/constants.js";



export class GameManager {
    constructor() {
        this.difficulty = DIFFICULTY_MEDIUM;
        this.theme = THEME_FOOD;

        this.controller = null;
        this.navigationContainer = document.getElementById('navigationContainer');
        this.backBtn = document.getElementById('nav-back-btn');
        this.navTitle = document.getElementById('nav-title');
        this.contentContainer = document.getElementById('contentContainer');
        this.backBtn.onclick = this.goto.bind(this, MENU_STATE);
        this.homeController = new MenuController(this, this.contentContainer);



        this.contentContainer.addEventListener('home-button-click', (event) => {
            this.presenting(event.detail.state);
        });

        this.contentContainer.addEventListener('hide-complete', (Event) => {
            this.presenting(event.detail.state);
        });

        this.contentContainer.addEventListener('save-difficulty', (event) => {
            this.difficulty = event.detail.difficulty;
            this.saveDifficulty();
        });

        this.contentContainer.addEventListener('save-theme', (event) => {
            this.theme = event.detail.theme;
            this.saveTheme();
        });

        this.contentContainer.addEventListener('username-entered', (event) => {
            this.username = event.detail.username;
            this.saveUsename();
            this.goto(MENU_STATE)
        })

        this.loadDifficulty();
        this.loadTheme();
        this.loadUsername();

        this.presenting(PLAY_STATE);
        //this.saveDifficulty();
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

    loadDifficulty() {
        if (localStorage.getItem('difficulty')) {
            this.difficulty = localStorage.getItem('difficulty');
        }
    }

    saveDifficulty() {
        localStorage.setItem('difficulty', this.difficulty);
    }

    loadTheme() {
        if (localStorage.getItem('theme')) {
            this.theme = localStorage.getItem('theme');
        }
    }

    saveTheme() {
        localStorage.setItem('theme', this.theme);
    }

    saveUsename() {
        localStorage.setItem('username', this.username);

    }

    loadUsername() {
        if (localStorage.getItem('username')) {
            this.username = localStorage.getItem('username');
            //console.log('USERNAME: ', this.username);
            //alert('USERNAME: ' + this.username);
        }
    }
}