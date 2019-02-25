import { Component, OnInit } from '@angular/core';
import {SideBarService} from "../../service/ihm/side-bar.service";

@Component({
  selector: 'app-character-page',
  templateUrl: './character-page.component.html',
  styleUrls: ['./character-page.component.scss']
})
export class CharacterPageComponent implements OnInit {
  title: string = 'Witr';

  constructor(private sideBarService: SideBarService) { }

  ngOnInit() {
  }

  public openSideBar(): void {
    this.sideBarService.show.next(true);
  }

}
