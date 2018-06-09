import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { BaseService } from './base.service';
import { MessageService } from './message.service';
import { NewTest } from '../model/test/new.test';
import { TestViewVO } from '../model/test/test.view.vo';


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
    alert("In test service");
    return this.http.put<NewTest>(`${this.API_URL}/test/newTest`, newTest, this.httpOptions).pipe(
      tap((insertCount) => this.log(`added course w/ count=${insertCount}`)),
      catchError(this.handleError<NewTest>('new test'))
    );
  }

  getAllTestByBookId(bookId: number): Observable<TestViewVO[]> {
    return this.http.get<TestViewVO[]>(`${this.API_URL}/test/getAllTestByBookId/${bookId}`);
  }



}
