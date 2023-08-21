import { Card } from "../../models/cards.js";
import { Service } from "../service.js";

export class PlayService extends Service {
    constructor(controller) {
        super(controller);
        this.controller = controller;
    }
    getCards(difficulty, theme) {
        var cards = [];
        var url = `https://back-end-rho-woad.vercel.app/cards/${difficulty}/${theme}`;
        //var url = `http://localhost:3000/cards/${2}/${theme}`;        
        var request = new XMLHttpRequest();
        request.open('get', url);
        request.onload = () => {
            if (request.status === 200) {
                var data = JSON.parse(request.response);
                data.cards.forEach(cardData => {
                    var card = new Card(cardData.id, cardData.icon);
                    cards.push(card);
                });
            } else {
                console.error('Error requesting cards');
            }
            this.controller.showCards(cards);
        }
        request.send();
    }

    sendScore(score, clicks, time, username) {
        var url = 'https://back-end-rho-woad.vercel.app/score';
        var request = new XMLHttpRequest();
        request.open('POST', url);
        request.send(JSON.stringify({ score: score, clicks: clicks, time: time, username: username }));
    }
}