import { Contacts } from '../models/contact';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = {
    username: '',
    password: ''
  }
  username: any;
  isLoggedIn: any;
  ngOnInit(): void {
    this.isLoggedIn=false;




  }



  constructor(private httpClient: HttpClient, private router: Router) {
    this.httpClient = httpClient;

  }

  login(user: User) {
    if (user.username == "user" && user.password == "password") {
      localStorage.setItem("user", user.username);
      if (localStorage.getItem("user") != null) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }

      this.router.navigate(['/home']);
    } else{
      alert("Invalid user name and password")
      this.router.navigate(['/login']);
    }
     
  }



}
