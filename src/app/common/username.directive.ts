import { NG_VALIDATORS, AbstractControl, Validator, ValidationErrors } from '@angular/forms';
import { Directive } from '@angular/core';
import { UserService } from '../registration/user.service';

@Directive({
    selector: '[usernameMatch]',
    providers: [{ provide: NG_VALIDATORS, useExisting: UsernameMatchDirective, multi: true }]
})
export class UsernameMatchDirective implements Validator {    
    constructor(private userService: UserService) {}

    validate(control: AbstractControl): { [key: string]: any } | null {
        return this.userService.getFormUser(control.value)
            .subscribe(resp => {
                if (control.value.length >= 5) {
                        if (resp.username === control.value) {
                            return control.setErrors({ usernameMatch: true })
                        } else {
                            return control.setErrors(null)
                        };
                    }
                    return null
                }
            )
    }
}               