import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from 'src/shared/shared.module';
import { SoutheastRoutingModule } from './southeast-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SoutheastRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class SoutheastModule { }
