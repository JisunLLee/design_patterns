import {Hobby} from "../Hobby"

export class Game implements Hobby{
    doing(): string {
        return '피씨방 가서 WOW Classic'
    }
}