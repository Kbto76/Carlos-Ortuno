import { Card } from "../../models/cards.js";

export class PlayService {
    constructor(controller) {
        this.controller = controller;
    }
    getCards(difficulty, theme) {
        var cards = [];
        //var url = '../../../data/cards.json';
        //var url = 'https://us-central1-cenfoprojectsbackend.cloudfunctions.net/app/cards/8/type/flags'
        var url = `https://us-central1-cenfoprojectsbackend.cloudfunctions.net/app/cards/${difficulty}/type/${theme}`;
        var request = new XMLHttpRequest();
        request.open('get', url);
        request.onload = () => {
            if (request.status === 200) {
                var data = JSON.parse(request.response);
                data.cards.forEach(cardData => {
                    var card = new Card(cardData.id, cardData.icon);
                    cards.push(card);
                });
                console.log(data.cards);
            } else {
                console.error('Error requesting cards');
            }
            this.controller.showCards(cards);
        }
        request.send();
    }

    sendScore() {

    }
}