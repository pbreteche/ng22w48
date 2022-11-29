import { Component } from '@angular/core';
import { Contact } from 'src/model/contact';
import { ContactCurrentService } from '../contact-current.service';
import { ContactListService } from '../contact-list.service';

@Component({
  selector: 'app-contact-index',
  templateUrl: './contact-index.component.html',
  styleUrls: ['./contact-index.component.scss']
})
export class ContactIndexComponent {
  constructor(
    private contactList: ContactListService,
    private contactCurrent: ContactCurrentService
  ) {}

  get contacts(): Contact[] {
    return this.contactList.contacts;
  }

  setCurrent(contact: Contact) {
    this.contactCurrent.contact = contact;
  }
}
