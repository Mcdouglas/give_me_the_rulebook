import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor() { }

  public getCharacterDescription(characterId: string) : CharacterDescription{
    return <CharacterDescription> {
      alias: 'JamesBond',
      player: 'JohnDoe',
      alignment: 'Loyal/Good',
      level: 'Rogue 12',
      deity: 'Women',
      homeland: 'nowhere',
      race: 'human',
      size: 'M',
      gender: 'male',
      age: '43',
      height: '180',
      weight: '90',
      hair: 'blond',
      eyes: 'blue'
    }
  }
}

export interface CharacterDescription {
  alias: string;
  player: string;
  alignment: string;
  level: string;
  deity: string;
  homeland: string;
  race: string;
  size: string;
  gender: string;
  age: string;
  height: string;
  weight: string;
  hair: string;
  eyes: string;
}