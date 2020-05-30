

export abstract class Burger {
    protected description : string = "햄버거"

    public getDescription(): string {
        return this.description
    }

    public abstract cost(): number

    public toString = function () {
        return this.getDescription() + ": " + this.cost() + "원"
    }

}
