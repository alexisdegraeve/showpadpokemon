import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonPaginationListComponent } from './pokemon-pagination-list.component';

describe('PokemonPaginationListComponent', () => {
  let component: PokemonPaginationListComponent;
  let fixture: ComponentFixture<PokemonPaginationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonPaginationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonPaginationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
