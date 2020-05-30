import {Burger} from "./Burger";

export class BeefBurger extends Burger{

    constructor() {
        super();
        this.description = "소고기버거"
    }

    public cost(): number {
        return 3000;
    }
}