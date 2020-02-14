import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';


@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent {

  public users:any = [];

  searchTearm:string = "";

  constructor(private service: ApiService) {
    this.getUsers();
   }

  getUsers(){
    this.service.getUsers().subscribe( res => {
      console.log(res);
      this.users = res;
    })
  }

}
