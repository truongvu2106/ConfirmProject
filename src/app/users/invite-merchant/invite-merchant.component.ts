import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl} from '@angular/forms';
import { DataService } from '../../core/services/data.service';
import { Store } from "@ngrx/store";
import { Go } from "../../actions/router";
// reducers
import {
  State
} from "../../reducers";
import * as _ from 'lodash';

@Component({
  selector: 'app-invitemerchant',
  templateUrl: './invite-merchant.component.html',
  styleUrls: ['./invite-merchant.component.scss'],
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
  //show searched value
  isShowResult:boolean = false;
  dataMaster:any;
  isShowPannel:boolean;

  constructor(private dataService: DataService, private store: Store<State>) {
  }

  ngOnInit() {
  }

  searchMerchantName(searchFrmControl, event) {
    event.preventDefault();
    event.stopPropagation();
    if(event.which <= 90 && event.which >= 48){// letter and number
      this.loadData(searchFrmControl,undefined);
      this.isShowResult=false;
    }else{
      if(event.which === 8){
        if( searchFrmControl.value==""){// backspace to empty value
          this.merchantNameList=[];
          this.isShowResult=false;
        }else{
          this.loadData(searchFrmControl,undefined);
          this.isShowResult=false;
        }
      }
      if(event.which === 13 && searchFrmControl.value!=""){// enter when value not null
        this.showResult(searchFrmControl);
        this.merchantNameList=[];
      }
    }
  }
  loadData(searchFrmControl,callback){
      this.dataService.getData('assets/data/merchantinvite.json').subscribe(
        data => {
          //Match name in data equal to input
          this.dataMaster = data;
          console.log("loading..")
          console.log(this.merchantFinded);
        },
        error => this.errorMessage = <any>error,
        ()=> {
          console.log("load success")
          console.log(this.merchantFinded);
          this.merchantFinded = this.dataMaster.merchant.filter((item) => {
            return item.merchantName.toLowerCase().indexOf(searchFrmControl.value.toLowerCase()) > -1 ;
          }) || {};
          this.addAttrMerchantList(searchFrmControl)
          if(callback){
            callback()
          }
        }
      );
      
  }
  addAttrMerchantList(searchFrmControl){
    console.log("addAttrMerchantList actived");
    this.merchantNameList=[];
    this.merchantNameList = this.merchantFinded.map(
      (item, index)=>{
        var a = [];
        item.merchantNameChange = item.merchantName.toLowerCase().split(searchFrmControl.value.toLowerCase());
        return item;
      }
    )||{};
    console.log(this.merchantNameList);
    return true
  }
  showResult(searchFrmControl){
    console.log("showResult actived");
    console.log(searchFrmControl);
    this.loadData(searchFrmControl,()=>{
      this.merchantNameList=[];
      this.isShowResult=true;
      console.log(this.merchantNameList);
    });
    
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
  sendInvite() {
    if(this.merchantSelected && this.merchantSelected.userInvite && this.merchantSelected.userInvite.length) {
      this.store.dispatch(new Go({
        path: ["/users/manage-merchant"]
      }));
    }
  }
}
