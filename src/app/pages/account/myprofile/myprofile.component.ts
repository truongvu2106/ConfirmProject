import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { MatDialog } from '@angular/material';

import { ChangePassModalViewComponent } from '../../../components/changepassmodalview/changepassmodalview.component';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss'],
  providers:[DataService]
})
export class MyProfileComponent implements OnInit {
  
  //change view  and update profile
  isProfileViewShow = true;
  
  // user profile
  userProfile: any = {};

  // text MS error load json
  errorMessage: string;

  constructor(
    public dialog: MatDialog,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.onload();
  }

  onload = (): void => {
    this.dataService.getData('assets/data/myprofile.json').subscribe(
      data => {
        this.userProfile = data;
      },
      error => this.errorMessage = <any>error
    );
  }

  changeViewUpdateProfile() {
    this.onload();
    this.isProfileViewShow = !this.isProfileViewShow;  
  }

  updateProfile(){
    this.isProfileViewShow = !this.isProfileViewShow;
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(ChangePassModalViewComponent, {
      width: '400px',
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}
