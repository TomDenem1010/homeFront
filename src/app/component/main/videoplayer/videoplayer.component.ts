import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-videoplayer',
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.css']
})
export class VideoplayerComponent implements OnChanges {

  @Input()
  path: String = '';

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.path) {
      let videoPlayer : any = document.getElementById("videoplayer");
      let videoPlayerSource : any = document.getElementById("videoplayersource");

      videoPlayerSource.src = this.path;
      videoPlayer.load();
      videoPlayer.play();
    }
  }
}
