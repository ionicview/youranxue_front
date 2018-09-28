
import { QuestionShortAnswerVO } from '../question/question.short.answer.vo';
import { QuestionChoiceVO } from '../question/question.choice.vo';
import { QuestionFillBlankVO } from '../question/question.fillblank.vo';

export class TestQuestionVO {
    choiceList: Array<QuestionChoiceVO>;
    fillblankList: Array<QuestionFillBlankVO>;
    shortAnswerList: Array<QuestionShortAnswerVO>;
}

