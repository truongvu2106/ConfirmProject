import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import {MatDialog} from '@angular/material';

import { ChangePassModalViewComponent } from '../../components/changepassmodalview/changepassmodalview.component';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss'],
  providers:[DataService]
})
export class MyProfileComponent implements OnInit {
  
  //change view  and update profile
  isProfileViewShow = true;
  
  // datas master
  datas: Array<any>;

  // text MS error load json
  errorMessage: string;

  //data myprofile
  userID: String;
  status: String;
  entitlementRole: String;
  firstName: String;
  lastName: String;
  designation: String;
  email: String;
  mobileNo: String;

  constructor(
    public dialog: MatDialog,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.onload();
  }

  onload = (): void => {
    this.dataService.getData('assets/datas/myprofile.json').subscribe(
      data => {
        // data master
        this.datas = data;
      },
      error => this.errorMessage = <any>error,
      () => this.loadData(this.datas)
    );
  }

  loadData(json:any){
    this.userID = json['userID'];
    this.status = json['status'];
    this.entitlementRole = json['entitlementRole'];
    this.firstName = json['firstName'];
    this.lastName = json['lastName'];
    this.designation = json['designation'];
    this.email = json['email'];
    this.mobileNo = json['mobileNo'];
  }

  changeViewUpdateProfile(){
    if(!this.isProfileViewShow) this.loadData(this.datas);
    this.isProfileViewShow = !this.isProfileViewShow ;  
  }

  updateProfile(){
    this.isProfileViewShow = !this.isProfileViewShow ;
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(ChangePassModalViewComponent, {
      width: '400px',
      data: 'data here'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
  cancelEditProfile() {
    this.isProfileViewShow = true;
  }
}
