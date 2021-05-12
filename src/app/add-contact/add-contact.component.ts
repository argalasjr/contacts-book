import { Component, Output, EventEmitter } from '@angular/core';
import { Contact } from '../model/contact.model';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent{
  @Output() contactAdded: EventEmitter<Contact> = new EventEmitter();
  inputContact = {} as Contact;
  addContact(){
    this.contactAdded.emit(this.inputContact);
  }

}
