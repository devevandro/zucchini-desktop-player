import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from 'src/shared/shared.module';
import { NorthRoutingModule } from './north-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NorthRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class NorthModule { }
