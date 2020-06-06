import {IParts} from "./IParts";

export class MugParts implements IParts{
    body(): string {
        return "도자기";
    }

    handle(): string {
        return "있음";
    }

    straw(): string {
        return "없음";
    }
}