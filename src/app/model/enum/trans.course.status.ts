import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: "transCourseStatus"
})
export class TransCourseStatus implements PipeTransform {

    transform(value: number): string {
        let retval = "";

        switch (value) {
            case 0: {
                retval = "已审核";
                break;
            }
            case 1: {
                retval = "已审核";
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