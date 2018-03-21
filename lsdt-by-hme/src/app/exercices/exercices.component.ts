import { Component, OnInit } from '@angular/core';
import { Exercice } from '../exercice';

@Component({
  selector: 'app-exercices',
  templateUrl: './exercices.component.html',
  styleUrls: ['./exercices.component.css']
})
export class ExercicesComponent implements OnInit {
 


  exercice1 = new Exercice(1,"fitness","DeadLift", "Soulevé de terre..." ,"exo complet");
  lastExercices= [this.exercice1];

  // Boucler pour récuperer les N dernier exercices
  getLastExercices(){
  }



 
  constructor() { }

  ngOnInit() {
  }

}
