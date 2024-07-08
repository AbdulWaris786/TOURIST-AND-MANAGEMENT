import { RouterModule, Routes } from "@angular/router";
import { MainFormComponent } from "./mainpage/main.component";
import { GuidFormComponent } from "./components/guidApplication/guidApp.component";
import { PackageBookingComponent } from "./components/packageBooking/packagebooking.component";
import { NgModule } from "@angular/core";

const routes :Routes=[
    {
        path:'',
        component:MainFormComponent,
        children:[
            {
                path:'guideform',
                component:GuidFormComponent
            },
            {
                path:'packageform',
                component:PackageBookingComponent
            }
        ]
    }
]
@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})

export class FormsRoutingModule{}