import {PickedJobFeature} from "../Feature/JobFeature";

export class LevelUp {
    constructor(private _newJobFeatureToPick: PickedJobFeature,
                private _healthDiceResult: number) {}

    get newJobFeatureToPick(): PickedJobFeature {
        return this._newJobFeatureToPick;
    }

    get healthDiceResult(): number {
        return this._healthDiceResult;
    }
}
