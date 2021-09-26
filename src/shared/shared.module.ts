import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NgZorroAntdModule } from './ng-zorro-antd.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgZorroAntdModule
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    NgZorroAntdModule,
  ],
})
export class SharedModule { }
