import { QuestionChoiceVO } from './../../../model/question/question.choice.vo';
import { BaseService } from './../../base.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../../message.service';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuestionService extends BaseService {

  constructor(private http: HttpClient, messageService: MessageService) {
    super(messageService);
  }

  public createNewChoiceQuestion(newQuestion: QuestionChoiceVO): Observable<QuestionChoiceVO> {

    return this.http.put<QuestionChoiceVO>(`${this.API_URL}/question/createNewChoiceQuestion`, newQuestion, this.httpOptions).pipe(
      tap((insertCount) => this.log(`added question w/ count=${insertCount}`)),
      catchError(this.handleError<QuestionChoiceVO>('new choice question'))
    );
  }
}
