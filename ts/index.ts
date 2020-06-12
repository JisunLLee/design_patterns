import {BurgerMenu} from "./decorator_pattern/BurgerMenu";
import {tumblerOrder} from "./abstractFactory_pattern/Client/tumblerOrder";
import {MainScore} from "./singleton_pattern/MainScore";


abstract class Play {
    abstract main(): void;
}


const draw = (fun: Play, name: string) => {
    const boarder = "=============";
    console.log(boarder);
    console.log(`==${name}==`);
    console.log(boarder);
    fun.main();
    console.log(boarder);
    console.log();
}

const decorator = new BurgerMenu();
draw(decorator, "decorator");

const abstractFactory = new tumblerOrder();
draw(abstractFactory, "abstractFactory");

const singleton = new MainScore()
draw(singleton, "singleton")
