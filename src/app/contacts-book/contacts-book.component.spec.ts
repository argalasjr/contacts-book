import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Contact } from '../model/contact.model';
import { selectContacts } from '../state/contacts-book.selectors';
import * as fromReducer from '../state/contacts-book.reducer';
import { ContactsBookComponent } from './contacts-book.component';
import { addContact } from '../state/contacts-book.actions';

describe('ContactsBookComponent', () => {
  let component: ContactsBookComponent;
  let fixture: ComponentFixture<ContactsBookComponent>;
  let store: MockStore;

  const initialState: ReadonlyArray<Contact> = [ 
  { 
    firstName: 'Peter',
    lastName: 'Argalas',
    phone: '987654321',
    email: 'test@test.com',
    address: 'Austria'
  }];

  // mockContactsSelector.setResult([
  //   {
  //     firstName: 'Dusan',
  //     lastName: 'Argalas',
  //     phone: '12345',
  //     email: 't@t.com',
  //     address: 'hollywood'
  //   },
  //   { 
  //     firstName: 'Peter',
  //     lastName: 'Argalas',
  //     phone: '987654321',
  //     email: 'test@test.com',
  //     address: 'Austria'
  //   },
  // ]);
   

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsBookComponent ],
      imports: [
        StoreModule.forRoot({})
      ],
      providers: [
        provideMockStore({ initialState }),
      ]
    })
    .compileComponents();
    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  describe('ContactsReducer', () => {
    describe('Initial state', () => {
      it('should return the default state', () => {
        const action = {
          type: 'Unknown',
        };
        const state = fromReducer.contactsReducer(initialState, action);
   
        expect(state).toBe(initialState);
      });
      it('initial state should contain one contact', () => {
        const action = {
          type: 'Unknown',
        };
        const state = fromReducer.contactsReducer(initialState, action);
        expect(state.length).toEqual(1);
      });
      it("initial state after add contact should contain two contacts", () => {
        const newContact =  { 
          firstName: 'Dusan',
          lastName: 'Argalas',
          phone: '12345',
          email: 't@t.com',
          address: 'hollywood'
        };
        const addAction = addContact({Contact: newContact})
        const state = fromReducer.contactsReducer(initialState, addContact);
        expect(state.length).toEqual(2);
      });
    });
  });
});
