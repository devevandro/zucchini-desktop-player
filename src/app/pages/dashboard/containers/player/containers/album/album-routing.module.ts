import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from 'src/shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AlbumRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class AlbumRoutingModule { }
