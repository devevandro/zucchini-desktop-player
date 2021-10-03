import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayerComponent } from './dashboard/containers/player/player.component';
import { SouthComponent } from './dashboard/containers/radios/containers/south/south.component';
import { FavoriteRadiosComponent } from './dashboard/containers/radios/containers/favorite-radios/favorite-radios.component';
import { RadioTableComponent } from './dashboard/containers/radios/components/radio-table/radio-table.component';
import { SoutheastComponent } from './dashboard/containers/radios/containers/southeast/southeast.component';
import { MidlewestComponent } from './dashboard/containers/radios/containers/midlewest/midlewest.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/radios-favoritas'
  },
  {
    path: 'radios-favoritas',
    component: FavoriteRadiosComponent,
  },
  {
    path: 'player',
    component: PlayerComponent,
  },
  {
    path: 'regiao-sul',
    component: SouthComponent,
  },
  {
    path: 'regiao-sudeste',
    component: SoutheastComponent,
  },
  {
    path: 'regiao-centro-oeste',
    component: MidlewestComponent,
  },
  {
    path: 'radio',
    component: RadioTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
