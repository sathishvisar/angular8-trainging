import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ReduxRoutingModule } from './redux-routing.module';
import { NgrxCounterComponent } from './ngrx-counter/ngrx-counter.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './ngrx-counter/counter.reducer';


@NgModule({
  declarations: [NgrxCounterComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReduxRoutingModule,
    StoreModule.forRoot({ count: counterReducer })
  ]
})
export class ReduxModule { }
