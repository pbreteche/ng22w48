import { AbstractControl, FormGroup, ValidationErrors } from "@angular/forms";

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
}
