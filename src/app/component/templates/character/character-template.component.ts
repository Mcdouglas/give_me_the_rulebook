import {Component, OnInit} from '@angular/core';
import {CharacterDescription} from "../../../service/ihm/character/character.service";

@Component({
  selector: 'character-template',
  templateUrl: './character-template.component.html',
  styleUrls: ['./character-template.component.scss']
})
export class CharacterTemplateComponent implements OnInit {

  public description: CharacterDescription;

  constructor() { }

  ngOnInit() {
    this.description = <CharacterDescription> {
      alias: 'JackBauer',
      player: 'MichelBerger',
      alignment: 'Chaotic/Bad',
      level: 'Fighter 14',
      deity: 'Man',
      homeland: 'nowhere2',
      race: 'half-elf',
      size: 'M',
      gender: 'male',
      age: '47',
      height: '175',
      weight: '86',
      hair: 'blond',
      eyes: 'blue'
    };
  }

}
