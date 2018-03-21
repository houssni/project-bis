import { Exercice } from "./exercice";

export class Seance {

        id:number;
        type: string;
        nom: string;
        description: string;
        exercices : Array<Exercice>;
        duree:number;
        hide: boolean;

        constructor(id: number, cat: string, nom: string, descr: string,exos: Array<Exercice>, duree: number ) {
            this.id= id;
            this.type= cat;
            this.nom= nom;
            this.description= descr;
            this.exercices= exos;
            this.duree = duree;
            this.hide = false;
          }    

          toggle() {
            this.hide = !this.hide;
          }
}