import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from 'src/model/contact';

@Component({
  selector: 'app-contact-index',
  templateUrl: './contact-index.component.html',
  styleUrls: ['./contact-index.component.scss']
})
export class ContactIndexComponent {
  @Input()
  contacts: Contact[] = [];
  @Output()
  selected = new EventEmitter<Contact>()

  setCurrent(contact: Contact) {
    this.selected.emit(contact);
  }

}
