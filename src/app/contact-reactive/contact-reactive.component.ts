import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/model/contact';
import { ContactCurrentService } from '../contact-current.service';
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
    birthdate: new FormControl(''),
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
    private contactList: ContactListService,
    private contactCurrent: ContactCurrentService
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
    this.contactCurrent.contact = contact;
    this.form.reset();
  }
}
