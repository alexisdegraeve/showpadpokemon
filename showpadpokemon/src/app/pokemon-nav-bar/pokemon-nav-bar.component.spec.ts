import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonNavBarComponent } from './pokemon-nav-bar.component';

describe('PokemonNavBarComponent', () => {
  let component: PokemonNavBarComponent;
  let fixture: ComponentFixture<PokemonNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
