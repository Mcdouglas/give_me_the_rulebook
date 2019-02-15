import {Character} from "./Character";
import {JobType} from "./Job/JobType";

describe('AppComponent', () => {

    it('should use model correctly', () => {
        const player: Character = new Character('Deucky', 34, JobType.BARBARIAN);

        player.background = 'Born in the land of Malwa';
        // player.jobComposition('euh... ?');

        expect(player.name + ' is ' + player.age + ' years old.').toContain('Deucky is 34 years old.');
        expect(player.name + ' is a ' + player.gender + '.').toContain('Deucky is a MALE.');
        expect(player.background).toContain('Born in the land of Malwa');
    });
});
