import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDirectTest]'
})
export class DirectTestDirective {

  constructor(el: ElementRef) { 
    el.nativeElement.style.color = 'green'
    el.nativeElement.style.fontSize = '150px'
  }

}
