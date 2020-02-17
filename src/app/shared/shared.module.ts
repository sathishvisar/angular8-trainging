import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


//Directives
import { HeighLightTitleDirective } from './directives/heigh-light-title.directive';
import { InputCidDirective } from './directives/input-cid.directive';


@NgModule({
  declarations: [HeighLightTitleDirective, InputCidDirective],
  imports: [
    CommonModule
  ],
  exports: [HeighLightTitleDirective, InputCidDirective]
})
export class SharedModule { }
