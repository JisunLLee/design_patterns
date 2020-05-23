const Strategy = (function () {
    function Strategy() {
        this.strategy = null
    }
    Strategy.prototype.setStrategy = function (strategy) {
        this.strategy = strategy
    }
    Strategy.prototype.execute = function () {
        this.strategy.execute()
    }
    return Strategy
})()

const ShipStrategy = (function () {
    function ShipStrategy() {}
    ShipStrategy.prototype.execute = function () {
        console.log("배로 이탈리아에 갑니다")
    }
    return ShipStrategy
})()

const LandStrategy = (function () {
    function LandStrategy() {}
    LandStrategy.prototype.execute = function () {
        console.log("육로로 이탈리아에 갑니다.")
    }
    return LandStrategy
})()


const star = new Strategy();
const ship = new ShipStrategy();
const land = new LandStrategy();

star.setStrategy(ship)
star.setStrategy(land)
star.execute();