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

        this.timer = null;
        this.time = 0;
        this.clicks = 0;

        // this.view.container.addEventListener('card-selected', this.conCardSelected.bind(this));
        window.addEventListener('card-selected', (event) => {
            this.onCardSelected();
        });

        this.hiddenTimer = null;
    }

    showCards(cards) {
        this.cards = cards;
        this.view.showCards(cards);
        this.timer = window.setInterval(this.gameTick.bind(this), 1000);
    }

    resetGame() {
        window.clearTimeout(this.hiddenTimer);
        window.clearInterval(this.timer);
        this.timer = null;
        this.time = 0;
        this.clicks = 0;
        this.service.getCards(this.gameManager.difficulty, this.gameManager.theme);
        this.view.updateHUD(this.clicks, this.time);
    }

    gameTick() {
        this.time += 1;
        this.view.updateHUD(this.clicks, this.time);
    }

    onCardSelected() {
        console.log(this.cards);

        if (this.hiddenTimer !== null) return;

        var ShowCardevent = new CustomEvent('show-card-on-selected', {
            detail: {
                test: 9,
            },
            bubbles: true,
            cancelable: true,
            composed: false,
        })
        this.view.contentContainer.dispatchEvent(ShowCardevent);

        var cardSelected1 = null;
        var cardSelected2 = null;

        this.cards.forEach(card => {
            if (!card.isDiscovered) {
                if (cardSelected1 === null && card.isSelected) {
                    cardSelected1 = card;
                    console.log('card1 ' + cardSelected1.icon)
                } else if (cardSelected2 === null && card.isSelected) {
                    cardSelected2 = card;
                    console.log('card2 ' + cardSelected2.icon)
                }
            }

        });

        if (cardSelected1 !== null && cardSelected2 !== null) {
            if (cardSelected1.id === cardSelected2.id) {
                var event = new CustomEvent('show-card-on-discovered', {
                    detail: {
                        test: 9,
                    },
                    bubbles: true,
                    cancelable: true,
                    composed: false,
                });
                this.view.contentContainer.dispatchEvent(event);

                if (this.checkGameComplete()) {
                    window.clearInterval(this.timer);
                    this.timer = null;
                    console.log('GAME COMPLETED!');
                }

            } else {
                this.hiddenTimer = window.setTimeout(() => {
                    var event = new CustomEvent('show-selected-card', {
                        detail: {
                            test: 9,
                        },
                        bubbles: true,
                        cancelable: true,
                        composed: false,
                    });
                    this.view.container.dispatchEvent(event);
                    window.clearTimeout(this.hiddenTimer);
                    this.hiddenTimer = null;

                }, 750);
            }
        }

    }
    checkGameComplete() {
        for (let i = 0; i < this.cards.length; i++) {
            const card = this.cards[1];
            if (card.isDiscovered) {
                return true
            }
            return false
        }
    }


}




