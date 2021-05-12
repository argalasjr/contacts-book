import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsBookComponent } from './contacts-book.component';
import { DetailContactModule } from '../detail-contact/detail-contact.module';
import { AddContactModule } from '../add-contact/add-contact.module';



@NgModule({
  declarations: [ContactsBookComponent],
  imports: [
    CommonModule,
    AddContactModule,
    DetailContactModule,
  ],
  exports: [
    ContactsBookComponent
  ]
})
export class ContactsBookModule { }
