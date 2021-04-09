import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root',
})
export class PokeapiService {
  constructor(private _httpClient: HttpClient) {}

  getListPokemon() : Observable<any> {
    let url = 'https://pokeapi.co/api/v2/pokemon';

    return this._httpClient.get(url);
  }
}
