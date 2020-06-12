import {ScoreBoard} from "./ScoreBoard";

/**
 * singleton_pattern
 * 특정 클래스의 객체를 한개만 갖도록 보장.
 * */

export class MainScore {
    public main():void {
        const myScore = ScoreBoard.getInstance();
        const myScore2= ScoreBoard.getInstance();
        console.log("myScore: ", myScore.score)         // myScore:  0
        console.log("myScore2: ", myScore2.score)       // myScore2:  0
        console.log("Is same? ",myScore === myScore2)   // Is same?  true
        myScore.increaseScore()
        console.log("Increase myScore ")                // Increase myScore
        console.log("myScore.score: ", myScore.score)   // myScore:  1
        console.log("myScore2.score: ", myScore2.score) // myScore2:  1
        console.log("Is same? ", myScore === myScore2)  // Is same?  true
    }
}
