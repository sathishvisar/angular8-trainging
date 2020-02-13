import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//NgRx Counter
import { NgrxCounterComponent }from './ngrx-counter/ngrx-counter.component';


const routes: Routes = [
  {
    path:'',
    children:[
      {
        path: 'ngrx-counter',
        component: NgrxCounterComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReduxRoutingModule { }
