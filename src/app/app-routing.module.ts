import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const appRoutes:Routes = [
    //load the module file of data-operation
    {path:'data-operation', loadChildren:()=>import('./data-operation/data-operation.module').then(m=>m.DataOperationModule)},
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