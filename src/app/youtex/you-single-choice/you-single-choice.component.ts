import { Component, OnInit, Input } from '@angular/core';
import { QuestionChoiceVO } from '../../model/question/question.choice.vo';

@Component({
  selector: 'mdb-app-you-single-choice',
  templateUrl: './you-single-choice.component.html',
  styleUrls: ['./you-single-choice.component.scss']
})
export class YouSingleChoiceComponent implements OnInit {
  @Input() choiceQuestion: QuestionChoiceVO;
  constructor() { }

  ngOnInit() {
    console.log( this.choiceQuestion);
  }

}
