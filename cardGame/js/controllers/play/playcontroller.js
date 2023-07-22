import { Controller } from "../controller.js";
import { PlayService } from "./playservice.js";
import { PlayView } from "./playview.js";

export class PlayController extends Controller {
    constructor(toGameManager, PcontentContainer) {
        super(toGameManager)
        this.view = new PlayView(this, PcontentContainer);
        this.cards = null;
        this.service = new PlayService(this);
        this.service.getCards(this.gameManager.difficulty, this.gameManager.theme);

    }

    showCards(cards) {
        this.cards = cards;
        this.view.showCards(cards);
    }
}



