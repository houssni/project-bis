import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { ExercicesComponent } from './exercices/exercices.component';
import { SeancesComponent } from './seances/seances.component';
import { ProgrammesComponent } from './programmes/programmes.component';
import {ButtonModule} from 'primeng/button';
import { CardModule } from 'primeng/card';
import { GalleriaModule } from 'primeng/galleria';

@NgModule({
  declarations: [
    AppComponent,
    ExercicesComponent,
    SeancesComponent,
    ProgrammesComponent
  ],
  imports: [
    AngularFontAwesomeModule,
    ButtonModule,
    CardModule,
    GalleriaModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
