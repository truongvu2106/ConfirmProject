import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  //User ID
  userIdFormControl = new FormControl('', [
    Validators.required
  ]);

  //Password
  passwordFormControl = new FormControl('', [
    Validators.required
  ]);

  //Email
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  matcher = new MyErrorStateMatcher();
  isUserId: boolean;
  isFocusPasword: boolean;

  isUserValue: any;
  isPaswordValue: any;

  isBox: number = 1;

  // forget user
  isFocusUser:boolean;
  submittedId = -1;
  emailUser:any;


  // forgot pass
  isFocusUserPw:boolean;
  submittedPw =-1;
  emailPw:any;

  // reset box
  isFocusNewPassword:boolean;
  isFocusConfirm:boolean;
  submitted =false;
  isInfo=false;
  password="";
  confirmpassword="";
  errorpassword="";
  errorconfirm="";
  
  constructor(
   
  ) {}

  ngOnInit() {    
  }

  userChanged () {
    if(this.isUserValue != null){
      this.isUserId = true;
    }
    if (this.isPaswordValue != null){
      this.isFocusPasword = true;
    }
  }

  // reset function
  Submit = (): void =>{    
    if (this.password==""){
      this.submitted =false;
      this.errorpassword="Input is not null";
    }
    else{
      this.errorpassword="";
    }
    if (this.confirmpassword==""){
      this.submitted =false;
      this.errorconfirm="Input is not null";
    }
    else if(this.confirmpassword!=this.password){
      this.submitted =false;
      this.errorconfirm="Password does not match";
    }
    else{
      this.errorconfirm="";
    }
    if(this.errorconfirm=="" && this.errorpassword=="") 
    {
      this.submitted =true;      
    }
  }
  CheckInfo = (value): void =>{
    if (value=="password"){
      if (this.password==""){
        this.isInfo =false;
        this.errorpassword="Input is not null";
      }
      else{
        this.errorpassword="";
      }
    }
    if (value=="confirm"){
      if (this.confirmpassword==""){
        this.isInfo =false;
        this.errorconfirm="Input is not null";
      }
      else if(this.confirmpassword!=this.password){
        this.isInfo =false;
        this.errorconfirm="Password does not match";
      }
      else{
        this.errorconfirm="";
      }
    }
    if(this.errorconfirm=="" && this.errorpassword=="") 
    {
      this.isInfo =true;
    }
  }

  // forgot user id

  SubmitId = (): void =>{
    
    if (this.emailUser=="Sample@sample.com"){
      this.submittedId =0;      
    }
    else{
      this.submittedId =1;
    }
  }

  // forgot pass
  SubmitPw = (): void =>{
    
   if (this.emailPw === "Sample@sample.com"){
      this.submittedPw = 0;     
    }
    else{
      this.submittedPw =1;
    }
  }
}
