import { NgModule } from "@angular/core";
import { DestinationMainPage } from "./Components/mainPage/mainPage.component";
import { SharedModule } from "../shared/shared.module";
import { DestinationLayerOneComponent } from "./Components/Layer-1/layerOne.component";
import { DestinationLayerTwoComponent } from "./Components/Layer-2/layerTwo.component";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { DestinationLayerThreeComponent } from "./Components/Layer-3/layerThree.component";
import { DestinationLayerForthComponent } from "./Components/Layer-4/layerForth.component";
import { DestinationLayerFifthComponent } from "./Components/Layer-5/layerFifth.component";

@NgModule({
    declarations:[
        DestinationMainPage,
        DestinationLayerOneComponent,
        DestinationLayerTwoComponent,
        DestinationLayerThreeComponent,
        DestinationLayerForthComponent,
        DestinationLayerFifthComponent
    ],
    imports:[
        SharedModule,
        ReactiveFormsModule,
        BrowserModule,
    ],
    exports:[
        DestinationMainPage,
        SharedModule,
        DestinationLayerOneComponent,
        DestinationLayerTwoComponent,
        DestinationLayerThreeComponent,
        DestinationLayerForthComponent,
        DestinationLayerFifthComponent
    ]
})
export class DestinationModule{}