import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from 'src/shared/shared.module';
import { AlbunsRoutingModule } from './albuns-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AlbunsRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class AlbunsModule { }
