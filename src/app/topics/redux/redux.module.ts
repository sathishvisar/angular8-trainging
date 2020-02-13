import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { ReduxRoutingModule } from './redux-routing.module';
import { NgrxCounterComponent } from './ngrx-counter/ngrx-counter.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './ngrx-counter/counter.reducer';
import { NgrxEmployeeComponent } from './ngrx-employee/ngrx-employee.component';


@NgModule({
  declarations: [NgrxCounterComponent, NgrxEmployeeComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReduxRoutingModule,
    StoreModule.forRoot({ count: counterReducer })
  ]
})
export class ReduxModule { }
