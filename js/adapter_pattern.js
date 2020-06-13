/** Adapter Pattern
 *
 * 기존에 있던 구조를 새 구조로 유연하게 전환하거나 새 구조에서 기존의 구조로 전환하는 데 사용하는 패턴
 * 샤오미 주전자의 110v 전기코드를 어뎁터(돼지코)를 사용해 220v 로 변환해 사용하는 것 처럼.
 *
 * 예제 코드 : https://dev-momo.tistory.com/entry/Adapter-Pattern-%EC%96%B4%EB%8C%91%ED%84%B0-%ED%8C%A8%ED%84%B4
  * */

class Printer {
    constructor() {
        this.textArr = [];
    }
    pushText (text) {
        this.textArr.push(text);
    }
    print () {
        return this.textArr.join(' ')
    }
}


let printer = new Printer();
printer.pushText("Hello");
printer.pushText("Design");
printer.pushText("Pattern");

let result = printer.print();
console.log(result);        // Hello Design Pattern


class HashTagPrinter {
    constructor() {
        this.textArr = [];
    }
    pushText (text) {
        this.textArr.push(text)
    }
    printWithHashTag() {
        return this.textArr.map(text => `#${text}`).join(' ')
    }
}

class HashTagAdapter {
    constructor(hashTagPrinter) {
        this.printer = hashTagPrinter
    }

    pushText (text) {
        this.printer.pushText(text);
    }
    print() {
        return this.printer.printWithHashTag();
    }
}

let printer2 = new HashTagAdapter(new HashTagPrinter());
printer2.pushText("Hello");
printer2.pushText("Design");
printer2.pushText("Pattern2");
console.log(printer2.print());