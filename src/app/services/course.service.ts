import { BaseService } from './base.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewCourse } from '../model/course/new.course';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { InitNewCourse } from '../model/course/init.new.course';
import { CourseViewVO } from '../model/course/course.view.vo';

@Injectable({
  providedIn: 'root'
})

export class CourseService extends BaseService {

  constructor(private http: HttpClient, messageService: MessageService) {
    super(messageService);
  }

  createNewCourse(newCourse: NewCourse): Observable<NewCourse> {

    // return this.http.post<newCourse>('http://localhost:8080/public', newCourse, httpOptions).pipe(
    return this.http.put<NewCourse>(`${this.API_URL}/course/newCourse`, newCourse, this.httpOptions).pipe(
      tap((insertCount) => this.log(`added course w/ count=${insertCount}`)),
      catchError(this.handleError<NewCourse>('new course'))
    );
  }

  initNewCourse(): Observable<InitNewCourse> {
    return this.http.get<InitNewCourse>(`${this.API_URL}/course/initNewCourse`);

  }

  getAllCourseList(): Observable<CourseViewVO[]> {
    return this.http.get<CourseViewVO[]>(`${this.API_URL}/course/getAllCourse`);
  }

}
