import {ElectricKettle} from "./ElectricKettle";


export class KitchenArt implements ElectricKettle{
    //한국어, 220v
    explanation(): string {
        return '한국 브랜드. 흔히 볼 수 있다.'
    }
    volt(): string {
        return '22v'
    }
}
