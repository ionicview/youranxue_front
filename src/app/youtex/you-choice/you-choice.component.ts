import { Component, Input, OnInit } from '@angular/core';
import { QuestionChoiceVO } from '../../model/question/question.choice.vo';
import { QuestionChoiceOptionVO } from '../../model/question/question.choice.option.vo';


@Component({
  selector: 'mdb-you-choice',
  templateUrl: './you-choice.component.html',
  styleUrls: ['./you-choice.component.scss'],
})
export class YouChoiceComponent implements OnInit {
  @Input() choiceQuestionList: Array<QuestionChoiceVO>;

  constructor() { }

  ngOnInit() {
  }

  optionSelected(selectedOption: QuestionChoiceOptionVO) {

    console.log(' selectedid:' + selectedOption.sequenceNo);

    console.log(this.choiceQuestionList[0].choiceOptionList[2].isSelected);
  }
}
