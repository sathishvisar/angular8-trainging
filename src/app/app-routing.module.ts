import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'pipes',
    //loadChildren: './topics/pipes/pipes.module#PipesModule'
    loadChildren: () => import('./topics/pipes/pipes.module').then(m => m.PipesModule)
  },
  {
    path: 'redux',
    //loadChildren: './topics/redux/redux.module#ReduxModule'
    loadChildren: () => import('./topics/redux/redux.module').then(m => m.ReduxModule)
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
