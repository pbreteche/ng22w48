import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, of } from 'rxjs';
import { Contact } from 'src/model/contact';
import { ContactCurrentService } from './contact-current.service';

@Injectable({
  providedIn: 'root'
})
export class ContactListService {
  private _contacts: Contact[] = [];
  private _subject = new BehaviorSubject<Contact[]>([]);

  constructor(
    contactCurrent: ContactCurrentService,
    private http: HttpClient
  ) {
    this.http.get('assets/data.json', {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'my-auth-token'
      })
    })
      .pipe(catchError((error) => {
        console.log(error);
        return of([])
      }))
      .subscribe((data) => {
        this._contacts.push(...data as Contact[]);
        this._subject.next(this._contacts);
        contactCurrent.contact = this._contacts[0];
      })
  }

  push(contact: Contact)  {
    this._contacts.push(contact);
    this._subject.next(this._contacts);
    this.http.post('/contact', contact)
      .subscribe(data => console.log(data));
  }

  get contacts(): Observable<Contact[]> {
    return this._subject.asObservable();
  }
}
