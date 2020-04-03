import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Contacts } from '../models/contact';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  contacts: any;
  input:any='';
  contactRegistrationStatus: any;
  contact: Contacts = {
    contactId: 0,
    firstName: '',
    lastName: '',
    email: '',
    mobile: ''
  }

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getContactsList();
  }

  getContactsList() {
    this.httpClient.get(environment.baseUrl + 'contacts/list').subscribe(data => {
      this.contacts = data
    })
  }

  addContacts(contact: Contacts) {
    this.httpClient.post(environment.baseUrl + 'contacts/details/add', this.contact).subscribe(data => {
      this.contactRegistrationStatus = data;
      console.log(this.contactRegistrationStatus)
    })
    this.getContactsList();
    this.setContactDetailsToDefault();
   
  }

  
  deleteContacts(contactId: Number) {
    this.httpClient.delete(environment.baseUrl + 'contacts/details/delete/'+contactId).subscribe(data => {
      this.contactRegistrationStatus = data;
      console.log(this.contactRegistrationStatus)
    })
    this.getContactsList();
  }


  updateContacts(contact: Contacts) {

    this.httpClient.put(environment.baseUrl + 'contacts/details/update', this.contact).subscribe(data => {
      this.contactRegistrationStatus = data;
      console.log(this.contactRegistrationStatus)
    })
    this.setContactDetailsToDefault();
    this.getContactsList();
  }

  copyDetailsToedit(contact: Contacts) {
    this.contact = contact;
    console.log(this.contact)
    }
  setContactDetailsToDefault() {
    this.contact.contactId = 0;
    this.contact.firstName = '';
    this.contact.lastName = '';
    this.contact.email = '';
    this.contact.mobile = '';
  }

}
