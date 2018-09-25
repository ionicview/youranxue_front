export class QuestionChoiceOptionVO {
  // 题目ID
  questionId: number;
  sequenceNo: number;
  choiceItem: string;
  // 图片
  imgList: Array<string>;
  imgListStr: string;
  rightAnswerFlg: boolean;
  isSelected: boolean;
  status: string;
  constructor(sequenceNo: number) {
    this.sequenceNo = sequenceNo;
    this.choiceItem = ''.concat((sequenceNo - 64).toString()).concat('个');
    const n = '' + this.sequenceNo;

    this.imgListStr = 'option_img_'.concat(n).concat(';');
  }

  public convertToImgList(): void {
    this.imgList = this.imgListStr.split(';');

  }
}
