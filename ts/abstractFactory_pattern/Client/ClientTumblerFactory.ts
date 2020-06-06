import {ITumblerFactory} from "../Factory/ITumblerFactory";

export class ClientTumblerFactory {
    tumblerFactory: ITumblerFactory

    constructor(tumblerFactory: ITumblerFactory) {
        this.tumblerFactory = tumblerFactory
    }

    createTumbler(type){
        return this.tumblerFactory.createTumbler(this.tumblerFactory.createParts(type)).makeTumbler()
    }
}
