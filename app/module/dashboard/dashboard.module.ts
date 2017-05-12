import {NgModule} from '@angular/core';

import {AppHeaderModule} from '../appHeader/header.module';
import {DashboardComponent} from './dashboard.component';
import {DashboardIssues} from './dashboard-issues.component';
import {DashboardProjects} from './dashboard-projects.component';


@NgModule({
    imports:        [AppHeaderModule],
    declarations:   [DashboardComponent,DashboardIssues,DashboardProjects],
    providers:      [],
    bootstrap:      [DashboardComponent],
    exports:        [DashboardComponent]
})

export class DashboardModule{}