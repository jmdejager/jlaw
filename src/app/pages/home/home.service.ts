import {inject, Injectable } from '@angular/core';
import {MovieServiceInterface} from "../../../domain/movie/movie-service.interface";
import {BehaviorSubject} from "rxjs";
import { Movie } from 'src/domain/movie/movie';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private moviesSubject = new BehaviorSubject<Movie[]>([])
  public movies$ = this.moviesSubject.asObservable();

  private movieService = inject(MovieServiceInterface);

  constructor() {
    Promise.resolve(this.movieService.getMovies()).then(
      movies => this.moviesSubject.next(movies)
    )

  }
}
