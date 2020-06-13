import {ElectricKettle} from "./ElectricKettle";




export class Delonghi implements ElectricKettle{
    //이탈리아어, 220v
    explanation(): string {
        return '다싶고갖 쁨예 나넘 기롱드 .드랜브 아아리탈'
    }
    volt(): string {
        return '22v'
    }
}