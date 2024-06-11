import { NgModule } from "@angular/core";
import { SignupComponet } from "./components/signup/signup.component";
import { LoginComponent } from "./components/login/login.Component";
import { authRoutingModule } from "./auth-routing.module";
import { MainComponent } from "./mainPage/main.component";

@NgModule({
    declarations:[
        SignupComponet,
        LoginComponent,
        MainComponent
    ],
    imports:[
        authRoutingModule,
    ],
    providers:[

    ],
    exports:[
        SignupComponet,
        LoginComponent,
    ]
})

export class AuthModule{}