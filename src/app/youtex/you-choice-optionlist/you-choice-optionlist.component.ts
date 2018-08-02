import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QuestionChoiceOptionVO } from '../../model/question/question.choice.option.vo';

@Component({
  selector: 'mdb-you-choice-optionlist',
  templateUrl: './you-choice-optionlist.component.html',
  styleUrls: ['./you-choice-optionlist.component.scss']
})
export class YouChoiceOptionlistComponent implements OnInit {

  @Input() choiceOptionList: Array<QuestionChoiceOptionVO>;
  @Output() onOptionSelected: EventEmitter<QuestionChoiceOptionVO> = new EventEmitter();
  private currentOption: QuestionChoiceOptionVO;
  constructor() {
    this.onOptionSelected = new EventEmitter();
  }

  ngOnInit() {
  }

  clicked(choiceOption: QuestionChoiceOptionVO): void {
    this.currentOption = choiceOption;
    this.currentOption.isSelected = true;
    console.log(this.currentOption.isSelected);
    this.onOptionSelected.emit(choiceOption);
  }

  isSelected(choiceOption: QuestionChoiceOptionVO): boolean {

    if (!choiceOption || !this.currentOption) {
      return false;
    }
    return choiceOption.choiceId === this.currentOption.choiceId;
  }
}
