import { Component } from "@angular/core";

@Component({
    selector:'app-layer-fifth',
    templateUrl:'./layerFifth.component.html',
    styleUrls:['./layerFifth.component.css']
})

export class DestinationLayerFifthComponent{
    GuideDetails =[
        {image:'/assets/images/Destination/Guides/forestGuide.png',name:'Margaret March',postion:'Forest Guide'},
        {image:'/assets/images/Destination/Guides/cityGuide.png',name:'Lillian Chou, Beijing',postion:'City Guide'},
        {image:'/assets/images/Destination/Guides/oceanGuide.png',name:'Adam Walker',postion:'Ocean Guide'},
        {image:'/assets/images/Destination/Guides/trekking.jpg',name:'Churdhar Trek',postion:'Trekking Guide'},
        {image:'/assets/images/Destination/Guides/HistoricalGuides.jpg',name:'Vive Berlin',postion:'Hestorical Guide'}
    ]
}