import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class DataSharingService{
    private dataSource = new BehaviorSubject<any>(null);
    sharedData = this.dataSource.asObservable();    
    setData(data: any) {
        this.dataSource.next(data);
        console.log(data,'data');                
        
    }
} 