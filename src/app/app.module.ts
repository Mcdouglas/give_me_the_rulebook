import {AppComponent} from './app.component';
import {SideBarService} from "./service/ihm/side-bar.service";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {SideBarComponent} from './component/side-bar/side-bar.component';
import {CharacterPageComponent} from './component/character-page/character-page.component';
import {AbilitiesPageComponent} from './component/abilities-page/abilities-page.component'
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { path: 'character-page', component: CharacterPageComponent },
  { path: 'abilities-page', component: AbilitiesPageComponent },
  { path: '**', component: CharacterPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    CharacterPageComponent,
    AbilitiesPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes,
      // { enableTracing: true} // <-- debugging purposes only
      )
  ],
  providers: [SideBarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
