import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { RadioTableComponent } from './radio-table.component';

const routes: Routes = [{ path: '', component: RadioTableComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class RadioTableRoutingModule { }
