import { Score } from "../../models/score.js";
import { Service } from "../service.js";

export class ScoresService extends Service {
    constructor(controller) {
        super(controller);
        this.controller = controller;
    }
    getScores() {
        var scores = [];
        //var url = '../../../data/score.json';
        //var url = `https://us-central1-cenfoprojectsbackend.cloudfunctions.net/app/scores`;
        var url = `https://back-end-rho-woad.vercel.app/scores`;
        //var url = `http://localhost:3000/scores`
        var request = new XMLHttpRequest();
        request.open('get', url);
        request.onload = () => {
            if (request.status === 200) {
                var data = JSON.parse(request.response);
                for (const key in data) {
                    const scoreData = data[key];
                    let score = new Score(scoreData.clicks, scoreData.score, scoreData.time, scoreData.username);
                    scores.push(score);
                }

                // data.forEach(scoreData => {
                //     var score = new Score(scoreData.clicks, scoreData.score, scoreData.time, scoreData.username);
                //     scores.push(score);
                //     console.log(score)
                // });
            } else {
                console.error('Error requesting scores');
            }
            this.controller.showScores(scores);
        }
        request.send();
    }
}