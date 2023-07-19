import { Controller } from "../controller.js";
import { PlayService } from "./playservice.js";
import { PlayView } from "./playview.js";

export class PlayController extends Controller {
    constructor(toGameManager, PcontentContainer) {
        super(toGameManager)
        this.view = new PlayView(this, PcontentContainer);
        this.cards = [];
        this.service = new PlayService(this);
        this.service.getCards();

    }

    showCards(cards) {
        //TODO
        this.view.showCards(cards);
    }
}



