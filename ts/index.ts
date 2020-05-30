import {BurgerMenu} from "./decorator_pattern/BurgerMenu";

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
