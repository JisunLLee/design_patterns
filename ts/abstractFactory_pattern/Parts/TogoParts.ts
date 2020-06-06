import {IParts} from "./IParts";

export class TogoParts implements IParts{
    body(): string {
        return "스테인리스";
    }

    handle(): string {
        return "없음";
    }

    straw(): string {
        return "없음";
    }
}