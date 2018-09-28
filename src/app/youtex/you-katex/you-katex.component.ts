import { OnChanges, SimpleChanges } from '@angular/core';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'mdb-you-katex',
  templateUrl: './you-katex.component.html',
  styleUrls: ['./you-katex.component.scss']
})
export class YouKatexComponent implements OnChanges {

  @Input() latex: string;
  latexList: Array<string>;
  equation = 'x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}';

  ngOnChanges(changes: SimpleChanges): void {

    for (const prop in changes) {
      if (changes.hasOwnProperty(prop)) {
        const change = changes[prop];
        // console.log(`${prop}: ${change.firstChange}, ${change.previousValue} => ${change.currentValue}`);
        if (change.currentValue) {
          this.latexList = change.currentValue.split('$');
        }
      }
    }
  }



  constructor() { }



}
