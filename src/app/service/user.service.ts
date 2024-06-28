import { Injectable } from "@angular/core";
import{HttpClient} from '@angular/common/http'
@Injectable({
    providedIn:'root'
})

export class UserService{
    constructor(private http:HttpClient){}

    signup(data:any){
        return this.http.post('http://localhost:7000/signup',data)
    }
    OtpVerification(data:any,email:string){
        console.log(data,'jj');
        return this.http.post('http://localhost:7000/otp',{data,email})
    }
    resentOtp(email:string){
        return this.http.post('http://localhost:7000/resendOtp',{email})
    }
}