import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from 'src/shared/shared.module';
import { RadioTableRoutingModule } from './radio-table-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RadioTableRoutingModule,
    SharedModule,
    NgbModule
  ],
})
export class RadioTableModule { }
