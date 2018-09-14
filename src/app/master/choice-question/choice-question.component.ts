import { Component, OnInit } from '@angular/core';
import { QuestionChoiceVO } from '../../model/question/question.choice.vo';

@Component({
  selector: 'mdb-app-choice-question',
  templateUrl: './choice-question.component.html',
  styleUrls: ['./choice-question.component.scss']
})
export class ChoiceQuestionComponent implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  quesiton: string = 'x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}';
  choiceQuestion: QuestionChoiceVO;
  constructor() {
    //this.quesiton = '$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$';

  }

  ngOnInit() {
    // tslint:disable-next-line:max-line-length
    this.choiceQuestion = new QuestionChoiceVO();
    // this.quesiton = '$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$';
    this.choiceQuestion.question = '$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$';
  }

  previewQuestion(){
    alert ("OK");
    this.choiceQuestion.question = 'sssss$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$';
  }
}
