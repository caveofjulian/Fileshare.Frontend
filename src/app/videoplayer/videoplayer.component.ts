import { Component, OnInit, ViewChild } from '@angular/core';
import { FileService } from '../_services/file.service';
import { Sentence } from './sentence';

@Component({
  selector: 'app-videoplayer',
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.css']
})

export class VideoplayerComponent implements OnInit {
  videoUrl = 'https://localhost:5001/api/files/3';
  @ViewChild('child') child: any;

  sentences = new Array<Sentence>();

  constructor(private fileService: FileService) {
    for(let i = 0; i < 100; i++) {
      const sentence = new Sentence();
      sentence.content = 'sentence' + i;
      sentence.startTime = this.getRandomNumber(0, 136);
      sentence.endTime = this.getRandomNumber(sentence.startTime, 137);
      this.sentences.push(sentence);
    }
    this.sentences = this.sentences.sort((x, y) => {
      // tslint:disable: curly
      if (x.startTime > y.startTime) return 1;
      if (x.startTime < y.startTime) return -1;
      return 0;
    });
  }

  ngOnInit() {  }

  private getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  public onTimeUpdate(event) {
    this.sentences.forEach(sentence => {
      if (event.target.currentTime < sentence.endTime && event.target.currentTime >= sentence.startTime) {
        sentence.currentStyle = 'highlighted';
      } else {
        sentence.currentStyle = 'transcript';
      }
    });  }

  toCorrespondingTime(index: number) {
    this.child.nativeElement.currentTime = this.sentences[index].startTime;
  }

  getTranscriptionClass(index: number) {
    if (index === 0 ) {
      return this.child.nativeElement.currentTime > 5 ? 'highlighted' : 'transcript';
    }
    return this.child.nativeElement.currentTime > 15 ? 'highlighted' : 'transcript';
  }
}
