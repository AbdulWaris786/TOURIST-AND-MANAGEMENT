import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserService } from "../service/user.service";
import { Observable } from "rxjs";

@Injectable()

export class AuthInterceptor implements HttpInterceptor{
    constructor( private userService:UserService){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.userService.getToken()
        if(token){
            req = req.clone({
                setHeaders:{
                    authorization: `bearer ${token}`
                }
            })
        }
        return next.handle(req)
    }
}