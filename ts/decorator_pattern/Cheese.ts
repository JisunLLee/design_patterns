import {MaterialDecorator} from "./MaterialDecorator";
import {Burger} from "./Burger";

export class Cheese extends MaterialDecorator{
    private burger: Burger
    private material:string = "치즈"

    constructor(burger: Burger) {
        super();
        this.burger = burger
    }

    public getDescription(): string {
        return this.material + this.burger.getDescription();
    }

    public cost(): number {
        return this.burger.cost() + 500
    }
}