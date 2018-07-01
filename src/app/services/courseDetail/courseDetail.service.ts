import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CourseDetailViewVO } from '../../model/courseDetail/courseDetail.view.vo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from '../message.service';
import { environment } from 'environments/environment';
import { NewCourseDetail } from '../../model/courseDetail/new.courseDetail';
import { InitNewCourseDetail } from '../../model/courseDetail/init.new.courseDetail';
import { catchError, tap } from 'rxjs/operators';
const API_URL = environment.apiUrl;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CourseDetailService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
  
    createNewCourseDetail(newCourseDetail: NewCourseDetail): Observable<NewCourseDetail> {
      alert("In courseDetail service");
      //return this.http.post<newCourseDetail>('http://localhost:8080/public', newCourseDetail, httpOptions).pipe(
      return this.http.put<NewCourseDetail>(`${API_URL}/course/newCourseDetail`, newCourseDetail, httpOptions).pipe(
        tap((insertCount) => this.log(`added courseDetail w/ count=${insertCount}`)),
        catchError(this.handleError<NewCourseDetail>('new courseDetail'))
      );
    }

    initNewCourseDetail(): Observable<InitNewCourseDetail> {
      return this.http.get<InitNewCourseDetail>(`${API_URL}/course/initNewCourseDetail`);
  
    }
  getAllCourseDetailList(): Observable<CourseDetailViewVO[]> {
    return this.http.get<CourseDetailViewVO[]>(`${API_URL}/course/getAllCourseDetail`);
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
