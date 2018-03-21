import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ExercicesComponent } from './exercices/exercices.component';
import { SeancesComponent } from './seances/seances.component';
import { ProgrammesComponent } from './programmes/programmes.component';


@NgModule({
  declarations: [
    AppComponent,
    ExercicesComponent,
    SeancesComponent,
    ProgrammesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
