import { NgModule } from '@angular/core';
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

import { RadioTableComponent } from './dashboard/containers/radios/components/radio-table/radio-table.component';
import { PlayerTableComponent } from './dashboard/containers/radios/components/player-table/player-table.component';
import { SouthComponent } from './dashboard/containers/radios/containers/south/south.component';
import { RadioCardComponent } from './dashboard/containers/radios/components/radio-card/radio-card.component';
import { RadioPlayComponent } from './dashboard/components/radio-play/radio-play.component';
import { SoutheastComponent } from './dashboard/containers/radios/containers/southeast/southeast.component';
import { RadioCardSoutheastComponent } from './dashboard/containers/radios/components/radio-card-southeast/radio-card-southeast.component';
import { MidlewestComponent } from './dashboard/containers/radios/containers/midlewest/midlewest.component';
import { RadioCardMidlewestComponent } from './dashboard/containers/radios/components/radio-card-midlewest/radio-card-midlewest.component';
import { RadioCardNortheastComponent } from './dashboard/containers/radios/components/radio-card-northeast/radio-card-northeast.component';
import { NortheastComponent } from './dashboard/containers/radios/containers/northeast/northeast.component';
registerLocaleData(pt);

@NgModule({
  declarations: [
    AppComponent,
    RadioTableComponent,
    PlayerTableComponent,
    SouthComponent,
    RadioCardComponent,
    RadioPlayComponent,
    SoutheastComponent,
    RadioCardSoutheastComponent,
    MidlewestComponent,
    RadioCardMidlewestComponent,
    RadioCardNortheastComponent,
    NortheastComponent,
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
    SharedModule
  ],
  providers: [{ provide: NZ_I18N, useValue: pt_BR }],
  bootstrap: [AppComponent]
})
export class AppModule { }
