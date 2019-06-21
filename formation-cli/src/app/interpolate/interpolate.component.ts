import { Component, OnInit } from '@angular/core';
import {Formation} from "./Formation";
import {Form} from "@angular/forms";

@Component({
  selector: 'app-interpolate',
  templateUrl: './interpolate.component.html',
  styleUrls: ['./interpolate.component.css']
})
export class InterpolateComponent implements OnInit {

  formations:Formation[] = [
    new Formation ('Module java', 'java', 449.99,
      new Date(2019, 4,29),
      new Date(2019, 5, 6)),
    new Formation('Module javascript', 'javascript', 499.99,
      new Date(2019, 6,15),
      new Date(2019, 6,25)),
    new Formation('Module jee', 'jdbc & jpa', 349.99,
      new Date(2019, 5,10),
      new Date(2019, 5,13))
  ];

  constructor() { }



  /**
   * Pour le ngFor
   * @param f first
   * @param l last
   */
  getItemListColor(f: boolean, l: boolean) {
    console.log('calling getItemListColor()');
    if(f) { return 'red'; }
    if(l) { return 'green'; }
    return 'black';
  }

  getItemListBackground(e: boolean){
    console.log('calling getItemListBackground()');
    if(e) {return 'grey';}
    else {return 'none'; }
  }

  ngOnInit() {}


}
