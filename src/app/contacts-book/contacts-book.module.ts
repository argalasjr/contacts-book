import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsBookComponent } from './contacts-book.component';



@NgModule({
  declarations: [ContactsBookComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ContactsBookComponent
  ]
})
export class ContactsBookModule { }
