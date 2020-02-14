import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-topics',
  templateUrl: './general-topics.component.html',
  styleUrls: ['./general-topics.component.scss']
})
export class GeneralTopicsComponent implements OnInit {

  // *ngIf
  condition:boolean = false;

  // *ngFor
  ngForUsers:User[] = [
    { id: 1, name: 'Sathish Kumar'},
    { id: 2, name: 'Mohan Kumar'},
    { id: 3, name: 'Praveen Kumar'},
    { id: 4, name: 'Santhosh Kumar'},
  ]

  // ngSwitch
  items: item[] = [{name: 'One', val: 1}, {name: 'Two', val: 2}, {name: 'Three', val: 3}];  
  selectedValue: string= 'One';  

  constructor() { }

  ngOnInit() {
  }

}

export interface User{
  id: number;
  name: string;
}

class item {  
  name: string;  
  val: number;  
}  