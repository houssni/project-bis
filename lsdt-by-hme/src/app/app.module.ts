import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ExercicesComponent } from './exercices/exercices.component';
import { SeancesComponent } from './seances/seances.component';
import { ProgrammesComponent } from './programmes/programmes.component';
import {CardModule} from 'primeng/card';


@NgModule({
  declarations: [
    AppComponent,
    ExercicesComponent,
    SeancesComponent,
    ProgrammesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
