import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'pipes',
    loadChildren: './topics/pipes/pipes.module#PipesModule'
  },
  {
    path: 'redux',
    loadChildren: './topics/redux/redux.module#ReduxModule'
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
