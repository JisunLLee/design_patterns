import {IParts} from "./IParts";

export class ColdCupParts implements IParts{
    body(): string {
        return "투명 용기";
    }

    handle(): string {
        return "없음";
    }

    straw(): string {
        return "있음";
    }
}