import { NG_VALIDATORS, AbstractControl, Validator, ValidationErrors } from '@angular/forms';
import { Directive, Input } from '@angular/core';
import { UserService } from '../registration/user.service';

// import { Directive, Input } from '@angular/core';
// import { NG_VALIDATORS, Validator, ValidationErrors, FormGroup, NG_ASYNC_VALIDATORS, AsyncValidator } from '@angular/forms';
// import { UsernameValidator } from './custom.validators';
// import { Observable } from 'rxjs';


// @Directive({
//     selector: '[usernameMatch]',
//     providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: UsernameMatchDirective, multi: true }]
// })
// export class UsernameMatchDirective implements AsyncValidator  {
//     @Input('usernameMatch') usernameMatch: string[] = [];

//     validate(formGroup: FormGroup): Observable<ValidationErrors | null> {
//         return UsernameValidator(this.usernameMatch[0])(formGroup);
//     }
// }

@Directive({
    selector: '[usernameMatch]',
    providers: [{ provide: NG_VALIDATORS, useExisting: UsernameMatchDirective, multi: true }]
})
export class UsernameMatchDirective implements Validator {
    @Input('UsernameMatch') usernameMatch: string;
    
    constructor(private userService: UserService) {}

    validate(control: AbstractControl): ValidationErrors {
        return this.userService.getFormUser(control.value)
            .subscribe(resp => {
                if (!resp) {
                    return null
                } else {
                    if (resp.username === control.value) {
                        console.log(true)
                        return { 'alreadyExist': true }
                    } else {
                        return null
                    }
                }
            }

        )
    }
}               