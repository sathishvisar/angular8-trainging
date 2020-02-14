import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeneralTopicsComponent } from './general-topics/general-topics.component';

const routes: Routes = [
  {
    path: 'general-topics',
    component: GeneralTopicsComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Ng8GeneralRoutingModule { }
