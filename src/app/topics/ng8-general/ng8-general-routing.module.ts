import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeneralTopicsComponent } from './general-topics/general-topics.component';
import { Ng8GeneralComponent } from './ng8-general.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
  {
    path: '',
    component: Ng8GeneralComponent,
    children:[
      {
        path: 'general-topics',
        component: GeneralTopicsComponent
      },
      {
        path: 'rxjs',
        component: RxjsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Ng8GeneralRoutingModule { }
