import {ElectricKettle} from "./ElectricKettle";
import {Xiaomi} from "./Xiaomi";

export class XiaomiAdapter implements ElectricKettle{

    xiaomiKettle: Xiaomi;

    constructor(xiaomi: Xiaomi) {
        this.xiaomiKettle = xiaomi;
    }

    explanation(): string {
        const translate = "(TRANSLATED) " + this.xiaomiKettle.explanation().split('').reverse().join('')
        return translate
    }

    volt(): string {
        return `${this.xiaomiKettle.volt()} 에 220v 돼지코 부착.`
    }
}
