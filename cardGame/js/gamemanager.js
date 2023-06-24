import { MenuController } from "./controllers/menu/menuController.js";


export class GameManager {
    constructor() {
        var navigationContainer = document.getElementById('navigationContainer');
        var contentContainer = document.getElementById('contentContainer');

        this.Controller = new MenuController(this, contentContainer);//relacion de composicion/GameManager crea un nuevo MenuController
    }
}