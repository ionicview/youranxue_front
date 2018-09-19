import { QuestionChoiceOptionVO } from './question.choice.option.vo';

export class QuestionChoiceVO {
    questionId: number;
    question: string;
    imgList: Array<string>;
    imgListStr: string;
    hintQuestionIdListStr: string;
    choiceOptionList: Array<QuestionChoiceOptionVO>;
    constructor(optionCount: number) {
        this.choiceOptionList = [];
        for (let i = 0; i < optionCount; i++) {
            this.choiceOptionList.push(new QuestionChoiceOptionVO(65 + i));

        }
    }
}
