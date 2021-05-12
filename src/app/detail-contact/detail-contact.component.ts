import { Component, Input } from '@angular/core';
import { Contact } from '../model/contact.model';

@Component({
  selector: 'app-detail-contact',
  templateUrl: './detail-contact.component.html',
  styleUrls: ['./detail-contact.component.scss']
})
export class DetailContactComponent{
  @Input() contact: Contact;
}
