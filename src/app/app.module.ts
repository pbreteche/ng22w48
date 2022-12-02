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
import { ContactDetailTitleResolver } from './resolver/contact-detail-title.resolver';
import { ContactResolver } from './contact.resolver';
import { LoginStubComponent } from './login-stub/login-stub.component';
import { UserGuard } from './user.guard';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeEs from '@angular/common/locales/es';
import localeDe from '@angular/common/locales/de';
import { TransliteratePipe } from './transliterate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContactDetailComponent,
    ContactIndexComponent,
    ContactNewComponent,
    ContactReactiveComponent,
    PeriodDirective,
    MinDateDirective,
    LoginStubComponent,
    TransliteratePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: ContactIndexComponent, title: 'Carnet d\'adresse'},
      {
        path: 'contact/nouveau',
        component: ContactNewComponent,
        title: 'Nouveau contact',
        canActivate: [UserGuard],
      },
      {
        path: 'contact/detail/:id',
        component: ContactDetailComponent,
        title: ContactDetailTitleResolver,
        resolve: {contact: ContactResolver},
      },
      {path: '**', redirectTo: ''},
    ]),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(localeFr)
    registerLocaleData(localeDe)
    registerLocaleData(localeEs)
  }
 }
