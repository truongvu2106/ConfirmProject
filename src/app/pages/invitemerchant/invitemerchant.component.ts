import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl} from '@angular/forms';
import { DataService } from '../../services/data.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-invitemerchant',
  templateUrl: './invitemerchant.component.html',
  styleUrls: ['./invitemerchant.component.scss'],
  providers:[DataService]
})
export class InviteMerchantComponent implements OnInit {

  // text MS error load json
  errorMessage: string;
  @ViewChild ('autocompalete') autocompalete;

  //search merchant name
  searchFrmControl: FormControl = new FormControl();
  //list merchant finded
  merchantFinded : any[] = [];

  merchantNameList: any = [];

  merchantSelected: any = {};
  userInviting: any = {};
  // changedName: any =[];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
  }

  searchMerchantName(searchFrmControl, event) {
    console.log(searchFrmControl);
    event.preventDefault();
    event.stopPropagation();
    if(searchFrmControl.value!==""){
      this.dataService.getData('assets/data/merchantinvite.json').subscribe(
        data => {
          //Match name in data equal to input
          this.merchantFinded = data.merchant.filter((item) => {
            return item.merchantName.toLowerCase().indexOf(searchFrmControl.value.toLowerCase()) > -1 ;
          }) || {};
          // get merchantNameList
          this.merchantNameList = this.merchantFinded.map(
              (item, index)=>{
                var a = [];
                item.merchantNameChange = item.merchantName.toLowerCase().split(searchFrmControl.value.toLowerCase());
                // for( var i of this.changedName){
                //   if(item.merchantName.search(i)>-1){
                //     a.push[i];
                //     item.merchantName.substr(i.length,searchFrmControl.value.length);
                //   }
                // }
                //this.searchKey = this.searchKey.substr(item.merchantName[0].length,searchFrmControl.value.length);
                return item;
            }
          )||{};
          console.log(this.merchantNameList);
        },
        error => this.errorMessage = <any>error
      );
    }else{
      this.merchantNameList=[];
    }
  }
  doSearch() {
    this.merchantNameList = [];
  }
  selectMerchant(item) {
    this.merchantSelected = item;
    this.merchantFinded = [];
  }
  addUser() {
    this.merchantSelected.userInvite.push(_.clone(this.userInviting));
    this.userInviting = {
      "firstName":"",
      "lastName":"",
      "Email":"",
      "MobileNo":""
    };
  }
  removeUser(user) {
    _.remove(this.merchantSelected.userInvite, user);
  }
}
