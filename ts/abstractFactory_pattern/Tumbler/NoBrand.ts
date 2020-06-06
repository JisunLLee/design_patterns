import {ITumbler} from "./ITumbler";
import {IParts} from "../Parts/IParts";

export class NoBrand implements ITumbler{
    handle : string
    straw : string
    material : string

    constructor(part: IParts) {
        this.material = part.body()
        this.handle = part.handle()
        this.straw = part.straw()
    }

    characteristic() {
        return "최저가. 로고 없음"
    }

    makeTumbler() {
        return "노브랜드 텀블러 제작완료. [재질 : "+this.material + ". 손잡이: " + this.handle+ ". 빨대: " + this.straw + ". 특징 :" + this.characteristic()+"]"
    }
}