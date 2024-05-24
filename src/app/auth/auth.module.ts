import { NgModule } from "@angular/core";
import { SignupComponet } from "./components/signup/signup.component";
import { MainComponent } from "./components/mainPage/main.component";
import { LoginComponent } from "./components/login/login.Component";

@NgModule({
    declarations:[
        SignupComponet,
        MainComponent,
        LoginComponent
    ],
    imports:[

    ],
    providers:[

    ],
    exports:[
        SignupComponet,
        MainComponent,
        LoginComponent
    ]
})

export class AuthModule{}