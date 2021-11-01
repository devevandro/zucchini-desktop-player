import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from 'src/shared/shared.module';
import { MidlewestRoutingModule } from './midlewest-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MidlewestRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class MidlewestModule { }
