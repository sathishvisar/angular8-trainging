import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { PipesRoutingModule } from './pipes-routing.module';
import { PipesComponent } from './pipes.component';

//Services
import { ApiService } from './../api.service';

//Pipes
import { FilterPipe } from './../../shared/pipes/filter.pipe';



@NgModule({
  declarations: [PipesComponent, FilterPipe],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    PipesRoutingModule
  ],
  providers: [ApiService]
})
export class PipesModule { }
