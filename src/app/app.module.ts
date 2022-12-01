import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactIndexComponent } from './contact-index/contact-index.component';
import { ContactNewComponent } from './contact-new/contact-new.component';
import { ContactReactiveComponent } from './contact-reactive/contact-reactive.component';
import { PeriodDirective } from './period.directive';
import { MinDateDirective } from './min-date.directive';
import { AuthInterceptor } from './auth.interceptor';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ContactDetailComponent,
    ContactIndexComponent,
    ContactNewComponent,
    ContactReactiveComponent,
    PeriodDirective,
    MinDateDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: ContactIndexComponent, pathMatch: 'full'},
      {path: 'contact/nouveau', component: ContactNewComponent},
      {path: 'contact/detail/:id', component: ContactDetailComponent},
      {path: '**', redirectTo: ''},
    ]),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
