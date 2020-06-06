
interface ITumbler {
    characteristic():string
    makeTumbler():string
}

class StarBucks implements ITumbler{
    handle : string
    straw : string
    material : string

    constructor(part: IPart) {
        this.material = part.body()
        this.handle = part.handle()
        this.straw = part.straw()
    }

    characteristic() {
        return "녹색 포인트 컬러, 세이렌 마크"
    }

    makeTumbler() {
        return "재질 : "+this.material + " 손잡이: " + this.handle+ " 빨대: " + this.straw + " 특징 :" + this.characteristic()
    }
}

class NoBrand implements ITumbler{
    handle : string
    straw : string
    material : string

    constructor(part: IPart) {
        this.material = part.body()
        this.handle = part.handle()
        this.straw = part.straw()
    }

    characteristic() {
        return "최저가. 로고 없음"
    }

    makeTumbler() {
        return "재질 : "+this.material + " 손잡이: " + this.handle+ " 빨대: " + this.straw + " 특징 :" + this.characteristic()
    }
}

class TomNToms implements ITumbler{
    handle : string
    straw : string
    material : string

    constructor(part: IPart) {
        this.material = part.body()
        this.handle = part.handle()
        this.straw = part.straw()
    }

    characteristic() {
        return "빨강 + 검정"
    }

    makeTumbler() {
        return "재질 : "+this.material + " 손잡이: " + this.handle+ " 빨대: " + this.straw + " 특징 :" + this.characteristic()
    }
}


interface IPart {
    body(): string
    handle(): string
    straw(): string
}

class ColdCupParts implements IPart{
    body(): string {
        return "튜명 용기";
    }

    handle(): string {
        return "없음";
    }

    straw(): string {
        return "있음";
    }
}

class MugParts implements IPart{
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

class TogoParts implements IPart{
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

interface ITumblerFactory {
    createParts() : IPart
    createTumbler(part:IPart): ITumbler
}

class StarbucksFactory implements ITumblerFactory{
    createParts(): IPart {
        return new ColdCupParts();
    }

    createTumbler(part: IPart): ITumbler {
        return new StarBucks(part);
    }

}

class ClientTumblerFactory {
    tumblerFactory: ITumblerFactory

    constructor(tumblerFactory: ITumblerFactory) {
        this.tumblerFactory = tumblerFactory
    }

    createTumbler(){
        this.tumblerFactory.createTumbler(this.tumblerFactory.createParts()).makeTumbler()
    }
}

const starbucks = new ClientTumblerFactory(new StarbucksFactory())
starbucks.createTumbler()