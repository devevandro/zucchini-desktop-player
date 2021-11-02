import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/radios-favoritas'
  },
  {
    path: 'radios-favoritas',
    loadChildren: () =>
      import('./dashboard/containers/radios/containers/favorite-radios/favorite-radios.module').then((m) => m.FavoriteRadiosModule),
  },
  {
    path: 'albuns',
    loadChildren: () => import('./dashboard/containers/player/containers/albuns/albuns.module').then((m) => m.AlbunsModule),
  },
  {
    path: 'playlists',
    loadChildren: () => import('./dashboard/containers/player/containers/playlist/playlist.module').then((m) => m.PlaylistModule),
  },
  {
    path: 'regiao-sul',
    loadChildren: () => import('./dashboard/containers/radios/containers/south/south.module').then((m) => m.SouthModule),
  },
  {
    path: 'regiao-sudeste',
    loadChildren: () => import('./dashboard/containers/radios/containers/southeast/southeast.module').then((m) => m.SoutheastModule),
  },
  {
    path: 'regiao-centro-oeste',
    loadChildren: () => import('./dashboard/containers/radios/containers/midlewest/midlewest.module').then((m) => m.MidlewestModule),
  },
  {
    path: 'regiao-nordeste',
    loadChildren: () => import('./dashboard/containers/radios/containers/northeast/northeast.module').then((m) => m.NortheastModule),
  },
  {
    path: 'regiao-norte',
    loadChildren: () => import('./dashboard/containers/radios/containers/north/north.module').then((m) => m.NorthModule),
  },
  {
    path: 'radio',
    loadChildren: () => import('./dashboard/containers/radios/components/radio-table/radio-table.module').then((m) => m.RadioTableModule),
  },
  {
    path: 'albuns-lista',
    loadChildren: () => import('./dashboard/containers/player/components/album-list/album-list.module').then((m) => m.AlbumListModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
