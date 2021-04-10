import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root',
})
export class PokeapiService {
  constructor(private _httpClient: HttpClient) {
  }


  getListPokemon(limit: number, offset :number) : Observable<any> {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    return this._httpClient.get(url);
  }


  getDetailPokemon(pokemonname: string) : Observable<any> {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemonname}`;
    return this._httpClient.get(url);
  }
}
