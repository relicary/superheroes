import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Hero } from "../interfaces/hero.interface";
import { environments } from "../../../environments/environments";

@Injectable({providedIn: 'root'})
export class HeroesService {

  private baseUrl: string = environments.baseUrl;

  constructor(private httpclient: HttpClient) {}

  getHeroes(): Observable<Hero[]> {
    return this.httpclient.get<Hero[]>(`${ this.baseUrl }/heroes`);
  }

}
