//by adding this routing module file we manage data-operation routing here not to the app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableInputComponent } from './table-input/table-input.component';
import { TableDisplayComponent } from './table-display/table-display.component';

const routes:Routes = [
  {path:'input', component:TableInputComponent},
  {path:'display', component:TableDisplayComponent},
  {path:'' , component:TableDisplayComponent , pathMatch:"full"}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class DataOperationRoutingModule { }
