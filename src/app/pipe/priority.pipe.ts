import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from 'src/model/contact';

@Pipe({
  name: 'priority',
  pure: false
})
export class PriorityPipe implements PipeTransform {

  transform(contacts: Contact[]|null, level = 0): Contact[]|undefined {
    return contacts?.filter((c: Contact) => c.priority && c.priority > level);
  }

}
