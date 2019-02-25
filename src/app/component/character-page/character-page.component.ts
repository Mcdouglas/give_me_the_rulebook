import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-page',
  templateUrl: './character-page.component.html',
  styleUrls: ['./character-page.component.scss']
})
export class CharacterPageComponent implements OnInit {
  title: string = 'Witr';

  constructor() { }

  ngOnInit() {
  }

  public openSideBar(): void {
    this.sideBarService.show.next(true);
  }

}
