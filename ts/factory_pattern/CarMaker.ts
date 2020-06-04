/** Factory Pattern
 *
 * 객체 생성을 하위 클래스에서 대신 함. -> 의존성 낮음.
 * 객체 생성을 위한 인터페이스는 정하지만,
 * **/


export abstract class CarMaker {
    name: string
    doors: number
    fuel: string
    type: string
    cost: number

    abstract make():void

    getName():string {
        return this.name
    }
    drive(): void {
        console.log("부릉부릉! 난 " + this.doors + "개의 문을 가지고 있지.")
    }
    buy(): void {
        console.log(this.cost + "원 입니다.")
    }
}