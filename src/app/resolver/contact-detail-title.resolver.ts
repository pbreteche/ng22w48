import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { Contact } from 'src/model/contact';
import { ContactResolver } from '../contact.resolver';

@Injectable({
  providedIn: 'root'
})
export class ContactDetailTitleResolver implements Resolve<string> {
  constructor(private contactResolver: ContactResolver) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string> {
    return this.contactResolver.resolve(route, state).pipe(
      map((contact: Contact|undefined) => `Détail de ${contact?.firstName} ${contact?.lastName}`)
    )
  }
}
