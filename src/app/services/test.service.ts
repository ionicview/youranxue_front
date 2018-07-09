import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { BaseService } from './base.service';
import { MessageService } from './message.service';
import { NewTest } from '../model/test/new.test';
import { TestViewVO } from '../model/test/test.view.vo';
import { QuestionNumberVO } from '../model/question/question.number.vo';
import { TestQuestionVO } from '../model/test/test.question.vo';


@Injectable({
  providedIn: 'root'
})
export class TestService extends BaseService {

  constructor(private http: HttpClient, messageService: MessageService) {
    super(messageService);
  }

  initNewTest(): Observable<Array<any>> {
    return this.http.get<Array<any>>(`${this.API_URL}/test/initNewTest/1001`);

  }

  getSectionSelect(chapterId: number): Observable<Array<any>> {
    return this.http.get<Array<any>>(`${this.API_URL}/test/getSectionSelect/${chapterId}`);
  }

  createNewTest(newTest: NewTest): Observable<NewTest> {

    return this.http.put<NewTest>(`${this.API_URL}/test/newTest`, newTest, this.httpOptions).pipe(
      tap((insertCount) => this.log(`added course w/ count=${insertCount}`)),
      catchError(this.handleError<NewTest>('new test'))
    );
  }

  getAllTestByBookId(bookId: number): Observable<TestViewVO[]> {
    return this.http.get<TestViewVO[]>(`${this.API_URL}/test/getAllTestByBookId/${bookId}`);
  }

  questionEditSubmit(testId: number, questionList: QuestionNumberVO[]) {

    return this.http.post<QuestionNumberVO[]>(`${this.API_URL}/test/autoNewTest/${testId}`, questionList, this.httpOptions).pipe(
      tap((insertCount) => this.log(`added test w/ count=${insertCount}`)),
      catchError(this.handleError<QuestionNumberVO[]>('new course'))
    );

  }

  getAllTestQuestionsByTestId(testId: number): Observable<TestQuestionVO> {
    return this.http.get<TestQuestionVO>(`${this.API_URL}/test/getAllTestQuestionsByTestId/${testId}`);


  }
}

