import { createReducer, on, Action } from '@ngrx/store';
import { Contact } from '../model/contact.model';

import { addContact, retrievedContactList } from './contacts-book.actions';

export const initialState: ReadonlyArray<Contact> = [   { 
  firstName: 'Dusan',
  lastName: 'Argalas',
  phone: '12345',
  email: 't@t.com',
  address: 'hollywood'
},
{ 
  firstName: 'Peter',
  lastName: 'Argalas',
  phone: '987654321',
  email: 'test@test.com',
  address: 'Austria'
}, ];

export const contactsReducer = createReducer(
  initialState,
  on(addContact, (state, { Contact }) => {
    //if (Contact != undefined) return state;
    return [...state, Contact];
  })
);