import {Component} from '@angular/core';
import {SideBarService} from '../../service/ihm/side-bar.service';

@Component({
  selector: 'side-bar',
  templateUrl: 'side-bar.component.html',
  styleUrls: ['side-bar.component.scss']
})

export class SideBarComponent {
  public showSideBar: boolean = true;
  public menus;

  constructor(private sideBarService: SideBarService) {
    this.sideBarService.show.subscribe((val: boolean) => this.showSideBar = val);
    this.menus = [
      {name: 'Personnage', path:'character-page'},
      {name: 'Caractéristiques', path:'abilities-page'},
      {name: 'Equipement', path:''},
      {name: 'Compétences', path:''},
      {name: 'Dons', path:''},
      {name: 'Capacités', path:''},
      {name: 'Sorts', path:''}
    ];
  }

  public closeSideBar(): void {
    this.sideBarService.show.next(false);
  }
}
