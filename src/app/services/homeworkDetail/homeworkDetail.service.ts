import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HomeworkDetailViewVO } from '../../model/homeworkDetail/homeworkDetail.view.vo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from '../message.service';
import { environment } from 'environments/environment';
import { NewHomeworkDetail } from '../../model/homeworkDetail/new.homeworkDetail';
import { InitNewHomeworkDetail } from '../../model/homeworkDetail/init.new.homeworkDetail';
import { catchError, tap } from 'rxjs/operators';
const API_URL = environment.apiUrl;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HomeworkDetailService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
  
    createNewHomeworkDetail(newHomeworkDetail: NewHomeworkDetail): Observable<NewHomeworkDetail> {
      alert("In homeworkDetail service");
      //return this.http.post<newHomeworkDetail>('http://localhost:8080/public', newHomeworkDetail, httpOptions).pipe(
      return this.http.put<NewHomeworkDetail>(`${API_URL}/homework/newHomeworkDetail`, newHomeworkDetail, httpOptions).pipe(
        tap((insertCount) => this.log(`added homeworkDetail w/ count=${insertCount}`)),
        catchError(this.handleError<NewHomeworkDetail>('new homeworkDetail'))
      );
    }

    initNewHomeworkDetail(): Observable<InitNewHomeworkDetail> {
      return this.http.get<InitNewHomeworkDetail>(`${API_URL}/homework/initNewHomeworkDetail`);
  
    }
  getAllHomeworkDetailList(): Observable<HomeworkDetailViewVO[]> {
    return this.http.get<HomeworkDetailViewVO[]>(`${API_URL}/homework/getAllHomeworkDetail`);
  }

    /** Log a HeroService message with the MessageService */
    private log(message: string) {
      this.messageService.add('HeroService: ' + message);
    }
  
    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
  
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
  
        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);
  
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
}
