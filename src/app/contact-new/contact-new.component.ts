import { Component } from '@angular/core';
import { Contact } from 'src/model/contact';

@Component({
  selector: 'app-contact-new',
  templateUrl: './contact-new.component.html',
  styleUrls: ['./contact-new.component.scss']
})
export class ContactNewComponent {
  contact = new Contact();

  save() {
    // prendre en charge l'enregistrement de "this.contact"
    this.contact = new Contact();
  }
}
