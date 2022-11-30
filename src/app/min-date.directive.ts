import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { Validators } from './validators';

@Directive({
  selector: '[appMinDate]',
  providers: [{provide: NG_VALIDATORS, useExisting: MinDateDirective, multi: true}]
})
export class MinDateDirective implements Validator{
  @Input('appMinDate')
  min = '';

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const minDate = new Date(this.min);

    return Validators.minDate(minDate)(control)
  }
}
