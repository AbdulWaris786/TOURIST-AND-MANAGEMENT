import { NgModule } from "@angular/core";
import { MainFormComponent } from "./mainpage/main.component";
import { PackageBookingComponent } from "./components/packageBooking/packagebooking.component";
import { GuidFormComponent } from "./components/guidApplication/guidApp.component";
import { SharedModule } from "../shared/shared.module";
import { RouterModule, Routes } from "@angular/router";
import { FormsRoutingModule } from "./forms.routing.module";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[
        MainFormComponent,
        PackageBookingComponent,
        GuidFormComponent
    ],
    imports:[
        SharedModule,
        FormsRoutingModule,
        CommonModule
    ],
    exports:[
        MainFormComponent,
        PackageBookingComponent,
        GuidFormComponent
    ]
})

export class FormsModulesComponent{}