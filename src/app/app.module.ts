import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactIndexComponent } from './contact-index/contact-index.component';
import { ContactNewComponent } from './contact-new/contact-new.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactDetailComponent,
    ContactIndexComponent,
    ContactNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
