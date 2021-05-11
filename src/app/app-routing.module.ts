import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TableDisplayComponent } from "./data-operation/table-display/table-display.component";
import { TableInputComponent } from "./data-operation/table-input/table-input.component";

const appRoutes:Routes = [
    //load the routing file of data-operayion
    {path:'data-operation', loadChildren:()=>import('./data-operation/data-operation-routing.module').then(m=>m.DataOperationRoutingModule)},
    {path:'', redirectTo:'/data-operation' , pathMatch:'full'}
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