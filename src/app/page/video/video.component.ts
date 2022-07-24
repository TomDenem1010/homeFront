import { Component } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent {

  moviePath : String = '';

  constructor() {}

  movieSelected(event : any) : any {
    this.moviePath = event;
  }
}
