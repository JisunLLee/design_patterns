import {MaterialDecorator} from "./MaterialDecorator";
import {Burger} from "./Burger";

export class Bacon extends MaterialDecorator{
    private burger: Burger
    private material:string = "베이컨"

    constructor(burger: Burger) {
        super();
        this.burger = burger
    }

    public getDescription(): string {
        return this.material + this.burger.getDescription();
    }

    public cost(): number {
        return this.burger.cost() + 600
    }
}