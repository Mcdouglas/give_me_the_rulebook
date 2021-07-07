import {Character} from "./Character";
import {JobType} from "./Job/JobType";
import {JobImplementation} from "./Job/Template/JobTemplate";
import {DiceType} from "./Dice/DiceType";
import {BonusAttackBonusGridHigh} from "./BonusAttackBonusGrid";
import {SaveType} from "./SaveType";
import {SaveBonusGridHigh, SaveBonusGridLow} from "./SaveBonusGrid";

describe('Couche model', () => {

    it('should use model correctly', () => {
        const player: Character = new Character('Deucky', 34, JobType.BARBARIAN);

        player.background = 'Born in the land of Malwa';
        // player.jobComposition('euh... ?');

        expect(player.name + ' is ' + player.age + ' years old.').toContain('Deucky is 34 years old.');
        expect(player.name + ' is a ' + player.gender + '.').toContain('Deucky is a MALE.');
        expect(player.background).toContain('Born in the land of Malwa');
        let jobImplementation: JobImplementation = player.jobImplementations[JobType.BARBARIAN];
        expect(jobImplementation._jobType).toEqual(JobType.BARBARIAN);
        expect(jobImplementation.currentLevel).toEqual(1);
        expect(jobImplementation._hitDice).toEqual(DiceType.d12);
        expect(jobImplementation._bonusAttackBonusGrid).toEqual(BonusAttackBonusGridHigh);
        expect(jobImplementation._saveBonusGridMap[SaveType.REFLEX]).toEqual(SaveBonusGridHigh);
        expect(jobImplementation._saveBonusGridMap[SaveType.FORTITUDE]).toEqual(SaveBonusGridHigh);
        expect(jobImplementation._saveBonusGridMap[SaveType.WILL]).toEqual(SaveBonusGridLow);
    });
});
