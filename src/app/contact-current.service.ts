import { Injectable } from '@angular/core';
import { Contact } from 'src/model/contact';
import { ContactListService } from './contact-list.service';

@Injectable({
  providedIn: 'root'
})
export class ContactCurrentService {
  contact?: Contact;
}
