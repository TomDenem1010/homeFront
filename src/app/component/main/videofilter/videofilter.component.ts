import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ApicallService } from 'src/app/service/apicall.service';

@Component({
  selector: 'app-videofilter',
  templateUrl: './videofilter.component.html',
  styleUrls: ['./videofilter.component.css']
})
export class VideofilterComponent implements OnInit {

  videoResponse : any;

  actors : String[] = [];
  actualActor : String = '';
  categories : String[] = [];
  actualCategory : String = '';
  movies : String[] = [];
  actualMovie : String = '';

  @Output()
  movieSelected: EventEmitter<String> = new EventEmitter<String>();

  constructor(private apiCall: ApicallService) { }

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
      this.movieSelected.emit('');
    } else {
      this.actualMovie = event.value;
      this.movieSelected.emit('http://127.0.0.1:8081/' + this.findPath());
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
