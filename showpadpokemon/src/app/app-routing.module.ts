import { PokemonWishListComponent } from './pokemon-wish-list/pokemon-wish-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonNotFoundComponent } from './pokemon-not-found/pokemon-not-found.component';
import { PokemonWelcomeComponent } from './pokemon-welcome/pokemon-welcome.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonCaughtComponent } from './pokemon-caught/pokemon-caught.component';

const routes: Routes = [
  { path: 'welcome', component: PokemonWelcomeComponent },
  { path: 'pokedex', component: PokemonListComponent },
  { path: 'pokemondetail/:pokemonname', component: PokemonDetailComponent },
  { path: 'pokemoncaught', component: PokemonCaughtComponent },
  { path: 'pokemonwishlist', component: PokemonWishListComponent },
  { path: '',   redirectTo: '/welcome', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: PokemonNotFoundComponent },  // Wildcard route for a 404 page

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
