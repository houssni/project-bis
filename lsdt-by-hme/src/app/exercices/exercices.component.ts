import { Component, OnInit } from '@angular/core';
import { Exercice } from '../exercice';
import {Message} from 'primeng/components/common/api';
import {MessageService} from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-exercices',
  templateUrl: './exercices.component.html',
  styleUrls: ['./exercices.component.css'],
  providers: [MessageService]

})
export class ExercicesComponent implements OnInit {
 





  // Boucler pour récuperer les N dernier exercices
  getLastExercices(nbExo: number): Array<Exercice>{
  let last_exo = new Array<Exercice>() ;
  
    //Appel au Ws 
    //MOck a remplacer par un appel rest
  //result contiendra le resulta de la requete rest récupérant les exercices  
   let result = [
     new Exercice(1,"fitness","DeadLift", "Soulevé de terre..." ,"exo complet"),
     new Exercice(1,"fitness","Rowing", "Rowing barre droite" ,"exo dos"),
     new Exercice(1,"fitness","Tirage Front", "Tirage Front avec barre EZ" ,"exo triceps"),
     new Exercice(1,"fitness","Developpé couché", "développé couché ou décliné" ,"exo pec"),
     new Exercice(1,"fitness","squat", "Squat la base" ,"exo fessiers + cuisses"), 

    ];
   for (let index = 0; index < nbExo; index++) {
     last_exo.push(result[index]);
   } 
    return last_exo;
   }

   //Variables envoyées  à la vue
   lastExercices= this.getLastExercices(4);
   msgs: Array<Message>;

  

   selectExercice(exo:Exercice) {
    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'Exercice Selected', detail: 'Nom:' + exo.nom});
}
selectExercice2() {
  this.msgs = [];
  this.msgs.push({severity: 'info', summary: 'Exercice Selected', detail: 'Nom:' + 17});
}
  constructor() { }

  ngOnInit() {
  }

}
