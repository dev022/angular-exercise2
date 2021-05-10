import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableInputComponent } from './data-operation/table-input/table-input.component';
import { TableDisplayComponent } from './data-operation/table-display/table-display.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { DataOperationService } from './data-operation/data-operation.service';

@NgModule({
  declarations: [
    AppComponent,
    TableInputComponent,
    TableDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [DataOperationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
