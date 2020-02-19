import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalleryComponent} from './gallery/gallery.component';
import { CollectionComponent } from './collection/collection.component';
import { UploadComponent } from './upload/upload.component';
import { AudioplayerComponent } from './audioplayer/audioplayer.component';
import { VideoplayerComponent } from './videoplayer/videoplayer.component';
import { Testing_purposeComponent } from './testing_purpose/testing_purpose.component';


export const appRoute: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'gallery', component: GalleryComponent},
    {path: 'collection', component: CollectionComponent},
    {path: 'upload', component: UploadComponent},
    {path: 'audioplayer', component: AudioplayerComponent},
    {path: 'videoplayer', component: VideoplayerComponent},
    {path: 'test', component: Testing_purposeComponent},
    {path: '**', redirectTo: 'collection', pathMatch: 'full'},
];
