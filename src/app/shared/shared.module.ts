import { NgModule } from "@angular/core";
import { HeaderComponent } from "./Components/Header/header.component";
import { BrowserModule } from "@angular/platform-browser";
import { FooterComponent } from "./Components/Footer/footer.component";

@NgModule({
    imports:[
        BrowserModule
    ],
    exports:[
        HeaderComponent,
        FooterComponent
    ],
    declarations:[
        HeaderComponent,
        FooterComponent
    ]
})
 export class SharedModule{}