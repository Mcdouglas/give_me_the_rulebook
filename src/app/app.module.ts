import {AppComponent} from './app.component';
import {SideBarService} from "./service/ihm/side-bar/side-bar.service";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {SideBarComponent} from './component/organisms/side-bar/side-bar.component';
import {CharacterComponent} from './component/pages/character/character.component';
import {CharacterTemplateComponent} from "./component/templates/character/character-template.component";
import {AbilitiesComponent} from './component/pages/abilities/abilities.component'
import {RouterModule, Routes} from "@angular/router";
import { CharacterDescriptionComponent } from './component/organisms/character/description/character-description.component';
import { ImprovedLabelComponent } from './component/atoms/improved-label/improved-label.component';

const routes: Routes = [
  { path: 'character-page', component: CharacterTemplateComponent },
  { path: 'character-template', component: CharacterComponent },
  { path: 'abilities-page', component: AbilitiesComponent },
  { path: '**', component: CharacterComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    CharacterComponent,
    CharacterTemplateComponent,
    AbilitiesComponent,
    CharacterDescriptionComponent,
    ImprovedLabelComponent
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
