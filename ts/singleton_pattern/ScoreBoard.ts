export class ScoreBoard {
    private static instance: ScoreBoard;
    private _score: number;
    private constructor() {
    }
    static getInstance() {
        if (!ScoreBoard.instance){
            ScoreBoard.instance = new ScoreBoard();
            ScoreBoard.instance._score = 0;
        }
        return ScoreBoard.instance;
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

