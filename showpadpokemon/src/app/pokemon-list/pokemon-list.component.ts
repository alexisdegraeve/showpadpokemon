import { pokemoncard } from './../pokemoncard';
import { PokeapiService } from './../pokeapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemoncard : pokemoncard[] = [];

  constructor(private pokeApi : PokeapiService) { }

  ngOnInit(): void {
    this.pokeApi.getListPokemon().subscribe((data) => {
      this.pokemoncard = data.results;
    });
  }

}
