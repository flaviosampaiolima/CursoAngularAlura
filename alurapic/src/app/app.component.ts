import { Component } from '@angular/core';
import { PhotoService } from './Photos/photo/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photos: any[] = [];

  constructor( photosService: PhotoService){

    photosService
      .listFromUser('flavio')
      .subscribe( photos => this.photos = photos );

  }

}
