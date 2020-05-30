import {Burger} from "./Burger";

export abstract class MaterialDecorator extends Burger{
    public abstract getDescription(): string;
}