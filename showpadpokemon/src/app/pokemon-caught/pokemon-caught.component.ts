import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-caught',
  templateUrl: './pokemon-caught.component.html',
  styleUrls: ['./pokemon-caught.component.scss']
})
export class PokemonCaughtComponent implements OnInit {
  @Input() caughtlist :string [] = [];

  constructor() { }

  ngOnInit(): void {

      let tmpcaughtlist = localStorage.getItem("pokemon_caughtlist");
      if(tmpcaughtlist) {
        const data = JSON.parse(tmpcaughtlist);
        this.caughtlist = data;
      }

  }

  deletePokemon(caughtPokemon : string) {
    this.caughtlist = this.caughtlist.filter(e => e !== caughtPokemon);
    localStorage.setItem('pokemon_caughtlist', JSON.stringify(this.caughtlist));
  }

  resetCaughtList() {
    if(confirm("Are you sure to delete all the caught list? ")) {
      this.caughtlist = [];
      localStorage.setItem('pokemon_caughtlist', '');
    }
  }

}
