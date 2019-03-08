import {Component, Input, OnInit} from '@angular/core';
import {CharacterDescription} from "../../../../service/ihm/character/character.service";

@Component({
  selector: 'character-description',
  templateUrl: './character-description.component.html',
  styleUrls: ['./character-description.component.scss']
})
export class CharacterDescriptionComponent implements OnInit {
  @Input() description: CharacterDescription;

  constructor() {
  }

  ngOnInit() {
  }

}
