import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonWelcomeComponent } from './pokemon-welcome/pokemon-welcome.component';
import { PokemonNotFoundComponent } from './pokemon-not-found/pokemon-not-found.component';
import { PokemonNavBarComponent } from './pokemon-nav-bar/pokemon-nav-bar.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonPaginationListComponent } from './pokemon-pagination-list/pokemon-pagination-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonCaughtComponent } from './pokemon-caught/pokemon-caught.component';
import { PokemonWishListComponent } from './pokemon-wish-list/pokemon-wish-list.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    PokemonWelcomeComponent,
    PokemonNotFoundComponent,
    PokemonNavBarComponent,
    PokemonListComponent,
    PokemonPaginationListComponent,
    PokemonDetailComponent,
    PokemonCaughtComponent,
    PokemonWishListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
