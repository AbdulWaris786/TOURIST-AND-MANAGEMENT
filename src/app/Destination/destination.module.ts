import { NgModule } from "@angular/core";
import { DestinationMainPage } from "./Components/mainPage/mainPage.component";
import { SharedModule } from "../shared/shared.module";
import { HeaderComponent } from "../shared/Components/Header/header.component";

@NgModule({
    declarations:[
        DestinationMainPage

    ],
    imports:[
        SharedModule
    ],
    exports:[
        DestinationMainPage,
        SharedModule

    ]
})
export class DestinationModule{}