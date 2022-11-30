import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { Validators } from './validators';

@Directive({
  selector: '[appPeriod]',
  providers: [{provide: NG_VALIDATORS, useExisting: PeriodDirective, multi: true}]
})
export class PeriodDirective implements Validator {

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return Validators.period(control);
  }
}
