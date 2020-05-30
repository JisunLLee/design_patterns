import {Burger} from "./Burger";

export class ChickenBurger extends Burger{

    constructor() {
        super();
        this.description = "치킨버거"
    }

    public cost(): number {
        return 2500;
    }
}