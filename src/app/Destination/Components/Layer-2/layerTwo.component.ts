import { Component } from "@angular/core";

@Component({
    selector:'app-layer-Two',
    templateUrl:'./layerTwo.component.html',
    styleUrls:['./layerTwo.component.css']
})

export class DestinationLayerTwoComponent{
    contentDetails=[
        {icon:'fa-solid fa-binoculars',head:'Search Your Destination',content:'vitae nisi vel ex. faucibus maximus non. Vestibulum sollicitudin. adipiscing sollicitudin. nec consectetur placerat. turpis viverra vitae lobortis, Ut vel tincidunt volutpat luctus diam tincidunt sodales. quam sollicitudin.'},
        {icon:'fa-solid fa-ticket',head:'Get Your Tickets',content:'vitae nisi vel ex. faucibus maximus non. Vestibulum sollicitudin. adipiscing sollicitudin. nec consectetur placerat. turpis viverra vitae lobortis, Ut vel tincidunt volutpat luctus diam tincidunt sodales. quam sollicitudin.'},
        {icon:'fa-solid fa-route',head:'Travel Around The Country',content:'vitae nisi vel ex. faucibus maximus non. Vestibulum sollicitudin. adipiscing sollicitudin. nec consectetur placerat. turpis viverra vitae lobortis, Ut vel tincidunt volutpat luctus diam tincidunt sodales. quam sollicitudin. '}
    ]
}