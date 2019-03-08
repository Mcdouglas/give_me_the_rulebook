import {Component, OnInit} from '@angular/core';
import {CharacterDescription, CharacterService} from "../../../service/ihm/character/character.service";

@Component({
    selector: 'character-page',
    templateUrl: '../../templates/character/character-template.component.html',
    styleUrls: ['../../templates/character/character-template.component.scss']
})
export class CharacterComponent implements OnInit {

    public description: CharacterDescription;

    constructor(private characterService: CharacterService) {
    }

    ngOnInit() {
        this.description = this.characterService.getCharacterDescription('007');
        console.log(this.description);
    }

}
