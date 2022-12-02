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
import { TransliteratePipe } from './pipe/transliterate.pipe';
import { PriorityPipe } from './pipe/priority.pipe';
import { HightlightDirective } from './directive/hightlight.directive';
import { UnlessDirective } from './directive/unless.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
//import {MatFormFieldModule} from '@angular/material/form-field'; 

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
    PriorityPipe,
    HightlightDirective,
    UnlessDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatDividerModule,
    MatListModule,
    MatNativeDateModule,
    //MatFormFieldModule,
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
    BrowserAnimationsModule,
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
