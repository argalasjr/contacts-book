import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AddContactModule } from './add-contact/add-contact.module';
import { AppComponent } from './app.component';
import { ContactsBookModule } from './contacts-book/contacts-book.module';
import { DetailContactModule } from './detail-contact/detail-contact.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        DetailContactModule,
        AddContactModule,
        ContactsBookModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
