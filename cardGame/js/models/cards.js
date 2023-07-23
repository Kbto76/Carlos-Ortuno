export class Card {
    constructor(id, icon, isDicovered = false) {
        this.id = id;
        this.icon = icon;
        this.isDicovered = isDicovered;
        this.isSelected = false;
    }
}