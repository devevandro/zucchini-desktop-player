import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from 'src/shared/shared.module';
import { SouthRoutingModule } from './south-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SouthRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class SouthModule { }
