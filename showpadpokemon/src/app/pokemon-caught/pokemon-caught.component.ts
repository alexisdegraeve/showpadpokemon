import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-caught',
  templateUrl: './pokemon-caught.component.html',
  styleUrls: ['./pokemon-caught.component.scss']
})
export class PokemonCaughtComponent implements OnInit {
  @Input() caughtlist :string [] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
