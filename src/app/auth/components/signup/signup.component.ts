import { Component } from "@angular/core";
import { FormBuilder, FormGroup, ValidationErrors, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "src/app/service/user.service";
import { DataSharingService } from "../service/userData.service";

@Component({
    selector:'app-SignupPage',
    templateUrl:'./signup.component.html',
    styleUrls:['./signup.component.css']
})
export class SignupComponet{
    signupForm!:FormGroup
    constructor(private fb :FormBuilder, private UserService:UserService,private route:Router,private UserDataService:DataSharingService){
        this.signupForm= this.fb.group({
            email:['',[Validators.required,Validators.email]],
            password:['',[Validators.required,Validators.minLength(8)]],
            confirmpassword:['',[Validators.required,this.passwordMatchValidator.bind(this)]]
        })
    }
    passwordMatchValidator():ValidationErrors|null{
        const password = this.signupForm?.get('password')?.value
        const confirmPassword = this.signupForm?.get('confirmpassword')?.value
        if(password !== confirmPassword){
            
            return{'passworMismatch':true}
            }
            return null
    }
    datas:any
    onSignup(){
            this.datas = this.signupForm.value
            const {email,password,confirmpassword}= this.datas
                
        if(!email){
            const errorInEmail = document.getElementById('EmailVerification')
            errorInEmail!.textContent ='Enter Full Details'
            errorInEmail!.style.color = 'red'
            errorInEmail!.style.fontSize ='15px'
        }else if(!password){
            const errorInEmail = document.getElementById('EmailVerification')
            errorInEmail!.textContent ='Enter Full Details'
            errorInEmail!.style.color = 'red'
            errorInEmail!.style.fontSize ='15px'
        }else if(!confirmpassword){
            const errorInEmail = document.getElementById('EmailVerification')
            errorInEmail!.textContent ='Enter Full Details'
        }else if(password !== confirmpassword){
            const errorInEmail = document.getElementById('EmailVerification')
            errorInEmail!.textContent ='Password mismatch'
            errorInEmail!.style.color = 'red'
            errorInEmail!.style.fontSize ='15px'
        }else{
            this.UserService.signup(this.datas).subscribe({
                next:(res: any)=>{
                    if(res.OtpEmail){
                        const email = res.OtpEmail
                        this.UserDataService.setData(email)
                        this.route.navigate(['/otp'])
                    }else{
                        this.route.navigate(['/login'])
                    }
                    
                }
            })
        }
        
        
    }
}