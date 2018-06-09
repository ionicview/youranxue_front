import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NewCourse } from '../model/course/new.course';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { InitNewCourse } from '../model/course/init.new.course';
import { CourseViewVO} from '../model/course/course.view.vo';
const API_URL = environment.apiUrl;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  createNewCourse(newCourse: NewCourse): Observable<NewCourse> {
    alert("In course service");
    //return this.http.post<newCourse>('http://localhost:8080/public', newCourse, httpOptions).pipe(
    return this.http.put<NewCourse>(`${API_URL}/course/newCourse`, newCourse, httpOptions).pipe(
      tap((insertCount) => this.log(`added course w/ count=${insertCount}`)),
      catchError(this.handleError<NewCourse>('new course'))
    );
  }

  initNewCourse(): Observable<InitNewCourse> {
    return this.http.get<InitNewCourse>(`${API_URL}/course/initNewCourse`);

  }

  getAllCourseList(): Observable<CourseViewVO[]> {
    return this.http.get<CourseViewVO[]>(`${API_URL}/course/getAllCourse`);
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
