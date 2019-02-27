import {AppComponent} from './app.component';
import {SideBarService} from "./service/ihm/side-bar/side-bar.service";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {SideBarComponent} from './component/side-bar/side-bar.component';
import {CharacterComponent} from './component/character/character.component';
import {AbilitiesPageComponent} from './component/abilities-page/abilities-page.component'
import {RouterModule, Routes} from "@angular/router";
import { CharacterDescriptionComponent } from './component/character/character-description/character-description.component';

const routes: Routes = [
  { path: 'character-page', component: CharacterComponent },
  { path: 'abilities-page', component: AbilitiesPageComponent },
  { path: '**', component: CharacterComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    CharacterComponent,
    AbilitiesPageComponent,
    CharacterDescriptionComponent
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
