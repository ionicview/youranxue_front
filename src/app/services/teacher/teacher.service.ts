import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TeacherViewVO } from '../../model/teacher/teacher.view.vo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from '../message.service';
import { environment } from 'environments/environment';
import { NewTeacher } from '../../model/teacher/new.teacher';
import { InitNewTeacher } from '../../model/teacher/init.new.teacher';
import { catchError, tap } from 'rxjs/operators';
const API_URL = environment.apiUrl;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
  
    createNewTeacher(newTeacher: NewTeacher): Observable<NewTeacher> {
      alert("In teacher service");
      //return this.http.post<newTeacher>('http://localhost:8080/public', newTeacher, httpOptions).pipe(
      return this.http.put<NewTeacher>(`${API_URL}/teacher/newTeacher`, newTeacher, httpOptions).pipe(
        tap((insertCount) => this.log(`added teacher w/ count=${insertCount}`)),
        catchError(this.handleError<NewTeacher>('new teacher'))
      );
    }

    initNewTeacher(): Observable<InitNewTeacher> {
      return this.http.get<InitNewTeacher>(`${API_URL}/teacher/initNewTeacher`);
  
    }
  getAllTeacherList(): Observable<TeacherViewVO[]> {
    return this.http.get<TeacherViewVO[]>(`${API_URL}/teacher/getAllTeacher`);
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
