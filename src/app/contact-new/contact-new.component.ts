import { Component } from '@angular/core';
import { Contact } from 'src/model/contact';
import { ContactCurrentService } from '../contact-current.service';
import { ContactListService } from '../contact-list.service';

@Component({
  selector: 'app-contact-new',
  templateUrl: './contact-new.component.html',
  styleUrls: ['./contact-new.component.scss']
})
export class ContactNewComponent {
  contact = new Contact();

  constructor(
    private contactList: ContactListService,
    private contactCurrent: ContactCurrentService
  ) {}

  save() {
    this.contactList.push(this.contact);
    this.contactCurrent.contact = this.contact;
    this.contact = new Contact();
  }
}
