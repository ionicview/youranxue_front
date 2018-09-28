export class BaseQuestionVO {
	// 题目ID
	questionId: number;

	// 题干
	question:string;

	// 图片
	imgListStr:string;

	// 提示题目ID
	hintQuestionIdListStr:string;

	// 答案和解析
    answer:string;
    
    // 图片
    imgList: Array<string>;

    public convertToImgList(): void {
      this.imgList = this.imgListStr.split(';');
    }
}
