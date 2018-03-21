import { Seance } from "./seance";

export class Programme {

    id:number;
    type: string;
    nom: string;
    description: string;
    seances : Array<Seance>;
    joursOn: Array<string>;
    joursOff: Array<string>;   
    duree:number;
    hide: boolean;

    constructor(id: number, type: string, nom: string, descr: string,seances:Array<Seance>, jON:Array<string>, jOff: Array<string> ) {
        this.id= id;
        this.type= type;
        this.nom= nom;
        this.description= descr;
        this.seances = seances;
        this.joursOff = jOff;
        this.joursOn = jON;
        this.hide = false;
      }    
      
      toggle() {
        this.hide = !this.hide;
      }
}