import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  upload() {
    const audio = new Audio('https://localhost:5001/api/file/2');
    audio.load();
    audio.play();
  }

}
