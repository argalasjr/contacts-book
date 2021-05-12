import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store'
import { Contact } from '../model/contact.model';
import { addContact } from '../state/contacts-book.actions';
import { selectContacts } from '../state/contacts-book.selectors';
@Component({
  selector: 'app-contacts-book',
  templateUrl: './contacts-book.component.html',
  styleUrls: ['./contacts-book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsBookComponent implements OnInit {
  selected: boolean;
  displayedContact = {} as Contact;
  contacts$ = this.store.pipe(select(selectContacts));
  constructor(private store: Store, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.contacts$.subscribe((val)=> console.log(val))
  }

  onAdd(submittedData): void  {
    this.store.dispatch(addContact({ Contact: submittedData }));
    this.contacts$ = this.store.pipe(select(selectContacts));
  }

  displayContact(contact: Contact): void {
    this.selected = true;
    this.displayedContact = contact;
    this.cd.markForCheck();
  }


}
