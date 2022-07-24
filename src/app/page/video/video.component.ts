import { Component, OnInit, ViewChildren } from '@angular/core';
import { ApicallService } from 'src/app/service/apicall.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  constructor(
    private apiCall: ApicallService
  ) { }

  videoResponse : any;

  actors : String[] = [];
  actualActor : String = '';
  categories : String[] = [];
  actualCategory : String = '';
  movies : String[] = [];
  actualMovie : String = '';

  actualMoviePath : String = '';

  ngOnInit(): void {
    this.initVideoResponse('videos');
  }

  initVideoResponse(path : string, body : any = null) : void {
    this.apiCall.postApiCall(path, body).subscribe((response: any) => {
      this.videoResponse = response;

      this.setCategories();
      this.setActors();
      this.setMovies();
    })
  }

  setCategories() : void {
    let categoriesMultiple : String[] = [];

    this.videoResponse.videos.forEach((movie : any) => {
      movie.category.forEach((category : any) => {
          if(!categoriesMultiple.includes(category)) {
            categoriesMultiple.push(category)
          }
      })
    });

    this.categories = categoriesMultiple.sort();
  }

  setActors() : void {
    let actorsMultiple : String[] = [];

    this.videoResponse.videos.forEach((movie : any) => {
      movie.actor.forEach((actor : any) => {
        if(!actorsMultiple.includes(actor)) {
          actorsMultiple.push(actor)
        }
      })
    });

    this.actors = actorsMultiple.sort();
  }

  setMovies() : void {
    let moviesMultiple : String[] = [];

    this.videoResponse.videos.forEach((movie : any) => {
      moviesMultiple.push(movie.title);
    });

    this.movies = moviesMultiple.sort();
  }

  onCategoryChange(event : any) {
    if(!event) {
      this.actualCategory = '';
      this.actualMovie = '';
      if(this.actualActor) {
        this.initVideoResponse(
          'videos/filtered',
          this.getFilterBody(this.actualCategory, this.actualActor)
        );
      } else {
        this.initVideoResponse('videos');
      }
    } else {
      this.initVideoResponse(
        'videos/filtered',
        this.getFilterBody(event.value, this.actualActor)
      );
    }
  }

  onActorChange(event : any) {
    if(!event) {
      this.actualActor = '';
      this.actualMovie = '';
      if(this.actualCategory) {
        this.initVideoResponse(
          'videos/filtered',
          this.getFilterBody(this.actualCategory, this.actualActor)
        );
      } else {
        this.initVideoResponse('videos');
      }
    } else {
      this.initVideoResponse(
        'videos/filtered',
        this.getFilterBody(this.actualCategory, event.value)
      );
    }
  }

  onMovieChange(event : any) {
    if(!event) {
      this.actualMovie = '';
      this.actualMoviePath = '';
    } else {
      this.actualMovie = event.value;
      this.actualMoviePath = 'http://127.0.0.1:8081/' + this.findPath();
    }
  }

  findPath() : String {
    let path : String = '';

    this.videoResponse.videos.forEach((movie : any) => {
      if(movie.title === this.actualMovie) {
        path = movie.path;
      }
    })

    return path;
  }

  getFilterBody(category : String, actor : String) {
    return {
      videoFilters: [
        {
          filterKey: 'category',
          filterValue: category
        },
        {
          filterKey: 'actor',
          filterValue: actor
        }
      ]
    }
  }
}
