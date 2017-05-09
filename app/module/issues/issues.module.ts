import {NgModule} from '@angular/core';

import {IssuesComponent} from './issues.component';
import {AppHeaderModule} from '../appHeader/header.module';

@NgModule({
    imports:        [AppHeaderModule],
    declarations:   [IssuesComponent],
    providers:      [],
    bootstrap:      [IssuesComponent],
    exports:        [IssuesComponent]
})

export class IssuesModule{}