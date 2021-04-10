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


  it('test resetWishList() after removing all item and confirm yes', () => {
    let beforeCount = component.wishlist.length;
    component.resetWishList();
    let afterCount = component.wishlist.length;
    console.log(beforeCount);
    console.log(afterCount);
    expect(afterCount).toEqual(0);
  });

});
