import {SideBarService} from "./service/ihm/side-bar.service";
import {Component} from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Witr';

  public constructor(private sideBarService: SideBarService) {
  }

  public openSideBar(): void {
    this.sideBarService.show.next(true);
  }
}
