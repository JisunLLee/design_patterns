class Singleton {
    private static instance: Singleton;
    private _score: number;
    private constructor() {
    }
    static getInstance() {
        if (!Singleton.instance){
            Singleton.instance = new Singleton();
            Singleton.instance._score = 0;
        }
        return Singleton.instance;
    }

    get score(): number {
        return this._score;
    }
    set score(score){
        this._score = score;
    }
    increaseScore(): number {
        return this._score += 1;
    }
    decreaseScore(): number {
        return this._score -= 1;
    }
}

const myScore = Singleton.getInstance();
const myScore2= Singleton.getInstance();
console.log("myScore: ", myScore.score)
console.log("myScore2: ", myScore2.score)
console.log("Is same? ",myScore === myScore2)
myScore.increaseScore()
console.log("Increase myScore ")
console.log("myScore.score: ", myScore.score)
console.log("myScore2.score: ", myScore2.score)
console.log("Is same? ", myScore === myScore2)
