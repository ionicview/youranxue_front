import { QuestionService } from './services/master/question/question.service';
import { CourseListComponent } from './teacher/course-list/course-list.component';
import { TransChoiceOption } from './model/enum/trans.choice.option';
import { MessageService } from './services/message.service';
import { ToastModule } from './typescripts/pro/alerts/toast/toast.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from './typescripts/free';
import { MDBBootstrapModulePro } from './typescripts/pro';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { MDBSpinningPreloader } from './typescripts/pro';
import { TeacherFormComponent } from './teacher/teacher-form/teacher-form.component';
import { NewCourseComponent } from './teacher/new-course/new-course.component';
import { NavbarComponent } from './navbar.component';
import { ViewClassStudentComponent } from './teacher/view-class-student/view-class-student.component';
import { routing } from './app.routing.module';
import { CourseService } from './services/course.service';
import { LoginComponent } from './home/login/login.component';
import { HomeComponent } from './home/home/home.component';
import { LatestResourcesComponent } from './home/latest-resources/latest-resources.component';
import { HeaderComponent } from './home/header/header.component';
import { AllResourcesComponent } from './home/all-resources/all-resources.component';
import { TreeModule } from 'angular-tree-component';
import { TransCourseStatus } from './model/enum/trans.course.status';
import { NewTestComponent } from './teacher/new-test/new-test.component';
import { TestService } from './services/test.service';
import { TestListComponent } from './teacher/test-list/test-list.component';
import { TestQuestionEditComponent } from './teacher/test-question-edit/test-question-edit.component';
import { SampleComponent } from './example/sample/sample.component';
import { BookService } from './services/book/book.service';
import { TreeviewModule } from 'ngx-treeview';
import { ChartsTestComponent } from './charts/charts-test/charts-test.component';
import { NewResourceComponent } from './resources/new-resource/new-resource.component';
import { TestQuestionPreviewComponent } from './teacher/test-question-preview/test-question-preview.component';
import { PolarAreaChartComponent } from './charts/polar-area-chart/polar-area-chart.component';
import { RadarChartComponent } from './charts/radar-chart/radar-chart.component';
import { KatexModule } from 'ng-katex';
import { MathjaxDirective } from './directive/mathjax.directive';
import { YouKatexComponent } from './youtex/you-katex/you-katex.component';
import { YouChoiceComponent } from './youtex/you-choice/you-choice.component';
import { YouChoiceOptionlistComponent } from './youtex/you-choice-optionlist/you-choice-optionlist.component';
import { YouChoiceOptionComponent } from './youtex/you-choice-option/you-choice-option.component';
import { YouImgComponent } from './youimg/you-img/you-img.component';
import { YouFillblankComponent } from './youtex/you-fillblank/you-fillblank.component';
import { YouShortanswerComponent } from './youtex/you-shortanswer/you-shortanswer.component';
import { QuestionMstComponent } from './master/question-mst/question-mst.component';
import { ChoiceQuestionComponent } from './master/choice-question/choice-question.component';
import { FillblankQuestionComponent } from './master/fillblank-question/fillblank-question.component';
import { ShortanswerQuestionComponent } from './master/shortanswer-question/shortanswer-question.component';
import { YouSingleChoiceComponent } from './youtex/you-single-choice/you-single-choice.component';
import { ChoiceOptionComponent } from './master/choice-question/choice-option/choice-option.component';
import { ShortanswerSubQuestionComponent } from './master/shortanswer-sub-question/shortanswer-sub-question.component';

@NgModule({
  declarations: [
    AppComponent,
    TeacherFormComponent,
    NewCourseComponent,
    NavbarComponent,
    ViewClassStudentComponent,
    LoginComponent,
    HomeComponent,
    LatestResourcesComponent,
    HeaderComponent,
    AllResourcesComponent,
    TransCourseStatus,
    TransChoiceOption,
    NewTestComponent,
    TestListComponent,
    TestQuestionEditComponent,
    SampleComponent,
    ChartsTestComponent,
    PolarAreaChartComponent,
    NewResourceComponent,
    TestQuestionPreviewComponent,
    RadarChartComponent,
    NewResourceComponent,
    CourseListComponent,
    MathjaxDirective,
    YouKatexComponent,
    YouChoiceComponent,
    YouChoiceOptionlistComponent,
    YouChoiceOptionComponent,
    YouImgComponent,
    YouFillblankComponent,
    YouShortanswerComponent,
    QuestionMstComponent,
    ChoiceQuestionComponent,
    FillblankQuestionComponent,
    ShortanswerQuestionComponent,
    YouSingleChoiceComponent,
    ChoiceOptionComponent,
    ShortanswerSubQuestionComponent
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
    KatexModule,
    TreeviewModule.forRoot(),
    ToastModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    MDBBootstrapModulePro.forRoot(),
    AgmCoreModule.forRoot({
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
      apiKey: 'Your_api_key'
    })
  ],
  providers: [MDBSpinningPreloader, CourseService, TestService, MessageService, BookService, QuestionService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
