import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ng8GeneralRoutingModule } from './ng8-general-routing.module';

import { GeneralTopicsComponent } from './general-topics/general-topics.component';

@NgModule({
  declarations: [GeneralTopicsComponent],
  imports: [
    CommonModule,
    Ng8GeneralRoutingModule
  ]
})
export class Ng8GeneralModule { }
