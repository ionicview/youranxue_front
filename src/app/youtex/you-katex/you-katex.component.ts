import { OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mdb-you-katex',
  templateUrl: './you-katex.component.html',
  styleUrls: ['./you-katex.component.scss']
})
export class YouKatexComponent implements OnChanges, OnInit {

  @Input() latex: string;
  latexList: Array<string>;
  equation = 'x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}';

  ngOnChanges(changes: SimpleChanges): void {

    // SimpleChanges を使って変更前の値と変更後の値、そして変更されているかをログ出力する
    for (const prop in changes) {
      if (changes.hasOwnProperty(prop)) {
        const change = changes[prop];
        // console.log(`${prop}: ${change.firstChange}, ${change.previousValue} => ${change.currentValue}`);
        this.latexList = change.currentValue.split('$');
      }
    }
  }



  constructor() { }

  ngOnInit() {
    // tslint:disable-next-line:max-line-length
    // this.latex = ' 如果$a \\ne 0$, $ax^2 + bx + c = 0$ 将会有两个解，他们是 $x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$ ';
    // console.log(this.latex);
    // this.latexList = this.latex.split('$');
    // console.log(this.latexList);
  }



}
