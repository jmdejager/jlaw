import { InjectionToken } from "@angular/core";
import { Movie } from "./movie";

export const MovieServiceInterface = new InjectionToken<MovieServiceInterface>('MovieServiceInterface')

export interface MovieServiceInterface {
  getMovies(): Promise<Movie[]> | Movie[];
}
