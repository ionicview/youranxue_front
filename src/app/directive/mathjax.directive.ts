import { Directive, Input, OnChanges, ElementRef } from '@angular/core';

@Directive({
  selector: '[mdbMathjax]'
})
export class MathjaxDirective implements OnChanges {
  @Input() fractionString: string;
  constructor(private el: ElementRef) { }
  ngOnChanges() {
    console.log('>> ngOnChanges');
    this.el.nativeElement.style.backgroundColor = 'yellow';
    this.el.nativeElement.innerHTML = this.fractionString;
    //MathJax.Hub.Queue(['Typeset', MathJax.Hub, this.el.nativeElement]);
  }
}
