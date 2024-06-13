import { NgModule } from "@angular/core";
import { SignupComponet } from "./components/signup/signup.component";
import { LoginComponent } from "./components/login/login.Component";
import { authRoutingModule } from "./auth-routing.module";
import { MainComponent } from "./mainPage/main.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations:[
        SignupComponet,
        LoginComponent,
        MainComponent
    ],
    imports:[
        authRoutingModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers:[

    ],
    exports:[
        SignupComponet,
        LoginComponent,
        ReactiveFormsModule
    ]
})

export class AuthModule{}