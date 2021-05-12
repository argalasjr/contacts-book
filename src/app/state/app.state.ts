import { Contact } from "../model/contact.model";

export interface AppState {
  contacts: ReadonlyArray<Contact>;
  collection: ReadonlyArray<string>;
}