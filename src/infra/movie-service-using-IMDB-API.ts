import { Movie } from "src/domain/movie/movie";
import { MovieServiceInterface } from "src/domain/movie/movie-service.interface";
import {HttpClient} from "@angular/common/http";
import {inject} from "@angular/core";
import {firstValueFrom, map} from "rxjs";

interface IMDB_API_Contract {
  results: {
    id: string,
    image: string,
    title: string,
    description: string,
  }[]
}

export class MovieServiceUsingIMDBAPI implements MovieServiceInterface {

  private httpClient = inject<HttpClient>(HttpClient);

  public getMovies(): Promise<Movie[]> | Movie[] {

    return firstValueFrom(this.httpClient.get<IMDB_API_Contract>('https://imdb-api.com/API/AdvancedSearch/k_t46az2u7?title_type=feature,tv_movie,short&user_rating=7.0,10&role=nm2225369').pipe(
      map(res => res.results.map(movie => Movie.fromRecord({
        title: movie.title,
        description: movie.description,
        image: movie.image,
        isFavorite: false,
      })))
    ));
  }

}
