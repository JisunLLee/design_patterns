import {ITumblerFactory} from "./ITumblerFactory";
import {TumblerType} from "../TumblerType";
import {ColdCupParts} from "../Parts/ColdCupParts";
import {MugParts} from "../Parts/MugParts";
import {TogoParts} from "../Parts/TogoParts";
import {ITumbler} from "../Tumbler/ITumbler";
import {NoBrand} from "../Tumbler/NoBrand";
import {IParts} from '../Parts/IParts'

export class NoBrandFactory implements ITumblerFactory{
    createParts(type:TumblerType): IParts {
        switch (type) {
            case TumblerType.coldCup: return new ColdCupParts()
            case TumblerType.mug: return new MugParts()
            case TumblerType.togo: return new TogoParts()
        }
    }

    createTumbler(part: IParts): ITumbler {
        return new NoBrand(part);
    }
}