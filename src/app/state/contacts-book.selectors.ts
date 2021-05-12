import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AppState } from "../state/app.state";
import { Contact } from "../model/contact.model";
 
export const selectContacts = createSelector(
  (state: AppState) => state.contacts,
  (contacts: Array<Contact>) => contacts
);