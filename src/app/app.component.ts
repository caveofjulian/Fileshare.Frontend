import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FileShare';

  ngOnInit() {
    document.body.className = 'selector';
  }

  ngOnDestroy() {
    document.body.className = '';
  }
}
