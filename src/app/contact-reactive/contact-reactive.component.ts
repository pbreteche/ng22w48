import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/model/contact';
import { ContactListService } from '../contact-list.service';
import { Validators as AppValidators } from '../validators';

@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.scss']
})
export class ContactReactiveComponent {
  form = new FormGroup({
    firstName: new FormControl('', [
      Validators.required
    ]),
    lastName: new FormControl('', [
      Validators.required
    ]),
    birthdate: new FormControl('', [
      AppValidators.minDate(new Date('1900-01-01'))
    ]),
    priority: new FormControl(''),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(/.+@.+/)
    ]),
    period: new FormGroup({
      from: new FormControl(''),
      to: new FormControl(''),
    }, [
      AppValidators.period
    ])
  })

  constructor(
    private contactList: ContactListService
  ) {}

  get firstName() {
    return this.form.get('firstName');
  }

  get email() {
    return this.form.get('email');
  }

  get period() {
    return this.form.get('period');
  }

  save() {
    const contact = this.form.value as Contact;
    this.contactList.push(contact);
    this.form.reset();
  }
}
