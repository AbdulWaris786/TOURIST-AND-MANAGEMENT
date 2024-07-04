import { Component, ElementRef, ViewChild } from "@angular/core";
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
    @ViewChild('passwordInput') passwordInput! : ElementRef<HTMLInputElement>;
    passwordType:string ='password'
    isPasswordVisible:boolean = false
    togglePasswordVisibility() {
        this.isPasswordVisible = !this.isPasswordVisible;
        this.passwordType = this.isPasswordVisible ? 'text' : 'password';
    }
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
            this.ShowError('Enter Valid Email');
        }else if(!password){
            this.ShowError('Enter Valid Password');
        }else if(!confirmpassword){
            this.ShowError('Enter Valid confirmpassword');
        }else if(password !== confirmpassword){
            this.ShowError('Mismatch Password');
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
    private ShowError(message:string){
        const errorInEmail = document.getElementById('EmailVerification')
        if(errorInEmail){
            errorInEmail.textContent = message;
            errorInEmail.style.color = 'red';
            errorInEmail.style.fontSize = '15px';
        }
    }
    
}