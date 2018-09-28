import { QuestionShortAnswerVO } from 'app/model/question/question.short.answer.vo';
import { QuestionChoiceVO } from './../../../model/question/question.choice.vo';
import { QuestionFillBlankVO } from './../../../model/question/question.fillblank.vo';
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

  public createNewFillBlankQuestion(newQuestion: QuestionFillBlankVO): Observable<QuestionFillBlankVO> {

    return this.http.put<QuestionFillBlankVO>(`${this.API_URL}/question/createNewFillBlankQuestion`, newQuestion, this.httpOptions).pipe(
      tap((insertCount) => this.log(`added question w/ count=${insertCount}`)),
      catchError(this.handleError<QuestionFillBlankVO>('new fillblank question'))
    );
  }


  public createNewShortAnswerQuestion(newQuestion: QuestionShortAnswerVO): Observable<QuestionShortAnswerVO> {

    return this.http.put<QuestionShortAnswerVO>(`${this.API_URL}/question/createNewShortAnswerQuestion`, newQuestion, this.httpOptions).pipe(
      tap((insertCount) => this.log(`added question w/ count=${insertCount}`)),
      catchError(this.handleError<QuestionShortAnswerVO>('new question short question'))
    );
  }
}
