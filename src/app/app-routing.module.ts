import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TableDisplayComponent } from "./data-operation/table-display/table-display.component";
import { TableInputComponent } from "./data-operation/table-input/table-input.component";

const appRoutes:Routes = [
    {path:'', component:TableInputComponent , pathMatch:'full'},
    {path:'display' , component:TableDisplayComponent}
];

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[
        RouterModule
    ],
})

export class AppRoutingModule{}