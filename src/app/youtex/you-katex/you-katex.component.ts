import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mdb-app-you-katex',
  templateUrl: './you-katex.component.html',
  styleUrls: ['./you-katex.component.scss']
})
export class YouKatexComponent implements OnInit {

  latex: string;
  latexList: Array<string>;
  equation = 'x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}';
  constructor() { }

  ngOnInit() {
    // tslint:disable-next-line:max-line-length
    this.latex = ' 如果$a \\ne 0$, $ax^2 + bx + c = 0$ 将会有两个解，他们是 $x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$ ';
    this.latexList = this.latex.split('$');
    console.log(this.latexList);
  }

}
