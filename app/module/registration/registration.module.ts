import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {RegistrationComponent} from './registration.component';

@NgModule({
    imports:        [RouterModule],
    declarations:   [RegistrationComponent],
    providers:      [],
    bootstrap:      [RegistrationComponent],
    exports:        [RegistrationComponent]
})

export class RegistrationModule{}