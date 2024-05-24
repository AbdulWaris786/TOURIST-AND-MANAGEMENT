import { NgModule } from "@angular/core";
import { SignupComponet } from "./components/signup/signup.component";
import { MainComponent } from "./components/mainPage/main.component";

@NgModule({
    declarations:[
        SignupComponet,
        MainComponent
    ],
    imports:[

    ],
    providers:[

    ],
    exports:[
        SignupComponet,
        MainComponent
    ]
})

export class AuthModule{}