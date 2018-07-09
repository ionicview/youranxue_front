import { QuestionChoiceOptionVO } from './question.choice.option.vo';

export class QuestionChoiceVO {
    questionId: number;
    question: string;
    imgList: Array<string>;
    choiceOptionList: Array<QuestionChoiceOptionVO>;
}
