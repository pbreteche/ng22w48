import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from 'src/model/contact';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {
  current: Contact|undefined;
  constructor(
    private activatedRoute: ActivatedRoute,
    @Inject(LOCALE_ID)
    public defaultLocale: string
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({contact}) => this.current = contact)
  }

  // Les classes peuvent être retournée au format
  // Liste de chaines séparées par des espaces
  longName(): string {
    return (this.current?.firstName?.length || 0) > 10 ? 'long' : 'short';
  }

  // Un objet, chaque propriété représente une classe
  // la valeur booléenne détermine si la classe est présente ou non
  longName2() {
    return {
      long: (this.current?.firstName?.length || 0) > 10,
      short: (this.current?.firstName?.length || 0) <= 10,
    }
  }
}
