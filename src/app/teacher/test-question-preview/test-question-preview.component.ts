import { Component, OnInit } from '@angular/core';
import { KatexOptions } from 'ng-katex';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'mdb-app-test-question-preview',
  templateUrl: './test-question-preview.component.html',
  styleUrls: ['./test-question-preview.component.scss'],

})
export class TestQuestionPreviewComponent implements OnInit {
  equationTexString: string;
  testImg: string;
  title = 'ng-katex';
  url = 'https://github.com/garciparedes/ng-katex';
  equation = 'x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}';
  options: KatexOptions = {
    displayMode: true,
  };


  id: number;
  private sub: any;
  constructor(private route: ActivatedRoute) { }
  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.id = +params['testId']; // (+) converts string 'id' to a number

      console.log(params['testId2']);
      console.log(this.id);
      // In a real app: dispatch action to load the details here.
   });


    // this.equationTexString = '$\\left( - \\frac{ 1 }{ 2 } \\right )^2$';
    this.equationTexString = '如图 下列 $x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$ 是否';
    this.testImg = 'https://upload.wikimedia.org/wikipedia/commons/5/52/Barrulet_demo.svg';
  }

}
