import {Component} from "@angular/core";
import {SideBarService} from "../../service/ihm/side-bar.service";

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
      {name: "Personnage"},
      {name: "Caractéristiques"},
      {name: "Equipement"},
      {name: "Compétences"},
      {name: "Dons"},
      {name: "Capacités"},
      {name: "Sorts"}
    ];
  }

  public closeSideBar(): void {
    this.sideBarService.show.next(false);
  }
}
