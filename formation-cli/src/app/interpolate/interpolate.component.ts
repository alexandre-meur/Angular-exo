import { Component, OnInit } from '@angular/core';
import {Formation} from "./Formation";

@Component({
  selector: 'app-interpolate',
  templateUrl: './interpolate.component.html',
  styleUrls: ['./interpolate.component.css']
})
export class InterpolateComponent implements OnInit {

  prenom:string = 'Alex';
  nom:string = 'Meur';
  formation:Formation = new Formation('Dev Java', 'Java 8 Full Stack');
  formationJS:Formation;
  isHidden:boolean = false;
  color:string = 'red';
  hideText:boolean = true;

  constructor() { }

  getFullName():string {
    return this.prenom+' '+this.nom;
  }

  /**
   * Change l'état  de l'affichage du paragraphe blablabla
   */
  handleClick(): boolean {
    this.hideText = !this.hideText;
    return this.hideText;
  }

  /**
   * Log evenement
   */
  handleMouseOver(event){
    console.log('MouseOver : ',event.x, ', ', event.y);
  }

  handleMouseOut(event){
    console.log('MouseOut : ',event.x, ', ', event.y);
  }

  ngOnInit() {
    /**
     * Evenement asynchrone
     */
    setTimeout(() => {
      this.formationJS= new Formation('Module JavaScript', 'JS & Angular');
    }, 3000);

    /*
    setInterval(() =>{
      this.isHidden = !this.isHidden;
    }, 2000);
    */

    /**
     * Change la couleur d'un paragraphe toutes les secondes
     */
    setInterval(() =>{
      switch(this.color) {
        case 'green': { this.color = 'red'; break;}
        case 'red' : {this.color = 'green'; break;}
        default : {this.color = 'red'; break;}
      }
    }, 1000);
  }

}
