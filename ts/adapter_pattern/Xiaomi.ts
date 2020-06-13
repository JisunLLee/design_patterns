import {ElectricKettle} from "./ElectricKettle";

export class Xiaomi implements ElectricKettle{
    //중국어, 110v
    explanation(): string {
        return '맨짱짱 비성가 는미요샤 .공제 얼뉴메 어국중'
    }
    volt(): string {
        return '110v'
    }
}