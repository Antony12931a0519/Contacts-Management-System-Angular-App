import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  contacts: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getContactsList();
  }

  getContactsList() {
    this.httpClient.get(environment.baseUrl + 'contacts/list').subscribe(data => {     
      this.contacts = data
    })
  }



}
