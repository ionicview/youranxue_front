import { Component, OnInit, Input } from '@angular/core';
import { QuestionFillBlankVO } from '../../model/question/question.fillblank.vo';

@Component({
  selector: 'mdb-you-fillblank',
  templateUrl: './you-fillblank.component.html',
  styleUrls: ['./you-fillblank.component.scss']
})
export class YouFillblankComponent implements OnInit {

  @Input() fillblankList: Array<QuestionFillBlankVO>;

  constructor() {

  }

  ngOnInit() {

    console.log('In mdb-you-fillblank:' + this.fillblankList);
  }

}
