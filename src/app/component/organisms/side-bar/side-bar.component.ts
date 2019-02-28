import {Component} from '@angular/core';
import {SideBarService} from '../../../service/ihm/side-bar/side-bar.service';

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
      {name: 'Personnage', path:'character-page', selected: true},
      {name: 'Caractéristiques', path:'abilities-page', selected: false},
      {name: 'Equipement', path:'', selected: false},
      {name: 'Compétences', path:'', selected: false},
      {name: 'Dons', path:'', selected: false},
      {name: 'Capacités', path:'', selected: false},
      {name: 'Sorts', path:'', selected: false}
    ];
  }

  public selectMenu(itemName: string): void {
    this.menus.forEach(x => x.selected = false);
    this.menus.filter(x => x.name == itemName).forEach(x => x.selected = true);
  }

  public openSideBar(): void {
    this.sideBarService.show.next(true);
  }

  public closeSideBar(): void {
    this.sideBarService.show.next(false);
  }
}
