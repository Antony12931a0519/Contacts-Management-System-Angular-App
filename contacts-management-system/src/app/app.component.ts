import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './models/user';
// import { AuthenticationServiceService } from './aunthentication-services/authentication-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contacts-management-system';

  user:any;
  isLoggedIn:any;
  constructor(){

  }

  ngOnInit(): void {
    this.user = localStorage.getItem("user");
    if (this.user != null) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

 
}
