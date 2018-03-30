import { Component, OnInit } from '@angular/core';

import {MatDialog} from '@angular/material';

import { ChangePassModalViewComponent } from '../../components/changepassmodalview/changepassmodalview.component';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})
export class MyProfileComponent implements OnInit {
  
  isProfileViewShow = true;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  showEditProfile(){
    this.isProfileViewShow = false;
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
}
