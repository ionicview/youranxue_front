import { Component, Input, EventEmitter } from '@angular/core';
import { QuestionChoiceOptionVO } from './../../../model/question/question.choice.option.vo';

@Component({
  selector: 'mdb-choice-option',
  templateUrl: './choice-option.component.html',
  styleUrls: ['./choice-option.component.scss']
})
export class ChoiceOptionComponent {

  @Input() choiceOptionList: Array<QuestionChoiceOptionVO>;


  onOptionSelected: EventEmitter<QuestionChoiceOptionVO>;
  private currentOption: QuestionChoiceOptionVO;

  constructor() {
    this.onOptionSelected = new EventEmitter();
  }

  optionClicked(option: QuestionChoiceOptionVO) {
    this.currentOption = option;


    this.choiceOptionList.forEach(opt => {
      opt.status = 'unSelected';
    });

    this.currentOption.status = 'rightAnswer';
    this.onOptionSelected.emit(option);
    console.log(option.sequenceNo);
  }

  isSelected(option: QuestionChoiceOptionVO): boolean {
    if (!option || !this.currentOption) {

      return false;
    }

    return option.sequenceNo === this.currentOption.sequenceNo;
  }

}
