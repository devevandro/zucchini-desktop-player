import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsResetPluginModule } from 'ngxs-reset-plugin';
import { NgxsModule } from '@ngxs/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { pt_BR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { SharedModule } from 'src/shared/shared.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxsActionsExecutingModule } from '@ngxs-labs/actions-executing';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { RadioTableComponent } from './dashboard/containers/radios/components/radio-table/radio-table.component';
import { PlayerTableComponent } from './dashboard/containers/player/components/player-table/player-table.component';
import { SouthComponent } from './dashboard/containers/radios/containers/south/south.component';
import { RadioPlayComponent } from './dashboard/components/radio-play/radio-play.component';
import { SoutheastComponent } from './dashboard/containers/radios/containers/southeast/southeast.component';
import { MidlewestComponent } from './dashboard/containers/radios/containers/midlewest/midlewest.component';
import { NortheastComponent } from './dashboard/containers/radios/containers/northeast/northeast.component';
import { NorthComponent } from './dashboard/containers/radios/containers/north/north.component';
import { FavoriteRadioState } from '@store/radio/favorite-radio.state';
import { PlaylistComponent } from './dashboard/containers/player/containers/playlist/playlist.component';
import { PlaylistState } from '@store/playlist/playlist.state';
import { AlbumListComponent } from './dashboard/containers/player/components/album-list/album-list.component';
import { AlbunsComponent } from './dashboard/containers/player/containers/albuns/albuns.component';
import { PlaylistFormComponent } from './dashboard/containers/player/components/playlist-form/playlist-form.component';
import { environment } from '@environments/environment';
import { FavoriteRadiosComponent } from './dashboard/containers/radios/containers/favorite-radios/favorite-radios.component';
registerLocaleData(pt);

@NgModule({
  declarations: [
    AppComponent,
    RadioTableComponent,
    PlayerTableComponent,
    SouthComponent,
    RadioPlayComponent,
    SoutheastComponent,
    MidlewestComponent,
    NortheastComponent,
    NorthComponent,
    PlaylistComponent,
    AlbumListComponent,
    AlbunsComponent,
    PlaylistFormComponent,
    FavoriteRadiosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NgxsModule.forRoot(),
    NgxsResetPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    SharedModule,
    NgxSpinnerModule,
    NgxsActionsExecutingModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
   AngularFireDatabaseModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{ provide: NZ_I18N, useValue: pt_BR }],
  bootstrap: [AppComponent],
  exports: [NgxsActionsExecutingModule]
})
export class AppModule { }
