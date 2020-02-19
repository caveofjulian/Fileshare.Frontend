import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model = {
    username: '',
    password: ''
  };

  constructor(private authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  getName() {
    return this.authService.getDecodedToken().unique_name;
  }
  login() {
      this.authService.login(this.model).subscribe(
        next => {
          console.log(next);
          this.alertify.success('Logged in successfully.');
        },
        error => {
          console.log(error);
          this.alertify.error('Failed to log in.');
        }
      );
  }

  loggedIn(){
    return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    this.alertify.message('logged out');
  }
}
