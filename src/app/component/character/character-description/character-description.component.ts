import { Component, OnInit } from '@angular/core';
import {CharacterDescription, CharacterService} from "../../../service/ihm/character/character.service";

@Component({
  selector: 'character-description',
  templateUrl: './character-description.component.html',
  styleUrls: ['./character-description.component.scss']
})
export class CharacterDescriptionComponent implements OnInit {

  public description: CharacterDescription;

  constructor(private characterService: CharacterService) {
  }

  ngOnInit() {
    this.description = this.characterService.getCharacterDescription('007');
    console.log(this.description);
  }

}
