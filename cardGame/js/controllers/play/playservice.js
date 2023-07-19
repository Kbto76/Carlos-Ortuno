export class PlayService {
    constructor(controller) {
        this.controller = controller;
    }
    getCards() {
        var cards = [];
        var url = '../../../data/cards.json';
        var request = new XMLHttpRequest();
        request.open('get', url);
        request.onload = () => {
            if (request.status === 200) {
                var data = JSON.parse(request.response);
                console.log(data);
            } else {
                console.error('Error requesting cards');
            }
        }

        request.send();
        this.controller.showCards(cards);

    }

    sendScore() {

    }
}