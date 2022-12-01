import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Contact } from 'src/model/contact';
import { ContactListService } from '../contact-list.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {
  current: Contact|undefined;
  constructor(
    private activatedRoute: ActivatedRoute,
    private contactList: ContactListService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      const idParam = params.get('id');
      if (idParam != null) {
        this.contactList.find(+idParam).subscribe(contact => this.current = contact)
      }
    })
  }
}
