import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//NgRx Counter
import { NgrxCounterComponent }from './ngrx-counter/ngrx-counter.component';
import { NgrxEmployeeComponent } from './ngrx-employee/ngrx-employee.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path: 'ngrx-counter',
        component: NgrxCounterComponent
      },
      {
        path: 'ngrx-employee',
        component: NgrxEmployeeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReduxRoutingModule { }
