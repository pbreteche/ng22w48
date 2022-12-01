import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom, map, Observable, of } from 'rxjs';
import { Contact } from 'src/model/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactListService {
  private _contacts: Contact[] = [];
  private _subject = new BehaviorSubject<Contact[]>([]);
  private _nextId = 133;

  constructor(
    private http: HttpClient
  ) {
    
    firstValueFrom(this.http.get('assets/data.json', {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    }))
      .then(data => {
        this._contacts.push(...data as Contact[]);
        this._subject.next(this._contacts);
      }).catch((error) => {
        console.log(error);
      });
  }

  push(contact: Contact): Observable<number>  {
    contact.id = this._nextId;
    ++this._nextId;
    this._contacts.push(contact);
/*    this.http.post('/contact', contact)
      .subscribe(data => {
        console.log('http post', data);
        this._subject.next(this._contacts);
      });
*/    
      return of(contact.id);
  }

  get contacts(): Observable<Contact[]> {
    return this._subject.asObservable();
  }

  find(id: number): Observable<Contact|undefined> {
    return this._subject.pipe(
      map((contacts: Contact[]) => contacts.find(
        (contact: Contact) => contact.id == id
      ))
    );
  }
}
