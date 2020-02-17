import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[InputCid]'
})
export class InputCidDirective {

  @Input('params') params;

  private specialKeys: Array<string> = [ 'Backspace', 'Tab', 'End', 'Home' ];

  constructor(private el:ElementRef) { 
    console.log(el);
  }

  @HostListener("keydown", ["$event"])
  onInput(event:KeyboardEvent) {

    // Allow Backspace, tab, end, and home keys
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }
    
    //Validate is Mobile No
    if(this.params.type == 'mobile'){
      const charCode = event.which; // (event.which) ? event.which : event.keyCode;
      if ((charCode > 95 && charCode < 106) || charCode == 8 || charCode == 46) {
        return true;
      }else{
        //this.el.nativeElement.appendAfter('beforeend', '<div id="two">two</div>');
        return false;
      }
     
    }
  }
 
 
}
