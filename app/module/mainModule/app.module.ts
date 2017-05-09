// Angular dependencies
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

// Application Components Dependencies
import {AppComponent} from './app.component';

// Application Module Dependencies
import {LoginModule} from '../login/login.module';
import {AppRoutingModule} from '../router/app.router-module';
import {DashboardModule} from '../dashboard/dashboard.module';
import {RegistrationModule} from '../registration/registration.module';
import {IssuesModule} from '../issues/issues.module';
import {ProjectsModule} from '../projects/projects.module';
import {NotesModule} from '../notes/notes.module';
import {ManagePasswordModule} from '../managePassword/app.manage-password.module';


// Application Service Dependencies
import {CommonAppService} from '../../sharedService/app.common-service';


@NgModule({
    imports: [BrowserModule,LoginModule,AppRoutingModule,
                DashboardModule,RegistrationModule,
                IssuesModule,ProjectsModule,NotesModule,
                ManagePasswordModule],
    declarations: [AppComponent],
    providers: [CommonAppService],
    bootstrap: [AppComponent]
})

export class AppModule {}