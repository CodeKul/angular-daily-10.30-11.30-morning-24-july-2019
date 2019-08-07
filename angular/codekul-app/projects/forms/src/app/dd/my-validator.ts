import { AbstractControl, ValidationErrors } from '@angular/forms';

export class MyValidator {

    static isStFromA(c: AbstractControl): ValidationErrors | null {
        if (c.value.charAt(0) == 'a' || c.value.charAt(0) == 'A') {
            return null
        }
        return {
            isAFailed: true
        }
    }
}