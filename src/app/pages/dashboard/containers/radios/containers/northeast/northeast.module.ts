import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from 'src/shared/shared.module';
import { NortheastRoutingModule } from './northeast-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NortheastRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class NortheastModule { }
