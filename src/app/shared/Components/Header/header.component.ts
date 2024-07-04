import { Component } from "@angular/core";
import { UserService } from "src/app/service/user.service";

@Component({
    selector:'app-home-header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css']
})
export class HeaderComponent{
    constructor(private userService:UserService){}
    ngOnInit(){
        const signupBtn = document.getElementById('signupButton')
        const token = this.userService.getToken()
        console.log(signupBtn);
        console.log(token);
        
        if (token) {
            signupBtn!.textContent ='logout'
            // signupBtn!.style.display = 'none' 
        }
        
    }
    logoutBtn(){
        const logout = document.getElementById('signupButton')
        if(logout!.textContent === 'logout'){
            this.userService.logout()
        }
    }
    




}