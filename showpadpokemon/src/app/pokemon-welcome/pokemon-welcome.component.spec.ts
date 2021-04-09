import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonWelcomeComponent } from './pokemon-welcome.component';

describe('PokemonWelcomeComponent', () => {
  let component: PokemonWelcomeComponent;
  let fixture: ComponentFixture<PokemonWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonWelcomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
