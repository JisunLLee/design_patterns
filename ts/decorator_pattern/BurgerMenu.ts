/**
 * decorator pattern (장식자)

 * 예제 참고 : https://johngrib.github.io/wiki/decorator-pattern/

 * 어떤 녀석 인가
 장식. 원본 객체에 추가적인 요소 들을 동적으로 추가 해 새로운 것을 만드는 것.

 * 언제 사용 하는가
 전체 클래스에 새로운 기능을 추가할 필요는 없지만, 클레스를 가져다쓰는 곳에서 개별적으로 추가가 필요한 경우

 * 왜 사용 하는가
 클래스를 상속받아 하는 경우도 있지만, 그렇게 될 경우
 1. 기능별로 클래스가 계속해서 생길 수 있다.
 2. 정적? <- 이건 다시 보자

 * 구현 시 주의점 (https://johngrib.github.io/wiki/decorator-pattern/)
    * Component는 장식을 추가할 베이스가 되는 역할이므로 작고 가볍게 정의하도록 한다.
        * 가급적 인터페이스만을 정의한다.
        * 무언가 저장하는 변수는 정의하지 않는다(상속받는 여러 Decorator도 같이 복잡하고 무거워진다).
        * 저장할 것이 있다면 서브클래스에서 하자.
    * 상속 구조를 통해 Decorator와 Component가 같은 인터페이스를 갖게 해야 한다.
        * 투과적 인터페이스: Decorator로 계속해서 감싸도 Component의 메소드는 계속 사용할 수 있다.
    * 코드를 수정하지 않고도 준비된 Decorator을 조합해 기능을 추가할 수 있도록 생각해서 구현한다.
    * 비슷한 성질의 작은 클래스가 많이 만들어질 수 있다는 단점을 고려한다.
    * 구현하려는 내용이 객체의 겉을 변경하려는 것인지, 속을 변경하려는 것인지 생각해 보자.
    * 속을 변경하려는 것이라면 strategy-pattern을 선택하는 것이 더 적절할 수 있다.
    * 데코레이터 패턴으로 구현한 다음, 사용이 까다롭게 느껴지거나 자주 쓰는 조합이 있다면 다음 패턴을 사용해 제공하는 것을 고려해 보자.
        * builder-pattern
        * factory-pattern
        * static-factory-method-pattern
 * Decorator가 다른 Decorator에 대해 알아야 할 필요가 있다면, 데코레이터 패턴의 사용 의도와 어긋나는 작업일 수 있다.
 * 재귀적으로 기능을 갖게 하는 방법 외에도, Decorator를 추가할 때마다 얻은 아이템을 List로 관리하는 방법도 있다.

 */


import {Burger} from "./Burger";
import {BeefBurger} from "./BeefBurger";
import {Cheese} from "./Cheese";
import {Bacon} from "./Bacon";
import {Tomato} from "./tomato";
import {ChickenBurger} from "./ChickenBurger";

export class BurgerMenu {
    public main():void {
        const beefBurger : Burger = new BeefBurger()
        const chickenBurger : Burger = new ChickenBurger()
        console.log(beefBurger.toString())
        console.log(chickenBurger.toString())

        const cheeseBurger: Burger = new Cheese(beefBurger)
        console.log(cheeseBurger.toString())

        const baconTomatoBurger: Burger = new Bacon(new Tomato(beefBurger))
        console.log(baconTomatoBurger.toString())

        const tomatoChickenBurger: Burger = new Tomato(chickenBurger)
        console.log(tomatoChickenBurger.toString())
    }
}
