import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MovieServiceUsingIMDBAPI} from "../infra/movie-service-using-IMDB-API";
import {MovieServiceInterface} from "../domain/movie/movie-service.interface";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    MovieServiceUsingIMDBAPI,
    {
      provide: MovieServiceInterface,
      useClass: MovieServiceUsingIMDBAPI
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
