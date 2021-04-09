import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonWelcomeComponent } from './pokemon-welcome/pokemon-welcome.component';
import { PokemonNotFoundComponent } from './pokemon-not-found/pokemon-not-found.component';
import { PokemonNavBarComponent } from './pokemon-nav-bar/pokemon-nav-bar.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonWelcomeComponent,
    PokemonNotFoundComponent,
    PokemonNavBarComponent,
    PokemonListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
