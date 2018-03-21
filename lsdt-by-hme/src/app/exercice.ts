import { Url } from "url";

export class Exercice {
    id: number;
    categorie: string;
    nom: string;
    description: string;
    video: string;
    hide: boolean;

    constructor(id: number, cat: string, nom: string, descr: string,video:string ) {
        this.id= id;
        this.categorie= cat;
        this.nom= nom;
        this.description= descr;
        this.video= video;
        this.hide = false;
      }   
      
      toggle() {
        this.hide = !this.hide;
      }

}
