import { Injectable } from "@angular/core";
import{HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable, tap } from "rxjs";
interface LoginResponce {
    message:string,
    token : string
}
@Injectable({
    providedIn:'root'
})

export class UserService{
    private token : string|null =null
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
    login(data:any):Observable<LoginResponce>{
        return this.http.post<LoginResponce>('http://localhost:7000/login',data)
        .pipe(
            tap(res =>{
                this.token = res.token
                localStorage.setItem('token', res.token)
            })
        )
    }
    getToken(): string | null{
        return this.token || localStorage.getItem('token')
    }
    logout(){
        this.token = null
        localStorage.removeItem('token')
    }
    getUserdata(){
        const headers = new HttpHeaders().set('authrization',`bearer ${this.getToken()}`)
        return this.http.get('http://localhost:7000/user',{headers})
    }
}