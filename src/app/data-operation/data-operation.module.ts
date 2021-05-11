//by generating this module file we declare our component of data-operation here not to the app.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TableInputComponent } from './table-input/table-input.component';
import { TableDisplayComponent } from './table-display/table-display.component';

@NgModule({
  declarations: [TableInputComponent,TableDisplayComponent],
  imports: [
    CommonModule,FormsModule
  ]
})
export class DataOperationModule { }
