import {ITumbler} from "./ITumbler";
import {IParts} from "../Parts/IParts";

export class StarBucks implements ITumbler{
    handle : string
    straw : string
    material : string

    constructor(part: IParts) {
        this.material = part.body()
        this.handle = part.handle()
        this.straw = part.straw()
    }

    characteristic() {
        return "녹색 포인트 컬러, 세이렌 마크"
    }

    makeTumbler() {
        return "스타벅스 텀블러 제작완료. [재질 : "+this.material + ". 손잡이: " + this.handle+ ". 빨대: " + this.straw + ". 특징 :" + this.characteristic()+"]"
    }
}
