/**
 * singleton_pattern
 * 특정 클래스의 객체를 한개만 유지하는 패턴.
 자바스크립트에서는 이미 객체 리터럴을 이용한 객체 생성 방법이 싱글톤 패턴과 동일하다.
 * */

const obj = {
    myprop : "my value"
}

const obj2 = {
    myprop : "my value"
}

console.log(obj === obj2)       // false
console.log(obj == obj2)        // false