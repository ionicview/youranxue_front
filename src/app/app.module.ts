import { MessageService } from './services/message.service';
import { ToastModule } from './typescripts/pro/alerts/toast/toast.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from './typescripts/free';
import { MDBBootstrapModulePro } from './typescripts/pro/index';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { MDBSpinningPreloader } from './typescripts/pro/index';
import { TeacherFormComponent } from './teacher/teacher-form/teacher-form.component';
import { NewCourseComponent } from './teacher/new-course/new-course.component';
import { NavbarComponent } from './navbar.component';
import { CourseListComponent } from './teacher/course-list/course-list.component';
import { ViewClassStudentComponent } from './teacher/view-class-student/view-class-student.component';
import { routing } from './app.routing.module';
import { LoginComponent } from './home/login/login.component';
import { HomeComponent } from './home/home/home.component';
import { LatestResourcesComponent } from './home/latest-resources/latest-resources.component';
import { HeaderComponent } from './home/header/header.component';
import { AllResourcesComponent } from './home/all-resources/all-resources.component';
import { TreeModule } from 'angular-tree-component';
import {TransCourseStatus} from './model/enum/trans.course.status';
import { NewTestComponent } from './teacher/new-test/new-test.component';
import { TestService } from './services/test.service';
import { TestListComponent } from './teacher/test-list/test-list.component';
import { TestQuestionEditComponent } from './teacher/test-question-edit/test-question-edit.component';
import { SampleComponent } from './example/sample/sample.component';
import { BookService } from './services/book/book.service';
import { TreeviewModule } from 'ngx-treeview';
import { StudentFormComponent } from './student/student-form/student-form.component';
import { TeacherListComponent } from './manager/teacher-list/teacher-list.component';
import { NewTeacherComponent } from './manager/new-teacher/new-teacher.component';
import { NewProvinceComponent } from './manager/new-province/new-province.component';
import { NewCityComponent } from './manager/new-city/new-city.component';
import { ProvinceListComponent } from './manager/province-list/province-list.component';
import { CityListComponent } from './manager/city-list/city-list.component';
import { CourseBookListComponent } from './course/courseBook-list/courseBook-list.component';
import { CourseDetailService } from './services/courseDetail/courseDetail.service';
import { CourseService } from './services/course/course.service';
import { CourseDetailListComponent } from './course/courseDetail-list/courseDetail-list.component';
import { CourseMainComponent } from './course/courseMain/courseMain.component';
import { HomeworkListComponent } from './homework/homework-list/homework-list.component';
import { HomeworkDetailListComponent } from './homework/homeworkDetail-list/homeworkDetail-list.component';
import { HomeworkMainComponent } from './homework/homeworkMain/homeworkMain.component';
@NgModule({
  declarations: [
    AppComponent,
    TeacherFormComponent,
    NewCourseComponent,
    NavbarComponent,
    CourseListComponent,
    ViewClassStudentComponent,
    LoginComponent,
    HomeComponent,
    LatestResourcesComponent,
    HeaderComponent,
    AllResourcesComponent,
    TransCourseStatus,
    NewTestComponent,
    TestListComponent,
    TestQuestionEditComponent,
    SampleComponent,
    StudentFormComponent,
    TeacherListComponent,
    NewTeacherComponent,
    NewProvinceComponent,
    NewCityComponent,
    ProvinceListComponent,
    CityListComponent,
    CourseBookListComponent,
    CourseDetailListComponent,
    CourseMainComponent,
    HomeworkListComponent,
    HomeworkDetailListComponent,
    HomeworkMainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    TreeModule,
    routing,
    TreeviewModule.forRoot(),
    ToastModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    MDBBootstrapModulePro.forRoot(),
    AgmCoreModule.forRoot({
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
      apiKey: 'Your_api_key'
    })
  ],
  providers: [MDBSpinningPreloader, CourseService, TestService,MessageService,BookService,CourseDetailService],
  bootstrap: [AppComponent],
  schemas:      [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
