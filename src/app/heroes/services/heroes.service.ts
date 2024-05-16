import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, of } from "rxjs";
import { Hero } from "../interfaces/hero.interface";
import { environments } from "../../../environments/environments";

@Injectable({providedIn: 'root'})
export class HeroesService {

  private baseUrl: string = environments.baseUrl;

  constructor(private httpclient: HttpClient) {}

  getHeroes(): Observable<Hero[]> {
    return this.httpclient.get<Hero[]>(`${ this.baseUrl }/heroes`);
  }

  getHeroById(id: string): Observable<Hero | undefined> {
    return this.httpclient
      .get<Hero>(`${ this.baseUrl}/heroes/${ id }`)
      .pipe(
        catchError( error => of(undefined))
      );
  }

  getSuggestions( query: string): Observable<Hero[]> {
    return this.httpclient.get<Hero[]>(`/heroes?q=${ query }&_limit=6`);
  }

}
