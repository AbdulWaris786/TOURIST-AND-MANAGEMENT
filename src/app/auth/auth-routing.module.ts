import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.Component";
import { SignupComponet } from "./components/signup/signup.component";
import { NgModule } from "@angular/core";
import { MainComponent } from "./mainPage/main.component";
import { OtpComponent } from "./components/Otp/otp.component";

const routes :Routes=[
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'signup',
                component: SignupComponet
            },
            {
                path:'otp',
                component:OtpComponent
            },
            {
                path:'resendOtp',
                component:OtpComponent
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

export class authRoutingModule{}
