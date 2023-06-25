import { View } from "../view.js";

export class ScoresView extends View {//por aca se hace la conexion al archivo View
    constructor(ToMenuController, PcontentContainer) {
        super(ToMenuController, PcontentContainer);
        this.btnContainer.className = 'scoresView';//aqui le damos estilo a container donde van los botones

        var scoresBox = document.createElement('div');
        var scoresName = document.createElement('p');
        var scoresClicks = document.createElement('p');
        var scoresTime = document.createElement('p');
        var scoresTotal = document.createElement('p');

        scoresName.innerHTML = "Esteban";
        scoresClicks.innerHTML = "Clicks: 20";
        scoresTime.innerHTML = "Time: 40";
        scoresTotal.innerHTML = "Score: 60";

        scoresBox.appendChild(scoresName);
        scoresBox.appendChild(scoresClicks);
        scoresBox.appendChild(scoresTime);
        scoresBox.appendChild(scoresTotal);


        this.btnContainer.appendChild(scoresBox);
        scoresBox.classList = 'scores-box';
        scoresName.classList = 'scores-name';

        var scoresBox = document.createElement('div');
        var scoresName = document.createElement('p');
        var scoresClicks = document.createElement('p');
        var scoresTime = document.createElement('p');
        var scoresTotal = document.createElement('p');

        scoresName.innerHTML = "Esteban";
        scoresClicks.innerHTML = "Clicks: 20";
        scoresTime.innerHTML = "Time: 40";
        scoresTotal.innerHTML = "Score: 60";

        scoresBox.appendChild(scoresName);
        scoresBox.appendChild(scoresClicks);
        scoresBox.appendChild(scoresTime);
        scoresBox.appendChild(scoresTotal);


        this.btnContainer.appendChild(scoresBox);
        scoresBox.classList = 'scores-box';
        scoresName.classList = 'scores-name';








    }

} 