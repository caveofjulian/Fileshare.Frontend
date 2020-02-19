import { Component, OnInit, ViewChild } from '@angular/core';
import { FileService } from '../_services/file.service';

@Component({
  selector: 'app-videoplayer',
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.css']
})
export class VideoplayerComponent implements OnInit {
  videoUrl = 'https://localhost:5001/api/files/3';
  @ViewChild('child') child: any;
  sentences: Array<string> = ['This my transcript', 'and this is the second sentence of the transcript'];

  classThingy =  '';

  constructor(private fileService: FileService) {   }

  public onTimeUpdate(event) {
    console.log(event);
    this.classThingy = this.child.nativeElement.currentTime > 15 ? 'highlighted' : 'transcript';
  }

  ngOnInit() {

  }
  toCorrespondingTime(index: number) {
    console.log(this);
    if (index === 0) {
      this.child.nativeElement.currentTime = 5;
    } else {
      this.child.nativeElement.currentTime = 15;
    }
  }

  getTranscriptionClass(index: number) {
    if (index === 0 ) {
      return this.child.nativeElement.currentTime > 5 ? 'highlighted' : 'transcript';
    }
    return this.child.nativeElement.currentTime > 15 ? 'highlighted' : 'transcript';
  }
}
