import { MenuController } from "./controllers/menu/menuController.js";
import { LoginController } from "./controllers/login/logincontroller.js";


export class GameManager {
    constructor() {
        var navigationContainer = document.getElementById('navigationContainer');
        var contentContainer = document.getElementById('contentContainer');
        //this.menuController = new MenuController(this, contentContainer);//relacion de composicion/GameManager crea un nuevo MenuController        
        this.loginController = new LoginController(this, contentContainer);
    }
}