import { NgModule } from "@angular/core";
import { MainPageComnponent } from "./Components/MainHomePage/mainPage.component";
import { HeaderComponent } from "./Components/Header/header.component";
import { LayerOneComponent } from "./Components/Layer-1/layerOne.component";
import { LayerTwoComponent } from "./Components/Layer-2/layerTwo.component";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { LayerThreeComponent } from "./Components/Layer-3/layerThree.component";
import { LayerFourComponent } from "./Components/Layer-4/layerFour.component";
import { FooterComponent } from "./Components/Footer/footer.component";

@NgModule({
    imports:[
        BrowserModule,
        ReactiveFormsModule,
    ],
    declarations:[
        MainPageComnponent,
        HeaderComponent,
        LayerOneComponent,
        LayerTwoComponent,
        LayerThreeComponent,
        LayerFourComponent,
        FooterComponent
    ],
    exports:[
        MainPageComnponent,
        HeaderComponent,
        LayerOneComponent,
        LayerTwoComponent,
        LayerThreeComponent,
        LayerFourComponent,
        FooterComponent
    ]
})

export class HomeModule{}