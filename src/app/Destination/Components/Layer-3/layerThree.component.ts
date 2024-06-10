import { Component } from "@angular/core";

@Component({
    selector:'app-layer-three',
    templateUrl:'./layerThree.component.html',
    styleUrls:['./layerThree.component.css']
})

export class DestinationLayerThreeComponent {
    topDestination =[
        {image:'/assets/images/Destination/top/taj-mahal-Destination.jpg',name:'Taj Mahal',package:'ticket | Room',price:'7000',days:'5 Days'},
        {image:'/assets/images/Destination/top/Kashmir-destination.jpeg',name:'Kashmir',package:'Adventures | Dress | Room',price:'17000',days:'10 Days'},
        {image:'/assets/images/Destination/top/Victoria-Memmorial.jpg',name:'Victoria Memorial',package:'ticket | Room',price:'5000',days:'4 Days'},
        {image:'/assets/images/Destination/top/Kovallam-beach.jpg',name:'Kovallam Beach -kerala',package:'Adventure | Room',price:'3000',days:'2 Days'},
        {image:'/assets/images/Destination/top/Harihar-Fort.jpg',name:'Harihar Fort',package:'Trekking| tent',price:'5000',days:'5 Days'}
    ]
}