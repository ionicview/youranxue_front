import { Component, OnInit } from '@angular/core';
import { QuestionFillBlankVO } from './../../model/question/question.fillblank.vo';
import { QuestionFillBlankBlankVO } from './../../model/question/question.fillblank.blank.vo';
import { QuestionService } from '../../services/master/question/question.service';

@Component({
  selector: 'app-fillblank-question',
  templateUrl: './fillblank-question.component.html',
  styleUrls: ['./fillblank-question.component.scss']
})
export class FillblankQuestionComponent implements OnInit {

    // tslint:disable-next-line:no-inferrable-types
    //quesiton: string = 'x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}';
    fillBlankQuestion: QuestionFillBlankVO;
    constructor(private questionService: QuestionService) {
      // this.quesiton = '$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$';
  
    }
  
    updateBlank(){

      console.log('updateBlank-----------------------------------------------------------');


      this.fillBlankQuestion.questionSections = this.fillBlankQuestion.question.split('#BLANK#');
      this.fillBlankQuestion.blankCount = this.fillBlankQuestion.questionSections.length - 1;

      for (let i = this.fillBlankQuestion.blankList.length-1; i < this.fillBlankQuestion.blankCount; i++) {
        this.fillBlankQuestion.blankList.push(new QuestionFillBlankBlankVO());
    }
    }

    addBlank() {
      console.log('addBlank-----------------------------------------------------------');
      this.fillBlankQuestion.question = this.fillBlankQuestion.question+'#BLANK#';
      this.fillBlankQuestion.questionSections = this.fillBlankQuestion.question.split('#BLANK#');
      this.fillBlankQuestion.blankCount = this.fillBlankQuestion.questionSections.length - 1;

      for (let i = this.fillBlankQuestion.blankList.length-1; i < this.fillBlankQuestion.blankCount; i++) {
        this.fillBlankQuestion.blankList.push(new QuestionFillBlankBlankVO());
    }
    }

    ngOnInit() {
      // tslint:disable-next-line:max-line-length
      this.fillBlankQuestion = new QuestionFillBlankVO();
      // this.quesiton = '$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$';
      // tslint:disable-next-line:max-line-length
      this.fillBlankQuestion.question = '如图，$\\triangle ABC$中，$\\angle A= 36^{\\circ}$，$\\angle B= 72^{\\circ}$，$\\angle ACB$的平分线交$AB$于$D$，则图中共有#BLANK#等腰三角形#BLANK#个.';
      this.fillBlankQuestion.questionSections = this.fillBlankQuestion.question.split('#BLANK#');
      this.fillBlankQuestion.blankCount = this.fillBlankQuestion.questionSections.length - 1;
      this.fillBlankQuestion.imgListStr = 'questionImg1;questionImg2';
      this.fillBlankQuestion.hintQuestionIdListStr = 'hintId1;hintId2';
        // this.test = new QuestionChoiceOptionVO;
      // this.test.sequenceNo = 65;


      this.fillBlankQuestion.blankList = [];
      for (let i = 0; i < this.fillBlankQuestion.blankCount; i++) {
          this.fillBlankQuestion.blankList.push(new QuestionFillBlankBlankVO());
      }

      console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
    }
  
    submit() {
  
      console.log(this.fillBlankQuestion);
      this.questionService.createNewFillBlankQuestion(this.fillBlankQuestion).subscribe(() => {
        console.log('Return');
      });
    }
}
