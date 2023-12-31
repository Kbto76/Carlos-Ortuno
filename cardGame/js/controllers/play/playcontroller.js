import { Controller } from "../controller.js";
import { PlayService } from "./playService.js";
import { PlayView } from "./playView.js";

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
        this.ResetTimer();
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

        this.clicks += 1;
        this.view.updateHUD(this.clicks, this.time);

        var showCardevent = new CustomEvent('show-card-on-selected', {
            detail: {
                test: 9,
            },
            bubbles: true,
            cancelable: true,
            composed: false,
        })
        window.dispatchEvent(showCardevent);

        var cardSelected1 = null;
        var cardSelected2 = null;

        this.cards.forEach(card => {
            if (!card.isDiscovered) {
                if (cardSelected1 === null && card.isSelected) {
                    cardSelected1 = card;
                } else if (cardSelected2 === null && card.isSelected) {
                    cardSelected2 = card;
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
                window.dispatchEvent(event);

                if (this.checkGameComplete()) {
                    var score = this.clicks + this.time;
                    this.service.sendScore(score, this.clicks, this.time, this.gameManager.username);
                    this.ResetTimer();
                    Swal.fire({
                        title: 'NICE WORK!',
                        text: 'YOU BEAT THE GAME',
                        icon: 'success',
                        timer: 2000,
                        onOpen: function () {
                            swal.showLoading()
                        }
                    }).then(
                        function () { },
                        function (dismiss) {
                            if (dismiss === 'timer') {
                                console.log('Desplegable cerrada')
                            }
                        }
                    )
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
                    window.dispatchEvent(event);
                    window.clearTimeout(this.hiddenTimer);
                    this.hiddenTimer = null;

                }, 750);
            }
        }
    }

    ResetTimer() {
        window.clearInterval(this.timer);
        this.timer = null;
    }

    checkGameComplete() {
        for (let i = 0; i < this.cards.length; i++) {
            const card = this.cards[i];
            if (!card.isDiscovered) {
                return false;
            }
        }
        return true;
    }
}




