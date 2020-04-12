import { Component, OnInit } from '@angular/core';
import { FileService } from '../_services/file.service';

@Component({
  selector: 'app-audioplayer',
  templateUrl: './audioplayer.component.html',
  styleUrls: ['./audioplayer.component.css']
})
export class AudioplayerComponent implements OnInit {

  states: Array<any> = [
    'playing', 'paused', 'stopped'
  ];

  currentState = null;

  file = {
    id : 2,
    name: 'unknown',
    duration: 0,
  };
 
  constructor(private fileService: FileService) { }

  ngOnInit() {
  }

  play() {
    if (this.currentState === this.states[0])
    {
      return;
    }

    this.currentState = this.states[0];

    switch(this.currentState) {
      case this.states[1]:
        this.fileService.resume();
        break;
      case this.states[2]:
      default:
        this.fileService.stream(this.file.id);
        break;
    }
  }

  pause() {
    if(this.currentState === this.states[0]) {
      this.fileService.pause();
      this.currentState = this.states[1];
    }
  }

  stop() {
    this.fileService.skip(10);
  }
}
