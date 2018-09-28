import { BaseQuestionVO } from './base.question.vo';
import { QuestionShortAnswerSubQuestionVO } from './question.short.answer.sub.question.vo';

export class QuestionShortAnswerVO extends BaseQuestionVO {
    subQuestionList: Array<QuestionShortAnswerSubQuestionVO>;

    constructor() {
        super();
        this.subQuestionList = new Array<QuestionShortAnswerSubQuestionVO>();
    }
}
