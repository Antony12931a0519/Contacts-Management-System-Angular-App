import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Contacts } from '../models/contact';
import { HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  contacts: any;
  input: any = '';
  regex:'/^[a-zA-Z ]{2,30}$/';
  contactRegistrationStatus: any;
  contact: Contacts = {
    contactId: 0,
    firstName: '',
    lastName: '',
    email: '',
    mobile: ''
  }

  constructor(private httpClient: HttpClient,private toastr: ToastrService) { }

  user: any;
  isLoggedIn: any;
  basicCredentials: any;


  ngOnInit(): void {
    this.refreshContacts();
    this.user = localStorage.getItem("user");
    if (this.user != null) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }



  refreshContacts() {

    console.log("Refreshing the contacts");
    setTimeout(() => {
      this.getContactsList();
    }, 1000);

    console.log("Contacts Refreshed.");

  }

  getContactsList() {

    this.toastr.success("Contacts Fetched successfully");

    // const httpHeader= {
    //   headers: {
    //     "Access-Control-Allow-Origin":  "localhost:1231",
		// "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
		// "Access-Control-Allow-Headers": "X-Requested-With,content-type",
    // // "Access-Control-Expose-Headers": "xsrf-token",
    // // "Access-Control-Allow-Credentials": true,
    //     'Authorization': 'authdata ' +btoa(environment.userName + ':' + environment.password)
    //   }
    // }

    this.httpClient.get(environment.baseUrl + 'contacts/list').subscribe(data => {

      this.contacts = data

    })

    // this.httpClient.get("").toPromise();
  }

  addContacts(contact: Contacts) {

    
    this.httpClient.post(environment.baseUrl + 'contacts/details/add', this.contact).subscribe(data => {
      this.contactRegistrationStatus = data.toLocaleString;
      console.log(this.contactRegistrationStatus)
    })
    if(this.contactRegistrationStatus != null){
      this.toastr.success("Contacts Details Added Successfully");
    }
    this.getContactsList();
    this.setContactDetailsToDefault();

  }


  deleteContacts(contactId: Number) {
    this.httpClient.delete(environment.baseUrl + 'contacts/details/delete/' + contactId).subscribe(data => {
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
