import {Hobby} from "../Hobby"

export class Netflix implements Hobby {
    doing(): string {
        return 'Netflix 로 미생 정주행'
    }
}