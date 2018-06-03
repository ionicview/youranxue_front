import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { BaseService } from './base.service';
import { MessageService } from './message.service';
import { NewTest } from '../model/test/new.test';

const API_URL = environment.apiUrl;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TestService extends BaseService {

  constructor(private http: HttpClient, messageService: MessageService) {
    super(messageService);
  }

  initNewTest(): Observable<Array<any>> {
    return this.http.get<Array<any>>(`${API_URL}/test/initNewTest/1001`);

  }

  getSectionSelect(chapterId: number): Observable<Array<any>> {
    return this.http.get<Array<any>>(`${API_URL}/test/getSectionSelect/${chapterId}`);
  }

  createNewTest(newTest: NewTest): Observable<NewTest> {
    alert("In test service");
    //return this.http.post<newTest>('http://localhost:8080/public', newTest, httpOptions).pipe(
    return this.http.put<NewTest>(`${API_URL}/test/newTest`, newTest, httpOptions).pipe(
      tap((insertCount) => this.log(`added course w/ count=${insertCount}`)),
      catchError(this.handleError<NewTest>('new test'))
    );
  }

}
