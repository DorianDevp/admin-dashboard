import { Component } from '@angular/core';
import { Contact, contacts } from './contact-data';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatCard } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'shared-ui-contacts',
  standalone: true,
  imports: [
    CommonModule, 
    MatCardModule, 
    MatCard,
    MatButtonModule, 
  ],
  templateUrl: './contacts.component.html'
})
export class ContactsComponent {

  contactsData: Contact[];

  constructor() {
    this.contactsData = contacts;
  }
}
