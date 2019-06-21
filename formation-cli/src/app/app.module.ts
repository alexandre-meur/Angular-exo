import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormationComponent } from './formation/formation.component';
import { InterpolateComponent } from './interpolate/interpolate.component';
import { FormationItemComponent } from './formation/formation-item/formation-item.component';

@NgModule({
  declarations: [
    AppComponent,
    FormationComponent,
    InterpolateComponent,
    FormationItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
