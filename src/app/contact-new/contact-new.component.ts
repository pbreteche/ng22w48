import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/model/contact';
import { ContactListService } from '../contact-list.service';

@Component({
  selector: 'app-contact-new',
  templateUrl: './contact-new.component.html',
  styleUrls: ['./contact-new.component.scss']
})
export class ContactNewComponent {
  contact = new Contact();
  from = '';
  to = '';

  constructor(
    private contactList: ContactListService,
    private router: Router
  ) {}

  save() {
    this.contactList.push(this.contact).subscribe(
      id => this.router.navigate(['/contact/detail', id])
    );
    this.contact = new Contact();
  }
}
