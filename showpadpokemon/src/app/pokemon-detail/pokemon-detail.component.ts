import { pokemondetail } from './../pokemondetail';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeapiService } from '../pokeapi.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  public pokemonFigure: pokemondetail  = {abilities: [{ability : {name:'', url:'' }}], stats: [{base_stat:0 ,stat : {name:'', url:'' }}], height:0,name:'', order:0,weight: 10, sprites: {front_default:''}};

  constructor(private route: ActivatedRoute, private pokeApi : PokeapiService) { }

  ngOnInit(): void {
    let pokemonname = this.route.snapshot.paramMap.get('pokemonname');
    if(pokemonname === null) {
      pokemonname = '';
    }

    this.pokeApi.getDetailPokemon(pokemonname).subscribe((data) => {

      this.pokemonFigure = data;

    });
  }

}
