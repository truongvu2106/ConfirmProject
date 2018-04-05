import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-invitemerchant',
  templateUrl: './invitemerchant.component.html',
  styleUrls: ['./invitemerchant.component.scss']
})
export class InviteMerchantComponent implements OnInit {

  a=true;
  //search merchant name
  searchFrmControl: FormControl = new FormControl();
  
  merchantNameList = [];

  constructor() {
    console.log(this.searchFrmControl)
   }

  ngOnInit() {
  }

  searchMerchantName(searchFrmControl){
    console.log(searchFrmControl);
  }
}
