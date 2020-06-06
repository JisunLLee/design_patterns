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
 - 확장성 (객체의 자료형이 하위 클래스에서 결정됨)
 - 팩토리패턴의 if-else 로직에서 벗어날 수 있음.

 * 단점
 -

 * */

// 해당 코드 출처 : https://www.zerocho.com/category/JavaScript/post/57b9692ae492d01700b0b75a
const abstractCharacterFactory = (function () {
    let jobs = {}
    return {
        addJob: function (job, Character) { // attack 메소드가 있어야만 등록 가능
            if (Character.prototype.attack) {
                jobs[job] = Character;
            }
        },
        create: function (job, options) { // 등록한 작업을 바탕으로 실제 객체 생성
            const Character = jobs[job]
            return (Character ? new Character(options): null)
        }
    }
})();

const Emperor = (function () {
    function Emperor(options) {
        this.name = options.name
    }
    Emperor.prototype.attack = function (target) {
        console.log(this.name + "가 " + target + "을 공격합니다.")
    }
    Emperor.prototype.proclaim = function () {
        console.log(this.name + "가 스스로를 황제라고 칭했습니다")
    }
    return Emperor;
})();

const Governor = (function () {
    function Governor(options) {
        this.name = options.name
    }
    Governor.prototype.attack = function (target) {
        console.log(this.name + "가 " + target + "을 공격합니다.")
    }
    Governor.prototype.betray = function () {
        console.log(this.name + "가 황제를 배신합니다.")
    }
    return Governor
})();

abstractCharacterFactory.addJob('emperor', Emperor)
abstractCharacterFactory.addJob('governor', Governor)
const nero = abstractCharacterFactory.create('emperor', { name: 'Nero' })
const vindex = abstractCharacterFactory.create('governor', { name: 'Vindex' });
const galba = abstractCharacterFactory.create('governor', { name: 'Galba' });
const otho = abstractCharacterFactory.create('governor', { name: 'otho' });
const vitellius = abstractCharacterFactory.create('governor', { name: 'vitellius' });
const rufus = abstractCharacterFactory.create('governor', { name: 'rufus' });

nero.proclaim();
vindex.betray();
nero.attack("vindex")
vindex.attack("nero")
galba.betray();
vitellius.betray();
vitellius.attack("nero")