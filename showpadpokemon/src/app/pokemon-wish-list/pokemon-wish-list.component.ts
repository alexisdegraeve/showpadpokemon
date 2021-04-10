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
  }

}
