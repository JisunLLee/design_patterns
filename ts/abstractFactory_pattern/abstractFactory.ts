interface ITumbler {
    characteristic():string
    makeTumbler():string
}

class StarBucks implements ITumbler{
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

class NoBrand implements ITumbler{
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

class TomNToms implements ITumbler{
    handle : string
    straw : string
    material : string

    constructor(part: IParts) {
        this.material = part.body()
        this.handle = part.handle()
        this.straw = part.straw()
    }

    characteristic() {
        return "빨강 + 검정"
    }

    makeTumbler() {
        return "탐앤탐스 텀블러 제작완료. [재질 : "+this.material + ". 손잡이: " + this.handle+ ". 빨대: " + this.straw + ". 특징 :" + this.characteristic()+"]"
    }
}


interface IParts {
    body(): string
    handle(): string
    straw(): string
}

class ColdCupParts implements IParts{
    body(): string {
        return "투명 용기";
    }

    handle(): string {
        return "없음";
    }

    straw(): string {
        return "있음";
    }
}

class MugParts implements IParts{
    body(): string {
        return "도자기";
    }

    handle(): string {
        return "있음";
    }

    straw(): string {
        return "없음";
    }
}

class TogoParts implements IParts{
    body(): string {
        return "스테인리스";
    }

    handle(): string {
        return "없음";
    }

    straw(): string {
        return "없음";
    }
}

enum TumblerType{
    coldCup,
    mug,
    togo
}

interface ITumblerFactory {
    createParts(type:TumblerType) : IParts
    createTumbler(part:IParts): ITumbler
}

class StarbucksFactory implements ITumblerFactory{
    createParts(type:TumblerType): IParts {
        switch (type) {
            case TumblerType.coldCup: return new ColdCupParts()
            case TumblerType.mug: return new MugParts()
            case TumblerType.togo: return new TogoParts()
        }
    }

    createTumbler(part: IParts): ITumbler {
        return new StarBucks(part);
    }
}

class TomNTomsFactory implements ITumblerFactory{
    createParts(type:TumblerType): IParts {
        switch (type) {
            case TumblerType.coldCup: return new ColdCupParts()
            case TumblerType.mug: return new MugParts()
            case TumblerType.togo: return new TogoParts()
        }
    }

    createTumbler(part: IParts): ITumbler {
        return new TomNToms(part);
    }
}

class NoBrandFactory implements ITumblerFactory{
    createParts(type:TumblerType): IParts {
        switch (type) {
            case TumblerType.coldCup: return new ColdCupParts()
            case TumblerType.mug: return new MugParts()
            case TumblerType.togo: return new TogoParts()
        }
    }

    createTumbler(part: IParts): ITumbler {
        return new NoBrand(part);
    }
}

class ClientTumblerFactory {
    tumblerFactory: ITumblerFactory

    constructor(tumblerFactory: ITumblerFactory) {
        this.tumblerFactory = tumblerFactory
    }

    createTumbler(type){
        return this.tumblerFactory.createTumbler(this.tumblerFactory.createParts(type)).makeTumbler()
    }
}



export class tumblerOrder {
    public main():void {
        const starbucks = new ClientTumblerFactory(new StarbucksFactory())
        const starbucksColdCup = starbucks.createTumbler(TumblerType.coldCup)
        const starbucksMug = starbucks.createTumbler(TumblerType.mug)
        console.log(starbucksColdCup)    // 스타벅스 텀블러 제작완료. [재질 : 투명 용기. 손잡이: 없음. 빨대: 있음. 특징 :녹색 포인트 컬러, 세이렌 마크]
        console.log(starbucksMug)        // 스타벅스 텀블러 제작완료. [재질 : 도자기. 손잡이: 있음. 빨대: 없음. 특징 :녹색 포인트 컬러, 세이렌 마크]

        const tomNToms = new ClientTumblerFactory(new TomNTomsFactory())
        const tomNTomsTogo = tomNToms.createTumbler(TumblerType.togo)
        console.log(tomNTomsTogo)        // 탐앤탐스 텀블러 제작완료. [재질 : 스테인리스. 손잡이: 없음. 빨대: 없음. 특징 :빨강 + 검정]

        const noBrand = new ClientTumblerFactory(new NoBrandFactory())
        const noBrandMug = noBrand.createTumbler(TumblerType.mug)
        console.log(noBrandMug)          // 노브랜드 텀블러 제작완료. [재질 : 도자기. 손잡이: 있음. 빨대: 없음. 특징 :최저가. 로고 없음]
    }
}
