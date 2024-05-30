import { Component, Input } from "@angular/core";

@Component({
    selector:'app-layer-two',
    templateUrl:'./layerTwo.component.html',
    styleUrls:['./layerTwo.component.css']
})

export class LayerTwoComponent{
    // destination card details 
    cardDetails =[
        {image:'assets/images/home/layer-2-card-1.png',location:'Manggarai Barat',about:'Flores Road Trip 3D2N',duration:'3 Days',price:'Rp 6.705.000 /orang'},
        {image:'assets/images/home/layer-2-card-2.png',location:'Bogor',about:'Forrester Glamping Co Bogor',duration:'1 Days',price:'Rp 1.205.000 /malam'},
        {image:'assets/images/home/layer-2-card-3.png',location:'Jakarta',about:'Paket Tiket Pesawat Bali',duration:'3 Days',price:'Rp 605.000 /person'},
        {image:'assets/images/home/layer-2-card-4.png',location:'Kota Semarang',about:'Desa Wisata Kandri',duration:'14 Days',price:'Rp 1.400.000 /person'},
        {image:'assets/images/home/layer-2-card-5.jpg',location:'Taj Mahal',about:'wonders of worls',duration:'3 Days',price:'Rp 6.705.000 /person'}
    ]
}