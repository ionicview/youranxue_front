import { ViewClassStudentComponent } from './teacher/view-class-student/view-class-student.component';
import { NewTaskComponent } from './teacher/new-task/new-task.component';

import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from './home/login/login.component';
import { HomeComponent } from './home/home/home.component';
import { AllResourcesComponent } from './home/all-resources/all-resources.component';
import { TaskListComponent } from './teacher/task-list/task-list.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'all-resources', component: AllResourcesComponent },
    { path: 'login', component: LoginComponent },
    { path: 'new-task', component: NewTaskComponent },
    { path: 'task-list', component: TaskListComponent },
    { path: 'view-class-student', component: ViewClassStudentComponent }


];

export const routing = RouterModule.forRoot(routes);
