import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class Validators {
    static period(form: AbstractControl): ValidationErrors | null {
        const fromValue = form.get('from')?.value;
        const toValue = form.get('to')?.value;

        if (!fromValue || ! toValue) {
            return null;
        }

        if (fromValue > toValue) {
            return {
                period: { fromValue: fromValue, toValue: toValue}
            }
        }

        return null;
    }

    static minDate(min: Date): ValidatorFn {
        return function(form: AbstractControl): ValidationErrors | null {
            if (!form.value) {
                return null;
            }
            const dateValue = new Date(form.value)            

            if (dateValue < min) {
                return {minDate: {value: form.value, min: min}}
            }

            return null;
        } 
    }
}
