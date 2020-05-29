export abstract class Weekend {
    name: string;
    dayOff: string;
    hobby: Hobby;

    constructor(name:string, dayOff: string, hobby: Hobby) {
        this.name = name
        this.dayOff = dayOff
        this.hobby = hobby
    }

    public work(): void{
        console.log("열일 합니다")
    }

    rest():void{
        console.log(`${this.name}는 ${this.dayOff}에 [${this.hobby.doing()}]를(을) 하기로 결정했다`)
    }

    public setRest(): void{

    }

}