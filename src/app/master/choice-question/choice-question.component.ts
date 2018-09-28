import { Component, OnInit } from '@angular/core';
import { QuestionChoiceVO } from '../../model/question/question.choice.vo';
import { QuestionService } from '../../services/master/question/question.service';

@Component({
  selector: 'mdb-app-choice-question',
  templateUrl: './choice-question.component.html',
  styleUrls: ['./choice-question.component.scss']
})
export class ChoiceQuestionComponent implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  quesiton: string = 'x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}';
  choiceQuestion: QuestionChoiceVO;
  constructor(private questionService: QuestionService) {
    // this.quesiton = '$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$';

  }

  ngOnInit() {
    // tslint:disable-next-line:max-line-length
    this.choiceQuestion = new QuestionChoiceVO(4);
    // this.quesiton = '$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$';
    // tslint:disable-next-line:max-line-length
    this.choiceQuestion.question = '1. 如图，$\\triangle ABC$中，$\\angle A= 36^{\\circ}$，$\\angle B= 72^{\\circ}$，$\\angle ACB$的平分线交$AB$于$D$，则图中共有等腰三角形(　)';
    this.choiceQuestion.imgListStr = 'questionImg1;questionImg2';
    this.choiceQuestion.hintQuestionIdListStr = 'hintId1;hintId2';
    // this.test = new QuestionChoiceOptionVO;
    // this.test.sequenceNo = 65;


  }

  submit() {

    console.log(this.choiceQuestion);
    this.questionService.createNewChoiceQuestion(this.choiceQuestion).subscribe(() => {
      console.log('Return');
    });


  }


}
