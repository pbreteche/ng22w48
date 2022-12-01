import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Contact } from 'src/model/contact';
import { ContactListService } from './contact-list.service';

@Injectable({
  providedIn: 'root'
})
export class ContactResolver implements Resolve<Contact|undefined> {
  constructor(private contactList: ContactListService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Contact|undefined> {
    const idParam = route.paramMap.get('id');
       
    if (idParam != null) {
      return this.contactList.find(+idParam);
    }

    return of(undefined)
  }
}
