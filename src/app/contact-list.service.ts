import { Injectable } from '@angular/core';
import { Contact } from 'src/model/contact';
import { ContactCurrentService } from './contact-current.service';

@Injectable({
  providedIn: 'root'
})
export class ContactListService {
  private _contacts: Contact[] = [
    {
      firstName: 'Prénom',
      lastName: 'Nom de famille',
      email: 'nom@example.com',
      birthdate: new Date('1975-11-28'),
      priority: 10,
    },
    {
      firstName: 'Alice',
      lastName: 'Dupont',
      email: 'adupont@example.com',
      birthdate: new Date('1994-03-12'),
      priority: 5,
    },
    {
      firstName: 'Bob',
      lastName: 'Leponge',
      email: 'bleponge@example.com',
      birthdate: new Date('1983-07-01'),
      priority: 5,
    },
  ];

  constructor(contactCurrent: ContactCurrentService) {
    contactCurrent.contact = this._contacts[0];
  }

  push(contact: Contact)  {
    this._contacts.push(contact);
  }

  get contacts(): Contact[] {
    return this._contacts;
  }
}
