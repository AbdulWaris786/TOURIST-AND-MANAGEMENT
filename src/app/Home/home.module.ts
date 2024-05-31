import { NgModule } from "@angular/core";
import { MainPageComnponent } from "./Components/MainHomePage/mainPage.component";
import { LayerOneComponent } from "./Components/Layer-1/layerOne.component";
import { LayerTwoComponent } from "./Components/Layer-2/layerTwo.component";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { LayerThreeComponent } from "./Components/Layer-3/layerThree.component";
import { LayerFourComponent } from "./Components/Layer-4/layerFour.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    imports:[
        BrowserModule,
        ReactiveFormsModule,
        SharedModule
    ],
    declarations:[
        MainPageComnponent,
        LayerOneComponent,
        LayerTwoComponent,
        LayerThreeComponent,
        LayerFourComponent
    ],
    exports:[
        MainPageComnponent,
        LayerOneComponent,
        LayerTwoComponent,
        LayerThreeComponent,
        LayerFourComponent
    ]
})

export class HomeModule{}