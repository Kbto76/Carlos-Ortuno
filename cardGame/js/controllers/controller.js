export class Controller {
    constructor(gameManager) {
        this.gameManager = gameManager;//relacion de agregacion de Controller con gameManager / //por e lmomento no se usa
        this.view = null;
        this.service = null;
        this.model = null;
    }

    delete() {
        this.view.delete();
    }

    hide(state) {
        this.view.hide(state);
    }
}