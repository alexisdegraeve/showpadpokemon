import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-wish-list',
  templateUrl: './pokemon-wish-list.component.html',
  styleUrls: ['./pokemon-wish-list.component.scss']
})
export class PokemonWishListComponent implements OnInit {
  @Input() wishlist :string [] = [];

  constructor() { }

  ngOnInit(): void {
    let tmpwishlist = localStorage.getItem("pokemon_wishlist");
    if(tmpwishlist) {
      const data = JSON.parse(tmpwishlist);
      this.wishlist = data;
    }
  }

  deletePokemon(caughtPokemon : string) {
    this.wishlist = this.wishlist.filter(e => e !== caughtPokemon);
    localStorage.setItem('pokemon_wishlist', JSON.stringify(this.wishlist));
  }

  resetWishList() {
    if(confirm("Are you sure to delete all the wish list? ")) {
      this.wishlist = [];
      localStorage.setItem('pokemon_wishlist', '');
    }
  }
}
