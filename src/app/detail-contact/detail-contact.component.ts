import { Component, Input } from '@angular/core';
import { Contact } from '../model/contact.model';

@Component({
  selector:'app-detail-contact',
  template: `<pre>{{contact | json}}</pre>`
})
export class DetailContactComponent{
  @Input() contact: Contact;
}
