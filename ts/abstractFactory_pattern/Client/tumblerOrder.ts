import {ClientTumblerFactory} from "./ClientTumblerFactory";
import {StarbucksFactory} from "../Factory/StarbucksFactory";
import {TumblerType} from "../TumblerType";
import {TomNTomsFactory} from "../Factory/TomNTomsFactory";
import {NoBrandFactory} from "../Factory/NoBrandFactory";
/** Abstract Factory Pattern (추상 팩토리 패턴)
 *
 Abstract(추상화) + Factory(팩토리)
 구체적인 서브 클래스를 정의하지 않고, 해당 코드를 어떻게 사용 할 것인지 명세(인터페이스)만 정의 한다.

 서로 관련성이 있거나 독립적인 여러 요소별로 객체군을 생성해야 할 때 유용함.

 * 특징
 - 실제 객체가 정확히 무엇인지 알지 못해도 객체를 생성하고 조작할 수 있도록 해준다 (인터페이스만 알면, 구현체는 몰라도 된다)

 * 구조 : (https://johngrib.github.io/wiki/abstract-factory-pattern/) 참조
 AbstractFactory: 개념적 제품에 대한 객체를 생성하는 연산으로 인터페이스를 정의한다.
 ConcreteFactory: 구체적인 제품에 대한 객체를 생성하는 연산을 구현한다.
 AbstractProduct: 개념적 제품 객체에 대한 인터페이스를 정의한다.
 ConcreteProduct: 구체적으로 팩토리가 생성할 객체를 정의하고, AbstractProduct가 정의하는 인터페이스를 구현한다.
 Client: AbstractFactory와 AbstractProduct 클래스에 선언된 인터페이스를 사용한다.

 * 장점
 - 서로 다른 여러 객체들을 하나의 팩토리에서 생성과 관리를 할 수 있음.
 - 확장성 (객체의 자료형이 하위 클래스에서 결정됨), 재사용성

 * 단점
 - 계속되는 클래스 생성.
 - 생성 객체가 딱 원하는 것이 아니어서 인터페이스를 수정해야 할 일이 생긴다면 - 모든 Concrete 를 수정해야 함...

 * */



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
