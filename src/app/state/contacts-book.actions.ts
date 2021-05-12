import { createAction, props } from '@ngrx/store';

export const addContact = createAction(
  '[Contacts Book] Add Contact',
  props<{ Contact }>()
);

export const retrievedContactList = createAction(
  '[Contacts Book List] Retrieve Contacts Success',
  props<{ Contact }>()
);