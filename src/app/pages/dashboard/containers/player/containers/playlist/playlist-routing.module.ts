import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PlaylistRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class PlaylistRoutingModule { }
