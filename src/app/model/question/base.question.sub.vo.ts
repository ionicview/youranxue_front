export class BaseQuestionSubVO {
    // 小题ID
    questionSubId: number;
    // 题干
    questionSub: string;
    // 图片
    imgSubList: Array<string>;
    imgSubListStr: string;
    // 提示题目ID
    hintQuestionIdListStr: string;
    // 答案和解析
    answer: string;

}
