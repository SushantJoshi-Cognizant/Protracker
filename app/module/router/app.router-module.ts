import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from '../login/login.component';
import {AppComponent} from '../mainModule/app.component';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {RegistrationComponent} from '../registration/registration.component';
import {IssuesComponent} from '../issues/issues.component';
import {ProjectsComponent} from '../projects/projects.component';
import {NotesComponent} from '../notes/notes.component';
import {ForgotPasswordComponent} from '../managePassword/forgot-password.component';
import {ServerErrorComponent} from '../error/server-error.component';

const routes : Routes = [
    {path: '', component: AppComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegistrationComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'issues', component: IssuesComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'notes', component: NotesComponent},
    {path: 'forgotPassword', component: ForgotPasswordComponent},
    {path: 'error', component: ServerErrorComponent}
]

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})

export class AppRoutingModule {}