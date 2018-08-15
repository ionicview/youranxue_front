import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'transChoiceOption'
})
export class TransChoiceOption implements PipeTransform {

    transform(value: number): string {
        return String.fromCharCode(value);
    }
}
