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
    this.audio.src = this.baseUrl + 'files/' + id;
    this.audio.load();
    this.audio.play();
    console.log(this.audio.duration);
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
