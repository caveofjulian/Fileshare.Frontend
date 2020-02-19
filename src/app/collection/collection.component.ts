import { Component, OnInit, AfterViewInit, Renderer2, Input } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { FileService } from '../_services/file.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  @Input() files: File[];

  uploader: FileUploader;

  hasBaseDropZoneOver = false;
  hasAnotherDropZoneOver = false;
  response = '';

  constructor(private fileService: FileService, private authService: AuthService) {}

  ngOnInit() {
    this.uploader = new FileUploader({
      url: this.fileService.baseUrl + 'users/' + this.authService.getDecodedToken().nameid + '/files',
      authToken: 'Bearer ' + localStorage.getItem('token'),
      isHTML5: true,
      allowedFileType: ['audio', 'video'],
      removeAfterUpload: true,
      autoUpload: false,
      maxFileSize: 10 * 1024 * 1024 * 1024 * 1024
    });
  }

  fileOverBase(e: any) {
    this.hasBaseDropZoneOver = e;
  }
}
