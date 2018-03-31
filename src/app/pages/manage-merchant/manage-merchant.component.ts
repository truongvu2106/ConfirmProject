import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from "@angular/router";
import * as _ from 'lodash';

@Component({
  selector: 'manage-merchant-login',
  templateUrl: './manage-merchant.component.html',
  styleUrls: ['./manage-merchant.component.scss']
})
export class ManageMerchantComponent implements OnInit { 

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
