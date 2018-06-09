import { ViewClassStudentComponent } from './teacher/view-class-student/view-class-student.component';
import { NewCourseComponent } from './teacher/new-course/new-course.component';

import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from './home/login/login.component';
import { HomeComponent } from './home/home/home.component';
import { AllResourcesComponent } from './home/all-resources/all-resources.component';
import { CourseListComponent } from './teacher/course-list/course-list.component';
import { NewTestComponent } from './teacher/new-test/new-test.component';
import { TestListComponent } from './teacher/test-list/test-list.component';
import { TestQuestionEditComponent } from './teacher/test-question-edit/test-question-edit.component';
import { SampleComponent } from './example/sample/sample.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'sample', component: SampleComponent },
    { path: 'all-resources', component: AllResourcesComponent },
    { path: 'login', component: LoginComponent },
    { path: 'new-course', component: NewCourseComponent },
    { path: 'course-list', component: CourseListComponent },
    { path: 'test-list', component: TestListComponent },
    { path: 'new-test', component: NewTestComponent },
    { path: 'test-question-edit', component: TestQuestionEditComponent },
    { path: 'view-class-student', component: ViewClassStudentComponent }

];

export const routing = RouterModule.forRoot(routes);
