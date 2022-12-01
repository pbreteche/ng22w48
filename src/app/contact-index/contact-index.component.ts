import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Contact } from 'src/model/contact';
import { ContactListService } from '../contact-list.service';

@Component({
  selector: 'app-contact-index',
  templateUrl: './contact-index.component.html',
  styleUrls: ['./contact-index.component.scss']
})
export class ContactIndexComponent {
  constructor(
    private contactList: ContactListService
  ) {}

  get contacts$(): Observable<Contact[]> {
    return this.contactList.contacts
      .pipe(
        map((contacts: Contact[]) => contacts.filter(
          (c: Contact) => c.priority && c.priority > 0
        ))
      )
    ;
  }
}
