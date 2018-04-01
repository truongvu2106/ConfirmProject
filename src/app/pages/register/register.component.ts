import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from "@angular/router";
import * as _ from 'lodash';

@Component({
  selector: 'register-login',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit { 
  isFocusUserId=false;
  isFocusPassword=false;
  isFocusConfirm=false;
  isAgree=false;
  submitted =false;
  isInfo=false;
  userid="";
  password="";
  confirmpassword="";
  errorpassword="";
  errorconfirm="";
  erroruserid="";
  constructor(
   
  ) {}

  ngOnInit() {    
  }

  // action select dropdown
  action(e): void {}


  // load data services
  onload = (): void => {    
  }
  Submit = (): void =>{
    if (this.userid==""){
      this.submitted =false;
      this.erroruserid="Input is not null";
    }

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
    if(this.errorconfirm=="" && this.errorpassword=="" && this.erroruserid=="") 
    {
      this.submitted =true;      
    }
  }
  CheckInfo = (value): void =>{
    if (value=="userid"){
      if (this.userid==""){
        this.submitted =false;
        this.erroruserid="Input is not null";
      }
      else{
        this.erroruserid="";
      }
    }
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
  CheckAgree(){
    if(this.isAgree)
      this.isAgree=false;
    else
      this.isAgree=true;
  }
}
