import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from 'src/shared/shared.module';
import { AlbumListRoutingModule } from './album-list-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AlbumListRoutingModule,
    SharedModule,
    NgbModule
  ],
})
export class AlbumListModule { }
