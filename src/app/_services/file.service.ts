import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  baseUrl = 'https://localhost:5001/api/';
  private audio = new Audio();

  constructor(private http: HttpClient) { }

  stream(id: number) {
    this.audio.src = "http://localhost:1061/api/v1/playback/test";
    this.audio.play();
    console.log(this.audio.duration);
  }

  skip(seconds) {
    this.audio.currentTime += seconds;
  }
  pause() {
    this.audio.pause();
  }

  resume() {
    this.audio.play();
  }

  stop() {
  }

}
