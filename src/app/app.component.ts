import {SideBarService} from "./service/ihm/side-bar.service";
import {Component} from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public constructor(private sideBarService: SideBarService) {
  }
}
