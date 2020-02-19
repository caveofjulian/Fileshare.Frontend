import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing_purpose',
  templateUrl: './testing_purpose.component.html',
  styleUrls: ['./testing_purpose.component.css']
})
export class Testing_purposeComponent implements OnInit {

  content = 'you have been warned';
  hideContent = true;
  severity = 423;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.hideContent = !this.hideContent;
  }
}
