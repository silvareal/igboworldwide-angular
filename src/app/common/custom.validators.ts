import { ValidatorFn, AbstractControl } from '@angular/forms';

// import { AbstractControl } from '@angular/forms';

// export function usernameValidator(control: AbstractControl) {
    // this.userService.getUser().subscribe(
    //     data => {
    //         if (control.value.includes(data.username)) {
    //             return { urlValid: true };
    //         }
    //         return null
    //     },
    //     err => {
    //         console.log("Error occured.")
    //     }
    // );
    // if (!control.value.startsWith('https') || !control.value.includes('.me')) {
    //     return { urlValid: true };
    // }
    // return null;
// }

export function usernameValidator(control: AbstractControl): { [key: string]: any } | null {
        return this.userService.getUser().subscribe(
            data => {
                if (control.value.includes(data.username)) {
                    console.log(data.username);
                    return true;
                }
                return null
            },
            err => {
                console.log("Error occured.")
            }
        )
}

// import { FormGroup } from '@angular/forms';

// // custom validator to check that two fields match
// export function UsernameValidator(controlName: string) {
//     return (formGroup: FormGroup) => {
//         const control = formGroup.controls[controlName];
        
//         this.userService.getUser().subscribe(
//             data => {
//                 if (control.value.includes(data.username)) {
//                     return true;
//                 }
//                 return null
//             },
//             err => {
//                 console.log("Error occured.")
//             }
//         );
//         return null;
//     }
// }

