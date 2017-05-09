import {NgModule} from '@angular/core';

import {AppHeaderModule} from '../appHeader/header.module';
import {DashboardComponent} from './dashboard.component';


@NgModule({
    imports:        [AppHeaderModule],
    declarations:   [DashboardComponent],
    providers:      [],
    bootstrap:      [DashboardComponent],
    exports:        [DashboardComponent]
})

export class DashboardModule{}