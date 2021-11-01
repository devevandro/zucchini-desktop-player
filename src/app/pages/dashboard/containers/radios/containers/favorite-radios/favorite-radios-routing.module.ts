import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { FavoriteRadiosComponent } from './favorite-radios.component';

const routes: Routes = [{ path: '', component: FavoriteRadiosComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class FavoriteRadiosRoutingModule { }
