import {DiceBonus} from "./Dice/DiceBonus";

export class SaveBonusGrid {
    constructor(private _grid: DiceBonus[]){
    }

    get grid(): DiceBonus[] {
        return this._grid;
    }
}

export const SaveBonusGridHigh: SaveBonusGrid = new SaveBonusGrid([
    new DiceBonus(2),
    new DiceBonus(3),
    new DiceBonus(3),
    new DiceBonus(4),
    new DiceBonus(4),
    new DiceBonus(5),
    new DiceBonus(5),
    new DiceBonus(6),
    new DiceBonus(6),
    new DiceBonus(7),
    new DiceBonus(7),
    new DiceBonus(8),
    new DiceBonus(8),
    new DiceBonus(9),
    new DiceBonus(9),
    new DiceBonus(10),
    new DiceBonus(10),
    new DiceBonus(11),
    new DiceBonus(11),
    new DiceBonus(12),
]);

export const SaveBonusGridLow: SaveBonusGrid = new SaveBonusGrid([
    new DiceBonus(0),
    new DiceBonus(0),
    new DiceBonus(1),
    new DiceBonus(1),
    new DiceBonus(1),
    new DiceBonus(2),
    new DiceBonus(2),
    new DiceBonus(2),
    new DiceBonus(3),
    new DiceBonus(3),
    new DiceBonus(3),
    new DiceBonus(4),
    new DiceBonus(4),
    new DiceBonus(4),
    new DiceBonus(5),
    new DiceBonus(5),
    new DiceBonus(5),
    new DiceBonus(6),
    new DiceBonus(6),
    new DiceBonus(6),
]);