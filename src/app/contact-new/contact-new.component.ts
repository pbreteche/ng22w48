import { Component } from '@angular/core';
import { Contact } from 'src/model/contact';
import { ContactListService } from '../contact-list.service';

@Component({
  selector: 'app-contact-new',
  templateUrl: './contact-new.component.html',
  styleUrls: ['./contact-new.component.scss']
})
export class ContactNewComponent {
  contact = new Contact();

  constructor(
    private contactList: ContactListService
  ) {}

  save() {
    this.contactList.contacts.push(this.contact);
    this.contact = new Contact();
  }
}
