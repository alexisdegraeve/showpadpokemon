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
  totalPageCalc: number = 0;
  totalPokemon: number = 0;
  totalPokemonPage: number = 70;
  wishlist :string [] = [];
  caughtlist :string [] = [];
  alreadyWishList: boolean = false;
  alreadyCaughtList: boolean = false;
  alreadyCaught: boolean = false;
  searchPokemon: string = '';

  constructor(private pokeApi : PokeapiService) { }

  ngOnInit(): void {
    this.reset();
  }

  reset() {
    this.pokeApi.getListPokemon(this.totalPokemonPage,0).subscribe((data) => {
      this.totalPokemon = data.count;
      this.totalPageCalc = Math.round(this.totalPokemon/ this.totalPokemonPage);
      this.pokemoncard = data.results;
    });
    this.initCaughtList();
    this.initWishList();
  }

  initCaughtList() {
    let tmpcaughtlist = localStorage.getItem("pokemon_caughtlist");
    if(tmpcaughtlist) {
      const data = JSON.parse(tmpcaughtlist);
      this.caughtlist = data;
    }
  }

  initWishList() {
    let tmpwishlist = localStorage.getItem("pokemon_wishlist");
    if(tmpwishlist) {
      const data = JSON.parse(tmpwishlist);
      this.wishlist = data;
    }
  }

  goToNewPage(page: number): void {
    let offset = (page - 1) * this.totalPokemonPage;
    this.pokeApi.getListPokemon(this.totalPokemonPage, offset).subscribe((data) => {
      this.pokemoncard = data.results;
    });
  }

  allowDrop(ev: any) {
    var data = ev.dataTransfer.getData("text");
    ev.preventDefault();
  }

  drag(ev: any, nompokemon: string) {
    ev.dataTransfer.setData("text/plain", nompokemon);
  }

  drop_wishlist(ev: any) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if(this.wishlist.filter(value => value == data).length == 0) {
      if(this.caughtlist.filter(value => value == data).length == 0) {
        this.wishlist.push(data);
        this.wishlist = [...this.wishlist];
        localStorage.setItem('pokemon_wishlist', JSON.stringify(this.wishlist));
      } else {
        this.alreadyCaught  = true;
      }

    } else {
      this.alreadyWishList = true;
    }


  }

  drop_pokemonlist(ev: any) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if(this.caughtlist.filter(value => value == data).length == 0) {
      this.caughtlist.push(data);
      this.caughtlist = [...this.caughtlist];
      localStorage.setItem('pokemon_caughtlist', JSON.stringify(this.caughtlist));
    } else {
      this.alreadyCaughtList  = true;
    }

  }

  updateList() {
    if(this.searchPokemon=='') {
      this.reset();
    } else {
      this.pokemoncard = this.pokemoncard.filter((poke) => poke.name.toLowerCase().includes(this.searchPokemon.toLowerCase()));
    }

  }

  resetSearch() {
    this.searchPokemon = '';
    this.reset();
  }

}
