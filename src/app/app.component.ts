import { Component } from '@angular/core';
import { Contact } from 'src/model/contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  contact: Contact;

  constructor() {
    this.contact = {
      firstName: 'Prénom',
      lastName: 'Nom de famille',
      email: 'nom@example.com',
      birthdate: new Date('1975-11-28'),
      priority: 10,
    }
  }
}
