import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { PokeapiService } from './pokeapi.service';

describe('PokeapiService', () => {
  let service: PokeapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [PokeapiService]

    });
    service = TestBed.inject(PokeapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getDetailPokemon() should http GET detail about Pikachu', () => {
    service.getDetailPokemon('pikachu').subscribe((res) => {
      expect(res.name).toEqual('pikachu');
    });
  });

  it('getListPokemon() should http GET list of Pokemons but with incorrect parameters', () => {
    service.getListPokemon(-6,-2).subscribe((res) => {
      expect(res).toEqual(null);
    });
  });

  it('getListPokemon() should http GET list of Pokemons for 6 items expecting 6 items to receive', () => {
    service.getListPokemon(6, 10).subscribe((res) => {
      expect(res.results.length).toEqual(6);
    });
  });

});
