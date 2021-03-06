import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { FlexLayoutModule } from '@angular/flex-layout';

// Shared Module
import { SharedModule } from './../../shared/shared.module';

// Material Modules
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';


import { GeneralTopicsComponent } from './general-topics/general-topics.component';
import { Ng8GeneralRoutingModule } from './ng8-general-routing.module';
import { Ng8GeneralComponent } from './ng8-general.component';
import { RxjsComponent } from './rxjs/rxjs.component';


@NgModule({
  declarations: [GeneralTopicsComponent, Ng8GeneralComponent, RxjsComponent, ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    FlexLayoutModule,
    Ng8GeneralRoutingModule,
    MatCardModule,
    MatSlideToggleModule,
    MatButtonModule
  ]
})
export class Ng8GeneralModule { }
