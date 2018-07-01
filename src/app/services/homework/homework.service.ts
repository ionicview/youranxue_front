import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NewHomework } from '../../model/homework/new.homework';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { MessageService } from '../message.service';
import { InitNewHomework } from '../../model/homework/init.new.homework';
import { HomeworkViewVO} from '../../model/homework/homework.view.vo';
const API_URL = environment.apiUrl;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HomeworkService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  createNewHomework(newHomework: NewHomework): Observable<NewHomework> {
    alert("In homework service");
    //return this.http.post<newHomework>('http://localhost:8080/public', newHomework, httpOptions).pipe(
    return this.http.put<NewHomework>(`${API_URL}/homework/newHomework`, newHomework, httpOptions).pipe(
      tap((insertCount) => this.log(`added homework w/ count=${insertCount}`)),
      catchError(this.handleError<NewHomework>('new homework'))
    );
  }

  initNewHomework(): Observable<InitNewHomework> {
    return this.http.get<InitNewHomework>(`${API_URL}/homework/initNewHomework`);

  }

  getAllHomeworkList(): Observable<HomeworkViewVO[]> {
    return this.http.get<HomeworkViewVO[]>(`${API_URL}/homework/getAllHomework`);
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
