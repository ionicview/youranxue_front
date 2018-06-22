import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: "transTestStatus"
})
export class TransTestStatus implements PipeTransform {

    transform(value: number): string {
        let retval = "";

        switch (value) {
            case 0: {
                retval = "未发布";
                break;
            }
            case 1: {
                retval = "已发布";
                break;
            }
            case 2: {
                retval = "已结束";
                break;
            }

        }
        return retval;
    }
}