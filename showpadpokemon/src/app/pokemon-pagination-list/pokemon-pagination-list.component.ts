import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pokemon-pagination-list',
  templateUrl: './pokemon-pagination-list.component.html',
  styleUrls: ['./pokemon-pagination-list.component.scss']
})
export class PokemonPaginationListComponent implements OnInit {
  @Input() currentPage: number = 1;
  @Input() totalPage: number = 1;
  @Output() changePage = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  calcCurrentPage(page :number) {
    this.currentPage = page;
    this.changePage.emit(this.currentPage);
  }

  calcNextPage() {
    this.currentPage +=1;
    this.changePage.emit(this.currentPage);
  }

  calcPreviousNextPage() {
    this.currentPage -=1;
    this.changePage.emit(this.currentPage);
  }

}
