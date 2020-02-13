import { Component, OnInit } from '@angular/core';
import { Store, select} from '@ngrx/store'
import { Observable } from 'rxjs';

import { Employee } from './employee.interface';
 
@Component({
  selector: 'app-ngrx-employee',
  templateUrl: './ngrx-employee.component.html',
  styleUrls: ['./ngrx-employee.component.scss']
})
export class NgrxEmployeeComponent {

  employee$: Observable<Employee>;

  constructor(private store:Store<{employee:Employee}>) { 
    this.employee$ = store.pipe(select('employee'))
  }

  //Add Employee
  addEmployee(){
  }

  

}



