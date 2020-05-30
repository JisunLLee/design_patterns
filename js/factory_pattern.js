/** Factory Pattern **/

function CarMaker() {}
CarMaker.prototype.drive = function () {
    return "부릉부릉! 난 " + this.doors + "개의 문을 가지고 있지."
}
CarMaker.factory = function (type) {
    const constr = type

    if (typeof CarMaker[constr] != "function"){
        throw {
            name: "Error",
            message: constr + "가 존재하지 않습니다."
        }
    }
    if (typeof CarMaker[constr].prototype.drive !== "function"){
        CarMaker[constr].prototype = new CarMaker()
    }

    return new CarMaker[constr]()
}

CarMaker.Compact = function () {
    this.doors = 4;
}

CarMaker.Convertible = function () {
    this.doors = 2
}

CarMaker.SUV = function () {
    this.doors = 8
}

const corolla = CarMaker.factory("Compact")
const solstice = CarMaker.factory("Convertible")

console.log(corolla.drive())
console.log(solstice.drive())
