import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from "@angular/router";
import { FormControl } from '@angular/forms';

@Component({
  selector: 'manage-merchant-login',
  templateUrl: './manage-merchant.component.html',
  styleUrls: ['./manage-merchant.component.scss']
})
export class ManageMerchantComponent implements OnInit { 
    mode = new FormControl('side');
  constructor(
   
  ) {}

  ngOnInit() {    
  }

  // action select dropdown
  action(e): void {}


  // load data services
  onload = (): void => {    
  }  
}
