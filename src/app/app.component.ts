import { Component } from '@angular/core';
import { CONTACTS } from 'src/data/contact-provider';
import { Contact } from 'src/model/contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  current = CONTACTS[0];

  setCurrent(contact: Contact) {
    this.current = contact;
  }
}
