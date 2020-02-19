import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AlertifyService } from './_services/alertify.service';
import {appRoute} from './routes';
import {BsDropdownModule} from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BrowserModule } from '@angular/platform-browser';

import { CollectionComponent } from './collection/collection.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RouterModule } from '@angular/router';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { UploadComponent } from './upload/upload.component';
import { AudioplayerComponent } from './audioplayer/audioplayer.component';

import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import {MatSliderModule} from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { VideoplayerComponent } from './videoplayer/videoplayer.component';

import {MDBBootstrapModule} from 'angular-bootstrap-md';
import { Testing_purposeComponent } from './testing_purpose/testing_purpose.component';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      RegisterComponent,
      HomeComponent,
      CollectionComponent,
      GalleryComponent,
      UploadComponent,
      AudioplayerComponent,
      AudioplayerComponent,
      VideoplayerComponent,
      Testing_purposeComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(appRoute),
      FormsModule,
      ReactiveFormsModule,
      MatButtonModule,
      MatListModule,
      MatSliderModule,
      MatIconModule,
      MatToolbarModule,
      MatCardModule,
      BsDropdownModule.forRoot(),
      BrowserAnimationsModule,
      MDBBootstrapModule.forRoot(),
      FileUploadModule
   ],
   providers: [
      AuthService,
      AlertifyService,
      ErrorInterceptorProvider
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
