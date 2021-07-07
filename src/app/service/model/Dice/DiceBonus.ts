export class DiceBonus {

    constructor(private _firstValue: number = 0,
                private _secondValue: number = 0,
                private _thirdValue: number = 0,
                private _fourthValue: number = 0) {
    }

    get firstValue(): number {
        return this._firstValue;
    }

    get secondValue(): number {
        return this._secondValue;
    }

    get thirdValue(): number {
        return this._thirdValue;
    }

    get fourthValue(): number {
        return this._fourthValue;
    }
}