import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from 'src/model/contact';
import { ContactCurrentService } from './contact-current.service';

@Injectable({
  providedIn: 'root'
})
export class ContactListService {
  private _contacts: Contact[] = [];

  constructor(
    contactCurrent: ContactCurrentService,
    private http: HttpClient
  ) {
    this.http.get('assets/data.json')
      .subscribe((data) => {
        this._contacts.push(...data as Contact[]);
        contactCurrent.contact = this._contacts[0];
      })
  }

  push(contact: Contact)  {
    this._contacts.push(contact);
  }

  get contacts(): Contact[] {
    return this._contacts;
  }
}
