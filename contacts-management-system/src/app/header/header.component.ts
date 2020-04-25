import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }
  user: any;
  isLoggedIn: any;

  ngOnInit(): void {
    this.user = localStorage.getItem("user");
    if (this.user != null) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

  logout() {
    localStorage.setItem("user", null);
    if (localStorage.getItem("user") != null) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
    console.log(localStorage.getItem("user"));

    this.router.navigate(['/login']);

  }

}
