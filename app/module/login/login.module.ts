import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {LoginComponent} from '../login/login.component'

@NgModule({
    imports: [RouterModule],
    declarations: [LoginComponent],
    providers: [],
    bootstrap: [LoginComponent]
})

export class LoginModule{}