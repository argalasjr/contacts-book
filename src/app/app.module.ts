import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AddContactModule } from './add-contact/add-contact.module';
import { DetailContactModule } from './detail-contact/detail-contact.module';
import { ContactsBookModule } from './contacts-book/contacts-book.module';
import { contactsReducer } from './state/contacts-book.reducer';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AddContactModule,
    DetailContactModule,
    ContactsBookModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({ contacts: contactsReducer}),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
