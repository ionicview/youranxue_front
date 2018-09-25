import { Component, Input, OnInit } from '@angular/core';
import { QuestionShortAnswerSubQuestionVO } from 'app/model/question/question.short.answer.sub.question.vo';

@Component({
  selector: 'mdb-shortanswer-sub-question',
  templateUrl: './shortanswer-sub-question.component.html',
  styleUrls: ['./shortanswer-sub-question.component.scss']
})
export class ShortanswerSubQuestionComponent implements OnInit {

  @Input() subQuestionList: Array<QuestionShortAnswerSubQuestionVO>;

  ngOnInit() {
  }
}
