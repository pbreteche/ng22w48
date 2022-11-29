import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from 'src/model/contact';
import { ContactListService } from '../contact-list.service';

@Component({
  selector: 'app-contact-index',
  templateUrl: './contact-index.component.html',
  styleUrls: ['./contact-index.component.scss']
})
export class ContactIndexComponent {
  @Output()
  selected = new EventEmitter<Contact>()

  constructor(
    private contactList: ContactListService
  ) {}

  get contacts(): Contact[] {
    return this.contactList.contacts;
  }

  setCurrent(contact: Contact) {
    this.selected.emit(contact);
  }
}
