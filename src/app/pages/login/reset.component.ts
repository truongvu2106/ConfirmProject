import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from "@angular/router";
import * as _ from 'lodash';

@Component({
  selector: 'app-forgot-user',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit { 
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

  // action select dropdown
  action(e): void {}


  // load data services
  onload = (): void => {    
  }  
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
}
