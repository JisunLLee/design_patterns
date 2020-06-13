import {ElectricKettle} from "./ElectricKettle";
import {Xiaomi} from "./Xiaomi";
import {XiaomiAdapter} from "./XiaomiAdapter"

export class UseKettle {
    public main():void{
        const xiaomi: Xiaomi = new Xiaomi();
        const xiaomiAdapter: ElectricKettle = new XiaomiAdapter(xiaomi)

        console.log("--USE Xiaomi port In China--")
        console.log(xiaomi.explanation())
        console.log(xiaomi.volt())
        console.log('')
        console.log("-어뎁터 장착! USE Xiaomi port In Korea-")
        console.log(xiaomiAdapter.explanation())
        console.log(xiaomiAdapter.volt())
    }

}