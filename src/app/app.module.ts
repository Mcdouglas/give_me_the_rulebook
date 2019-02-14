import { AppComponent } from './app.component';
import {SideBarService} from "./service/ihm/side-bar.service";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import { SideBarComponent } from './component/side-bar/side-bar.component'


@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SideBarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
