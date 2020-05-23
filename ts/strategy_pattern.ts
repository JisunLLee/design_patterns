/**
 * strategy pattern (전략 패턴)
 *
 *  교환 가능한 행동을 캡슐화하고 위임을 통해서 어떤 행동을 사용할지 결정한다.
 *
 * 사용 이유:
 1. SOLID 원칙 중 OCP( Open-Closed Principle ) 을 지키기 위해 사용한다.
 OCP는 개방-폐쇄 원칙으로 기존의 코드를 변경하지 않으면서(Cloed) 기능을 추가 할 수 있도록(Open) 설계 되어야 함을 뜻한다.
 2. 시스템 규모가 커질 경우 함수 중복 및 유지보수 어려울 수 있기 때문.
 */


interface Hobby {
    doing(): void
}

class Youtube implements Hobby {
    public doing(): string {
        return '아이패드로 유튜브 시청'
    }
}

class Netflix implements Hobby{
    public doing(): string {
        return 'Netflix 로 미생 몰아 보시청기'
    }
}

class Game implements Hobby{
    public doing(): string {
        return '피씨방 가서 WOW Classic'
    }
}

class Drawing implements Hobby{
    public doing(): string {
        return '아이패드로 그림 연습'
    }
}

class Book implements Hobby{
    public doing(): string {
        return '노래 들으면서 1일1클래식 정독'
    }
}

class Etc implements Hobby{
    public doing(): string {
         return '다른 할 거 뭐 없나 찾아 보기'
    }
}

class Weekend {
    public name: string;
    public dayOff: string;
    public hobby: Hobby;

    constructor(name:string, dayOff: string, hobby: Hobby) {
        this.name = name
        this.dayOff = dayOff
        this.hobby = hobby
    }

    rest():void{
        console.log(`${this.name}는 ${this.dayOff}에 [${this.hobby.doing()}]를(을) 하기로 결정했다`)
    }

}

const Lucia = new Weekend('루시아','일요일', new Game())
const Alex = new Weekend('알렉스','토요일', new Youtube())
Lucia.rest()
Alex.rest()