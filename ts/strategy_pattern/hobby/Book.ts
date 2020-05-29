import {Hobby} from "../Hobby"

export class Book implements Hobby{
    doing(): string {
        return '노래 들으면서 1일1클래식 정독'
    }
}