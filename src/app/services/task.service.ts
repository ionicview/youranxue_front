import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NewTask } from '../model/newtask';
import { Observable, of } from 'rxjs';
import { catchError,  tap } from 'rxjs/operators';
import { MessageService } from './message.service';
const API_URL = environment.apiUrl;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  doPost(newtask: NewTask): Observable<NewTask> {
    alert("In task service");
    //return this.http.post<NewTask>('http://localhost:8080/public', newtask, httpOptions).pipe(
    return this.http.post<NewTask>(`${API_URL}/task`, newtask, httpOptions).pipe(
      tap((newtask: NewTask) => this.log(`added task w/ id=${newtask.id}`)),
      catchError(this.handleError<NewTask>('addHero'))
    );
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
