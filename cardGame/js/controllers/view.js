export class View {
    constructor(controller, toMenu) {
        this.controller = controller; //por e lmomento no se usa
        this.contentContainer = toMenu;//view.js recoje la informacion desde menuView.js PcontentContainerm construye el boton delmenu y lo devuelve por el mismo PcontentContainer 
        this.btnContainer = document.createElement('div');
        this.contentContainer.appendChild(this.btnContainer);

    }
}