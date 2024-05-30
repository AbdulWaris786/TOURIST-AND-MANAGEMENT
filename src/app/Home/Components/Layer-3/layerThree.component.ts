import { Component } from "@angular/core";

@Component({
    selector:"app-layer-three",
    templateUrl:'./layerThree.component.html',
    styleUrls:['./layerThree.component.css']
})

export class LayerThreeComponent{
    //contents buttons
    contents=[
        {icon:'fa-solid fa-plane-up',head:'Flight Ticket',content:'Vitae donec pellentesque a aliquam et ultricies auctor.'},
        {icon:'fa-solid fa-building-wheat',head:'Accomodation',content:'Vitae donec pellentesque a aliquam et ultricies auctor.'},
        {icon:'fa-solid fa-suitcase-rolling',head:'Packaged Tour',content:'Vitae donec pellentesque a aliquam et ultricies auctor.'}
    ]
}