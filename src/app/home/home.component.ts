import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;

  isLoggedIn() {
    return this.authService.loggedIn();
  }
  
  constructor(private authService: AuthService) { 
  }

  ngOnInit() {
  }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  cancelRegisterMode(mode: boolean) {
    this.registerMode = mode;
  }
}
