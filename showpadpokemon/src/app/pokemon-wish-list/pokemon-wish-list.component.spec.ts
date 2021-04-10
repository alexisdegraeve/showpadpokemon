import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonWishListComponent } from './pokemon-wish-list.component';

describe('PokemonWishListComponent', () => {
  let component: PokemonWishListComponent;
  let fixture: ComponentFixture<PokemonWishListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonWishListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonWishListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
