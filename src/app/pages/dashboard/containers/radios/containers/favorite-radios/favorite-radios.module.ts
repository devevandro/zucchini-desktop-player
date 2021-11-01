import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from 'src/shared/shared.module';
import { FavoriteRadiosRoutingModule } from './favorite-radios-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FavoriteRadiosRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class FavoriteRadiosModule { }
