import { Component, OnInit } from '@angular/core';
import { QuestionShortAnswerVO } from 'app/model/question/question.short.answer.vo';
import { QuestionService } from 'app/services/master/question/question.service';
import { QuestionShortAnswerSubQuestionVO } from 'app/model/question/question.short.answer.sub.question.vo';

@Component({
  selector: 'app-shortanswer-question',
  templateUrl: './shortanswer-question.component.html',
  styleUrls: ['./shortanswer-question.component.scss']
})
export class ShortanswerQuestionComponent implements OnInit {
  
    // tslint:disable-next-line:no-inferrable-types
    //quesiton: string = 'x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}';
    shortAnswer: QuestionShortAnswerVO;
    constructor(private questionService: QuestionService) {
      // this.quesiton = '$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$';
  
    }
  
    addSubShortAnswer(){
      console.log('addSubShortAnswer----------------------------------------------');
      this.shortAnswer.subQuestionList.push(new QuestionShortAnswerSubQuestionVO());
    }

    ngOnInit() {
      // tslint:disable-next-line:max-line-length
      this.shortAnswer = new QuestionShortAnswerVO();
      // this.quesiton = '$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$';
      // tslint:disable-next-line:max-line-length
      this.shortAnswer.question = '例:问答题题干$\\angle A= 36^{\\circ}$';
      this.shortAnswer.imgListStr = 'questionImg1;questionImg2';
      this.shortAnswer.hintQuestionIdListStr = 'hintId1;hintId2';

      console.log('shortAnswer----------------------------------------------');
    }
  
    submit() {
  
      console.log(this.shortAnswer);
      this.questionService.createNewShortAnswerQuestion(this.shortAnswer).subscribe(() => {
        console.log('Return');
      });
    }
    

}
