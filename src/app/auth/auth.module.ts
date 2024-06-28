import { NgModule } from "@angular/core";
import { SignupComponet } from "./components/signup/signup.component";
import { LoginComponent } from "./components/login/login.Component";
import { authRoutingModule } from "./auth-routing.module";
import { MainComponent } from "./mainPage/main.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { OtpComponent } from "./components/Otp/otp.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[
        SignupComponet,
        LoginComponent,
        MainComponent,
        OtpComponent
    ],
    imports:[
        CommonModule,
        authRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule
    ],
    providers:[

    ],
    exports:[
        SignupComponet,
        LoginComponent,
        OtpComponent,
        ReactiveFormsModule
    ]
})

export class AuthModule{}