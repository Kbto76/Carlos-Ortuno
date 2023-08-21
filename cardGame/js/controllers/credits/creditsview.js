import { createDiv } from "../../libs/html.js";
import { ControllerView } from "../controllerView.js";

export class CreditsView extends ControllerView {
    constructor(ToMenuController, PcontentContainer) {
        super(ToMenuController, PcontentContainer);
        this.btnContainer.className = 'creditsView';
        var agradecimientos = document.createElement('div');
        var creditos = document.createElement('div');
        this.btnContainer.appendChild(creditos);
        this.btnContainer.appendChild(agradecimientos);
        creditos.className = 'margin';
        agradecimientos.className = 'margin';
        creditos.innerHTML = '<b>Créditos del Juego</b><br> Desarrollado por: Carlos Ortuño<br><b>Equipo de Desarrollo:</b> Diseño de Juego por Carlos Ortuño<br>Programación: Carlos Ortuño<br><b>';
        agradecimientos.innerHTML = '<br><br><b>Agradecimientos Especiales:</b><br> Gracias a todas las personas que han contribuido con su apoyo y soporte,<br> especialmente a mi mama y familia en general, todo ha sido muy valioso durante el desarrollo del Juego.<br> Su retroalimentación fue totalmente fundamental, para hacer de este proyecto una experiencia entretenida,<br> desafiante y muy educativa<br><b>Fecha de Creación:</b>  16 de Agosto de 2023';

        createDiv({ innerHTML: 'Email', className: 'social-media', onclick: this.onButtonClick1.bind() }, this.btnContainer);
        createDiv({ innerHTML: 'Linkedin', className: 'social-media', onclick: this.onButtonClick2.bind() }, this.btnContainer);
        createDiv({ innerHTML: 'Facebook', className: 'social-media', onclick: this.onButtonClick3.bind() }, this.btnContainer);
    }

    onButtonClick1() {
        window.open("mailto:chob1976@gmail.com", "_blank");
    };
    onButtonClick2() {
        window.open("https://www.linkedin.com/in/carlos-ortu%C3%B1o-bravo-17651a122/", "_blank");
    };
    onButtonClick3() {
        window.open("https://www.facebook.com/kbto76", "_blank");
    };
}
