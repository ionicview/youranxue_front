import { QuestionChoiceVO } from './question.choice.vo';
import { QuestionFillBlankVO } from './question.fillblank.vo';
import { QuestionShortAnswerVO } from './question.short.answer.vo';

export class QuestionTestVO {
    choiceList: Array<QuestionChoiceVO>;
    fillblankList: Array<QuestionFillBlankVO>;
    shortAnswerList: Array<QuestionShortAnswerVO>;
}
