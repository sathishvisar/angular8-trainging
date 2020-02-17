import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[myHighlight]'
})
export class HeighLightTitleDirective {

  constructor(el:ElementRef) {
    //el.nativeElement.style.backgroundColor = 'yellow';  
    el.nativeElement.setAttribute("style", "font-size:16px; font-family:'Roboto';color: brown; font-weight:500;margin-bottom: 10px;");
  }

}
