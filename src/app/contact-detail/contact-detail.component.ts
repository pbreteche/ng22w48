import { Component } from '@angular/core';
import { Contact } from 'src/model/contact';
import { ContactCurrentService } from '../contact-current.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent {
  constructor(
    private contactCurrent: ContactCurrentService
  ) {}

  get current(): Contact|undefined {
    return this.contactCurrent.contact;
  }
}
