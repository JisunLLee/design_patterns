import {TumblerType} from "../TumblerType";
import {ITumbler} from "../Tumbler/ITumbler";
import {IParts} from "../Parts/IParts";

export interface ITumblerFactory {
    createParts(type:TumblerType) : IParts
    createTumbler(part:IParts): ITumbler
}
